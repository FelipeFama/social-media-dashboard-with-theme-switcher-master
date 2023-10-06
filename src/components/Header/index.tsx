import {
  HeaderContainer,
  HeaderSubtitle,
  HeaderTitle,
  Separator,
  SwitchButton,
  SwitchContainer,
  SwitchLabel,
} from "./style";

interface HeaderProps {
  currentTheme: string;
  toggleTheme: () => void;
}

export default function Header({ currentTheme, toggleTheme }: HeaderProps) {
  const handleThemeChange = () => {
    toggleTheme();
  };

  return (
    <HeaderContainer>
      <HeaderTitle>Social Media Dashboard</HeaderTitle>
      <HeaderSubtitle>Total Followers: 23,004</HeaderSubtitle>
      <Separator></Separator>
      <SwitchContainer>
        <SwitchLabel>Dark mode</SwitchLabel>
        <SwitchButton
          type="button"
          aria-pressed="false"
          aria-label="theme button"
          className={currentTheme}
          onClick={() => {
            handleThemeChange();
          }}></SwitchButton>
      </SwitchContainer>
    </HeaderContainer>
  );
}
