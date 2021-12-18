import "./App.css";
import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    } else {
      const newItems = items.filter((item) => item.category === category);

      setMenuItems(newItems);
    }
  };

  return (
    <main className="main-container">
      <section className="menu-container">
        <header className="menu-header">
          <h3>Our menu</h3>
        </header>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}
export default App;

//SECTION
// TITLE VANILLA JS CODE TO ACTIVATE CARD BACKGROUNDS
// const checkIndex = (id) => {
//   menuItems.forEach((menuItem) => {
//     if (id === menuItem.id) {
//       const currentEl = document.getElementById(id);
//       if (currentEl.classList.contains("menu-background")) {
//         return currentEl.classList.remove("menu-background");
//       }
//       return currentEl.classList.add("menu-background");
//     }
//   });
// };
