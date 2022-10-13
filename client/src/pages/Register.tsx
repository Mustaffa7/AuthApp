import { FunctionComponent, useCallback, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import axios from "axios";

const Register: FunctionComponent = () => {

  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [contact, setContact] = useState(0);
  const [dob, setDOB] = useState(" ");
  const [listOfUsers, setListOfUsers] = useState([]);

  const ENDPOINT = "http://"
  const handleSubmit = (e:any) =>{
    e.preventDefault();
    const data ={
      email: email,
      password: password,
    }
    try{
      axios
      .post(ENDPOINT, data)
      .then(function(response){
        console.log("check response ==> ", response);

      })
      .catch(function(error){
        console.log("check error ==> ", error);
      })
      .then(function(){
        console.log("check executed ==> ");
      });
    } catch(err){
      alert(err);
    }
      
    };
  
  
  return (
    <div className={styles.registerDiv}>
      <div className={styles.leftContentDiv}>
        <div className={styles.bgDiv} />
        <img className={styles.groupIcon} alt="" src="../group-2.svg" />
        <div className={styles.contentDiv}>
          <div className={styles.frameDiv}>
            <div className={styles.groupDiv}>
              <b className={styles.wELCOMEB}>WELCOME</b>
              <div className={styles.yourFavouriteSite}>
                Your favourite site
              </div>
            </div>
            <button className={styles.frameButton}>
              <div className={styles.readMoreDiv}>Read More</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.rightContentDiv}>
        <div className={styles.titleDiv}>
          <h1 className={styles.helloH1}>Hello!</h1>
          <h2 className={styles.signUpToGetStarted}>Sign Up to Get Started</h2>
        </div>
        <div className={styles.frameDiv1}>
        <form onSubmit={handleSubmit}>
          <TextField
            className={styles.nameTextField}
            sx={{ width: 307 }}
            variant="outlined"
            label="Full Name"
          />
          <TextField
            className={styles.dOBTextField}
            sx={{ width: 307 }}
            variant="outlined"
            label="Date of Birth"
          />
          <TextField
            className={styles.passwordTextField}
            sx={{ width: 307 }}
            variant="outlined"
            label="Password"
          />
          <Button
            className={styles.button}
            sx={{ width: 307 }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Register
          </Button>
          <TextField
            className={styles.contactTextField}
            sx={{ width: 307 }}
            variant="outlined"
            label="Contact"
          />
          <TextField
            className={styles.emailTextField}
            sx={{ width: 307 }}
            variant="outlined"
            label="Email Address"
          />
          <TextField
            className={styles.passwordTextField1}
            sx={{ width: 307 }}
            color="primary"
            variant="outlined"
            type="text"
            label="Confirm Password"
            size="medium"
            margin="none"
          />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
