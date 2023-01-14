import type { NextPage } from "next";
import { useLocalStorage } from "usehooks-ts";
import { Button } from "../components/Button";
import { darkTheme } from "../components/themes/darkTheme";
import { defaultTheme } from "../components/themes/defaultTheme";
const Home: NextPage = () => {
  const [, setTheme] = useLocalStorage("theme", defaultTheme);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setTheme(defaultTheme)}
        style={{ marginRight: 8 }}
      >
        Use Default Theme
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setTheme(darkTheme)}
      >
        Use Dark Theme
      </Button>
    </div>
  );
};
export default Home;
