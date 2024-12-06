import phone from "../assets/phone.png";
import tv from "../assets/tv.png";
import Star from "../assets/icons/Star.svg";
import Approval from "../assets/icons/Approval.svg";
import Location from "../assets/icons/Location.svg";
import Ringer from "../assets/icons/Ringer.svg";
import ShopIcon from "../assets/icons/Shop.svg";
import Users from "../assets/icons/Users.svg";

import { ChevronRight , StarIcon} from "lucide-react";

const Shop = () => {
  return (
    <div className="px-5 lg:px-10 mt-10">
      <div className="lg:bg-secondary rounded-[20px] p-3">
        <h1 className="text-primary-100 text-lg mb-3 font-bold block lg:hidden">
          Alana Electronics
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  ">
          <div className="lg:col-span-2 bg-primary-100 rounded-[20px] p-8 text-white flex gap-6">
            <span className="w-full">
              <h1 className="text-[8px] lg:text-xl">
                Best Deal Online on smart phones
              </h1>
              <p className="text-[15px] lg:text-[40px] font-bold">
                AT CHEAP PRICE.
              </p>
              <p className="text-[15px] lg:text-xl font-semibold">
                UP to 60% OFF
              </p>
            </span>
            <span className="flex items-center justify-start w-full">
              <img src={phone} alt="phone" className="w-[168px] h-[110px]" />
            </span>
          </div>
          <div className="">
            <h1 className="text-primary-100 text-[32px] font-bold hidden lg:block">
              Alana Electronics
            </h1>
            <ul className="grid grid-cols-2 lg:grid-cols-1 text-[10px] lg:text-xl w-full">
              <li className="flex items-center gap-2">
                <img src={Approval} alt="" className="w-[15px] lg:w-[30px]" />
                <p>Verified</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={Ringer} alt="" className="w-[15px] lg:w-[30px]" />
                <p>O759753332</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={Users} alt="" className="w-[15px] lg:w-[30px]" />
                <p>600 Followers</p>
                <button className="bg-primary-100 text-white w-[64px] lg:w-[134px] lg:h-[36px] h-[17px] rounded-md ml-2">
                  Follow
                </button>
              </li>
              <li className="flex items-center gap-2">
                <img src={Location} alt="" className="w-[15px] lg:w-[30px]" />
                <p>Karen, Nairobi</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={ShopIcon} alt="" className="w-[15px] lg:w-[30px]" />
                Sawa mall, G14
              </li>
              <li className="flex items-center gap-2">
                <img src={Star} alt="" className="w-[15px] lg:w-[30px]" />
                <p>4.5</p>
              </li>
            </ul>
          </div>
        </div>
        {/* products */}
        <div className="py-5">
          <header className="pb-5 relative border-b flex justify-between items-center text-[8px] lg:text-2xl">
            <h2 className="font-bold ">
              <span className="relative inline-block">
                Alana Electronics
                <span className="absolute bottom-[-22px] left-0 w-full border-b-4 border-primary-100"></span>
              </span>
              <span className="text-black font-normal">
                {" "}
                (100 Products{" "}
                <span className="text-primary-100">Available</span>)
              </span>
            </h2>
            <span className="flex items-center gap-2">
              <button className="font-medium flex-shrink-0">View All</button>
              <ChevronRight color="#FF8307" />
            </span>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5">
            <div className="bg-white rounded-[20px]  p-4 max-w-[234px] relative h-[320px] flex flex-col justify-between border border-[#E4E7E9] overflow-hidden">
              {/* Discount Badge */}
              <span className="bg-primary-100 text-white absolute px-[10px] py-[5px] text-xs font-semibold rounded-sm">
                20% OFF
              </span>

              {/* Centered Image */}
              <img src={tv} alt="phone" className="mx-auto object-cover mt-3" />

              {/* Rating */}
              <span className="flex items-center text-[#77878F]">
                <img src={Star} alt="" className="w-[16px]" />{" "}
                <img src={Star} alt="" className="w-[16px]" />{" "}
                <img src={Star} alt="" className="w-[16px]" />{" "}
                <img src={Star} alt="" className="w-[16px]" />{" "}
                <StarIcon size={16} color="#FF8307" />

                <span className=" text-xs">(911)</span>
              </span>

              {/* Clamped Description */}
              <p className="text-sm font-bold line-clamp-2 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloribus, repellat?
              </p>

              {/* Pricing */}
              <div className=" flex items-center text-[10px] lg:text-xs gap-1">
                <p className=" text-primary-100 line-through">KSH 15000</p>
                <p className=" text-blue font-semibold">KSH 12000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
