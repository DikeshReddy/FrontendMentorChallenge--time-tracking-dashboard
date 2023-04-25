import data from "./data.json";
import Dashboard from "./components/Dashboard/Dashboard.component";
import "./css/style.css";

const App = () => {
  return <Dashboard data={data} />;
};

export default App;
