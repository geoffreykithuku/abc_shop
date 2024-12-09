import ShoppingCart from "../assets/icons/ShoppingCart.svg";
import Chat from "../assets/icons/Chat.svg";
import Home from "../assets/icons/Home.svg";
import User from "../assets/icons/User.svg";

const MobileNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white px-3 md:hidden">
      <span className="rounded-t-xl py-3 border-gray-200 shadow-2xl flex justify-around items-center w-full mx-auto">
        <div className="flex flex-col items-center text-gray-600 hover:text-orange-500">
          <img src={Home} alt="Home" className=" mb-1" />
          <span className="text-xs">Home</span>
        </div>

        <div className="flex flex-col items-center text-gray-600 hover:text-orange-500">
          <img src={ShoppingCart} alt="Orders" className=" mb-1" />
          <span className="text-xs">Orders</span>
        </div>

        <div className="flex flex-col items-center text-gray-600 hover:text-orange-500">
          <img src={Chat} alt="Messages" className=" mb-1" />
          <span className="text-xs">Messages</span>
        </div>

        <div className="flex flex-col items-center text-gray-600 hover:text-orange-500">
          <img src={User} alt="Profile" className=" mb-1" />
          <span className="text-xs">Profile</span>
        </div>
      </span>
    </div>
  );
};

export default MobileNav;
