import { AlignLeft, ShoppingCart, User, Search } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="text-black flex w-full justify-between items-center h-[90px]  lg:px-10 px-5 mx-auto gap-12">
        <div className="lg:flex items-center gap-5 hidden">
          <p className="bg-secondary p-1 rounded-md inline-block">
            <AlignLeft strokeWidth={1} color="#fa8232" />
          </p>
          <p className="uppercase text-2xl font-bold text-primary">Downtop</p>
        </div>
        {/* search box */}
        <div className="border border-black rounded-md flex justify-between gap-2 lg:w-[646px] relative w-full mx-auto">
          <Search
            strokeWidth={1}
            color="#666666"
            className="absolute top-2 left-2"
          />
          <input
            type="text"
            placeholder="Search essentials, groceries and more..."
            className="rounded-s-md mx-10 w-full focus:outline-none"
          />

          <button className="bg-primary m-[-1px] w-[136px] text-white p-2 rounded-md">
            Search
          </button>
        </div>
        <ul className="lg:flex items-center space-x-5 hidden">
          <li className="flex items-center gap-2">
            <ShoppingCart strokeWidth={1} color="#fa8232" />
            <p>Cart</p>
          </li>
          <li className="flex items-center gap-2">
            <User strokeWidth={1} color="#fa8232" />
            <p>Sign Up/Sign In</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
