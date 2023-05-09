import React from "react";
import useStyles from "../../Styles";
import {Box, Card, CardActions, CardContent, CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { convertDate } from '../../helpers/helpers';

type Props = {
  users: {};
};

const Users = (props: Props) => {
  const classes = useStyles();
  const { users } = props;
  console.log(users);
  return (
    <section>
      <Container className={classes.usersContainer}>
        <Grid>
          {users ? (
            users?.map((user: any) => (
              <Grid key={user.id} className={classes.usersDetails}>
                <Card elevation={4} className={classes.cardDetails}>
                  <CardContent className={classes.usersData}>
                    <CardMedia 
                    image={user?.photo}
                    title={user.firstname}
                    className={classes.usersImage}
                    />
                    <Grid item>
                      <Typography variant="h6">
                        <Link to={`/users/${user.id}`} color="blue">
                          {user.firstname} {user.lastname}
                        </Link>{" "}
                      </Typography>
                      <Typography variant="h6">
                        Joined: {convertDate(user.created_at)}
                      </Typography>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Typography variant="h6">
                      {(user.posts_counter < 2)
                        ? `${user.posts_counter} Post`
                        : `${user.posts_counter} Posts`}
                    </Typography>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
             <div className={classes.container}>
                 <Typography variant="h2">No users to show yet</Typography>
             </div>
          )}
        </Grid>
      </Container>
    </section>
  );
};

export default Users;
