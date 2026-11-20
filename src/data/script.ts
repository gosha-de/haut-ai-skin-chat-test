import type { CopyKey } from './copy';
import type { Answer } from './shopper';

export type Entry = 'email' | 'site';

export type CardKind =
  | 'routine'
  | 'timeline'
  | 'onTrack'
  | 'onTrackPhoto'
  | 'stillOnTrack'
  | 'firstRoutine'
  | 'journeyStart'
  | 'request';

export interface ChipDef {
  key: CopyKey;
  played?: boolean;
  then?: Beat[];
}

type Flag = 'photo' | 'finished';

export type Beat =
  | { kind: 'user'; key: CopyKey }
  | { kind: 'say'; key: CopyKey }
  | { kind: 'card'; card: CardKind }
  | {
      kind: 'ask';
      id: string;
      key: CopyKey;
      chips: ChipDef[];
      style?: 'rows' | 'pills';
      lead?: CopyKey[];
      picked?: CopyKey;
      card?: CardKind;
    }
  | { kind: 'analyse' }
  | { kind: 'think'; ms?: number }
  | { kind: 'set'; flag: Flag };

export const answers: Answer[] = ['good', 'same', 'off'];

export const answerKey: Record<Answer, CopyKey> = {
  good: 'answer.good',
  same: 'answer.same',
  off: 'answer.off',
};

export const PLAYED: Answer = 'same';

const afterPhoto: Beat[] = [
  { kind: 'analyse' },
  { kind: 'set', flag: 'photo' },
  { kind: 'card', card: 'onTrackPhoto' },
  { kind: 'set', flag: 'finished' },
];

const afterPhotoLater: Beat[] = [
  { kind: 'analyse' },
  { kind: 'set', flag: 'photo' },
  { kind: 'card', card: 'stillOnTrack' },
];

const questions: Beat[] = [
  {
    kind: 'ask',
    id: 'spots',
    key: 'q.spots',
    chips: [
      { key: 'q.spots.none', played: true },
      { key: 'q.spots.few' },
      { key: 'q.spots.more' },
      { key: 'q.dontKnow' },
    ],
  },
  {
    kind: 'ask',
    id: 'sting',
    key: 'q.sting',
    chips: [
      { key: 'q.sting.none', played: true },
      { key: 'q.sting.little' },
      { key: 'q.sting.most' },
      { key: 'q.dontKnow' },
    ],
  },
  { kind: 'say', key: 'q.sting.reply' },
  {
    kind: 'ask',
    id: 'rough',
    key: 'q.rough',
    chips: [
      { key: 'q.rough.smoother' },
      { key: 'q.rough.same', played: true },
      { key: 'q.rough.more' },
      { key: 'q.dontKnow' },
    ],
  },
  { kind: 'think' },
  {
    kind: 'ask',
    id: 'photo',
    lead: ['check.same'],
    key: 'photo.ask.same',
    chips: [
      { key: 'photo.yes', played: true, then: afterPhoto },
      {
        key: 'photo.later',
        played: true,
        then: [
          { kind: 'set', flag: 'finished' },
          { kind: 'think', ms: 2000 },
          {
            kind: 'ask',
            id: 'later',
            card: 'onTrack',
            key: 'end.photoLater',
            style: 'pills',
            chips: [{ key: 'photo.take', played: true, then: afterPhotoLater }],
          },
        ],
      },
    ],
  },
];

export function buildScript(entry: Entry): Beat[] {
  return [
    {
      kind: 'ask',
      id: 'entry',
      lead: ['email.greeting', 'email.products', 'email.words'],
      key: 'email.question',
      chips: answers.map((a) => ({ key: answerKey[a], played: a === PLAYED })),
      picked: entry === 'email' ? answerKey[PLAYED] : undefined,
    },
    { kind: 'user', key: answerKey[PLAYED] },
    { kind: 'say', key: 'opening.check' },
    { kind: 'card', card: 'request' },
    { kind: 'card', card: 'routine' },
    { kind: 'card', card: 'timeline' },
    {
      kind: 'ask',
      id: 'confirm',
      key: 'confirm.question',
      chips: [{ key: 'confirm.yes', played: true }, { key: 'confirm.routine' }, { key: 'confirm.no' }],
    },
    { kind: 'say', key: 'reply.same' },
    ...questions,
  ];
}
