import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { SlNote } from "react-icons/sl";
import { CgCloseO } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { dataAction } from "../store/dataSlice";
import { v4 as uuidv4 } from "uuid";

function AddNotes() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const noteData = Object.fromEntries(formData);

    if (noteData.title && noteData.noteDis) {
      const newNote = {
        title: noteData.title,
        noteDis: noteData.noteDis,
        id: uuidv4(),
      };

      // Dispatch action to add note to Redux store
      dispatch(dataAction.addNote(newNote));

      // Navigate to home page
      navigate("/");
    }
  };

  return (
    <div className="relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex justify-center items-center h-[60%] z-[3] w-[60%] border bg-zinc-100/10 rounded-xl">
      <Link
        to="/"
        className="absolute right-8 top-6 text-2xl cursor-pointer text-zinc-300"
      >
        <CgCloseO />
      </Link>
      <form onSubmit={handelSubmit} className="flex flex-col gap-6">
        <label
          htmlFor="title"
          className="text-2xl font-bold text-zinc-100 mb-[-15px]"
        >
          Title
        </label>
        <input
          placeholder="Note Title."
          type="text"
          className="rounded-sm py-2 px-3 outline-none border-none font-semibold text-lg bg-zinc-800 text-zinc-100"
          id="title"
          name="title"
        />
        <label
          htmlFor="note-detail"
          className="text-2xl mb-[-15px] font-bold text-zinc-100"
        >
          Note Detail
        </label>
        <textarea
          placeholder="Discribe in brief..."
          name="noteDis"
          id="note-detail"
          cols="40"
          rows="4"
          className="rounded-sm py-2 px-3 outline-none border-none font-semibold text-lg bg-zinc-800 text-zinc-100"
        ></textarea>
        <button
          type="submit"
          className="border-none outline-none py-2 px-4 bg-zinc-100 w-[7rem] rounded-lg text-center font-semibold text-zinc-800 hover:bg-zinc-200 flex align-middle items-center justify-evenly"
        >
          <SlNote className="mr" /> Add
        </button>
      </form>
    </div>
  );
}

export default AddNotes;
