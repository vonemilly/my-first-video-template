import {
  AbsoluteFill,
  Easing,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
} from "remotion";
import {Video} from "@remotion/media";

export type SourceVideoMotionGraphicsProps = {
  title: string;
  subtitle: string;
  calloutOne: string;
  calloutTwo: string;
  calloutThree: string;
  endCard: string;
};

type TextCardProps = {
  text: string;
  color?: string;
  align?: "left" | "center";
};

const fadeIn = (frame: number, start: number, duration = 18) =>
  interpolate(frame, [start, start + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

const riseIn = (frame: number, start: number, distance = 70, duration = 20) =>
  interpolate(frame, [start, start + duration], [distance, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

const TextCard = ({text, color = "#FFFFFF", align = "left"}: TextCardProps) => {
  const frame = useCurrentFrame();
  const opacity = fadeIn(frame, 0);
  const translateY = riseIn(frame, 0);

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        color,
        fontFamily: "Arial, sans-serif",
        fontSize: 54,
        fontWeight: 700,
        lineHeight: 1.1,
        maxWidth: 850,
        textAlign: align,
        textShadow: "0 4px 18px rgba(0,0,0,0.35)",
      }}
    >
      {text}
    </div>
  );
};

const Dimmer = () => (
  <AbsoluteFill
    style={{
      backgroundColor: "rgba(0, 0, 0, 0.22)",
    }}
  />
);

export const SourceVideoMotionGraphics = ({
  title,
  subtitle,
  calloutOne,
  calloutTwo,
  calloutThree,
  endCard,
}: SourceVideoMotionGraphicsProps) => {
  return (
    <AbsoluteFill style={{backgroundColor: "#111827"}}>
      <Video
        src={staticFile("media/source-video.mp4")}
        style={{height: "100%", objectFit: "cover", width: "100%"}}
      />

      {/* 0.0–4.0 seconds: opening title */}
      <Sequence from={0} durationInFrames={120} name="Opening title">
        <AbsoluteFill
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 80,
          }}
        >
          <Dimmer />
          <AbsoluteFill
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: 80,
            }}
          >
            <TextCard text={title} align="center" />
            <div
              style={{
                color: "#C4B5FD",
                fontFamily: "Arial, sans-serif",
                fontSize: 32,
                marginTop: 28,
                opacity: fadeIn(useCurrentFrame(), 12),
                textAlign: "center",
              }}
            >
              {subtitle}
            </div>
          </AbsoluteFill>
        </AbsoluteFill>
      </Sequence>

      {/* 5.0–13.0 seconds: first callout */}
      <Sequence from={150} durationInFrames={240} name="First callout">
        <AbsoluteFill
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-end",
            padding: 72,
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(17, 24, 39, 0.78)",
              borderLeft: "10px solid #A78BFA",
              borderRadius: 18,
              padding: "28px 34px",
            }}
          >
            <TextCard text={calloutOne} />
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 14.0–24.0 seconds: two stacked points */}
      <Sequence from={420} durationInFrames={300} name="Key points">
        <AbsoluteFill
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
            padding: 72,
          }}
        >
          <div style={{display: "flex", flexDirection: "column", gap: 24}}>
            <div
              style={{
                backgroundColor: "rgba(17, 24, 39, 0.78)",
                borderRadius: 18,
                padding: "24px 30px",
              }}
            >
              <TextCard text={calloutTwo} />
            </div>
            <div
              style={{
                backgroundColor: "rgba(17, 24, 39, 0.78)",
                borderRadius: 18,
                padding: "24px 30px",
                transform: `translateY(${riseIn(useCurrentFrame(), 12)}px)`,
              }}
            >
              <TextCard text={calloutThree} color="#C4B5FD" />
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 25.0–34.0 seconds: visual hold with a subtle top label */}
      <Sequence from={750} durationInFrames={270} name="Supporting label">
        <AbsoluteFill
          style={{
            alignItems: "center",
            justifyContent: "flex-start",
            padding: 70,
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(17, 24, 39, 0.72)",
              borderRadius: 999,
              color: "#FFFFFF",
              fontFamily: "Arial, sans-serif",
              fontSize: 30,
              fontWeight: 700,
              opacity: fadeIn(useCurrentFrame(), 0),
              padding: "18px 30px",
            }}
          >
            IN FOCUS
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 34.0–38.6 seconds: end card */}
      <Sequence from={1020} durationInFrames={138} name="End card">
        <AbsoluteFill
          style={{
            alignItems: "center",
            backgroundColor: "rgba(17, 24, 39, 0.72)",
            justifyContent: "center",
            padding: 80,
          }}
        >
          <TextCard text={endCard} align="center" />
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
