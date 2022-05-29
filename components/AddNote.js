import { useSession } from "next-auth/react";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import clipText from "../helper/ClipText";
import { supabase } from "../utils/supabaseClient";
function AddNote({ setAddNoteModal }) {
  const { data: session } = useSession();
  const [noteContent, setNoteContent] = React.useState("");
  const [newTag, setNewTag] = React.useState("");
  async function saveNote() {
    const { data, error } = await supabase.from("Notes").insert([
      {
        title: clipText(noteContent, 10),
        content: noteContent,
        userId: session?.user?.id,
      },
    ]);
    // setAddNoteModal(false);
    console.log(data, error);
  }

  return (
    <main className="w-full h-4/6 flex-1 text-white bg-neutral-700 rounded-md px-4 py-4 flex flex-col transition duration-350 ease-in ">
      <div className="w-full mb-1 flex items-center justify-between">
        <div className="flex">
          <BiArrowBack
            size={28}
            className="cursor-pointer"
            onClick={() => setAddNoteModal(false)}
          />
          <span className="px-2 text-xl">Notes</span>
        </div>
        <>
          <button onClick={() => saveNote()} className="save-note-button">
            Save
          </button>
        </>
      </div>
      <textarea
        className="flex-1 bg-neutral-700 text-white border-0 focus:outline-none my-2 mx-4 caret-blue-400"
        placeholder="Start typing..."
        value={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
      />
      <div className="flex flex-col">
        <span className="mb-2">Labels:</span>
        <div>
          <input
            className="bg-blue-400 rounded-full text-white placeholder:text-white focus:outline-none px-2 self-start"
            placeholder="Add new tag"
          />
        </div>
      </div>
    </main>
  );
}

export default AddNote;
