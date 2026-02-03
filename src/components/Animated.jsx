import React from "react";
import { useScrollAnimation } from "./UseScrollAnimation.jsx";
import "./Animated.css";

const Animated = ({ children, className = "", delay = 0 }) => {
  const { ref, visible } = useScrollAnimation(delay);

  return (
    <div
      ref={ref}
      className={`animated ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default Animated;