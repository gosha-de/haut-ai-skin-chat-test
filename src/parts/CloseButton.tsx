import { Button } from './Button';
import { Icon } from './Icon';

export function CloseButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <Button size="s" look="grey" round icon onClick={onClick} aria-label={label}>
      <Icon name="cross" size={16} />
    </Button>
  );
}
