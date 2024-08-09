import Wave from "react-wavify";
import React from "react";

function WazyHeaderDiv({ text, colour, heightPX }) {
  return (
    <div className="my-3">
      <Wave
        fill={colour}
        paused={false}
        style={{ display: "flex", height: `${heightPX}px`, overflow: "hidden" }}
        options={{
          height: 5,
          amplitude: 20,
          speed: 0.15,
          points: 3,
        }}
      />
      <h2 className="font-bold text-4xl bg-gray m-3">{text}</h2>
      <Wave
        fill={colour}
        paused={false}
        style={{
          display: "flex",
          height: `${heightPX}px`,
          overflow: "hidden",
          transform: "rotate(180deg)",
        }}
        options={{
          height: 5,
          amplitude: 20,
          speed: 0.15,
          points: 3,
        }}
      />
    </div>
  );
}

export default WazyHeaderDiv;
