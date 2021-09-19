import Nav from "./components/nav";
import SideMenu from "./components/sideMenu";
import Page from "./components/page";
import "./styles/css/general.css";
import "./styles/css/index.css";
import "./styles/icons/custom_icons.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Nav />
        <SideMenu />
        <Page />
      </div>
    </div>
  );
}

export default App;
