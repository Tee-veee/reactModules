import List from "./List";
import React, { useState, useEffect } from "react";

import Alert from "./Alert";
import "./App.css";

// local storage
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list === null) {
    return [];
  }
  return JSON.parse(localStorage.getItem("list"));
};

function App() {
  // state values
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [editActive, setEditActive] = useState(false);
  const [editItemActive, setEditItemActive] = useState(null);
  const [alert, setAlert] = useState({
    show: true,
    message: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "Please enter value");
      return;
    } else if (name && editActive) {
      setList(
        list.map((item) => {
          if (item.id === editItemActive) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditItemActive(null);
      setEditActive(false);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "Item succesfully added to the list");
      const strTime = new Date().getTime().toString();
      const newListItem = { id: strTime, title: name };
      setList([...list, newListItem]);
      setName("");
    }
  };

  // show alert, presets values if no paramaters when called
  const showAlert = (show = false, type = "", message = "") => {
    setAlert({ show, type, message });
  };

  // clears list
  const clearList = () => {
    showAlert(true, "danger", "Your are deletiing the list");
    setList([]);
  };

  // remove individual item
  const removeItem = (id) => {
    showAlert(true, "danger", "You are deleting the item");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const selectItem = list.find((item) => item.id === id);
    setEditActive(true);
    setEditItemActive(id);
    setName(selectItem.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <main className="main-container">
      <section className="card-container">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show ? (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          ) : null}
          <h3 className="list-title">Your list</h3>
          <div className="form-container">
            <input
              type="text"
              className="grocery-input"
              placeholder="e.g eggs"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              {editActive ? "Edit" : "Submit"}
            </button>
            <List list={list} editItem={editItem} removeItem={removeItem} />
          </div>
        </form>
        {list.length > 0 ? (
          <div className="clear-container">
            <button className="clear-btn" onClick={clearList}>
              Clear List
            </button>
          </div>
        ) : null}
      </section>
    </main>
  );
}

export default App;
