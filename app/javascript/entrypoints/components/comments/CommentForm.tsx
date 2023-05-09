import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postComment } from "../../Redux/Services/Comment";
import useSweetAlert from "../../hooks/sweetAlert";
import { Container, TextField, Grid, Button } from "@material-ui/core";
import useStyles from "../../Styles";
import { SendOutlined } from "@material-ui/icons";

type commentProps = {
  user_id: number;
  post_id: number;
  text?: string;
  form_id?: undefined | number;
};

const initialComment = {
  text: "",
  post_id: 0,
  user_id: 0,
  form_id: undefined,
};

const CommentForm = (props: commentProps) => {
  const { user_id, post_id, form_id } = props;
  const dispatch = useDispatch();
  const { ShowAlert } = useSweetAlert(props);
  const classes = useStyles();
  const [comment, setComment] = useState<commentProps>(initialComment);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const commentHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.text !== "" && user_id && post_id !== 0) {
      const commentData = {
        text: comment.text,
        post_id: post_id,
        user_id: user_id,
      };
      dispatch(postComment(commentData)).then((res: any) => {
        console.log("res obj:", res);
        if (res.payload !== undefined) {
          setComment(initialComment);
          ShowAlert({
            title: "Success",
            text: "Comment Added Successfully",
            icon: "success",
            time: 2000,
          });
        }
        if (res.payload === undefined) {
          ShowAlert({ title: "Error", text: res, icon: "error", time: 2000 });
        }
      });
    } else {
      ShowAlert({
        title: "Error",
        text: "You forgot to enter a comment text",
        icon: "error",
        time: 2000,
      });
    }
  };

  return (
    <section>
      <Container>
        <form onSubmit={commentHandler} className={classes.comment_form}>
          <Grid item>
            <TextField
              name="text"
              label="Comment"
              type="text"
              value={comment.text}
              onChange={changeHandler}
              variant="outlined"
            />
          </Grid>

          <Grid item>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              className={classes.commentSendBtn}
            >
              <SendOutlined titleAccess="Add Comment"></SendOutlined>
            </Button>
          </Grid>
        </form>
      </Container>
    </section>
  );
};

export default CommentForm;
