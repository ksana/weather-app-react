import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";
import { Audio, Blocks } from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>

        <Weather city="Kyiv" />
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />
      </header>
    </div>
  );
}

export default App;
