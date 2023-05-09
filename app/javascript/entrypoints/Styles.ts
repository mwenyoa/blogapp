import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      height: '100%',
      margin: 0,
      padding: 0
    },
    contentArea: {
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: '5%',
      backgroundColor: '#f0f0f0',
      padding: '1%',
      borderRadius: '10px',
    },
    item1: {
      width: '20%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    item2: {
      width: '80%',
      display: 'flex',
      flexFlow: 'wrap',
      justifyContent: 'space-evenly',
      [theme.breakpoints.down('sm')]: {
        width: '100%',

      },
    },
    biography: {
      width: '100%',
      marginTop: '2%',
      color: 'green'
    },
    usersContainer: {
      flexGrow: 1,
      margin: '5%',
      borderRadius: '10%',
    },
    usersDetails: {
      marginBottom: '20px',
      flexGrow: 2
    },
   usersImage: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      border: '1px solid #818589',
      [theme.breakpoints.down('sm')]: {
        width: '100px',
        height: '100px',
        margin: '2% auto',
      },
    },
    usersData: {
      display: 'flex',
      flexFlow: 'wrap',
      justifyContent: 'flex-start',
      gap: 12,
      alignItems: "center",
      lineHeight: '30px',
    },
    username:{
      color: '#3f51b5'
    },
    cardDetails: {
      display: 'flex',
      justifyContent: 'space-between',
      flexFlow: 'wrap',
    },
    appBar: {
      position: 'fixed',
      height: 'auto',
      display: 'flex',
      alignSelf: 'center',
      too: 0,
      left: 0,
      flexFlow: 'wrap',
      backgroundColor: '#263238',
      color: '#fff',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        flexDirection: 'column'
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        flexDirection: 'column'
      },
    },

    footer: {
      display: 'flex',
      justifyContent: 'space-evenly', 
      alignItems: 'center',
      flexFlow: 'wrap',
      position: 'fixed',
      fontStyle: '800',
      fontFamily: 'arial',
      height: '80px',
      width: '100vh',
      color: '#f0f0f0',
      bottom: 0,
      left: 0,
      textAlign: 'center',
      backgroundColor: 'gray',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },

    comment_form: {
      display: 'flex',
      margin:  '4px auto',
      width: '50%', 
      flexFlow: 'wrap',
      justifyContent: 'space-around',
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }
    },
  
    link: {
      color: "#fff",
      textDecoration: "none",
      marginRight: theme.spacing(4),
      "&:hover": {
        textDecoration: "underline",
      },
    },
    title: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'space-between',
      flexFlow: 'wrap',
      padding: '1%',
      fontWeight: "bolder",
      },
      submitButton: {
        marginTop: theme.spacing(4),
        width: '50ch',
        padding: theme.spacing(2),
      },

      // Posts
     posts_title: {
      color: '#263238',
      display: 'flex',
      justifyContent: 'space-between',
      flexFlow: 'wrap',
      padding: '1%',
      fontWeight: "bold",
     },
     posts_date: {
      display: 'flex',
      fontStyle: 'italic',
      fontSize: '16px',
     },
     posts_text: {
      display: 'flex',
      flexFlow: 'wrap',
      padding: '1%',
      fontSize: '16px',
      color: '#37474f',
     },

     commentSendBtn: {
       padding: "4px",
       [theme.breakpoints.down('sm')]: {
          width: "100%",
          margin: "2px",
       }
     }, 

     messageIcon: {
       padding: '2%'
     },

     posts_actions: {
      display: 'flex',
      justifyContent: 'space-between',
      flexFlow: 'wrap',
      padding: '1%',
      width: '40%',
      fontWeight: "bold",
      [theme.breakpoints.down('sm')]: {
        width: '100%'
     }

      },
      postlist: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '5%',
        backgroundColor: '#f0f0f0',
        padding: '1%',
        borderRadius: '10px',
        [theme.breakpoints.down('sm')]: {
          width: '100%',
      },
  },

  Pagination: {
    textAlign: 'center',
    fontFamily: 'Poppins arial',
    fontSize: 'large',
    color: 'green',
    [theme.breakpoints.down('sm')]: {
      fontSize: 'medium',
    }
  },

  reaction_stats: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '20%',
    flexFlow: 'wrap',
    color: 'blue',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddingTop: '2%'
    }
 },

 loader: {
      display: 'flex',
      justifyContent: 'center',
      margin:' 10% auto',
    },
      // Comments
     commentBtn: {
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderRadius: '5px',
        outlineColor: '#fff',
        marginLeft: '10px'
     },

      section: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '100ch ',
          height: '100%',
          [theme.breakpoints.down('sm')]: {
            width: '50ch',
          },
        },
        input: {
          display: 'none',
        },
      },
      Form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '2% auto',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
          width: '50ch',
        },
        [theme.breakpoints.down('xs')]: {
          width: '50%',
        },
     },
     
  }));

  export  default useStyles;


 