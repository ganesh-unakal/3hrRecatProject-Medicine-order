import { Fragment, useState } from "react";
import Header from "./component/Header/Header";
import MedicineForm from "./component/medicine/MedicineForm";
import Cart from "./component/Cart/Cart";

import DisplayList from "./component/medicine/DisplayList";
import CartProvider from "./component/store/CartProvider";

export default function App() {
  const [showCart, setShowCart] = useState(false);
  const [list, setList] = useState([]);

  const cartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  const saveData = (order) => {
    setList([...list, order]);
  };
  // {console.log(saveData)}

  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={cartHandler} />
      <main>
        <MedicineForm onSaveData={saveData} />
      </main>
      <DisplayList items={list} />
    </CartProvider>
  );
}
