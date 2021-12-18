import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./context";
function Home() {
  const { openSideBar, openModal } = useGlobalContext();

  return (
    <main>
      <button className="open-sidebar-btn" onClick={openSideBar}>
        <FaBars />
      </button>
      <button className="open-modal-btn btn" onClick={openModal}>
        Click Me!
      </button>
    </main>
  );
}

export default Home;
