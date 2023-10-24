import React from "react";
import "./header.scss";
import ButtonFilter from "../buttonFilter/ButtonFilter";
import Input from "../intput/Input";

export default function Header() {
  return (
    <>
      <div className="header">
        <div >Weather project</div>
        <div className="header_actions">
          <ButtonFilter>На главную</ButtonFilter>
          <ButtonFilter>Список</ButtonFilter>
          <ButtonFilter>Карта</ButtonFilter>
        </div>
      </div>
    </>
  );
}