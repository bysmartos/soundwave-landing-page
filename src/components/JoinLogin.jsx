import { Grid, Paper, styled,TextField, Typography, Button, Box } from "@mui/material";


const StyledPaper= styled(Paper)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        height:'36vh',
        backgroundColor: '#202027',
        width: '58vw',
        display: "flex",
        flexDirection: 'column',
        padding: '2rem',
        borderRadius: '1rem',
        justifyContent: 'space-between'
        },
        
        [theme.breakpoints.up('sm')]: {
            height:'42vh',
            backgroundColor: '#202027',
            width: '30vw',
            display: "flex",
            flexDirection: 'column',
            padding: '2rem',
            borderRadius: '1rem',
            justifyContent: 'space-between'
         },
         [theme.breakpoints.up('xl')]: {
            height:'36vh',
            backgroundColor: '#202027',
            width: '28vw',
            display: "flex",
            flexDirection: 'column',
            padding: '2rem',
            borderRadius: '1rem',
            justifyContent: 'space-between'
         }

}));

const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#1762A7',
    '&:hover': {
      backgroundColor: '#2180d8',
    },
    '&:focus': {
        backgroundColor: '#2796ff',
      },
    textTransform: 'none',
    height: '2.4rem'
  }));

  const StyledTextField = styled(TextField)({
        height: '0.4rem',
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#2E3852', 
            },
            '&.Mui-focused fieldset': {
                    borderColor: '##596da0',
            },
            '&:hover fieldset': {
                    borderColor: '#2E3852',
            },
        
        }
          
    });

const Login = () => {

    return ( 
        <Grid> 
           <StyledPaper elevation= {0} >
                <Box>
                    <Typography variant="body1" color="white">Name:</Typography>
                    <StyledTextField    size="small" fullWidth  sx={{ input: { color: 'white' } }} />
                </Box>

                <Box>
                    <Typography variant="body1" color="white">Email:</Typography>
                    <StyledTextField  size="small" fullWidth sx={{ input: { color: 'white' } }}/>
                </Box>

                <Box>
                    <Typography variant="body1" color="white">Password:</Typography>
                    <StyledTextField  size="small" fullWidth sx={{ input: { color: 'white' } }}/>
                </Box>

                <ColorButton variant="contained">Join Now</ColorButton>
           </StyledPaper>
        </Grid>
     );
}
 
export default Login;