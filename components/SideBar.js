import React from "react";

function SideBar({ setAddNoteModal }) {
  return (
    <div className="bg-neutral-800 text-white w-full lg:w-2/6 rounded-md px-4 mb-2 lg:mr-2 p-4 lg:h-min">
      <button className="add-note-button" onClick={() => setAddNoteModal(true)}>
        Add Note
      </button>
      {/* <p className="text-xl">Labels</p>
      <div className="flex flex-row lg:flex-col md:flex-col overflow-x-auto">
        <span className="bg-blue-600 px-2  m-1 rounded-full">General</span>
        <span className="bg-blue-600 px-2 m-1 rounded-full">General</span>
        <span className="bg-blue-600 px-2 m-1 rounded-full">General</span>
        <span className="bg-blue-600 px-2 m-1 rounded-full">General</span>
      </div> */}
    </div>
  );
}

export default SideBar;
