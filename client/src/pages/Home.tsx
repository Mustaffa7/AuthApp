import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  return (
    <div className={styles.homeDiv}>
      <h1 className={styles.wELCOMEH1}>WELCOME</h1>
      <Button
        className={styles.rectangleButton}
        sx={{ width: 404 }}
        variant="contained"
        color="primary"
        href="/loginframe"
      >
        LOGIN
      </Button>
    </div>
  );
};

export default Home;
