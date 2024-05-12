import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function index() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack>
        <Typography variant="h3">Page Not Found</Typography>
        <Button
          onClick={() => {
            navigate('/');
          }}
        >
          Go to Dashboard
        </Button>
      </Stack>
    </Box>
  );
}

export default index;
