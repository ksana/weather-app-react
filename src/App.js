import "./App.css";
//import Weather from "./Weather";
//import { Audio, Blocks } from "react-loader-spinner";
//import Bottom from "./Bottom.js";
import Top from "./Top.js";
//import Middle from "./Middle";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Top />
        <Search />
        {/* <Middle /> */}
      </header>
    </div>
  );
}

export default App;
