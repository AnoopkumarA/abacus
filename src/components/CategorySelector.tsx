import React from 'react';
import { 
  Box, 
  Grid, 
  Paper, 
  Typography, 
  Button,
  Container,
  LinearProgress,
  Tooltip
} from '@mui/material';
import { TEST_CATEGORIES } from '../types/testCategory';
import { motion } from 'framer-motion';
import { Brain, Star, Trophy, Target, Award } from 'lucide-react';

const MotionPaper = motion(Paper as any);
const MotionBox = motion(Box as any);

interface CategorySelectorProps {
  onSelect: (category: string) => void;
}

const getCategoryIcon = (level: number) => {
  switch(level) {
    case 1: return <Brain size={32} />;
    case 2: return <Star size={32} />;
    case 3: return <Trophy size={32} />;
    case 4: return <Target size={32} />;
    case 5: return <Award size={32} />;
    default: return <Brain size={32} />;
  }
};

const getDifficultyColor = (level: number) => {
  switch(level) {
    case 1: return '#4CAF50'; // Easiest - Green
    case 2: return '#8BC34A'; // Light Green
    case 3: return '#2196F3'; // Blue
    case 4: return '#FF9800'; // Orange
    case 5: return '#F44336'; // Red - Most Difficult
    default: return '#4CAF50';
  }
};

// Calculate difficulty percentage where level 12 is 100%
const calculateDifficultyPercentage = (level: number): number => {
  return (level / 12) * 100;
};

// Get difficulty label based on percentage
const getDifficultyLabel = (percentage: number): string => {
  if (percentage <= 20) return 'Beginner';
  if (percentage <= 40) return 'Elementary';
  if (percentage <= 60) return 'Intermediate';
  if (percentage <= 80) return 'Advanced';
  return 'Expert';
};

export const CategorySelector: React.FC<CategorySelectorProps> = ({ onSelect }) => {
  return (
    <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
      <MotionBox
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{ 
          textAlign: 'center', 
          mb: { xs: 4, sm: 6 },
          mt: { xs: 3, sm: 4 }
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
          Choose Your Level
        </Typography>
        <Typography 
          variant="h6" 
          color="text.secondary"
          sx={{ 
            maxWidth: '600px', 
            mx: 'auto', 
            mb: 4,
            fontSize: { xs: '1rem', sm: '1.25rem' }
          }}
        >
          Select the appropriate difficulty level that matches your current abacus skills
        </Typography>
      </MotionBox>

      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {TEST_CATEGORIES.map((category, index) => {
          const difficultyPercentage = calculateDifficultyPercentage(category.level);
          const difficultyLabel = getDifficultyLabel(difficultyPercentage);
          
          return (
            <Grid item xs={12} md={6} lg={4} key={category.id}>
              <MotionPaper
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    bgcolor: getDifficultyColor(category.level),
                  }}
                />
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: '12px',
                      bgcolor: `${getDifficultyColor(category.level)}15`,
                      color: getDifficultyColor(category.level),
                      mr: 2,
                    }}
                  >
                    {getCategoryIcon(category.level)}
                  </Box>
                  <Box>
                    <Typography 
                      variant="h5" 
                      component="h3"
                      sx={{ 
                        fontWeight: 'bold',
                        color: 'text.primary',
                      }}
                    >
                      {category.name}
                    </Typography>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        color: getDifficultyColor(category.level),
                        fontWeight: 'medium',
                      }}
                    >
                      Level {category.level} • {difficultyLabel}
                    </Typography>
                  </Box>
                </Box>

                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{ mb: 3, flexGrow: 1 }}
                >
                  {category.description}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="caption" color="text.secondary">
                      Difficulty
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {difficultyPercentage.toFixed(0)}%
                    </Typography>
                  </Box>
                  <Tooltip title={`Level ${category.level} of 12`} arrow placement="top">
                    <LinearProgress
                      variant="determinate"
                      value={difficultyPercentage}
                      sx={{
                        height: 6,
                        borderRadius: 3,
                        bgcolor: `${getDifficultyColor(category.level)}15`,
                        '& .MuiLinearProgress-bar': {
                          bgcolor: getDifficultyColor(category.level),
                        },
                      }}
                    />
                  </Tooltip>
                </Box>

                <Button
                  variant="contained"
                  size="large"
                  onClick={() => onSelect(category.id)}
                  sx={{
                    mt: 'auto',
                    bgcolor: getDifficultyColor(category.level),
                    '&:hover': {
                      bgcolor: getDifficultyColor(category.level),
                      filter: 'brightness(0.9)',
                    },
                    borderRadius: '10px',
                    py: 1.5,
                  }}
                >
                  Start Practice
                </Button>
              </MotionPaper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}; 