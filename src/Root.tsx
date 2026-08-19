import {Composition} from "remotion";
import {DiplomaScene} from "./DiplomaScene";
import {SourceVideoMotionGraphics} from "./SourceVideoMotionGraphics";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="SourceVideoMotionGraphics"
        component={SourceVideoMotionGraphics}
        durationInFrames={1158}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: "Your opening title",
          subtitle: "A short subtitle goes here",
          calloutOne: "First key point",
          calloutTwo: "Second key point",
          calloutThree: "Third key point",
          endCard: "Learn more",
        }}
      />
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
    </>
  );
};
