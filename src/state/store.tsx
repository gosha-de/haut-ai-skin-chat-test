import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  type Dispatch,
  type ReactNode,
} from 'react';
import { brands, type Brand } from '../data/brands';
import type { Entry } from '../data/script';
import { demo } from '../data/start';
import { delayOf, flowReducer, initFlow, type Action, type FlowState } from './flow';
import { makeT, type T } from './text';

interface AppValue {
  brand: Brand;
  setBrand: (id: string) => void;
  t: T;
  toast: { id: number; text: string } | null;
  notPlayed: (playedLabel?: string) => void;
  note: (text: string) => void;
}

const AppContext = createContext<AppValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [brandId, setBrandId] = useState(brands[0].id);
  const [toast, setToast] = useState<AppValue['toast']>(null);
  const timer = useRef<number>();

  const brand = brands.find((b) => b.id === brandId) ?? brands[0];
  const t = useMemo(() => makeT(brand), [brand]);

  const notPlayed = useCallback((playedLabel?: string) => {
    const hint = playedLabel ? ' ' + demo.playedHint.replace('{label}', playedLabel) : '';
    window.clearTimeout(timer.current);
    setToast({ id: Date.now(), text: demo.notPlayed + hint });
    timer.current = window.setTimeout(() => setToast(null), 2600);
  }, []);

  const note = useCallback((text: string) => {
    window.clearTimeout(timer.current);
    setToast({ id: Date.now(), text });
    timer.current = window.setTimeout(() => setToast(null), 4000);
  }, []);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const value = useMemo(
    () => ({ brand, setBrand: setBrandId, t, toast, notPlayed, note }),
    [brand, t, toast, notPlayed, note],
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp(): AppValue {
  const value = useContext(AppContext);
  if (!value) throw new Error('useApp outside AppProvider');
  return value;
}

interface FlowValue {
  state: FlowState;
  dispatch: Dispatch<Action>;
}

const FlowContext = createContext<FlowValue | null>(null);

export function FlowProvider({ entry, children }: { entry: Entry; children: ReactNode }) {
  const [state, dispatch] = useReducer(flowReducer, undefined, () => initFlow(entry));

  useEffect(() => {
    if (entry !== 'email') return;
    const id = window.setTimeout(() => dispatch({ type: 'OPEN_CHAT' }), 350);
    return () => window.clearTimeout(id);
  }, [entry]);

  const beat = state.started && !state.waiting ? state.beats[state.cursor] : undefined;
  useEffect(() => {
    if (!beat) return;
    const id = window.setTimeout(() => dispatch({ type: 'PLAY' }), delayOf(beat));
    return () => window.clearTimeout(id);
  }, [beat]);

  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <FlowContext.Provider value={value}>{children}</FlowContext.Provider>;
}

export function useFlow(): FlowValue {
  const value = useContext(FlowContext);
  if (!value) throw new Error('useFlow outside FlowProvider');
  return value;
}
