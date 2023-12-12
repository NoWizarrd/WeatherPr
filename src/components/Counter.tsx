import React from "react";
import { useSelector } from "react-redux";

export default function Counter() {
  const count = useSelector((state: any) => state.counter.value);

  return <div> FROM OTHER COMPONENT{count}</div>;
}
