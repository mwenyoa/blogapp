import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useSweetAlert from "../../hooks/sweetAlert";
import useStyles from "../../Styles";
import {
  Card,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import { Navigate } from "react-router-dom";
import { lsActions } from "../../helpers/lsActions";
import { newPost } from "../../Redux/Services/Post";

type Props = {};

interface postInfo {
  title: string;
  description: string;
  readonly author_id: number | null;
}

const postInitials = {
  title: "",
  description: "",
  author_id: lsActions.getUser(),
};

const AddPost = (props: Props) => {
  const { ShowAlert } = useSweetAlert(props);
  const dispatch = useDispatch();
  const [values, setValues] = useState<postInfo>(postInitials);
  const classes = useStyles();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const postHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (values.title && values.description !== "") {
      if (values.author_id === null) {
        ShowAlert({
          title: "Error",
          text: "You need to log to create a post",
          icon: "error",
          time: 2500,
        });
      }
      {
        const { title, description, author_id } = values;
        const post = {
          title: title,
          text: description,
          user_id: author_id,
        };
        dispatch(newPost(post)).then((res: any) => {
          console.log("Post object: ", res);
          if (res.payload!== undefined) {
            ShowAlert({
              title: "Success",
              text: "Posted Created Successfully",
              icon: "success",
              time: 2500,
            });
          }
          if (res.payload === undefined) {
            ShowAlert({
              title: "Error",
              text: res.error.message,
              icon: "error",
              time: 2500,
            });
          }
        });
      }
    } else {
      ShowAlert({
        title: "Error",
        text: "All form fields need values",
        icon: "error",
        time: 2500,
      });
    }
  };

  return (
    <section>
      <form className={classes.root} onSubmit={postHandler}>
        <Container
        >
           <Grid item>
           <Typography variant="h4" className={classes.title}>
            Create New Post
          </Typography>
           </Grid>
          <Grid item className={classes.section}>
            <TextField
              required
              id="title"
              name="title"
              label="Title"
              value={values.title}
              onChange={changeHandler}
              variant="outlined"
            />
          </Grid>
          <Grid item className={classes.section}>
            <TextField
              required
              id="description"
              name="description"
              label="Description"
              value={values.description}
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
              Create Post
            </Button>
          </Grid>
        </Container>
      </form>
    </section>
  );
};

export default AddPost;
