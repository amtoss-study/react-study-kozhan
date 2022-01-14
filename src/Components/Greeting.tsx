import React from "react";

const Greeting = ({ name }: {  name?: string }) => 
(
  <div>
      <h3>Hello {name || "New Person"}!</h3>
  </div>
);

export default Greeting;