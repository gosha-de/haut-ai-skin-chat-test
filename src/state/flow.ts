import type { CopyKey } from '../data/copy';
import { buildScript, type Beat, type CardKind, type ChipDef, type Entry } from '../data/script';

export type Item =
  | { id: number; kind: 'date'; key: CopyKey }
  | { id: number; kind: 'user'; key: CopyKey }
  | { id: number; kind: 'say'; key: CopyKey }
  | { id: number; kind: 'card'; card: CardKind }
  | {
      id: number;
      kind: 'ask';
      askId: string;
      key: CopyKey;
      chips: ChipDef[];
      style: 'rows' | 'pills';
      lead?: CopyKey[];
      answered: boolean;
      picked?: CopyKey;
      card?: CardKind;
    };

export interface FlowState {
  entry: Entry;
  beats: Beat[];
  cursor: number;
  thread: Item[];
  nextId: number;
  waiting: string | null;
  started: boolean;
  chatOpen: boolean;
  viewOpen: boolean;
  noteClosed: boolean;
  photo: boolean;
  finished: boolean;
  anchorId: number;
}

export type Action =
  | { type: 'OPEN_CHAT' }
  | { type: 'CLOSE_CHAT' }
  | { type: 'PLAY' }
  | { type: 'ANSWER'; askId: string; chip: ChipDef }
  | { type: 'OPEN_VIEW' }
  | { type: 'CLOSE_VIEW' }
  | { type: 'CLOSE_NOTE' };

type Draft<T> = T extends unknown ? Omit<T, 'id'> : never;

const firstVisit: Draft<Item>[] = [
  { kind: 'date', key: 'date.firstVisit' },
  { kind: 'user', key: 'first.ask' },
  { kind: 'say', key: 'first.results' },
  { kind: 'say', key: 'first.routine' },
  { kind: 'card', card: 'firstRoutine' },
  { kind: 'user', key: 'first.buy' },
  { kind: 'say', key: 'started.opening' },
  { kind: 'card', card: 'journeyStart' },
];

export const TODAY_ID = firstVisit.length + 1;

export function initFlow(entry: Entry): FlowState {
  const thread: Item[] = [
    ...firstVisit.map((item, i) => ({ ...item, id: i + 1 }) as Item),
    { id: TODAY_ID, kind: 'date', key: 'date.today' },
  ];
  return {
    entry,
    beats: buildScript(entry),
    cursor: 0,
    thread,
    nextId: TODAY_ID + 1,
    waiting: null,
    started: false,
    chatOpen: false,
    viewOpen: false,
    noteClosed: false,
    photo: false,
    finished: false,
    anchorId: TODAY_ID,
  };
}

function play(state: FlowState): FlowState {
  const beat = state.beats[state.cursor];
  if (!beat || state.waiting) return state;
  const id = state.nextId;
  const next = { ...state, cursor: state.cursor + 1 };
  const push = (item: Item): FlowState => ({ ...next, thread: [...state.thread, item], nextId: id + 1 });

  switch (beat.kind) {
    case 'user':
      return push({ id, kind: 'user', key: beat.key });
    case 'say':
      return push({ id, kind: 'say', key: beat.key });
    case 'card':
      return push({ id, kind: 'card', card: beat.card });
    case 'ask': {
      const item: Item = {
        id,
        kind: 'ask',
        askId: beat.id,
        key: beat.key,
        chips: beat.chips,
        style: beat.style ?? 'rows',
        lead: beat.lead,
        answered: beat.picked !== undefined,
        picked: beat.picked,
        card: beat.card,
      };
      if (beat.picked) return push(item);
      return { ...push(item), waiting: beat.id };
    }
    case 'analyse':
    case 'think':
      return next;
    case 'set':
      return { ...next, [beat.flag]: true };
  }
}

export function flowReducer(state: FlowState, action: Action): FlowState {
  switch (action.type) {
    case 'OPEN_CHAT':
      return { ...state, chatOpen: true, started: true, noteClosed: true };
    case 'CLOSE_CHAT':
      return { ...state, chatOpen: false, viewOpen: false };
    case 'PLAY':
      return play(state);
    case 'ANSWER': {
      if (state.waiting !== action.askId) return state;
      const ask = state.thread.find((i) => i.kind === 'ask' && i.askId === action.askId);
      const thread: Item[] = state.thread.map((i) =>
        i.kind === 'ask' && i.askId === action.askId ? { ...i, answered: true, picked: action.chip.key } : i,
      );
      let id = state.nextId;
      let anchorId = ask?.id ?? state.anchorId;
      if (ask?.kind === 'ask' && ask.style === 'pills') {
        thread.push({ id, kind: 'user', key: action.chip.key });
        anchorId = id;
        id += 1;
      }
      const beats = action.chip.then ? [...state.beats.slice(0, state.cursor), ...action.chip.then] : state.beats;
      return { ...state, thread, nextId: id, waiting: null, anchorId, beats };
    }
    case 'OPEN_VIEW':
      return { ...state, viewOpen: true };
    case 'CLOSE_VIEW':
      return { ...state, viewOpen: false };
    case 'CLOSE_NOTE':
      return { ...state, noteClosed: true };
  }
}

export function busyOf(state: FlowState): 'typing' | 'analysing' | null {
  if (!state.started || state.waiting) return null;
  const beat = state.beats.slice(state.cursor).find((b) => b.kind !== 'set');
  if (!beat) return null;
  if (beat.kind === 'analyse') return 'analysing';
  if (beat.kind === 'think' || beat.kind === 'say' || beat.kind === 'card' || beat.kind === 'ask') return 'typing';
  return null;
}

export function delayOf(beat: Beat): number {
  switch (beat.kind) {
    case 'user':
      return 450;
    case 'analyse':
      return 2000;
    case 'think':
      return beat.ms ?? 4000;
    case 'set':
      return 0;
    default:
      return 600;
  }
}
