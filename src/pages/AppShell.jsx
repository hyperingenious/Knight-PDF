import Pdf from "../components/Pdf";
import { AppShell, Header, useMantineTheme } from "@mantine/core";
import Navbar from "../components/Navbar";
import logo from "../assets/knight.png";

export default function AppShellDemo() {
  const theme = useMantineTheme();
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<Navbar />}
      header={
        <Header height={{ base: 35, md: 40 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <img src={logo} alt="Knight PDF" style={{ width: "2rem" }} />
          </div>
        </Header>
      }
    >
      <Pdf/>

    </AppShell>
  );
}
