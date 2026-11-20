import { shopper } from '../data/shopper';
import { useApp } from '../state/store';
import { Products } from './Products';

export function Routine() {
  const { t, brand } = useApp();
  const product = (id: string) => brand.catalog.find((p) => p.id === id);
  const products = [...shopper.bought, ...shopper.notBought].map(product).filter((p) => p !== undefined);

  return (
    <>
      <div className="products-head">
        <p className="msg-h2">{t('routine.title')}</p>
      </div>
      <Products items={products} off={shopper.notBought} />
    </>
  );
}
