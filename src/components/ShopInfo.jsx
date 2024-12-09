import Star from "../assets/icons/Star.svg";
import Approval from "../assets/icons/Approval.svg";
import Location from "../assets/icons/Location.svg";
import Ringer from "../assets/icons/Ringer.svg";
import ShopIcon from "../assets/icons/Shop.svg";
import Users from "../assets/icons/Users.svg";

// props validation
import PropTypes from "prop-types";

const ShopInfo = ({ contact, name }) => {
  const { isVerified, phone, followers, location, shopAddress, rating } =
    contact;

  return (
    <div>
      <h1 className="text-primary-100 text-[32px] font-bold hidden lg:block">
        {name}
      </h1>
      <ul className="grid grid-cols-2 lg:grid-cols-1 text-[10px] lg:text-xl w-full">
        <li className="flex items-center gap-2">
          <img src={Approval} alt="Verified" className="w-[15px] lg:w-[30px]" />
          <p>{isVerified ? "Verified" : "Not Verified"}</p>
        </li>
        <li className="flex items-center gap-2">
          <img src={Ringer} alt="Phone" className="w-[15px] lg:w-[30px]" />
          <p>{phone}</p>
        </li>
        <li className="flex items-center gap-2">
          <img src={Users} alt="Followers" className="w-[15px] lg:w-[30px]" />
          <p>{followers} Followers</p>{" "}
          <button className="bg-primary-100 text-white w-[64px] lg:w-[134px] lg:h-[36px] h-[17px] rounded-md ml-2">
            Follow
          </button>
        </li>
        <li className="flex items-center gap-2">
          <img src={Location} alt="Location" className="w-[15px] lg:w-[30px]" />
          <p>{location}</p>
        </li>
        <li className="flex items-center gap-2">
          <img
            src={ShopIcon}
            alt="Shop Address"
            className="w-[15px] lg:w-[30px]"
          />
          {shopAddress}
        </li>
        <li className="flex items-center gap-2">
          <img src={Star} alt="Rating" className="w-[15px] lg:w-[30px]" />
          <p>{rating}</p>
        </li>
      </ul>
    </div>
  );
};

export default ShopInfo;

ShopInfo.propTypes = {
  contact: PropTypes.shape({
    isVerified: PropTypes.bool,
    phone: PropTypes.string,
    followers: PropTypes.number,
    location: PropTypes.string,
    shopAddress: PropTypes.string,
    rating: PropTypes.number,
  }),
  name: PropTypes.string,
};
