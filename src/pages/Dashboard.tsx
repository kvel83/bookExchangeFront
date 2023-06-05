import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

const Dashboard: React.FC = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardActionArea component={Link} to="/miBiblioteca">
              <CardMedia
                component="img"
                height="140"
                image="../assets/library.jpg"
                alt="Mi biblioteca"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Mi biblioteca
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        {/* <Grid item xs={12} sm={4}> */}
          {/* <Card> */}
            {/* <CardActionArea component={Link} to="/usuario"> */}
              {/* <CardMedia */}
                {/* // component="img" */}
                {/* // height="140" */}
                {/* // image="/ruta/imagen-usuario.jpg" */}
                {/* // alt="Usuario" */}
            {/* //   /> */}
              {/* <CardContent> */}
                {/* <Typography variant="h5" component="div"> */}
                  {/* Usuario */}
                {/* </Typography> */}
              {/* </CardContent> */}
            {/* </CardActionArea> */}
          {/* </Card> */}
        {/* </Grid> */}
        {/* <Grid item xs={12} sm={4}> */}
          {/* <Card> */}
            {/* <CardActionArea component={Link} to="/mi-biblioteca"> */}
              {/* <CardMedia */}
                {/* // component="img" */}
                {/* // height="140" */}
                {/* // image="/ruta/imagen-mi-biblioteca.jpg" */}
                {/* // alt="Mi Biblioteca" */}
            {/* //   /> */}
              {/* <CardContent> */}
                {/* <Typography variant="h5" component="div"> */}
                  {/* Mi Biblioteca */}
                {/* </Typography> */}
              {/* </CardContent> */}
            {/* </CardActionArea> */}
          {/* </Card> */}
        {/* </Grid> */}
      </Grid>
    </div>
  );
};

export default Dashboard;
