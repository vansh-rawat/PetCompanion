import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

const MainFeaturedPost = ({ mainFeaturePost }) => {
  return (

    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${mainFeaturePost?.image})`,
      }}
    >
      <Box
        sx={{
          //position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      >
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography component="h1" variant="h3" color="inherit" >
                {mainFeaturePost.title}
              </Typography>
              <Typography variant="h5" color="inherit" >
                {mainFeaturePost.description}
              </Typography>
              <Link variant="subtitle1" href="#">
                {mainFeaturePost.linkText}
              </Link>

            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default MainFeaturedPost;