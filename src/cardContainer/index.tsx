import React from "react";
import Card from "./card";

function CardContainer() {
  return (
    <div className="mainContainer">
      <Card heading={"Workout Classes"} btnText={"Browse"} />
      <Card heading={"Browse Equipments"} btnText={"Browse"} />
      <Card heading={"Yoga Classes"} btnText={"Browse"} />
      <Card heading={"Brand Store"} btnText={"Shop now"} />
    </div>
  );
}

export default CardContainer;
