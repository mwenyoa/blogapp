import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useSweetAlert from "../../hooks/sweetAlert";
import useStyles from "../../Styles";
import { Card, Container, Grid, TextField, Typography, Button} from "@material-ui/core";
import { SupervisedUserCircleRounded } from "@material-ui/icons";
import { LoginUser } from "../../Redux/Services/User";
import { navigate } from "../../helpers/helpers";

type Props = {};

interface LogInInfo {
  email: string;
  password: string;
}

const LogInInitials = {
  email: "",
  password: "",
};

const UserLogin = (props: Props) => {
  const { ShowAlert } = useSweetAlert(props);
  const [values, setValues] = useState<LogInInfo>(LogInInitials);
  const classes = useStyles();
  const dispatch = useDispatch();
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const logInHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (values.email && values.password !== "") {
      const { email, password } = values;
      const loginCredentials = {
        email: email,
        password: password,
      };
      dispatch(LoginUser(loginCredentials)).then((res: any) => {
        if (res.payload !== undefined) {
          ShowAlert({
            title: "Success",
            text: "Logged In Successfully",
            icon: "success",
            time: 2500,
          });
          setValues(LogInInitials);
         navigate('/')
        }
        if(res.payload === undefined){
          ShowAlert({
            title: "Error",
            text: res.error.message,
            icon: "error",
            time: 2500,
          });
        }
      })
    } else {
      ShowAlert({
        title: "Error",
        text: "All form values are required",
        icon: "error",
        time: 2500,
      });
    }
  };

  return (
    <section>
      <form className={classes.root} onSubmit={logInHandler}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100%", margin: "5% auto" }}
        >
          <Typography variant="h6" className={classes.title}>
            <SupervisedUserCircleRounded /> Log In Into your account
          </Typography>
          <Grid item className={classes.section}>
            <TextField
              id="email"
              name="email"
              label="EMAIL"
              type="email"
              value={values.email}
              onChange={changeHandler}
              variant="outlined"
            />
          </Grid>
          <Grid item className={classes.section}>
            <TextField
              id="password"
              name="password"
              label="Password"
              value={values.password}
              type="password"
              onChange={changeHandler}
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submitButton}
            >
              Log In
            </Button>
          </Grid>
        </Grid>
      </form>
    </section>
  );
};

export default UserLogin;
