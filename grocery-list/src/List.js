import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function List({ list, removeItem, editItem }) {
  return (
    <div className="list-container">
      {list.map((listItem) => {
        const { id, title } = listItem;
        return (
          <article key={id} className="grocery-list-item">
            <p className="item-title">{title}</p>
            <div className="btn-container">
              <button type="button" className="edit-btn">
                <FaEdit class="list-icon" onClick={() => editItem(id)} />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeItem(id)}
              >
                <FaTrash class="list-icon" />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
