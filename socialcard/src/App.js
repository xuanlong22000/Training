import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './styles'


function App() {

  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <div>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position='static' color='inherit'>
          <Typography className={classes.heading} variant="h2" align="center">Social Card App</Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>

              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>

      </Container>
    </div>
  );
}

export default App;