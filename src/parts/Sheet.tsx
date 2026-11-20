import type { ReactNode } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
  label: string;
  children: ReactNode;
}

export function Sheet({ open, onClose, label, children }: Props) {
  return (
    <div className={open ? 'sheet-layer is-open' : 'sheet-layer'} aria-hidden={!open}>
      <div className="sheet-dim" onClick={onClose} />
      <div className="sheet" role="dialog" aria-label={label} aria-modal="true">
        {children}
      </div>
    </div>
  );
}
