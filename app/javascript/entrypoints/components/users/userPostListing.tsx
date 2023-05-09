import React, { useState } from 'react';
import { useParams, Link} from 'react-router-dom';
import { Grid, Typography, Card, Container, Button } from '@material-ui/core';
import useStyles from '../../Styles';
import { timeAgo } from '../../helpers/timeAgo';
import CommentForm from '../comments/CommentForm';
import { Delete, DeleteOutlineOutlined, MessageRounded } from '@material-ui/icons';
import useFetchposts from '../../hooks/useFetchposts';
import { useAuth } from '../Auth/ProtectedRoutes';
import useSweetAlert from "../../hooks/sweetAlert";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store";
import { deletePost } from '../../Redux/Services/Post';
import Pagination from 'react-rails-pagination';




const PostListing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const params = useParams();
  const user = useAuth();
  const { id } = params;
  const currrentUrl = window.location.href;
  const posts = useFetchposts(id, currentPage);
  console.log("cuurrent page data:", posts)
  const [commentFormId, setCommentFormId] = useState<number | null>(null);

  const handleCommentButtonClick = (postId: number) => {
    setCommentFormId((commentFormId) => (commentFormId === postId ? null : postId));    
  };

  const classes = useStyles();

  const handlePageChange = (page) => {
    setCurrentPage(parseInt(page));
    useFetchposts(id, page);
    history.pushState(null, '', `${currrentUrl}?page=${page}`)
  };


  const removePost = ({ post_id }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { ShowAlert } = useSweetAlert({});
    const { user } = useAuth();
    if (post_id !== undefined) {
      dispatch(deletePost({ user, post_id })).then((res: any) => {
        if (res.payload !== undefined) {
        return  ShowAlert({
            title: "Success",
            text: "Post deleted successfully",
            icon: "success",
            time: 2000,
          });
        }
        if (res.payload === undefined) {
         return ShowAlert({
            title: "Success",
            text: res.error.message,
            icon: "success",
            time: 2000,
          });
        }
      });
    }
  };
  
  return (
    <>
  <section>
      <Container>
        <Grid item sm={12} style={{ textAlign: 'center', marginTop: '3%' }}>
          All Posts By{' '}
          <Typography variant="h5">
          </Typography>
        </Grid>
        <Grid item className={classes.postlist}>
          {posts && posts?.posts?.map((post) => (
            <Card key={post?.id} className={classes.biography} elevation={4} style={{ padding: '10px' }}>
              <Typography variant="h5" className={classes.posts_title}>
                <span>
                  <Link to={`/users/${post?.user_id}/posts/${post?.id}`}>{post?.title}</Link>
                </span>
                <span className={classes.posts_date}>Posted: {timeAgo(post?.created_at)}</span>
              </Typography>
              <Typography className={classes.posts_text}>
                <span>{post?.text}</span>
              </Typography>
              <Grid>
                <Grid item style={{ color: '2e2e2e', fontWeight: 'bold' }}>
                  <Typography className={classes.posts_actions} variant="h6">
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
                    <span>
                      <button onClick={() => handleCommentButtonClick(post?.id)} className={classes.commentBtn}>
                        <MessageRounded className={classes.messageIcon} /> Comment
                      </button>
                    </span>
                  </Typography>
                </Grid>
              </Grid>
              {commentFormId === post?.id && (
                <Grid style={{ padding: '2%' }}>
                  <CommentForm post_id={post?.id} user_id={post?.user_id} form_id={post?.id} />
                </Grid>
              )}
            </Card>
          ))}
        </Grid>
        <Grid item className={classes.Pagination}>
        <Pagination page={currentPage} pages={posts?.total_pages} handleChangePage={handlePageChange} />
        </Grid>
      </Container>
    </section>
    </>

  );
};

export default PostListing;
