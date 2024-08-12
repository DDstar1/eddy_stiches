"use client";

import { ButtonGroup, Button } from "@material-tailwind/react";

export function MyButton({ text, color = "black" }) {
  return (
    <ButtonGroup variant="gradient" color={color}>
      <Button className="bg-blue rounded-full p-4 text-lg">{text}</Button>
    </ButtonGroup>
  );
}
