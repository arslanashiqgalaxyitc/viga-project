import React from 'react';
import ReactDOM from 'react-dom/client';
import { MaterialDesignContent, SnackbarProvider } from 'notistack';
import { ThemeProvider, styled } from '@mui/material';
import theme from 'theme';
import App from './App';
import reportWebVitals from './reportWebVitals';

// css
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/mui.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-success': {
    backgroundColor: theme.palette.primary.main,
  },
}));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={4}
        transitionDuration={100}
        autoHideDuration={3000}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        Components={{
          success: StyledMaterialDesignContent,
        }}
      >
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
