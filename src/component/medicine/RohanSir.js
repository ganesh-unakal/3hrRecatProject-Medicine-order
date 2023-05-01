import { useContext } from "react";
import CartContext from "../store/Cart-context";
import classes from "./rohanSir.module.css";

const RohanSir = (props) => {
  const cartCntx = useContext(CartContext);

  const addCart = () => {
    const obj = {
      key: props.id,
      id: props.id,
      name: props.name,
      quantity: props.quantity,
      price: props.price,
    };
    cartCntx.addItem(obj);
    console.log(obj);
  };

  return (
    <li className={classes.rohan}>
      {props.name} {props.description} {props.price} {props.quantity}
      <button onClick={addCart}>Add To Cart</button>
    </li>
  );
};
export default RohanSir;
