import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

import library from '../assets/library.avif';
import findBook from '../assets/findBook.jpeg';
import findUser from '../assets/findUser.jpeg';
import { cardSize } from '../styles/styles';

const Dashboard: React.FC = () => {
  return (
      <Grid container spacing={2} alignItems="center" marginTop={'8rem'} >
        <Grid item xs={12} sm={4}>
          <Card sx={cardSize}>
            <CardActionArea component={Link} to="/miBiblioteca">
              <CardMedia
                component="img"
                image={library}
                className='appImages'
                alt="Mi biblioteca"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Mi biblioteca
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={cardSize}>
            <CardActionArea component={Link} to="/findBook">
              <CardMedia
              component="img"
              image={findBook}
              className='appImages'
              alt="Buscar libros"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Buscar libro
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={cardSize}>
            <CardActionArea component={Link} to="/findUser">
              <CardMedia
                component="img"
                image={findUser}
                className='appImages'
                alt="Mi biblioteca"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Buscar usuario
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
  );
};

export default Dashboard;
