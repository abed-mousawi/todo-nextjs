import React from "react";
import Tasks from "./Tasks";
import { GET_DATA } from "../apis/route";

async function TodoBox() {
  const data = await GET_DATA();

  return (
    <div className="overflow-x-auto">
      {data.length != 0 ? (
        <table className="table table-zebra text-lg text-[#333]">
          {/* head */}
          <thead>
            <tr className="text-lg text-[#333]">
              <th></th>
              <th className="w-full">Task</th>
              <th>Operator</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <Tasks
                key={item.id}
                data={item.text}
                index={index}
                id={item.id}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <div>There is No Task</div>
      )}
    </div>
  );
}

export default TodoBox;
