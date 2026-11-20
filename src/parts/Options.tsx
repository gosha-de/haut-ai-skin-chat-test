import type { CopyKey } from '../data/copy';
import type { ChipDef } from '../data/script';
import { useApp } from '../state/store';
import { Icon } from './Icon';

interface Props {
  chips: ChipDef[];
  style: 'rows' | 'pills';
  onPick: (chip: ChipDef) => void;
  picked?: CopyKey;
}

export function Options({ chips, style, onPick, picked }: Props) {
  const { t, notPlayed } = useApp();
  const played = chips.filter((c) => c.played);
  const done = picked !== undefined;

  const tap = (chip: ChipDef) => {
    if (chip.played) onPick(chip);
    else notPlayed(played.length === 1 ? t(played[0].key) : undefined);
  };

  if (style === 'pills') {
    return (
      <div className="actions">
        {chips.map((chip) => (
          <button key={chip.key} type="button" className="action" onClick={() => tap(chip)}>
            {chip.key === 'photo.take' && <Icon name="camera" size={16} />}
            {t(chip.key)}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="options">
      {chips.map((chip) => (
        <button
          key={chip.key}
          type="button"
          className={chip.key === picked ? 'option is-picked' : 'option'}
          onClick={() => tap(chip)}
          disabled={done}
        >
          {t(chip.key)}
        </button>
      ))}
    </div>
  );
}
