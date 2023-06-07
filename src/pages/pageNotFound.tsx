import { Grid, Typography } from "@mui/material";
import pageNotFound from '../assets/404.png'

const PageNotFound = () => {
    return(
        <Grid container spacing={2} alignItems="center" marginTop={'8rem'}>
            <img
            src={pageNotFound}
            alt="Paginano encontrada"
            style={{width: '40rem'}}
            />
            <Typography variant="h3">
                Ups! página no encontrada
            </Typography>
        </Grid>
    );
};

export default PageNotFound;