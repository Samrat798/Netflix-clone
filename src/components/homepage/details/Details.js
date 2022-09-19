import React from "react";
import "./details.css";
import detailData from "../../../data/jumbo.json";
import Line from "../../helper/Line";

function Details() {
  return (
    <section>
      {detailData.map((item) => (
        <>
          <div className="details-item" key={item.id}>
            <div className="details-text-container">
              <h1 className="details-title">{item.title}</h1>
              <h2 className="details-subtitle">{item.subTitle}</h2>
            </div>
            <div className="details-image-container">
              <img className="details-image" src={item.image} alt={item.alt} />
            </div>
          </div>
          <Line />
        </>
      ))}
    </section>
  );
}

export default Details;
