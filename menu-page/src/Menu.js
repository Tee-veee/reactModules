import React, { createRef } from "react";

function Menu({ menuItems }) {
  // inits array of references to destructured object passed in.
  const elRefs = React.useRef([...menuItems]);

  // makes copy Array of paramater and changes id value to 1.
  const newArr = menuItems.map((items, i) => {
    items.id = i;
  });
  // init length of copied Arr
  const refsLen = newArr.length;

  // If the array lengths are not equal, set new refrences equal to length of the copiedArr.
  // set refrence i value = copiedArr i value to map them
  if (elRefs.current.length !== refsLen) {
    elRefs.current = Array(refsLen)
      .fill()
      .map((_, i) => elRefs.current[i] || createRef());
  }

  // useRef accessed via .current
  const checkCardBack = (id) => {
    let currentElNode = elRefs.current[id].current;

    if (currentElNode.classList.contains("menu-background")) {
      currentElNode.classList.remove("menu-background");
      return;
    }
    currentElNode.classList.add("menu-background");
    return;
  };

  return (
    <div className="menu-item-container">
      {menuItems.map((menuItem) => {
        const { id, title, image, info, price } = menuItem;
        return (
          <article
            key={id}
            id={id}
            ref={elRefs.current[id]}
            className="menu-item"
          >
            <img
              src={image}
              alt={title}
              className="menu-image"
              onClick={() => checkCardBack(id)}
            />
            <div className="menu-item-info">
              <header className="menu-item-header">
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p>{info}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
