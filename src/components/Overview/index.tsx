import { OverviewData } from "../../data/overview";
import OverviewCards from "../OverviewCards";
import { OverviewContainer, OverviewTitle } from "./style";

export default function Overview() {
  function getOverviewCards() {
    return OverviewData.map((item) =>
      item.overview.map((overviewItem) => (
        <OverviewCards
          key={overviewItem.id}
          title={overviewItem.type}
          count={overviewItem.count}
          icon={item.icon}
          todayGrow={overviewItem.today}
        />
      ))
    );
  }
  return (
    <OverviewContainer>
      <OverviewTitle>Overview - Today</OverviewTitle>
      {getOverviewCards()}
    </OverviewContainer>
  );
}
