const paths = {
  camera: (
    <>
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z" />
      <circle cx="12" cy="13" r="3" />
    </>
  ),
  chevron: <path d="m9.5 6 6 6-6 6" />,
  cross: <path d="m19 5-7 7m0 0-7 7m7-7 7 7m-7-7L5 5" />,
  arrow: <path d="M12 19V5m0 0-7 7m7-7 7 7" />,
  plus: <path d="M12 3.6v16.8m8.4-8.4H3.6" />,
  check: <path d="m6 12.5 4 4 8-9" />,
  chat: <path d="M4 6.5A3.5 3.5 0 0 1 7.5 3h9A3.5 3.5 0 0 1 20 6.5v6a3.5 3.5 0 0 1-3.5 3.5H11l-4.6 4v-4.1A3.5 3.5 0 0 1 4 12.5v-6Z" />,
  trash: (
    <>
      <path d="M4 6.5h16M9.5 6.5V5a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 14.5 5v1.5" />
      <path d="m6 6.5.9 12.2a2 2 0 0 0 2 1.8h6.2a2 2 0 0 0 2-1.8L18 6.5M10 10.5v6M14 10.5v6" />
    </>
  ),
  folder: <path d="M3 7.5a2 2 0 0 1 2-2h4.2l2 2.2H19a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7.5Z" />,
  reply: (
    <>
      <path d="M10 6.5 4 12l6 5.5" />
      <path d="M4.5 12H13a7 7 0 0 1 7 7v.5" />
    </>
  ),
  compose: (
    <>
      <path d="M11 4.5H6.5a2.5 2.5 0 0 0-2.5 2.5v10.5A2.5 2.5 0 0 0 6.5 20H17a2.5 2.5 0 0 0 2.5-2.5V13" />
      <path d="m17.6 3.4 3 3-8.3 8.3-3.6.6.6-3.6 8.3-8.3Z" />
    </>
  ),
};

const line20 = {
  thumbUp: (
    <path d="M5.63 9.5S6.5 9 7.5 7l1.82-4.6c.1-.24.35-.4.63-.4C11.08 2 12 2.92 12 4.05V7c0 .46.37.83.83.83h2.92a2.5 2.5 0 0 1 2.47 2.88L17.27 16c-.27 1.5-1.52 2.67-3.41 2.67H8.95M5.63 9.5v0c-1.05 0-1.58 0-2 .13a3 3 0 0 0-2 2c-.13.42-.13.95-.13 2v.45c0 1.48 0 2.22.25 2.8A3 3 0 0 0 3.3 18.4c.58.26 1.32.26 2.8.26h2.86M5.63 9.5l-.03 4.58v1.23c0 1.85 1.5 3.36 3.35 3.36v0" />
  ),
  thumbDown: (
    <path d="M14.13 11.17s-.88.5-1.88 2.5l-1.82 4.59a.69.69 0 0 1-.62.4 2.05 2.05 0 0 1-2.06-2.05v-2.94a.83.83 0 0 0-.83-.84H4a2.5 2.5 0 0 1-2.47-2.88l.95-5.28C2.75 3.17 4 2 5.9 2h4.9m3.33 9.17v0c1.04 0 1.57 0 2-.13a3 3 0 0 0 2-2c.12-.43.12-.95.12-2v-.46c0-1.47 0-2.21-.25-2.79a3 3 0 0 0-1.54-1.54C15.88 2 15.15 2 13.67 2h-2.86m3.32 9.17.02-4.59V5.36C14.16 3.51 12.66 2 10.81 2v0" />
  ),
};

const filled = {
  clock: (
    <path d="M15.125 10a5.125 5.125 0 1 0-10.25 0 5.125 5.125 0 0 0 10.25 0m-6-3.6a.875.875 0 1 1 1.75 0V9.46l1.916.958a.876.876 0 0 1-.782 1.565l-2.4-1.2A.88.88 0 0 1 9.124 10zm7.75 3.6a6.875 6.875 0 1 1-13.75 0 6.875 6.875 0 0 1 13.75 0" />
  ),
};

export type IconName = keyof typeof paths | keyof typeof filled | keyof typeof line20;

export function Icon({
  name,
  size = 20,
  turn = 0,
  stroke = 1.75,
}: {
  name: IconName;
  size?: number;
  turn?: number;
  stroke?: number;
}) {
  const style = turn ? { transform: `rotate(${turn}deg)` } : undefined;
  if (name in line20) {
    return (
      <svg
        className="icon"
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={style}
      >
        {line20[name as keyof typeof line20]}
      </svg>
    );
  }
  if (name in filled) {
    return (
      <svg className="icon" width={size} height={size} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={style}>
        {filled[name as keyof typeof filled]}
      </svg>
    );
  }
  return (
    <svg
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={style}
    >
      {paths[name as keyof typeof paths]}
    </svg>
  );
}
