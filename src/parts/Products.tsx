import type { Product } from '../data/catalog';
import { useApp } from '../state/store';

const base = import.meta.env.BASE_URL;

export function Products({ items, off = [] }: { items: Product[]; off?: string[] }) {
  const { t, notPlayed } = useApp();
  return (
    <ul className="products">
      {items.map((product) => {
        const isOff = off.includes(product.id);
        const label = isOff ? `${product.name}. ${t('routine.notBought')}` : product.name;
        return (
          <li key={product.id} className={isOff ? 'product is-off' : 'product'}>
            <div className="product-photo">
              <button type="button" className="product-photo-button" onClick={() => notPlayed()} aria-label={label}>
                <img src={`${base}products/${product.photo}`} alt="" />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
