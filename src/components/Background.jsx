import React from "react";

function Background() {
  return (
    <div className="w-full h-screen fixed z-[2]">
      <div className="absolute w-full top-[5%] text-center font-semibold text-zinc-600 text-xl py-10">
        Every note is a step towards a melody of memories.
      </div>
      <h1 className=" absolute text-[13vw] leading-none tracking-tighter font-semibold top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-zinc-900">
        Notes.
      </h1>
    </div>
  );
}

export default Background;
