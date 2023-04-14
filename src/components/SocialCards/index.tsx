import React from "react";
import { Card } from "./index.styles";

interface SocialCardProps {
  type: "followers" | "subscribers";
  count: number;
  today: number;
  user: string;
  iconUrl: string;
  color: string;
}

export default function SocialCards({
  type,
  count,
  color,
  iconUrl,
  today,
  user,
}: SocialCardProps) {
  return (
    <>
      <Card></Card>
    </>
  );
}
