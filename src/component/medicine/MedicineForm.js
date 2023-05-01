import React, { useState } from "react";
import classes from "./MedicineForm.module.css";
import Card from "../UI/Card";

const MedicineForm = (props) => {
  const [mName, setMName] = useState("");
  const [mDescription, setmDescription] = useState("");
  const [priceI, setPriceI] = useState();
  const [qantityQ, setQuantityQ] = useState();

  const mNAmeHandler = (event) => {
    setMName(event.target.value);
  };

  const mDescriptionHAndler = (event) => {
    setmDescription(event.target.value);
  };

  const pHandler = (event) => {
    setPriceI(event.target.value);
  };

  const qHandler = (event) => {
    setQuantityQ(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();

    const order = {
      name: mName,
      description: mDescription,
      price: priceI,
      quantity: qantityQ,
    };
    props.onSaveData(order);
    console.log(order);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={SubmitHandler}>
        <label className={classes.f1}>Medicine Name:</label>
        <input type="text" onChange={mNAmeHandler} />

        <label className={classes.f1}>Description:</label>
        <input type="text" onChange={mDescriptionHAndler} />

        <label className={classes.f1}>price:</label>
        <input type="number" onChange={pHandler} />

        <label className={classes.f1}>quantity:</label>
        <input type="number" onChange={qHandler} />

        <button className={classes.f2}>Add TO List</button>
      </form>
    </Card>
  );
};

export default MedicineForm;
