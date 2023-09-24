import React from "react";

type Props = {
  id: number;
  name: string;
  aliases: string[];
};

export default function App({}: Props) {
  const a: number = 2;
  return <div>App</div>;
}
