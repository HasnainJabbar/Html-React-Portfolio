import React from "react";
import { servicesData} from "../Constants/AboutConstants";
const ServiceCard = () => {
  return (
    <>
      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          {servicesData.map((item, index) => {
            return (
              <li key={index} className="service-item">
                <div className="service-icon-box">
                  <img src={item.image} alt="design icon" width="40" />
                </div>

                <div className="service-content-box">
                  <h4 className="h4 service-item-title">{item.name}</h4>

                  <p className="service-item-text">{item.description}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  );
};

export default ServiceCard;
