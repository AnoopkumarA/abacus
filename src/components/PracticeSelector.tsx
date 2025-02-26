import React from 'react';
import { 
  Container, 
  Grid, 
  Paper, 
  Typography, 
  Box,
  Button
} from '@mui/material';
import { motion } from 'framer-motion';
import { Calculator, Square } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MotionPaper = motion(Paper as any);
const MotionBox = motion(Box as any);

export const PracticeSelector: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Abacus Practice',
      description: 'Practice your abacus skills with various difficulty levels',
      icon: <Calculator size={40} />,
      color: '#2196F3',
      onClick: () => navigate('/practice/abacus')
    },
    {
      title: 'Square Root Practice',
      description: 'Master the art of calculating square roots mentally',
      icon: <Square size={40} />,
      color: '#4CAF50',
      onClick: () => navigate('/practice/square-root')
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
      <MotionBox
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{ 
          textAlign: 'center', 
          mb: { xs: 4, sm: 6 }
        }}
      >
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            background: 'linear-gradient(45deg, #1976d2, #82b1ff)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Choose Your Practice Mode
        </Typography>
        <Typography 
          variant="h6" 
          color="text.secondary"
          sx={{ 
            maxWidth: '600px', 
            mx: 'auto',
            fontSize: { xs: '1rem', sm: '1.25rem' }
          }}
        >
          Select the type of practice you want to focus on today
        </Typography>
      </MotionBox>

      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} key={feature.title}>
            <MotionPaper
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 4,
                overflow: 'hidden',
                position: 'relative',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                  '& .hover-button': {
                    opacity: 1,
                    transform: 'translateY(0)'
                  }
                },
                transition: 'all 0.3s ease'
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '4px',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bgcolor: feature.color
                }}
              />
              <Box
                sx={{
                  p: 2,
                  borderRadius: '16px',
                  bgcolor: `${feature.color}15`,
                  color: feature.color,
                  mb: 3
                }}
              >
                {feature.icon}
              </Box>
              <Typography 
                variant="h4" 
                component="h2"
                sx={{ 
                  mb: 2,
                  fontWeight: 'bold',
                  color: 'text.primary'
                }}
              >
                {feature.title}
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary"
                sx={{ 
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.6
                }}
              >
                {feature.description}
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={feature.onClick}
                className="hover-button"
                sx={{
                  mt: 'auto',
                  bgcolor: feature.color,
                  minWidth: 200,
                  py: 1.5,
                  borderRadius: '10px',
                  '&:hover': {
                    bgcolor: feature.color,
                    filter: 'brightness(0.9)'
                  }
                }}
              >
                Start Practice
              </Button>
            </MotionPaper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};