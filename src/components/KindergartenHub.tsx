import React from 'react';
import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calculator, Brain } from 'lucide-react'; // Changed AbacusIcon to Brain

const MotionPaper = motion(Paper);

export const KindergartenHub: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Picture Counting",
      description: "Learn to count with fun pictures and animations!",
      icon: <Brain size={48} />, // Using Brain icon instead
      path: "/kindergarten/counting",
      color: "#4CAF50"
    },
    {
      title: "Picture Calculation",
      description: "Learn basic math with colorful pictures!",
      icon: <Calculator size={48} />,
      path: "/kindergarten/calculation",
      color: "#2196F3"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #FF4081, #FF9100)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            mb: 2
          }}
        >
          Kids Learning Zone
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ maxWidth: '800px', mx: 'auto', mb: 6 }}
        >
          Choose your favorite way to learn mathematics!
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <MotionPaper
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onClick={() => navigate(feature.path)}
              sx={{
                p: 4,
                height: '100%',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: 4,
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Box
                sx={{
                  mb: 3,
                  p: 3,
                  borderRadius: '50%',
                  bgcolor: `${feature.color}15`,
                  color: feature.color,
                }}
              >
                {feature.icon}
              </Box>
              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  fontWeight: 'bold',
                  color: feature.color
                }}
              >
                {feature.title}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {feature.description}
              </Typography>
            </MotionPaper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
