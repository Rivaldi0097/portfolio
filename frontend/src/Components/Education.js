import { 
    Box, 
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid
} from '@mui/material';
import smu from '../img/smu.jpeg';
import tp from '../img/tp.png';

function Education(props) {

    const education = [
        {'institute': 'Singapre Management University', 'course':'Information System', 'img':smu, 'alt':'smu logo'},
        {'institute': 'Temasek Polytechnic', 'course':'Business Information System', 'img':tp, 'alt': 'tp logo'},
    ]

    return (
        <Box
            sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                minHeight:'30vh',
                m:10,
                mt:0,
            }}
        >
            <Typography variant='title' sx={{fontSize:{xs:'2.5rem', sm:'3rem', md:'4rem'}}} gutterBottom>Tutorials Received From:</Typography>

            <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={5}
            >
                {education.map((obj, i)=>{
                    return(
                        <Grid item key={i}>
                            <Card sx={{ 
                                    width: {xs:300, sm:400, md:500}, 
                                    minHeight:300 
                                }}>
                                <CardMedia
                                    sx={{ height: 200 }}
                                    image={obj.img}
                                    title={obj.alt}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {obj.institute}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        {obj.course}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    );
}

export default Education;