import React, { useEffect } from "react";

export const Button = ({ count, onClick }) => {
  useEffect(() => {
    console.count("Button is render");
  }, []);
  return (
    <div>
      <button onClick={onClick}>Click</button> : {count}
    </div>
  );
};
