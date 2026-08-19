import {Composition} from "remotion";
import {PromoVideo} from "./PromoVideo";

export const RemotionRoot = () => {
  return (
    <Composition
      id="PromoVideo"
      component={PromoVideo}
      durationInFrames={300}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{
        title: "My first motion graphic",
        subtitle: "Rendered by GitHub in the cloud"
      }}
    />
  );
};
