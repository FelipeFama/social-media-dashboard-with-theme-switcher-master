import React from "react";
import { HeaderContainer, HeaderSubtitle, HeaderTitle } from "./index.styles";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>Social Media Dashboard</HeaderTitle>
      <HeaderSubtitle>Total Followers: 23,004</HeaderSubtitle>
      <div></div>
      <nav>
        <label>Dark mode</label>
        <button></button>
      </nav>
    </HeaderContainer>
  );
}
