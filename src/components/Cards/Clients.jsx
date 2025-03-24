import React from "react";
import { clientData} from "../Constants/AboutConstants";
import { Link } from "react-router";
const Clients = () => {
  return (
    <>
      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          {clientData.map((item, index) => {
            return (
              <li key={index} className="clients-item">
                <Link href="#">
                  <img src={item} alt="client logo" />
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Clients;
