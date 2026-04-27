import React from 'react';
import { Box, Button, Grid, Typography, Card, CardContent } from '@mui/material';

const Pricing = () => {
  return (
    <Box sx={{ textAlign: 'center', p: 4 }}>
      {/* Header Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Our Home Page
        </Typography>
        <Button variant="contained" color="primary">
          Pricing
        </Button>
      </Box>

      {/* Grid of Cards */}
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

export default Pricing;