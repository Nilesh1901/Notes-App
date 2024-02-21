import React from "react";
import { Link } from "react-router-dom";
import { GiNotebook } from "react-icons/gi";

function CreateNotes() {
  return (
    <Link to="/create-note">
      <button className="border-none outline-none py-2 px-4 bg-zinc-100 rounded-lg text-center font-semibold text-zinc-800 hover:bg-zinc-200 flex items-center gap-1">
        <GiNotebook /> Create Notes
      </button>
    </Link>
  );
}

export default CreateNotes;
