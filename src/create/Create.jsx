import React, { useEffect } from "react";
import { contextUse } from "../context";
export function Create() {
  const { formData, setFormData, list, setList, editId, setEditId } =
    contextUse();

  function handleChange(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (editId) {
      const newList = list.map((item) =>
        item.id === editId ? { ...item, ...formData } : item
      );
      setList(newList);
      setEditId(0);
      setFormData({
        name: "",
        price: "",
        year: "",
      });
      return;
    }
    const id = list.length ? list[list.length - 1].id + 1 : 1;
    const newList = { ...formData, id };
    setList((prevList) => [...prevList, newList]);
    setFormData({
      name: "",
      price: "",
      year: "",
    });
  }
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <div>
      <form
        className="flex flex-col gap-3 ml-2 mt-2 border items-center p-3"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="border-2 border-gray-900"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="name">Price:</label>
          <input
            type="number"
            className="border-2 border-gray-900"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="name">Year:</label>
          <input
            type="Number"
            className="border-2 border-gray-900"
            name="year"
            value={formData.year}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="bg-slate-300 p-2">
            {editId ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
