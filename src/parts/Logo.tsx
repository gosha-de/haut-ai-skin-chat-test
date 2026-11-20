import { useApp } from '../state/store';

export function Logo() {
  const { brand } = useApp();
  const { text, letterSpacing, weight } = brand.logo;
  return (
    <span className="logo" style={{ letterSpacing, fontWeight: weight }}>
      {text}
    </span>
  );
}
