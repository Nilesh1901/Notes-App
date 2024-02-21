import React, { useRef } from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import CreateNotesBtn from "./CreateNotesBtn";

function CardContainer() {
  const data = useSelector((store) => store.data);
  const ref = useRef();

  return (
    <div
      ref={ref}
      className="fixed z-[3] w-full h-screen top-0 left-0 flex flex-wrap p-5 gap-10"
    >
      <CreateNotesBtn />
      {data.map((item, index) => (
        <Card data={item} key={index} refrence={ref} />
      ))}
    </div>
  );
}

export default CardContainer;
