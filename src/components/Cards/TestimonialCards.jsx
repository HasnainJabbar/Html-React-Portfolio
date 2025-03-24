import React from "react";
import { testimonialsData } from "../Constants/AboutConstants";
const TestimonialCards = () => {
  return (
    <>
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonialsData.map((item, index) => {
            return (
              <li key={index} className="testimonials-item">
                <div className="content-card" data-testimonials-item>
                  <figure className="testimonials-avatar-box">
                    <img src={item.image} alt="Daniel lewis" width="60" data-testimonials-avatar />
                  </figure>

                  <h4 className="h4 testimonials-item-title" data-testimonials-title>{item.name}</h4>

                  <div className="testimonials-text" data-testimonials-text>
                    <p>
                      Richard was hired to create a corporate identity. We were
                      very pleased with the work done. She has a lot of
                      experience and is very concerned about the needs of
                      client. Lorem ipsum dolor sit amet, ullamcous cididt
                      consectetur adipiscing elit, seds do et eiusmod tempor
                      incididunt ut laborels dolore magnarels alia.
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default TestimonialCards;
