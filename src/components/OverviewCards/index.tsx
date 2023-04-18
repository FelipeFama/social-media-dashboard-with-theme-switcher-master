import React from "react";
import { Card, CardCount, CardIcon, CardTitle, CardTodayGrow } from "./style";

interface OverviewCardProps {
  title: string;
  count: number;
  icon: string;
  todayGrow: number;
}

export default function OverviewCards({
  title,
  count,
  icon,
  todayGrow,
}: OverviewCardProps) {
  function getCount() {
    return count >= 10000 ? `${(count / 1000).toFixed(0)}k` : count;
  }

  function getGain() {
    return todayGrow >= 0 ? "up" : "down";
  }
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardIcon src={icon} alt={`${title} icon`} />
      <CardCount>{getCount()}</CardCount>
      <CardTodayGrow type={getGain()}>
        <img src={`icons/icon-${getGain()}.svg`} alt={`${getGain()} arrow`} />
        <p>{todayGrow >= 0 ? `${todayGrow}%` : `${todayGrow * -1}%`}</p>
      </CardTodayGrow>
    </Card>
  );
}
