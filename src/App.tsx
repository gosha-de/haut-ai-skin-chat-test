import { useEffect, useRef, useState } from 'react';
import { brandVars } from './data/brands';
import { BrandPage } from './screens/BrandPage';
import { Email } from './screens/Email';
import { Start } from './screens/Start';
import { Story } from './screens/Story';
import { AppProvider, FlowProvider, useApp } from './state/store';

type Route = { brand: string | null; from?: string } & (
  | { name: 'start' }
  | { name: 'story' }
  | { name: 'email' }
  | { name: 'site' }
  | { name: 'chat' }
);

type PhoneRoute = Extract<Route, { name: 'email' | 'site' | 'chat' }>;

function readRoute(): Route {
  const [path, query = ''] = window.location.hash.replace(/^#/, '').split('?');
  const params = new URLSearchParams(query);
  const brand = params.get('brand');
  if (path === '/story') return { name: 'story', brand };
  if (path === '/email') return { name: 'email', brand };
  if (path === '/site') return { name: 'site', brand };
  if (path === '/chat') return { name: 'chat', brand };
  return { name: 'start', brand };
}

function useRoute(): Route {
  const [route, setRoute] = useState(readRoute);
  useEffect(() => {
    const onChange = () => setRoute((prev) => ({ ...readRoute(), from: prev.name }));
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}

function isPhone(route: Route): route is PhoneRoute {
  return route.name === 'email' || route.name === 'site' || route.name === 'chat';
}

function Shell() {
  const route = useRoute();
  const { brand, setBrand, toast } = useApp();
  const inFlow = route.name !== 'start';
  const phoneUp = isPhone(route);

  const lastPhone = useRef<PhoneRoute>({ name: 'email', brand: null });
  if (phoneUp) lastPhone.current = route;
  const shown = lastPhone.current;

  const storyBefore = useRef(false);
  useEffect(() => {
    if (route.name === 'story') storyBefore.current = false;
    else if (route.name === 'email' && route.from === 'story') storyBefore.current = true;
  }, [route]);

  const putDown = () => {
    if (route.name === 'email' && storyBefore.current) window.history.back();
    else window.location.hash = '#/story';
  };

  const page = useRef<HTMLDivElement>(null);
  useEffect(() => {
    page.current?.toggleAttribute('inert', phoneUp);
  }, [phoneUp]);

  useEffect(() => {
    if (route.brand) setBrand(route.brand);
  }, [route.brand, setBrand]);

  useEffect(() => {
    document.documentElement.classList.toggle('in-flow', inFlow);
    if (!inFlow) window.scrollTo(0, 0);
  }, [inFlow]);

  if (route.name === 'start') return <Start />;

  return (
    <div className={phoneUp ? 'scene is-up' : 'scene'} style={brandVars(brand)}>
      <div className="scene-page" ref={page} aria-hidden={phoneUp}>
        <Story />
      </div>
      <div className="scene-blur" aria-hidden="true" />

      <div className="scene-phone">
        <div className="shell">
          <div className="device">
            <div className="phone">
              {shown.name === 'email' ? (
                <Email onClose={putDown} />
              ) : (
                <FlowProvider key={shown.name} entry={shown.name === 'chat' ? 'email' : 'site'}>
                  <BrandPage onClose={putDown} />
                </FlowProvider>
              )}
              {toast && (
                <div key={toast.id} className="toast" role="status">
                  {toast.text}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function App() {
  return (
    <AppProvider>
      <Shell />
    </AppProvider>
  );
}
