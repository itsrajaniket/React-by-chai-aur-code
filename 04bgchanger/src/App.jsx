/*
import { useState } from "react";

function App() {
  const [color, setColor] = useState();

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-3 bg-amber-50 px-3 py-2 rounded-2xl">
          <button
            onClick={() => setColor("red")}
            className="text - white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("gray")}
            className="text - white"
            style={{ backgroundColor: "gray" }}
          >
            gray
          </button>
          <button
            onClick={() => setColor("green")}
            className="text - white"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="text - white"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
          <button
            onClick={() => setColor("orange")}
            className="text - white"
            style={{ backgroundColor: "orange" }}
          >
            orange
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

*/

// way 2
import { useState } from "react";

function App() {
  const [color, setColor] = useState("bg-white");

  return (
    <>
      {/* Background */}
      <div className={`w-full h-screen duration-200 ${color}`}></div>

      {/* Button Container */}
      <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-amber-50 px-3 py-2 rounded-2xl shadow-lg">
          <button
            onClick={() => setColor("bg-red-500")}
            className="px-4 py-2 rounded-lg text-white font-semibold bg-red-500 hover:opacity-80 transition"
          >
            Red
          </button>

          <button
            onClick={() => setColor("bg-gray-500")}
            className="px-4 py-2 rounded-lg text-white font-semibold bg-gray-500 hover:opacity-80 transition"
          >
            Gray
          </button>

          <button
            onClick={() => setColor("bg-green-500")}
            className="px-4 py-2 rounded-lg text-white font-semibold bg-green-500 hover:opacity-80 transition"
          >
            Green
          </button>

          <button
            onClick={() => setColor("bg-blue-500")}
            className="px-4 py-2 rounded-lg text-white font-semibold bg-blue-500 hover:opacity-80 transition"
          >
            Blue
          </button>

          <button
            onClick={() => setColor("bg-orange-500")}
            className="px-4 py-2 rounded-lg text-white font-semibold bg-orange-500 hover:opacity-80 transition"
          >
            Orange
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

// WAY 3

/*
import { useState } from "react";

function App() {
  // State to hold the current background color
  const [color, setColor] = useState("white");

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: color,
      }}
    >
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("gray")}>Gray</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("orange")}>Orange</button>
    </div>
  );
}

export default App;
*/
