import React from "react";

const Card = (props) => (
  <div key={props.number} className="bg-white p-4 shadow-md rounded-lg">
    <h2 className="text-lg font-semibold">Card {props.number}</h2>
    <p className="text-gray-600">This is a responsive card.</p>
  </div>
);

export default Card;
