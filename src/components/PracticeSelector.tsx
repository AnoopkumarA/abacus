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
      title: 'Square Number Practice',
      description: 'Master the art of calculating squaring numbers mentally',
      icon: <Square size={40} />,
      color: '#4CAF50',
      onClick: () => navigate('/practice/square-root')
    },
    {
      title: 'Square Root Practice',
      description: 'Practice finding square roots of given numbers',
      icon: <Square size={40} />,
      color: '#FF5722',
      onClick: () => navigate('/practice/square-number')
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
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: 16,
                overflow: 'hidden',
                position: 'relative',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))`,
                  zIndex: 0
                },
                '&:hover': {
                  transform: 'translateY(-8px) scale(1.02)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                  '& .hover-button': {
                    opacity: 1,
                    transform: 'translateY(0)'
                  },
                  '&:before': {
                    opacity: 0.8
                  }
                },
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '6px',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  background: `linear-gradient(90deg, ${feature.color}, ${feature.color}88)`,
                  boxShadow: `0 2px 12px ${feature.color}40`
                }}
              />
              <Box
                sx={{
                  p: 2.5,
                  borderRadius: '20px',
                  background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                  backdropFilter: 'blur(5px)',
                  color: feature.color,
                  mb: 3,
                  transform: 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(-5deg) scale(1.1)'
                  }
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
                  background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)`,
                  minWidth: 200,
                  py: 1.8,
                  px: 4,
                  borderRadius: '14px',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  boxShadow: `0 8px 20px ${feature.color}40`,
                  '&:hover': {
                    background: `linear-gradient(135deg, ${feature.color}, ${feature.color})`,
                    transform: 'translateY(-2px)',
                    boxShadow: `0 12px 24px ${feature.color}60`
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