import { FunctionComponent, useState, useEffect, useRef } from "react";
import { Button, FormControlLabel, Checkbox, TextField } from "@mui/material";
import styles from "./LoginFrame.module.css";
import axios from "axios";

const LoginFrame: FunctionComponent = () => {

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPass: false,
  });

  const handleSubmit = (e:any) => {
    e.preventDefault();
    axios
      .post("https://localhost:4002//login", {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => console.error(err));
  };


  

  return (
    <div className={styles.loginFrameDiv}>
      <div className={styles.loginDiv}>
        <div className={styles.rightContentDiv}>
          <div className={styles.titleDiv}>
            <b className={styles.helloAgainB}>Hello Again!</b>
            <div className={styles.welcomeBackDiv}>Welcome Back</div>
            <a className={styles.forgotPassword} >
              Forgot Password
            </a>
            <a className={styles.dontHaveAccountYetClick} >
              Don’t have account yet? Click Here!
            </a>
          </div>
          
          <div className={styles.checkboxWithTextDiv}>
            <div className={styles.checkboxDefaultDiv}>
              <div className={styles.textDiv}>Remember me</div>
              <div className={styles.checkboxDefaultDiv1}>
                <FormControlLabel
                  className={styles.rectangleFormControlLabel}
                  label=""
                  control={<Checkbox color="primary" size="medium" />}
                />
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <TextField
              className={styles.emailTextField}
              sx={{ width: 371 }}
              color="primary"
              variant="outlined"
              type="text"
              label="Email Address"
              size="medium"
              margin="none"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
            <TextField
              className={styles.passwordTextField}
              sx={{ width: 371 }}
              color="primary"
              variant="outlined"
              type="text"
              label="Password"
              size="medium"
              margin="none"
              onChange={(e) => setValues({ ...values, password: e.target.value })}
            />
            <Button
              className={styles.button}
              sx={{ width: 371 }}
              variant="contained"
              color="primary"
              type="submit"
            >
              Login
            </Button>
          </form>
          
        </div>
      
      </div>
    </div>

  );
};

export default LoginFrame;


