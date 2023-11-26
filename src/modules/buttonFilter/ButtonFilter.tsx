import React, { ButtonHTMLAttributes } from "react";
import "./button.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  
}

export default function ButtonFilter({ children }: Props) {
  return <button className="button">{children}</button>;
}
