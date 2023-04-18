import SocialCards from "../SocialCards";
import { Data } from "../../data";
import { SocialContainer } from "./style";

export default function Social() {
  function getSocialCards() {
    return Data.map((item) => (
      <SocialCards
        key={item.id}
        type={item.type as "followers" | "subscribers"}
        count={item.count}
        today={item.today}
        user={item.user}
        iconUrl={item.icon}
        color={item.color}
      />
    ));
  }
  return <SocialContainer>{getSocialCards()}</SocialContainer>;
}
