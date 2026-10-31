type Point = { x: number; y: number };
type Strand = { d: string; opacity: number; width: number };

type OrbWeb = {
  cx: number;
  cy: number;
  angles: number[];
  lengths: number[];
  rings: number[];
  seed: number;
};

const round = (value: number) => Math.round(value * 10) / 10;
const toRad = (deg: number) => (deg * Math.PI) / 180;

const pointOnWeb = (
  cx: number,
  cy: number,
  radius: number,
  angle: number,
): Point => ({
  x: round(cx + Math.cos(toRad(angle)) * radius),
  y: round(cy + Math.sin(toRad(angle)) * radius),
});

function buildOrbWeb({ cx, cy, angles, lengths, rings, seed }: OrbWeb) {
  const spokes: Strand[] = angles.map((angle, index) => {
    const end = pointOnWeb(cx, cy, lengths[index], angle);

    return {
      d: `M ${cx} ${cy} L ${end.x} ${end.y}`,
      opacity: index === 0 ? 0.8 : 0.5,
      width: index === 0 ? 0.7 : 0.5,
    };
  });

  const strands: Strand[] = [];

  rings.forEach((radius, ringIndex) => {
    for (let index = 0; index < angles.length - 1; index++) {
      const startAngle = angles[index];
      const endAngle = angles[index + 1];

      if (endAngle - startAngle > 30) continue;

      const limit = Math.min(lengths[index], lengths[index + 1]);
      if (radius > limit * 0.97) continue;

      const wobble = 1 + Math.sin(seed + ringIndex * 1.7 + index * 2.1) * 0.03;
      const strandRadius = radius * wobble;
      const start = pointOnWeb(cx, cy, strandRadius, startAngle);
      const end = pointOnWeb(cx, cy, strandRadius, endAngle);

      const control = pointOnWeb(
        cx,
        cy,
        strandRadius * 0.86,
        (startAngle + endAngle) / 2,
      );

      strands.push({
        d: `M ${start.x} ${start.y} Q ${control.x} ${control.y} ${end.x} ${end.y}`,
        opacity: Math.max(0.15, 0.72 - ringIndex * 0.06),
        width: 0.5,
      });
    }
  });

  return { spokes, strands };
}

const topWeb = buildOrbWeb({
  cx: 420,
  cy: 24,
  angles: [92, 108, 126, 145, 165, 185, 205, 225, 245, 265, 285],
  lengths: [320, 330, 330, 320, 300, 280, 250, 210, 160, 100, 45],
  rings: [16, 38, 66, 100, 142, 190, 246, 310],
  seed: 3,
});

const bottomWeb = buildOrbWeb({
  cx: 0,
  cy: 276,
  angles: [-88, -72, -54, -35, -15, 5, 25, 45, 65, 85, 105],
  lengths: [320, 330, 330, 320, 300, 280, 250, 210, 160, 100, 45],
  rings: [16, 38, 66, 100, 142, 190, 246, 310],
  seed: 7,
});

const topFrame: Strand[] = [
  { d: "M 420 24 L 420 0", opacity: 0.5, width: 0.7 },
  { d: "M 420 24 L 400 0", opacity: 0.36, width: 0.6 },
  { d: "M 420 24 L 360 0", opacity: 0.26, width: 0.55 },
  { d: "M 420 24 L 320 0", opacity: 0.2, width: 0.5 },
  { d: "M 420 24 L 280 0", opacity: 0.16, width: 0.5 },
  { d: "M 420 24 C 400 20 380 10 360 0", opacity: 0.2, width: 0.5 },
  { d: "M 350 200 C 360 242 356 282 346 320", opacity: 0.16, width: 0.5 },
];

const bottomFrame: Strand[] = [
  { d: "M 0 276 L 0 300", opacity: 0.5, width: 0.7 },
  { d: "M 0 276 L 20 300", opacity: 0.36, width: 0.6 },
  { d: "M 0 276 L 60 300", opacity: 0.26, width: 0.55 },
  { d: "M 0 276 L 100 300", opacity: 0.2, width: 0.5 },
  { d: "M 0 276 L 140 300", opacity: 0.16, width: 0.5 },
  { d: "M 0 276 C 20 292 40 298 60 300", opacity: 0.2, width: 0.5 },
  { d: "M 80 160 C 66 196 62 226 70 258", opacity: 0.16, width: 0.5 },
];

function WebStrands({ strands }: { strands: Strand[] }) {
  return (
    <>
      {strands.map((strand, index) => (
        <path
          key={index}
          d={strand.d}
          opacity={strand.opacity}
          strokeWidth={strand.width}
        />
      ))}
    </>
  );
}

function Spider() {
  return (
    <g
      transform="translate(273 218) scale(0.68)"
      fill="var(--spider-ink)"
      stroke="var(--spider-ink)"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g fill="none" strokeWidth="1.15">
        <path d="M -1 -1 C -9 -5 -15 -10 -21 -18" />
        <path d="M -1 1 C -11 0 -18 -4 -25 -9" />
        <path d="M -1 3 C -10 6 -18 9 -24 15" />
        <path d="M 0 5 C -7 11 -11 19 -14 28" />
        <g transform="scale(-1 1)">
          <path d="M -1 -1 C -9 -5 -15 -10 -21 -18" />
          <path d="M -1 1 C -11 0 -18 -4 -25 -9" />
          <path d="M -1 3 C -10 6 -18 9 -24 15" />
          <path d="M 0 5 C -7 11 -11 19 -14 28" />
        </g>
      </g>
      <ellipse cx="0" cy="8.5" rx="6.4" ry="9" />
      <ellipse cx="0" cy="-1.5" rx="4" ry="4.6" />
      <circle cx="-1.7" cy="-3.2" r="0.7" fill="var(--spider-hot)" />
      <circle cx="1.7" cy="-3.2" r="0.7" fill="var(--spider-hot)" />
    </g>
  );
}

export function SpiderWaveAmbient() {
  return (
    <div
      aria-hidden="true"
      className="spider-wave pointer-events-none fixed inset-0 -z-10 hidden overflow-hidden select-none md:block"
    >
      <div className="spider-wave-glow absolute inset-0 opacity-80" />

      <svg
        className="absolute top-0 right-0 h-auto w-[clamp(220px,27vw,360px)] opacity-95 max-lg:w-[250px] max-lg:opacity-70"
        viewBox="0 0 420 340"
        fill="none"
        stroke="var(--spider-web)"
        strokeLinecap="round"
      >
        <WebStrands strands={topFrame} />
        <WebStrands strands={topWeb.spokes} />
        <WebStrands strands={topWeb.strands} />
        <path
          d="M 273 127 L 273 221.5"
          fill="none"
          stroke="var(--spider-web)"
          strokeWidth="0.8"
        />
      </svg>

      <svg
        className="spider-bob absolute top-0 right-0 h-auto w-[clamp(220px,27vw,360px)] opacity-95 max-lg:w-[250px] max-lg:opacity-70"
        viewBox="0 0 420 340"
        fill="none"
      >
        <Spider />
      </svg>

      <svg
        className="absolute bottom-0 left-0 h-auto w-[clamp(180px,22vw,290px)] opacity-85 max-lg:w-[210px] max-lg:opacity-60"
        viewBox="0 0 380 300"
        fill="none"
        stroke="var(--spider-web)"
        strokeLinecap="round"
      >
        <WebStrands strands={bottomFrame} />
        <WebStrands strands={bottomWeb.spokes} />
        <WebStrands strands={bottomWeb.strands} />
      </svg>

      <div className="spider-wave-vignette absolute inset-0" />
    </div>
  );
}
