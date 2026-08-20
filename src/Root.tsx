import {Composition} from "remotion";
import {DiplomaScene} from "./DiplomaScene";

export const RemotionRoot = () => {
  return (
    <Composition
      id="DiplomaScene"
      component={DiplomaScene}
      durationInFrames={180}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{
        calloutText: "Promise to Mom",
        backgroundColor: "#78B7E8",
        ribbonColor: "#C6283D",
      }}
    />
  );
};
