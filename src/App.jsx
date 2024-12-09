import "./App.css";
import { shops } from "./data/shopsData";
import Shop from "../src/components/Shop";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      {shops.map((shop) => (
        <Shop key={shop.id} shop={shop} />
      ))}
    </div>
  );
};

export default App;
