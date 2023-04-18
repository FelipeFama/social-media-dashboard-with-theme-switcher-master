import React from "react";
import { Card, CardTitle } from "./style";

interface OverviewCardProps {
  title: string;
  count: number;
  icon: string;
  todayGrow: number;
}

export default function OverviewCard({
  title,
  count,
  icon,
  todayGrow,
}: OverviewCardProps) {
  return (
    <Card>
      <CardTitle></CardTitle>
    </Card>
  );
}
