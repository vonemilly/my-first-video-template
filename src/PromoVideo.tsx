import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame
} from "remotion";

type PromoVideoProps = {
  title: string;
  subtitle: string;
};

export const PromoVideo = ({title, subtitle}: PromoVideoProps) => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  });

  const titleMoveUp = interpolate(frame, [0, 20], [80, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  });

  const subtitleOpacity = interpolate(frame, [18, 38], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  });

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        backgroundColor: "#111827",
        color: "white",
        fontFamily: "Arial, sans-serif",
        justifyContent: "center",
        padding: 80,
        textAlign: "center"
      }}
    >
      <div
        style={{
          fontSize: 82,
          fontWeight: 800,
          lineHeight: 1.05,
          opacity: titleOpacity,
          transform: `translateY(${titleMoveUp}px)`
        }}
      >
        {title}
      </div>

      <div
        style={{
          color: "#A78BFA",
          fontSize: 36,
          lineHeight: 1.3,
          marginTop: 36,
          opacity: subtitleOpacity
        }}
      >
        {subtitle}
      </div>
    </AbsoluteFill>
  );
};
