import React, { useState } from "react";
import { contextUse } from "../context";
function Table() {
  const { list, setList, formData, setFormData, editId, setEditId } =
    contextUse();
  function handleDelete(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }
  function handleEdit(id) {
    const selectedItem = list.find((item) => item.id == id);
    setFormData(selectedItem);
    setEditId(id);
  }
  return (
    <table className="m-auto">
      <thead>
        <tr>
          <td className="p-2">Name:</td>
          <td className="p-2">Price:</td>
          <td className="p-2">Year:</td>
          <td className="p-2">Action:</td>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => {
          return (
            <tr key={item.id} className="bg-slate-300">
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.year}</td>
              <td>
                <button
                  className="bg-cyan-200 mr-2 p-2"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-300 p-2"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
