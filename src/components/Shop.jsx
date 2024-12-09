import Banner from "./Banner";
import ProductsList from "./ProductsList";
import ShopInfo from "./ShopInfo";

import PropTypes from "prop-types";

const Shop = ({ shop }) => {
  const {
    name,
    tagline,
    description,
    discount,
    bannerImage,
    bannerColor,
    products,
    contact,
  } = shop;

  return (
    <div className="px-2 lg:px-[89px] mt-10">
      <div className="lg:bg-secondary rounded-[20px] p-3">
        <h1
          className={`text-lg mb-3 font-bold block lg:hidden text-${bannerColor}`}
        >
          {name}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Banner
            tagline={tagline}
            description={description}
            discount={discount}
            bannerImage={bannerImage}
            bannerColor={bannerColor}
          />
          <ShopInfo contact={contact} name={name} />
        </div>
        <ProductsList products={products} name={name} />
      </div>
    </div>
  );
};

export default Shop;

Shop.propTypes = {
  shop: PropTypes.shape({
    name: PropTypes.string,
    tagline: PropTypes.string,
    description: PropTypes.string,
    discount: PropTypes.string,
    bannerImage: PropTypes.string,
    bannerColor: PropTypes.string,
    products: PropTypes.array,
    contact: PropTypes.object,
  }),
};
