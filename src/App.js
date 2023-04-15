import "./App.css";
import Top from "./Top.js";
import CodeLink from "./CodeLink";
import Search from "./Search";

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <Top />
          <Search />
          {/* <Middle /> */}
        </header>
      </div>
      <CodeLink />
    </div>
  );
}

export default App;
