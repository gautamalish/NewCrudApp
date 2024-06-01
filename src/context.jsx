import { createContext, useContext, useState } from "react";
const context = createContext();

export function contextUse() {
  return useContext(context);
}
export function ContextProvider({ children }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    year: "",
  });
  const [editId, setEditId] = useState(0);
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );
  const values = {
    formData,
    setFormData,
    list,
    setList,
    editId,
    setEditId,
  };
  return <context.Provider value={values}>{children}</context.Provider>;
}
