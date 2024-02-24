"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { TiPlus } from "react-icons/ti";
import { modalAdd, newTask } from "@/app/recoils/atom";
import { useRecoilState } from "recoil";
import { ADD_DATA } from "../apis/route";
import { useRouter } from "next/navigation";

function HeaderAddItem() {
  const [modal, setModal] = useState(false);
  const [Task, setTask] = useRecoilState(newTask);
  const route = useRouter();
  const handleAddTask = (e) => {
    e.preventDefault();

    ADD_DATA(Task);
    setTask("");
    route.refresh();
    setModal(false);
  };
  return (
    <div className="border-2 border-dashed p-6 rounded-xl">
      <h1 className="text-center mb-6 font-bold text-lg">My Todo List</h1>
      <div className="w-full flex justify-center items-center gap-4">
        <button
          tabIndex={"0"}
          onClick={(e) => setModal(true)}
          className="btn btn-square btn-primary text-white w-full text-2xl "
        >
          Add Task <TiPlus />
        </button>
      </div>
      <Modal label={"Add Task"} modal={modal} setModal={(e) => setModal(false)}>
        <form onSubmit={handleAddTask} className="flex flex-col gap-3">
          <input
            
            type="text"
            value={Task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Write Your Task ..."
            className="input input-bordered input-info w-full focus:outline-none"
          />
          <button type="submit" className="btn btn-success w-full text-white">
            Add
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default HeaderAddItem;
