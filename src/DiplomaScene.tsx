import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export type DiplomaSceneProps = {
  calloutText: string;
  backgroundColor: string;
  ribbonColor: string;
};

const Diploma = ({ribbonColor}: {ribbonColor: string}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const pop = spring({
    frame,
    fps,
    config: {damping: 14, stiffness: 130, mass: 0.8},
  });

  const opacity = interpolate(pop, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = interpolate(pop, [0, 1], [0.35, 1], {
    extrapolateRight: "clamp",
  });

  const rotate = interpolate(pop, [0, 1], [-12, -3], {
    extrapolateRight: "clamp",
  });

  const float = Math.sin(frame / 18) * 3;

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${float}px) scale(${scale}) rotate(${rotate}deg)`,
        transformOrigin: "center bottom",
      }}
    >
      <svg
        width="620"
        height="520"
        viewBox="0 0 620 520"
        role="img"
        aria-label="rolled diploma"
      >
        <defs>
          <linearGradient id="paper" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#FFF7D6" />
            <stop offset="1" stopColor="#E7C979" />
          </linearGradient>

          <filter id="shadow" x="-30%" y="-30%" width="160%" height="170%">
            <feDropShadow
              dx="0"
              dy="18"
              stdDeviation="14"
              floodColor="#173B72"
              floodOpacity="0.28"
            />
          </filter>
        </defs>

        <g filter="url(#shadow)">
          <path
            d="M128 113 C115 86 130 56 164 52 L495 89 C522 92 537 116 532 145 L490 384 C486 412 461 429 434 425 L108 387 C79 384 62 356 68 329 Z"
            fill="url(#paper)"
            stroke="#7C5B2B"
            strokeWidth="8"
          />

          <path
            d="M122 115 L492 156 L452 393 L83 349 Z"
            fill="#FFF9E8"
            opacity="0.62"
          />

          <path
            d="M177 161 L430 190"
            stroke="#9B773A"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.55"
          />

          <path
            d="M163 211 L402 238"
            stroke="#9B773A"
            strokeWidth="7"
            strokeLinecap="round"
            opacity="0.4"
          />

          <path
            d="M148 260 L365 285"
            stroke="#9B773A"
            strokeWidth="7"
            strokeLinecap="round"
            opacity="0.4"
          />

          <ellipse
            cx="107"
            cy="352"
            rx="54"
            ry="42"
            fill="#E5C574"
            stroke="#7C5B2B"
            strokeWidth="8"
          />

          <ellipse
            cx="107"
            cy="352"
            rx="30"
            ry="23"
            fill="#FFF2C5"
            stroke="#9B773A"
            strokeWidth="6"
          />

          <path
            d="M490 146 C530 150 548 177 543 207 L509 397 C505 423 480 440 455 437"
            fill="#DAB766"
            stroke="#7C5B2B"
            strokeWidth="8"
          />

          <path
            d="M470 151 C499 155 513 170 510 192 L480 382 C476 405 461 415 442 412"
            fill="#FFF1BE"
            stroke="#9B773A"
            strokeWidth="6"
          />

          <path
            d="M295 137 C280 182 280 250 294 310 C305 356 333 382 369 386"
            fill="none"
            stroke={ribbonColor}
            strokeWidth="28"
            strokeLinecap="round"
          />

          <path
            d="M296 293 C268 321 248 349 243 390 C274 373 302 369 334 381"
            fill={ribbonColor}
            stroke="#8D1F2B"
            strokeWidth="7"
          />

          <path
            d="M296 293 C322 326 337 356 337 397 C312 377 285 370 255 378"
            fill={ribbonColor}
            stroke="#8D1F2B"
            strokeWidth="7"
          />

          <circle
            cx="296"
            cy="293"
            r="28"
            fill={ribbonColor}
            stroke="#8D1F2B"
            strokeWidth="7"
          />
        </g>
      </svg>
    </div>
  );
};

const DottedArrow = () => {
  const frame = useCurrentFrame();

  const progress = interpolate(frame, [18, 55], [220, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <svg
      width="360"
      height="220"
      viewBox="0 0 360 220"
      style={{overflow: "visible"}}
      aria-hidden="true"
    >
      <path
        d="M330 22 C248 23 230 92 158 116 C111 132 78 148 40 194"
        fill="none"
        stroke="#173B72"
        strokeDasharray="2 16"
        strokeLinecap="round"
        strokeWidth="8"
        strokeDashoffset={progress}
      />

      <path
        d="M47 166 L40 194 L68 185"
        fill="none"
        stroke="#173B72"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DiplomaScene = ({
  calloutText,
  backgroundColor,
  ribbonColor,
}: DiplomaSceneProps) => {
  const frame = useCurrentFrame();

  const textIn = spring({
    frame: Math.max(0, frame - 24),
    fps: 30,
    config: {damping: 16, stiffness: 120, mass: 0.7},
  });

  const textOpacity = interpolate(textIn, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
  });

  const textY = interpolate(textIn, [0, 1], [35, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        backgroundColor,
        color: "#173B72",
        fontFamily: "Comic Sans MS, Bradley Hand, cursive",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div style={{transform: "translate(-130px, 60px)"}}>
        <Diploma ribbonColor={ribbonColor} />
      </div>

      <div
        style={{
          left: 610,
          opacity: textOpacity,
          position: "absolute",
          top: 520,
          transform: `translateY(${textY}px) rotate(-4deg)`,
          width: 370,
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.05,
          }}
        >
          {calloutText}
        </div>

        <DottedArrow />
      </div>
    </AbsoluteFill>
  );
};
