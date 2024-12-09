import PropTypes from "prop-types";
const Banner = ({
  tagline,
  description,
  discount,
  bannerImage,
  bannerColor,
}) => {
  return (
    console.log(tagline, description, discount, bannerImage, bannerColor),
    (
      <div
        className={`lg:col-span-2  rounded-[20px]  text-white flex gap-6 bg-${bannerColor}`}
      >
        <span className="w-full pt-8 pl-4 lg:pl-8">
          <h1 className="text-[8px] lg:text-xl">{tagline}</h1>
          <p className="text-[15px] lg:text-[40px] font-bold">{description}</p>
          <p className="text-[15px] lg:text-xl font-semibold">{discount}</p>
        </span>
        <span className=" w-full pb-0">
          <img src={bannerImage} alt="Banner" className="w-full pb-0" />
        </span>
      </div>
    )
  );
};

export default Banner;

Banner.propTypes = {
  tagline: PropTypes.string,
  description: PropTypes.string,
  discount: PropTypes.string,
  bannerImage: PropTypes.string,
  bannerColor: PropTypes.string,
};
