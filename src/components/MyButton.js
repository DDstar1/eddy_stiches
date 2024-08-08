"use client";

import { ButtonGroup, Button } from "@material-tailwind/react";

export function MyButton({ text }) {
  return (
    <ButtonGroup variant="gradient">
      <Button className="rounded-full p-4 text-lg">{text}</Button>
    </ButtonGroup>
  );
}
