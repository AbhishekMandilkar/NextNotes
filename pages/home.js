import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import AddNote from "../components/AddNote";
import Header from "../components/Header";
import Note from "../components/Note";
import SideBar from "../components/SideBar";

import data from "../data";
import { supabase } from "../utils/supabaseClient";
function Home() {
  const { data: session } = useSession();
  const [notes, setNotes] = useState([]);
  const [addNoteModal, setAddNoteModal] = useState(false);
  const [labels, setLables] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    let loadTodos = async () => {
      console.log("load todos");
      fetch("/api/todo/list")
        .then((res) => res.json())
        .then((res) => {
          setNotes(res.data);
        });
    };
    let fetchLables = async () => {
      let body = {
        userId: session?.user?.id,
      };
      axios.post("/api/todo/labels", body).then((res) => {
        console.log(res);
      });
    };
    loadTodos();
    fetchLables();
  }, [session?.user?.id]);

  return (
    <main className="h-screen">
      <Header />
      <div
        className="hello h-full mb-4 flex flex-1 flex-col lg:flex-row md:flex-row w-screen  bg-black text-white pt-12
        px-8 lg:px-80 md:px-52"
      >
        {addNoteModal ? (
          <AddNote setAddNoteModal={setAddNoteModal} />
        ) : (
          <>
            <SideBar setAddNoteModal={setAddNoteModal} />
            <div className=" mb-2 p-1 md:p-2 lg:px-4  grid grid-cols-1 grid-rows-4 lg:grid-cols-3 md:grid-cols-2 overflow-y-auto h-fit">
              {notes?.map(({ title, content, created_at }) => (
                <>
                  <Note
                    title={title}
                    content={content}
                    createdAt={created_at}
                  />
                </>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default Home;
