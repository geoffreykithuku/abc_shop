import phone from "../assets/phone.png";
import {
  BadgeCheck,
  PhoneOutgoing,
  Users,
  MapPin,
  Warehouse,
  Star,
  ChevronRight,
} from "lucide-react";

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
                <BadgeCheck color="#FF8307" />
                <p>Verified</p>
              </li>
              <li className="flex items-center gap-2">
                <PhoneOutgoing color="#FF8307" />
                <p>O759753332</p>
              </li>
              <li className="flex items-center gap-2">
                <Users color="#FF8307" />
                <p>600 Followers</p>
                <button className="bg-primary-100 text-white w-[64px] lg:w-[134px] lg:h-[36px] h-[17px] rounded-md ml-2">
                  Follow
                </button>
              </li>
              <li className="flex items-center gap-2">
                <MapPin color="#FF8307" />
                <p>Karen, Nairobi</p>
              </li>
              <li className="flex items-center gap-2">
                <Warehouse color="#FF8307" />
                Sawa mall, G14
              </li>
              <li className="flex items-center gap-2">
                <Star color="#FF8307" />
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
        </div>
      </div>
    </div>
  );
};

export default Shop;
