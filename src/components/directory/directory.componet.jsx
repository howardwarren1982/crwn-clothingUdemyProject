import React from "react";
import MenuItem from "../menu-item/menu-item.componet";
import "./directory.style.scss";
import { useSelector } from "react-redux";

const Directory = () => {
  const sections = useSelector((state) => state.product.sections);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
