"use client";
import React, { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { IoTrashBin } from "react-icons/io5";
import Modal from "./Modal";
import { DELETE_DATA, EDIT_DATA } from "../apis/route";
import { useRouter } from "next/navigation";

function Tasks({ data, index, id }) {
  const [modalOpenDelete, setModalOpenDelete] = useState(false);
  const [modalOpenEdit, setModalOpenEdit] = useState(false);
  const [editData, setEditData] = useState(data);

  const route = useRouter();

  const handleDeleteData = (id) => {
    DELETE_DATA(id);
    setModalOpenDelete(false);
    route.refresh();
  };

  const handleEditTask = (e, id) => {
    e.preventDefault();
    const editedData = { text: editData };
    EDIT_DATA(editedData, id);
    setModalOpenEdit(false);
    route.refresh();
  };
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{data}</td>
        <td>
          <div className="flex gap-5">
            <div onClick={(e) => setModalOpenEdit(true)} tabIndex={"1"}>
              <BiSolidEdit
                cursor="pointer"
                className="text-3xl text-yellow-400"
              />
            </div>
            <Modal
              label={"Edit Task"}
              modal={modalOpenEdit}
              setModal={(e) => setModalOpenEdit(false)}
            >
              <form
                onSubmit={(e) => handleEditTask(e, id)}
                className="flex flex-col gap-3"
              >
                <input
                  type="text"
                  value={editData}
                  onChange={(e) => setEditData(e.target.value)}
                  placeholder="Write Your Task ..."
                  className="input input-bordered input-info w-full focus:outline-none"
                />
                <button
                  type="submit"
                  className="btn btn-warning btn-outline w-full text-white"
                >
                  Edit
                </button>
              </form>
            </Modal>
            <div onClick={(e) => setModalOpenDelete(true)} tabIndex={"2"}>
              <IoTrashBin cursor="pointer" className="text-3xl text-red-500" />
            </div>
            <Modal
              label={"Delete Task"}
              modal={modalOpenDelete}
              setModal={(e) => setModalOpenDelete(false)}
            >
              <div className="flex items-center justify-between">
                <h3>Are You Sure To Remove?</h3>
                <button
                  onClick={(e) => handleDeleteData(id)}
                  className="btn btn-error text-white"
                >
                  Delete
                </button>
              </div>
            </Modal>
          </div>
        </td>
      </tr>
    </>
  );
}

export default Tasks;
