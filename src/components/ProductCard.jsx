import { StarIcon } from "lucide-react";
import Star from "../assets/icons/Star.svg";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  const {
    name,
    description,
    image,
    discount,
    price,
    originalPrice,
    rating,
    reviews,
  } = product;

  return (
    <div className="bg-white rounded-[20px] p-4 max-w-[234px] w-full relative h-[320px] flex flex-col justify-between border border-[#E4E7E9] overflow-hidden">
      {discount && (
        <span className="bg-primary-100 text-white absolute px-[10px] py-[5px] text-xs font-semibold rounded-sm">
          {discount}
        </span>
      )}
      <img src={image} alt={name} className="mx-auto object-cover mt-3 w-full" />
      <span className="flex items-center text-[#77878F]">
        {[...Array(Math.floor(rating))].map((_, i) => (
          <img src={Star} alt="Star" className="w-[16px]" key={i} />
        ))}
        <StarIcon size={16} color="#FF8307" />
        <span className="text-xs">({reviews})</span>
      </span>
      <p className="text-sm font-bold line-clamp-2">{description}</p>
      <div className="flex items-center text-[10px] lg:text-xs gap-1">
        {originalPrice && (
          <p className="text-primary-100 line-through">KSH {originalPrice}</p>
        )}
        <p className="text-blue font-semibold">KSH {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object,
};
