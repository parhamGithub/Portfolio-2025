import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../slices/cartSlice";


interface Product {
  id: string;
  title: string;
  description: string;
  sticker: string;
  price: number;
}

interface ProductFormProps {
  product: Product;
}

const ProductForm = ({ product }: ProductFormProps) => {
  const [qty, setQty] = useState<number>(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const atcBtnStyle: string = `pt-3 pb-2 bg-palette-primary text-white w-full mt-2
                    rounded-sm font-primary font-semibold text-xl flex
                      justify-center items-baseline  hover:bg-palette-dark`;

  const handleAddToCart = (item: Product & { cartQty: number }) => {
    dispatch(addToCart(item));
    navigate("/store/cart");
  };

  return (
    <div className="w-full">
      <div className="flex justify-start space-x-2 w-full">
        <p className="text-green-600">در انبار موجود است</p>
      </div>
      <button
        className={atcBtnStyle}
        aria-label="cart-button"
        onClick={() => handleAddToCart({ ...product, cartQty: qty })}
      >
        اضافه به سبد خرید
        <i className="fa fa-cart-arrow-down w-5 mr-2" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default ProductForm;