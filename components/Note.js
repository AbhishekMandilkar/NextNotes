import moment from "moment";
import React from "react";
import clipText from "../helper/ClipText";

function Note({ title, content, createdAt }) {
  return (
    <div className="bg-neutral-900 hover:bg-neutral-700 cursor-pointer transition-all ease-linear  m-1 p-2 rounded-md flex flex-col h-52 relative">
      <span className="w-full text-xl">{title}</span>
      <span className="w-full opacity-50 pt-2">{clipText(content, 120)}</span>
      <span className="p-2 text-sm absolute bottom-0 right-0 flex justify-end ">
        {moment(createdAt).fromNow()}
      </span>
    </div>
  );
}

export default Note;
