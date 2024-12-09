import "./App.css";
import { shops } from "./data/shopsData";
import Shop from "../src/components/Shop";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
const App = () => {
  return (
    <div>
      <Navbar />
      {shops.map((shop) => (
        <Shop key={shop.id} shop={shop} />
      ))}
      <MobileNav />
    </div>
  );
};

export default App;
