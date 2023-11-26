import React from "react";
import "./header.scss";
import ButtonFilter from "../buttonFilter/ButtonFilter";
import Input from "../intput/Input";
import { NavLink } from "react-router-dom";

// const isActive = (active:string) => {
//   return active ? active = 'button' : active = "button-active"
// }

export default function Header() { // onClick={isActive} v button ts error
  return (
    <>
      <div className="header">
        
        <div>Weather project</div>

        <div className="header_actions">
          <NavLink to="/">
            <ButtonFilter >На главную</ButtonFilter> 
          </NavLink>

          <NavLink to="/list">
          <ButtonFilter>Список</ButtonFilter>
          </NavLink>

          <NavLink to="/map">
          <ButtonFilter>Карта</ButtonFilter>
          </NavLink>
        </div>
      </div>
    </>
  );
}