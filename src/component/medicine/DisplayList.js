import React, { useContext, useState } from "react";
import classes from "./DisplayList.module.css";
import CartContext from "../store/Cart-context";
import RohanSir from "./RohanSir";
import Card from "../UI/Card";

const DisplayList = (props) => {
  return (
    <Card>
      <ul className={classes.display}>
        {props.items.map((item) => (
          <RohanSir
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </ul>
    </Card>
  );
};

export default DisplayList;
