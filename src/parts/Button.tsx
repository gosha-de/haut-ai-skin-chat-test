import type { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  size: 's' | 'm' | 'l';
  look: 'primary' | 'grey' | 'dark' | 'outline' | 'glass';
  round?: boolean;
  icon?: boolean;
};

export function Button({ size, look, round, icon, className, type = 'button', ...rest }: Props) {
  const cls = ['btn', `btn-${size}`, `btn-${look}`, round && 'btn-round', icon && 'btn-icon', className]
    .filter(Boolean)
    .join(' ');
  return <button type={type} className={cls} {...rest} />;
}
