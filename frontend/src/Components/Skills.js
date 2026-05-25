import {useState} from 'react';
import { 
    Box, 
    Grid, 
    Typography, 
    Button,
    Stack
} from '@mui/material';
import html144 from "../img/size_144/html-144.png";
import css144 from "../img/size_144/css-144.png";
import js144 from "../img/size_144/js-144.png";
import typescript144 from "../img/size_144/typescript-144.png";
import react144 from "../img/size_144/react-native-96.png";
import redux144 from "../img/size_144/redux-144.png";
import nodejs144 from "../img/size_144/nodejs-144.png";
import mysql144 from "../img/size_144/mysql-144.png";
import mongodb144 from "../img/size_144/mongodb-144.png";
import python144 from "../img/size_144/python-144.png";

function Skills(props) {

    const [skillSelected, setSkillSelected] = useState('Frontend');
    const [buttonFrontendColor, setButtonFrontendColor] = useState('whitesmoke');
    const [buttonBackendColor, setButtonBackendColor] = useState('whitesmoke');
    const skillButtonBorder = 10;
    const minHeightSkill = 300;

    const frontend = [
        {'src': html144, 'alt': "html logo"},
        {'src': css144, 'alt': 'css logo'},
        {'src': js144, 'alt': 'javascript logo'},
        {'src': react144, 'alt': 'reactjs logo'},
        {'src': typescript144, 'alt': 'typescript logo'},
        {'src': redux144, 'alt': 'redux logo'}
    ]

    const backend = [
        {'src': nodejs144, 'alt': 'nodejs logo'},
        {'src': mysql144, 'alt': 'my sql logo'},
        {'src': mongodb144, 'alt': 'mongodb logo'},
        {'src': python144, 'alt': 'python logo'},
    ]

    const boxProps = {
        display:'flex',
        flexGrow:1,
        flexDirection:'column',
        justifyContent:'center',
        minHeight:minHeightSkill,
        p:5,
    }



    const changeSkill = (skillName) => {
        setSkillSelected(skillName)
    }

    return (
        <Box
            sx={{
                bgcolor:'#1d1d20',
                minHeight:minHeightSkill,
                pb:5
            }}
        >

            <Grid container justifyContent="center" alignItems="center">
                <Grid item sm={12} md={12} lg={8}>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Typography variant='title2' sx={{fontSize:{xs:'2rem', sm:'2.5rem', md:'3.5rem'}, mt:2}}>Skills Acquired Over Time</Typography>

                        <Grid container justifyContent="center" alignItems="center">
                            {skillSelected === 'Frontend'?
                                frontend.map( (obj, i) => {
                                    return(
                                        <Grid item key={i} className='skill'>
                                            <img src={obj.src} alt={obj.alt} />
                                        </Grid>
                                    )
                                })
                            :
                                backend.map( (obj, i) => {
                                    return(
                                        <Grid item key={i} className='skill'>
                                            <img src={obj.src} alt={obj.alt} />
                                        </Grid>
                                    )
                                })
                            }
                        </Grid> 
                    </Stack>
                </Grid>

                <Grid item xs={12} md={12} lg={4}>
                    <Box
                        sx={boxProps}
                    >
                        <Button 
                            variant='text' 
                            sx={{
                                borderTop: skillButtonBorder, 
                                borderLeft: skillButtonBorder, 
                                pt:10,
                                borderColor:'whitesmoke',
                                letterSpacing: '0.18px',
                                '&:hover': {
                                    backgroundColor: 'whitesmoke',
                                }
                            }} 
                            onClick={()=>{changeSkill('Frontend')}}
                            onMouseOver={()=>{setButtonFrontendColor('#1d1d20')}}
                            onMouseLeave={()=>{setButtonFrontendColor('whitesmoke')}}
                        >
                            <Typography sx={{color:buttonFrontendColor, textDecoration:skillSelected === 'Frontend'? 'underline':''}} variant='skillButton'>Frontend</Typography>
                        </Button>

                        <Button 
                            variant='text' 
                            sx={{
                                borderBottom: skillButtonBorder, 
                                borderRight: skillButtonBorder, 
                                borderColor:'whitesmoke',
                                pb:10,
                                '&:hover': {
                                    backgroundColor: 'whitesmoke',
                                }
                            }} 
                            onClick={()=>{changeSkill('Backend')}}
                            onMouseOver={()=>{setButtonBackendColor('#1d1d20')}}
                            onMouseLeave={()=>{setButtonBackendColor('whitesmoke')}}
                        >
                        <Typography sx={{color:buttonBackendColor, textDecoration:skillSelected === 'Backend'? 'underline':''}} variant='skillButton'>Backend</Typography>
                        </Button>

                    </Box>
                </Grid>
            </Grid>



        </Box>
    );
}

export default Skills;
