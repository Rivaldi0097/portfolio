import { Box, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function ContactMe(props) {


    return (
        <Box
            sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',

                minHeight:400
            }}
        >
            <Box
                sx={{
                    mt:10,
                    mb:5
                }}
            >
                <Typography variant='h6'>Always learning for better tomorrow.</Typography>
            </Box>

            <Box>
                <IconButton sx={{mr:4}} onClick={()=> window.open('https://www.linkedin.com/in/rivaldi-kongres/')}>
                    <LinkedInIcon 
                        fontSize='large' 
                        sx={{color:'whitesmoke'}}
                        
                    />
                </IconButton>
                
                <IconButton sx={{mr:4}} onClick={()=> window.open('https://github.com/Rivaldi0097?tab=repositories')}>
                    <GitHubIcon 
                        fontSize='large' 
                        sx={{color:'whitesmoke'}}
                    />
                </IconButton>

                <IconButton href='mailto:rivaldi1997@hotmail.com' >
                    <EmailIcon 
                        fontSize='large' 
                        sx={{color:'whitesmoke'}}
                    />
                </IconButton>
            </Box>

            <Box sx={{mt:3}}>
                <Typography variant='h6'>Created By Rivaldi Kongres</Typography>
            </Box>
        </Box>
    );
}

export default ContactMe;