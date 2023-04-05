import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
// import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const SurahDetails =() => {
  const dataArray = [
    {
      url:"https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_MP3.mp3",
      title:"long established fact",
      detail:`t is a long established fact that a reader will be distracted by th
      readable content of a page when looking at its layout. The point of using Lorem Ipsum is1`,
    },
    {
      url:"https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_MP3.mp3",
      title:"long established fact",
      detail:`t is a long established fact that a reader will be distracted by th
      readable content of a page when looking at its layout. The point of using Lorem Ipsum is1`,
    },
    {
      url:"https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_MP3.mp3",
      title:"long established fact",
      detail:`t is a long established fact that a reader will be distracted by th
      readable content of a page when looking at its layout. The point of using Lorem Ipsum is1`,
    },
    {
      url:"https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_MP3.mp3",
      title:"long established fact",
      detail:`t is a long established fact that a reader will be distracted by th
      readable content of a page when looking at its layout. The point of using Lorem Ipsum is1`,
    },
    {
      url:"https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_MP3.mp3",
      title:"long established fact",
      detail:`t is a long established fact that a reader will be distracted by th
      readable content of a page when looking at its layout. The point of using Lorem Ipsum is1`,
    },
  ];
    return(
        <Fragment>
            <Navbar/>
            {/* <PageTitle pageTitle={'Audio Tafseer'} pagesub={'Audio Tafseer'}/>  */}
            {/* <SurahList/> */}
            <Typography gutterBottom variant="h5" component="div" mt={10}>
              {/*  
                Format name should be gotten from URL or prop etc.
              */}
              Tafseer in Audio Format:
            </Typography>
            <Grid container margin="20px">
              <Box
                component="ul"
                sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
              >{dataArray.filter((item, key) => key < 2).map((item, key) => {
                return (
                  <Card sx={{ maxWidth: 345 }} key={key}>
                    <div style={{ display: 'flex', justifyContent: "center" }}>
                      
                      <audio
                        controls
                        width={"100%"}
                        height={"100%"}
                      >
                        <source
                          src={item.url}
                          type="audio/ogg"
                        />
                      </audio>
                    </div>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.detail}
                      </Typography>
                    </CardContent>
                  </Card>
                  )
                })}
              </Box>
            </Grid>
            <Footer footerClass={'wpo-ne-footer-2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default SurahDetails;
