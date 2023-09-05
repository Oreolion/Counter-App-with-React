import { useState } from "react";
import { GrRefresh } from "react-icons/gr";
import { BiHash } from "react-icons/bi";
import {
  FiChevronUp,
  FiChevronsUp,
  FiChevronDown,
  FiChevronsDown,
} from "react-icons/fi";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="counterbox">
        <div className="inner__counterbox">
          <p>current value:</p>
          <p className="count">{count}</p>
          <ul className="buttons">
            <li onClick={() => setCount(() => count + 1)}>
              <FiChevronUp />
            </li>
            <li onClick={() => setCount(() => count + 10)}>
              <FiChevronsUp />
            </li>
            <li onClick={() => setCount(() => 0)}>
              <GrRefresh />
            </li>
            <li onClick={() => setCount(() => Math.floor(Math.random() * 100))}>
              <BiHash />
            </li>
            <li onClick={() => setCount(() => count - 1)}>
              <FiChevronDown />
            </li>
            <li onClick={() => setCount(() => count - 10)}>
              <FiChevronsDown />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
