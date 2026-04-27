import React from 'react';
import { Box, Button, Grid, Typography, Card, CardContent } from '@mui/material';
// Removed useHistory import

const Landing = () => {
  // const history = useHistory();
  return (
    <Box sx={{ textAlign: 'center', p: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Our Home Page
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => window.location.href = '/pricing'}
        >
          Pricing
        </Button>
      </Box>
      <Grid container spacing={3}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Card {index + 1}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is the description for card {index + 1}.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Landing;