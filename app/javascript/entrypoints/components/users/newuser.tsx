import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Grid, Typography, Container, Card } from '@material-ui/core';
import useStyles from "../../Styles";
import { postUser } from "../../Redux/Services/User";
import useSweetAlert from "../../hooks/sweetAlert";
import useRedirect from "../../hooks/Redirect";
import { SupervisedUserCircleRounded } from "@material-ui/icons";

type Props = {
  url?: "/"
};

interface useInfo {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  bio: string;
}

let initialUser = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  bio: "",
};

const Register = (props: Props) => {
  const classes = useStyles();
  const [values, setValues] = useState<useInfo>(initialUser);
  const [selectedFile, setSelectedFile] = useState<File | Blob | null>(null);
  const { ShowAlert } = useSweetAlert(props);
  const dispatch = useDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files?.[0]);
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      values.firstname &&
      values.lastname &&
      values.password &&
      values.email &&
      values.bio !== "" && selectedFile !== null
    ) {
      const { password, firstname, lastname, email, bio } = values;
      const userData: any = new FormData();
      userData.append('user[firstname]', firstname)
      userData.append('user[lastname]', lastname)
      userData.append('user[email]', email)
      userData.append('user[password]', password)
      userData.append('user[photo]', selectedFile as File)
      userData.append('user[bio]', bio)

      dispatch(postUser(userData)).then((res: any) => {
        if (res.payload !== undefined) {
          ShowAlert({
            title: "Success",
            text: "User Registration uccessfully",
            icon: "success",
            time: 2000,
          });
          setValues(initialUser);
        }
        if (res.payload === undefined) {
          ShowAlert({
            title: "Error",
            text: res.error.message,
            icon: "error",
            time: 2000,
          });
        }
      });
    } else {
    }
  };

  return (
    <section className={classes.section}>
       <form  onSubmit={handleSubmit}>
       <Card elevation={4}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh", width: '100%' }}
        ><Grid item>
          <Typography variant="h4"> <SupervisedUserCircleRounded />Create Account</Typography></Grid>
          <Grid item>
            <TextField
              required
              id="firstname"
              name="firstname"
              label="Firstname"
              value={values.firstname}
              onChange={changeHandler}
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="lastname"
              name="lastname"
              label="Lastname"
              value={values.lastname}
              onChange={changeHandler}
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              type="email"
              value={values.email}
              onChange={changeHandler}
              variant="outlined"
            />
          </Grid>
          <Grid item >
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={changeHandler}
              variant="outlined"
            />
          </Grid>
          <Grid item >
            <TextField
              required
              id="bio"
              name="bio"
              label="Biography"
              type="text"
              value={values.bio}
              onChange={changeHandler}
              variant="outlined"
            />
          </Grid >
            <Grid item>
            <TextField
              required
              id="photo"
              name="photo"
              placeholder="Photo"
              type="file"
              onChange={changeHandler}
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              className={classes.submitButton}
            >
              Register
            </Button>
          </Grid>
        </Grid>
        </Card>
      </form>
    </section>
  );
};

export default Register;
