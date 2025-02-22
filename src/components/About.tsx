import React from 'react';
import { Container, Typography, Paper, Box, Grid, IconButton, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { 
  Award, Users, BookOpen, Target, Brain, Star,
  Facebook, Twitter, Instagram, Linkedin, Youtube, Mail
} from 'lucide-react';

const MotionBox = motion(Box as any);
const MotionPaper = motion(Paper as any);

export const About = () => {
  const features = [
    {
      icon: <Brain size={32} />,
      title: 'Expert Instruction',
      description: 'Learn from experienced abacus instructors with proven teaching methods',
      color: '#2196F3'
    },
    {
      icon: <Target size={32} />,
      title: 'Structured Learning',
      description: 'Progressive curriculum designed for optimal skill development',
      color: '#4CAF50'
    },
    {
      icon: <Users size={32} />,
      title: 'Personalized Approach',
      description: 'Adaptive learning paths tailored to individual progress',
      color: '#FF9800'
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Comprehensive Content',
      description: 'Extensive practice materials covering all skill levels',
      color: '#E91E63'
    },
    {
      icon: <Star size={32} />,
      title: 'Quality Assurance',
      description: 'Rigorous quality standards for all learning materials',
      color: '#9C27B0'
    },
    {
      icon: <Award size={32} />,
      title: 'Proven Results',
      description: 'Track record of student success and achievement',
      color: '#FF5722'
    }
  ];

  const socialLinks = [
    { icon: <Facebook size={24} />, url: '#', color: '#1877F2', label: 'Facebook' },
    { icon: <Twitter size={24} />, url: '#', color: '#1DA1F2', label: 'Twitter' },
    { icon: <Instagram size={24} />, url: '#', color: '#E4405F', label: 'Instagram' },
    { icon: <Linkedin size={24} />, url: '#', color: '#0A66C2', label: 'LinkedIn' },
    { icon: <Youtube size={24} />, url: '#', color: '#FF0000', label: 'YouTube' },
    { icon: <Mail size={24} />, url: 'mailto:contact@abacuslearning.com', color: '#EA4335', label: 'Email' },
  ];

  const stats = [
    { value: '10K+', label: 'Students Trained' },
    { value: '95%', label: 'Success Rate' },
    { value: '50+', label: 'Expert Instructors' },
    { value: '100+', label: 'Learning Centers' },
  ];

  return (
    <Container maxWidth="lg">
      {/* Hero Section with Stats */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{ 
          textAlign: 'center',
          my: 8,
          position: 'relative',
        }}
      >
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{
            fontSize: { xs: '2.5rem' },
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #1976d2, #82b1ff)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            mb: 3,
          }}
        >
          About Abacus Learning
        </Typography>
        <Typography 
          variant="h5" 
          color="text.secondary"
          sx={{ 
            fontSize: { xs: '1.1rem' },
            maxWidth: '800px', 
            mx: 'auto',
            mb: 8,
            lineHeight: 1.6,
          }}
        >
          Empowering students to master mental mathematics through innovative learning techniques
          and comprehensive practice materials.
        </Typography>

        {/* Stats Section */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <MotionPaper
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                elevation={0}
                sx={{
                  p: 3,
                  background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 4,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontWeight: 'bold',
                    color: 'primary.main',
                    mb: 1 
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{ fontWeight: 'medium' }}
                >
                  {stat.label}
                </Typography>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </MotionBox>

      {/* Mission Statement with Video */}
      <MotionPaper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        elevation={0}
        sx={{
          p: 6,
          mb: 8,
          borderRadius: 4,
          background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h4" 
              gutterBottom
              sx={{ 
                fontWeight: 'bold',
                color: 'primary.main',
                mb: 3,
              }}
            >
              Our Mission
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ 
                color: 'text.secondary',
                lineHeight: 1.8,
                fontSize: '1.1rem',
                mb: 3,
              }}
            >
              At Abacus Learning, we are dedicated to revolutionizing mathematical education
              through the ancient art of abacus calculation. Our platform combines traditional
              techniques with modern technology to create an engaging and effective learning
              experience.
            </Typography>
            <Typography 
              variant="body1"
              sx={{ 
                color: 'text.secondary',
                lineHeight: 1.8,
                fontSize: '1.1rem',
              }}
            >
              We believe that every student has the potential to excel in mathematics, and our
              goal is to unlock that potential through structured practice and personalized
              learning paths.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                paddingTop: '56.25%', // 16:9 Aspect Ratio
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/your-video-id"
                title="About Abacus Learning"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0,
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
          </Grid>
        </Grid>
      </MotionPaper>

      {/* Features Grid */}
      <Typography 
        variant="h3" 
        align="center" 
        sx={{ 
          mb: 6,
          fontSize: { xs: '2.3rem' },
          fontWeight: 'bold',
        }}
      >
        Why Choose Us
      </Typography>
      <Grid container spacing={3} sx={{ mb: 8 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <MotionPaper
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 4,
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  p: 2,
                  borderRadius: '16px',
                  bgcolor: `${feature.color}15`,
                  color: feature.color,
                  display: 'inline-flex',
                }}
              >
                {feature.icon}
              </Box>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{ fontWeight: 'bold' }}
              >
                {feature.title}
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary"
                sx={{ lineHeight: 1.7 }}
              >
                {feature.description}
              </Typography>
            </MotionPaper>
          </Grid>
        ))}
      </Grid>

      {/* Social Media Section */}
      <MotionPaper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        elevation={0}
        sx={{
          p: 6,
          mb: 8,
          textAlign: 'center',
          borderRadius: 4,
          background: 'linear-gradient(135deg, #1976d2 0%, #64b5f6 100%)',
          color: 'white',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          Connect With Us
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            flexWrap: 'wrap',
            mb: 4,
          }}
        >
          {socialLinks.map((social, index) => (
            <IconButton
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                bgcolor: 'rgba(255,255,255,0.1)',
                color: 'white',
                p: 2,
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.2)',
                  transform: 'translateY(-4px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              {social.icon}
            </IconButton>
          ))}
        </Box>
        <Typography variant="h6" sx={{ opacity: 0.9 }}>
          Follow us on social media for updates and learning tips
        </Typography>
      </MotionPaper>

      {/* Contact Information */}
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        sx={{
          textAlign: 'center',
          mb: 8,
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          Get in Touch
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Email: contact@abacuslearning.com
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Phone: +1 (555) 123-4567
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Address: 123 Learning Street, Education City, ST 12345
        </Typography>
      </MotionBox>
    </Container>
  );
}; 