import { ThreeDots } from "react-loader-spinner";

function Loading({ width = "72", height = "40" }) {
  return (
    <div>
      <ThreeDots
        height={height}
        width={width}
        radius={9}
        color="rgb(var(--color-primary-900))"
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
        }}
        visible={true}
      />
    </div>
  );
}

export default Loading;
