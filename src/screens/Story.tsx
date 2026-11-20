import type { CSSProperties } from 'react';
import { brands } from '../data/brands';
import { shopper } from '../data/shopper';
import { start } from '../data/start';
import { sampleFace } from '../parts/Bubble';
import { Icon } from '../parts/Icon';
import { useApp } from '../state/store';

const base = import.meta.env.BASE_URL;

export function Story() {
  const { brand, setBrand } = useApp();
  const fill = (text: string) => text.replace('{name}', shopper.name).replace('{brand}', brand.name);
  const { story } = start;
  const { closeUp } = story;
  const bought = shopper.bought.map((id) => brand.catalog.find((p) => p.id === id)).filter((p) => p !== undefined);

  return (
    <main className="start story">
      <a className="story-back" href={story.backHref} aria-label={story.back}>
        <Icon name="arrow" size={24} turn={-90} stroke={2} />
      </a>

      {brands.length > 1 && (
        <div className="story-brands" role="group" aria-label={story.brands}>
          {brands.map((b) => (
            <button
              key={b.id}
              type="button"
              className="story-brand"
              aria-label={b.name}
              aria-pressed={b.id === brand.id}
              onClick={() => setBrand(b.id)}
            >
              <span style={{ background: b.color }} />
            </button>
          ))}
        </div>
      )}

      <div className="pile">
        <div className="polaroid" aria-hidden="true">
          <div className="polaroid-photo" style={{ '--zoom': closeUp.zoom, '--focus': closeUp.focus } as CSSProperties}>
            <img src={`${base}faces/${closeUp.file}`} alt="" />
          </div>
        </div>
        {bought.map((product) => (
          <div key={product.id} className="polaroid" aria-hidden="true">
            <div className="polaroid-photo is-product">
              <img src={`${base}products/${product.photo}`} alt="" />
            </div>
          </div>
        ))}
        <div className="polaroid is-main">
          <div className="polaroid-photo">
            <img src={sampleFace} alt={fill(story.alt)} />
          </div>
        </div>
      </div>

      <div className="start-in">
        <header>
          <h1>{fill(story.title)}</h1>
          {story.text.map((line) => (
            <p key={line} className="start-intro">
              {fill(line)}
            </p>
          ))}
          <a className="start-open" href={story.openHref}>
            {story.open}
          </a>
        </header>
      </div>
    </main>
  );
}
