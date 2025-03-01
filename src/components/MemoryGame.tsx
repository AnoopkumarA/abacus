import React, { useState } from 'react';
import {
  Box,
  Container,
  TextField,
  Button,
  Paper,
  Typography,
  CircularProgress,
} from '@mui/material';
import { Send as SendIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { query } from '../utils/huggingface';

const MotionPaper = motion(Paper);

export const MemoryGame = () => {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    const formattedPrompt = `Create a short story based on these keywords: ${userMessage}. The story should be easily understandable and meaningful, must be within 2-3 sentences.`;
    setInput('');
    setLoading(true);

    // Add user message to chat
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    try {
      // Get AI response
      const response = await query(formattedPrompt);
      
      // Add AI response to chat
      if (response.includes("Sorry, I'm having trouble connecting") || response.includes("Sorry, the AI service is not")) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: 'The AI service is currently experiencing issues. Please try again in a few moments.' 
        }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      }
    } catch (error) {
      console.error('Error getting AI response:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }]);
    }

    setLoading(false);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <MotionPaper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        elevation={3}
        sx={{
          p: 3,
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            textAlign: 'center',
            background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontWeight: 'bold',
          }}
        >
          Memory Game AI Assistant
        </Typography>

        {/* Chat Messages */}
        <Box
          sx={{
            flex: 1,
            mb: 3,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              sx={{
                alignSelf: message.role === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '80%',
              }}
            >
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  background: message.role === 'user' 
                    ? 'linear-gradient(45deg, #2196F3, #21CBF3)' 
                    : 'white',
                  color: message.role === 'user' ? 'white' : 'inherit',
                  borderRadius: 2,
                }}
              >
                <Typography>{message.content}</Typography>
              </Paper>
            </Box>
          ))}
          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
              <CircularProgress size={24} />
            </Box>
          )}
        </Box>

        {/* Input Area */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Ask me anything about memory games and learning..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                background: 'white',
              },
            }}
          />
          <Button
            variant="contained"
            onClick={handleSend}
            disabled={loading || !input.trim()}
            sx={{
              background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(45deg, #1976D2, #00B4D8)',
              },
            }}
          >
            <SendIcon size={20} />
          </Button>
        </Box>
      </MotionPaper>
    </Container>
  );
};

export default MemoryGame;
