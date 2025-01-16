import './HomePage.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const HomePage = () => {
  return (
    <div className='heroBox'>
      <header className="heroHeader">
        <h1>My Simple React Home Page</h1>
      </header>
      <Grid container spacing={4}>
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 345 }} style={{ marginTop: '20px' }}>
            <CardMedia
              component="img"
              alt="Nature"
              height="140"
              image="/nature.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 345 }} style={{ marginTop: '20px' }}>
            <CardMedia
              component="img"
              alt="Nature"
              height="140"
              image="/nature.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 345 }} style={{ marginTop: '20px' }}>
            <CardMedia
              component="img"
              alt="Nature"
              height="140"
              image="/nature.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Card 4 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 345 }} style={{ marginTop: '20px' }}>
            <CardMedia
              component="img"
              alt="Nature"
              height="140"
              image="/nature.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;