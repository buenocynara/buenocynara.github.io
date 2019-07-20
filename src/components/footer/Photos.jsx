import React from "react";
import s from "./Photos.module.css";

const Photos = ({ data, isFecthing, activeTab }) => {
  const re = new RegExp(
    "(http(s?):)([/_=?|.|\\w||\\s|-])*\\640x640([/_=?|.|\\w||\\s|-])*\\.(?:jpg|gif|png)([/_=?|.|\\w||\\s|-])*\\.(?:com)",
    "g"
  );
  if (data.length > 0 && !isFecthing && activeTab !== "builder") {
    const links = data.match(re);
    const unique = [...new Set(links)];
    return (
      <div className={s.photoContainer}>
        {unique.map((image, index) => (
          <img className={s.images} key={index} src={image} alt="" />
        ))}
      </div>
    );
  }
  return null;
};

export default Photos;
