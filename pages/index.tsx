import type { NextPage } from "next";
import { useLocalStorage } from "usehooks-ts";
import { Button } from "../components/Button";
import { darkTheme } from "../components/themes/darkTheme";
import { defaultTheme } from "../components/themes/defaultTheme";

const Home: NextPage = () => {
  const [theme, setTheme] = useLocalStorage("theme", defaultTheme);
  return (
    <div>
      Home Page
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          if (theme.name == "default") {
            setTheme(darkTheme);
          } else {
            setTheme(defaultTheme);
          }
        }}
      >
        Toggle Theme
      </Button>
      <div
        style={{ display: "flex", flexDirection: "column", gap: 8, width: 100 }}
      >
        <Button color="primary" variant="contained">
          Primary Contained
        </Button>
        <Button color="primary" variant="outlined">
          Primary Outlined
        </Button>
        <Button color="secondary" variant="contained">
          Secondary Contained
        </Button>
        <Button color="secondary" variant="outlined">
          Secondary Outlined
        </Button>
      </div>
    </div>
  );
};

export default Home;
