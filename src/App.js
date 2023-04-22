import "./css/App.css";
import "bootstrap/dist/css/bootstrap.css";
import CodeLink from "./CodeLink";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <CodeLink />
    </div>
  );
}
