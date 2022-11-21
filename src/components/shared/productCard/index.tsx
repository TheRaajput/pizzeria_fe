interface Props {
  productImage?: string;
  productName?: string;
}

const ProductCard = ({ productImage, productName }: Props) => {
  return (
    <div className="text-center bg-black shadow-sm rounded-2xl shadow-white">
      <img src={productImage} className="w-48 h-48 rounded-t-2xl" />
      <p className="text-sm font-bold">{productName}</p>
      <button></button>
    </div>
  );
};

export default ProductCard;
