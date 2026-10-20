import { cn } from '@/lib/cn'

// Koło nawyków z „Jak pracuję?” (O mnie, desktop), rozłożone z SVG z projektu:
// przerywana ścieżka (z przerwami przy etykietach), kropki i etykiety jako tekst.
// Animacja: kropki rozbłyskują po kolei, zgodnie z ruchem wskazówek zegara
// (keyframes w index.css; motion-safe = bez ruchu przy reduced motion).

// Ścieżka z pliku, rysowana zgodnie z ruchem wskazówek zegara (od prawego dołu).
const ring =
  'M487.38,342.02c-68,66.68-74.61,170.67-262.55,132.46C36.89,436.28-25.41,281.87,9.05,184.28,43.5,86.7,164.34,2.64,215.3,10.21c66.75-1.82,109.52,6.77,140.84,23.11,43.35,22.61,64.15,60.24,95.99,105.19,47.37,66.86,66.73,172.63,35.25,203.51Z'

// Kolejność = zgodnie z ruchem wskazówek zegara, od góry. Etykieta: lewa krawędź, szerokość
// i linia bazowa tekstu z pliku (textLength dopasowuje rozstrzelenie do projektu).
const points = [
  { label: 'Relacje', dot: [194.93, 14.21], x: 211.6, w: 115.4, y: 17.7 },
  { label: 'Odżywianie', dot: [434.07, 111.25], x: 357.3, w: 174.1, y: 153.6 },
  { label: 'Ruch', dot: [500.54, 303.78], x: 444.1, w: 74.3, y: 349.6 },
  { label: 'Natura', dot: [384.41, 458.88], x: 247.8, w: 108.2, y: 478.6 },
  { label: 'Stres', dot: [58.16, 384.77], x: 20.9, w: 81.3, y: 367 },
  { label: 'Sen', dot: [21.49, 150.98], x: 47.9, w: 48.8, y: 153.7 },
]

export const HabitsCircle = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 531.4 482.68"
    role="img"
    aria-label={points.map((point) => point.label).join(', ')}
    className={cn('overflow-visible', className)}
  >
    <defs>
      {/* przerwy w linii pod etykietami */}
      <mask id="habits-circle-gaps">
        <rect x="-20" y="-20" width="580" height="530" fill="white" />
        {points.map((point) => (
          <rect
            key={point.label}
            x={point.x - 12}
            y={point.y - 28}
            width={point.w + 24}
            height={40}
            fill="black"
          />
        ))}
      </mask>
    </defs>
    <path
      d={ring}
      mask="url(#habits-circle-gaps)"
      fill="none"
      stroke="#d7adb4"
      strokeOpacity={0.73}
      strokeWidth={2.3}
      strokeDasharray="9 6.5"
    />
    {points.map((point, index) => (
      <circle
        key={point.label}
        cx={point.dot[0]}
        cy={point.dot[1]}
        r={8.02}
        fill="#d7adb4"
        className="origin-center [transform-box:fill-box] motion-safe:animate-dot-pulse"
        style={{ animationDelay: `${index}s` }}
      />
    ))}
    {points.map((point) => (
      <text
        key={point.label}
        x={point.x}
        y={point.y}
        textLength={point.w}
        lengthAdjust="spacing"
        fontSize={24.5}
        fill="#3d5f74"
        aria-hidden
      >
        {point.label.toUpperCase()}
      </text>
    ))}
  </svg>
)
