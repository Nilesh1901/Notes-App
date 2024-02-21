import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { dataAction } from "../store/dataSlice";

function Card({ data, refrence }) {
  const dispatch = useDispatch();

  const handelClose = () => {
    dispatch(dataAction.removeNote(data.id));
  };

  return (
    <motion.div
      drag
      dragConstraints={refrence}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 400, bounceDamping: 30 }}
      className=" shrink-0 relative w-72 h-72 bg-zinc-900/90 rounded-[45px] px-8 py-10 text-zinc-100 overflow-hidden cursor-pointer"
    >
      <div className="header absolute top-0 left-0 w-full bg-sky-600">
        <div className="flex justify-between px-8 items-center align-middle w-full py-3">
          <div
            className={`tag w-full flex justify-between items-center font-semibold text-xl`}
          >
            <FaRegFileLines />
            <h3 className="">{data.title}</h3>
            <span
              className="flex w-6 h-6 text-sm justify-center items-center bg-zinc-300 rounded-full"
              onClick={handelClose}
            >
              <IoClose className=" text-zinc-800" />
            </span>
          </div>
        </div>
      </div>
      <p className=" text-sm font-semibold mt-10 leading-tight">
        {data.noteDis}
      </p>
    </motion.div>
  );
}

export default Card;
