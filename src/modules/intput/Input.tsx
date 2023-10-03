import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  myCustomFiled: string;
}

export default function Input({ myCustomFiled }: Props) {
  return <input defaultValue={myCustomFiled} />;
}
