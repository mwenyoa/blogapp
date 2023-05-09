import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Button,

} from "@material-ui/core";
import { useParams, Params, Link } from "react-router-dom";
import useStyles from "../../Styles";
import useFetchpost from "../../hooks/useFetchpost";
import { MessageRounded } from '@material-ui/icons';
import CommentForm from "../comments/CommentForm";

type Props = {};

const UserPostDetails = (props: Props) => {
  const classes = useStyles();
  const params = useParams();
  const { id, pid }: Readonly<Params<string>> | undefined = params;
  const data = { user_id: id, post_id: pid };
  const post  = id && pid ? useFetchpost(data) : undefined;
  console.log("user post: ", post);

  const [commentFormId, setCommentFormId] = useState<number | null>(null);

  const handleCommentButtonClick = (postId: number) => {
    setCommentFormId((commentFormId) => (commentFormId === postId ? null : postId));    
  };

  return (
    <section>
      <Container className={classes.container}>
        <Grid>
          <Button component={Link} to={`/users/${id}/posts`} color="primary" variant="contained"> All Posts</Button>
        </Grid>
        <Grid item>
          <Typography variant="h5" className={classes.posts_title}>
            <span>
              {post?.title}{" "} 
              <span style={{ fontSize: "14px" }}>
                <br />
                By {post?.user?.firstname} {post?.user?.lastname}
              </span>
            </span>
            <span className={classes.reaction_stats}>
              <span>
                {post?.comments_counter === 1
                  ? `${post?.comments_counter} Comment`
                  : `${post?.comments_counter} Comments`}
              </span>
              <span>
                {post?.likes_counter === 1
                  ? `${post?.likes_counter} Like`
                  : `${post?.likes_counter} Likes`}
              </span>
            </span>
          </Typography>
          <Typography className={classes.posts_text}>{post?.text}</Typography>
        </Grid>
        <Grid item>
        <span>
                <button onClick={() => handleCommentButtonClick(post?.id)} className={classes.commentBtn}>
                        <MessageRounded className={classes.messageIcon} /> Comment
                      </button>
                  </span>
                  <span>
                  {commentFormId === post?.id && (
                <Grid style={{ padding: '2%' }}>
                  <CommentForm post_id={post?.id} user_id={post?.user?.id} form_id={post?.id} />
                </Grid>
              )}
                  </span>
          <Card elevation={4}>
            <CardHeader>
              <Typography variant="h6" style={{color: 'red'}}>Comments</Typography>
            </CardHeader>
            {post ? post?.comments?.map((comment) => (
              <CardContent key={comment?.id}>
                <Typography>{comment?.text}</Typography>
              </CardContent>
            )): <Typography variant="h2">No comements to show yet  </Typography>}
          </Card>
        </Grid>
      </Container>
    </section>
  );
};

export default UserPostDetails;
