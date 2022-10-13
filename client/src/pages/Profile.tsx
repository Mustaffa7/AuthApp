import { FunctionComponent, useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import styles from "./Profile.module.css";
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom";

const Profile: FunctionComponent = () => {

  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    dob: "",
  });

  const { name, email, password, contact, dob } = user;

  const onInputChange = (e:any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e:any) => {
    e.preventDefault();
    await axios.put(`http://localhost:4002/user/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };


  return (
    <div className={styles.profileDiv}>
      <div className={styles.header1Div}>
        <div className={styles.rectangleDiv} />
        <div className={styles.rectangleDiv1} />
        <div className={styles.rectangleDiv2} />
        <div className={styles.rectangleDiv3} />
        <h1 className={styles.profileH1}>Profile</h1>
        <div className={styles.headerDiv}>
          <div className={styles.rectangleDiv4} />
          <div className={styles.settingsDiv}>Settings</div>
        </div>
        <div className={styles.linesDiv}>
          <div className={styles.rectangleDiv5} />
          <div className={styles.rectangleDiv6} />
          <div className={styles.rectangleDiv7} />
        </div>
      </div>
      <div className={styles.fullNameAndBio}>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-1@2x.png" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-2@2x.png" />
        <h2 className={styles.khusanAkhmedovH2}>{user.name}</h2>
        <h4 className={styles.khusanAkhmedovH4}>{user.name}</h4>
      </div>
      <form className={styles.basicInfoGroup}>
        <label className={styles.bASICINFOLabel}>BASIC INFO</label>
        <label className={styles.aCCOUNTSETTINGLabel}>ACCOUNT SETTING</label>
        <div className={styles.rectangleDiv8} />
        <div className={styles.rectangleDiv9} />
        <form onSubmit={onSubmit}>
        <TextField
          className={styles.passwordTextField}
          sx={{ width: 740 }}
          color="primary"
          variant="outlined"
          type="text"
          label="Confirm Password"
          size="medium"
          margin="none"
          onChange={(e) => onInputChange(e)}
        />
        <TextField
          className={styles.passwordTextField1}
          sx={{ width: 755 }}
          color="primary"
          variant="outlined"
          type="text"
          label="Password"
          size="medium"
          margin="none"
          required
          value={password}
          onChange={(e) => onInputChange(e)}
        />
        <TextField
          className={styles.emailTextField}
          sx={{ width: 755 }}
          color="primary"
          variant="outlined"
          type="text"
          label="Email Address"
          size="medium"
          margin="none"
          value={email}
          onChange={(e) => onInputChange(e)}
        />
        <TextField
          className={styles.dOBTextField}
          sx={{ width: 307 }}
          color="primary"
          variant="outlined"
          type="text"
          label="Date of Birth"
          size="medium"
          margin="none"
          value={dob}
          onChange={(e) => onInputChange(e)}
        />
        <TextField
          className={styles.contactTextField}
          sx={{ width: 307 }}
          color="primary"
          variant="outlined"
          type="text"
          label="Contact"
          size="medium"
          margin="none"
          value={contact}
          onChange={(e) => onInputChange(e)}
        />
        <TextField
          className={styles.nameTextField}
          sx={{ width: 688 }}
          color="primary"
          variant="outlined"
          type="text"
          label="Full Name"
          size="medium"
          margin="none"
          value={name}
          onChange={(e) => onInputChange(e)}
        />
        <Button
          className={styles.button}
          sx={{ width: 307 }}
          variant="contained"
          color="primary"
        >
          UPDATE ACCOUNT
        </Button>
      </form>
      <Button
        className={styles.button1}
        sx={{ width: 307 }}
        variant="contained"
        color="primary"
        type="submit"
      >
        UPDATE PHOTO
      </Button>
      <Button
        className={styles.button2}
        sx={{ width: 307 }}
        variant="contained"
        color="primary"
        type="submit"
      >
        DELETE PROFILE
      </Button>
      </form>
    </div>
  );
};

export default Profile;
