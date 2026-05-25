import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Link from '@mui/material/Link';

function Experience(props) {

    const experience = [
        {
            'company': "Dawyler",
            'role': 'IoT full stack developer',
            'from': 'Apr 2025',
            'to': 'Dec 2025',
            'description': `
                Delivered full-stack software solutions to monitor and manage critical data center infrastructure, ensuring operational efficiency and reliability. Enabled real-time monitoring and automated alerting by integrating diverse IoT devices—such as environmental sensors and security hardware—into a robust backend processing system. By partnering with hardware suppliers to validate data accuracy and building intuitive frontend interfaces, ensured a seamless, high-performance experience for end-users.
            `
        },
        {
            'company' : 'Simulation Software & Technology',
            'role':'Full Stack Developer', 
            'from': 'Nov 2023', 
            'to': 'Mar 2025', 
            'description': `Developed full-stack forensic tools to accelerate cyber investigations across VMs, cloud environments, and local systems. Engineered an end-to-end data pipeline that processed raw forensic artifacts through an AI analysis engine and visualized the threat intelligence on an intuitive frontend dashboard. 
                \n As a frontend engineer, I implemented intuitive, user-friendly interfaces using the React framework to ensure a seamless user experience. Additionally, I collaborated with various teams to successfully integrate multiple micro-frontend services into a single, unified, and highly functional application.
                \n As a backend engineer, I built and optimized scalable APIs using Python and JavaScript to support forensic data extraction, analysis, and transformation for cyber investigations. Developed services to process Expert Witness Format (E01) files, enabling investigators to upload compressed forensic images and automatically extract usable artifacts, reducing investigation preparation time by approximately 40–50% and significantly improving investigative efficiency.`
        },
        {'company': 'CutAnything', 'role':'Frontend Engineer', 'from':'May 2022', "to":'Jun 2023', 'description':'During my attachment with CutAnything, I was in charge of developing the frontend of the company’s website. This website development was built from scratch using ReactJs, Redux and Material UI. During this web development project, I was able to learnt Material UI and improve my frontend skills. This project tested my ability on frontend development skills and being discipline as I am the sole person who was developing the frontend of the website.'},
        {'company': 'OCBC', 'role':'Investment Operation Intern', 'from':'Apr 2018', "to":'Aug 2018', 'description':'During the 4 months internship experience with OCBC bank during my Polytechnic journey. I was given tasks to help out with projects that will help the department I am in with an automation project. I was in charge of the front-end design of the webpage. This project test on my ability to integrate different processes and knowledge into a single solution. I also worked closely with the developers as they are the one who will be implementing my design. I learnt a lot of useful experience from technical skills (e.g UI design and process integration) to soft skills (e.g communications and fast-paced environment).'},
    ]

    return (
        <Box
            id="Experience"
            sx={{ m:10 }}
        >
            
            <Box
                sx={{
                    display:'flex',
                    justifyContent:'center'
                }}
            >
                <Typography variant='title'>My Leveling Up Journey</Typography>
            </Box>
            
            {experience.map((obj, i) => {
                return(
                    <Box key={i}>
                        <Box
                            sx={{
                                display:'flex',
                                flexDirection:'row',
                                justifyContent:'flex-start',
                                alignItems:'center',
                                mt:10
                            }}
                        >
                            <Grid container alignItems='center'>
                                <Grid item sm={12} md={12} lg={8}>
                                    <Typography variant='button' sx={{fontSize:{xs:'2.0rem', sm:'2.0rem', md:'2.0rem'}}}>{obj.company}</Typography>
                                </Grid>

                                <Grid item sm={12} md={12} lg={4}>
                                    <Typography variant='button' sx={{fontSize:{xs:'1rem', sm:'2rem', md:'2rem'}}}>{obj.from} - {obj.to}</Typography>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box>
                            <Typography variant='button' sx={{fontSize:{xs:'1rem', sm:'1.8rem', md:'1.8rem'}}}>{obj.role}</Typography>
                        </Box>

                        <Box>
                            <Typography variant='body1' sx={{ fontSize: '1rem' }}>
                                {obj.description.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </Typography>
                        </Box>

                        <Box sx={{mt:2}}>
                            {obj.company === "CutAnything"?
                                <Link variant='button' rel="noopener noreferrer" target="_blank"  href="https://www.cutanything.co/" >View Website</Link>
                            :
                                <></>
                            }
                        </Box>
                    </Box>
                )
            })}



        </Box>
    );
}

export default Experience;