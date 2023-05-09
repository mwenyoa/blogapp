import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../Redux/Services/User";
import useStyles from "../../Styles";
import {
  Grid,
  Card,
  CardMedia,
  Box,
  Container,
  Typography,
  Button
} from "@material-ui/core";
import { timeAgo } from "../../helpers/timeAgo";
import CommentForm from "../comments/CommentForm";
import { MessageRounded } from "@material-ui/icons";
import { RootState, AppDispatch } from "../../Store";
import { Params } from "react-router-dom";


type Props = {};

const UserShow = (props: Props) => {
  const user = useSelector((state: RootState) => state.user.user)

  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { id }: Readonly<Params<string>> | undefined  = params;
  const [commentFormId, setCommentFormId] = useState<null | number>(null);
  const classes = useStyles();

  useEffect(() => {
    if (id !== undefined) {
      dispatch(fetchUser(parseInt(id)));
    }
  }, [dispatch, params.id]);

  const handleCommentButtonClick: any = (postId: number) => {
    setCommentFormId(commentFormId === postId ? null : postId);
  };

  
  return (
    <section>
      <Container>
          <Grid item className={classes.container}>
            <Box className={classes.item1} style={{padding: '1%'}}>
              <CardMedia
                image={user?.photo}
                title="Image title"
                className={classes.usersImage}
              />
            </Box>
            <Card className={classes.item2} elevation={8} style={{padding: '1%'}}>
              <Typography variant="h5" className={classes.title}>
                <span className={classes.username}>
                  {user?.firstname} {user?.lastname}
                </span>
                {user?.posts_counter < 2
                  ? `${user?.posts_counter} Post`
                  : `${user?.posts_counter} Posts`}
              </Typography>
            </Card>
            <Card elevation={8} className={classes.biography} style={{padding: '1%'}}>
              <Typography variant="h6" className={classes.title}>
                <span>
                  About Author: <br /> {user?.bio}
                </span>
              </Typography>
            </Card>
            {user?.posts?.slice(0, 2)?.map((post) => (
              <Card key={post.id} className={classes.biography} elevation={4} style={ {padding: '10px'}}>
                <Typography variant="h5" className={classes.posts_title}>
                  <span><Link to={`/users/${user?.id}/posts/${post?.id}`}>{post?.title}</Link></span>
                  <span className={classes.posts_date}>
                     {timeAgo(post?.created_at)}
                  </span>
                </Typography>
                <Typography className={classes.posts_text}>
                  <span>{post?.text}</span>
                </Typography>
                <Grid>
                  <Grid item style={{color: "2e2e2e", fontWeight: 'bold'}}>
                    <Typography className={classes.posts_actions} variant="h6">
                      <span>
                        {/* {
                          <span>{console.log("Current Obj: ", user)}</span>
                        } */}
                        {post?.comments_counter === 1
                          ? `${post?.comments_counter} Comment`
                          : `${post?.comments_counter} Comments`}
                      </span>
                      <span>
                        {post?.likes_counter === 1
                          ? `${post?.likes_counter} Like`
                          : `${post?.likes_counter} Likes`}
                      </span>
                    <span>
                   <button
                      onClick={() => handleCommentButtonClick(post.id)}
                      value={post.id}
                      className={classes.commentBtn}
                    >
                      <MessageRounded className={classes.messageIcon} /> Comment
                    </button>
                   </span>
                    </Typography>
                  </Grid>        
                </Grid>
                {commentFormId === post.id && (
                  <Grid style={{ padding: '2%' }}>
                    <CommentForm
                      post_id={post.id}
                      user_id={user.id}
                      form_id={post.id}
                    />
                  </Grid>
                )}
              </Card>
            ))}
          </Grid>
          {
            user?.posts_counter > 2 ? <Grid item>
            <Button component={Link} to={`/users/${user?.id}/posts`} color="primary" variant="contained"> All Posts</Button>
         </Grid>: null
          }
      </Container>
    </section>
  );
};

export default UserShow;
