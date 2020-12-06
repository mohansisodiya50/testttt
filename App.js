import React, { useContext, useEffect, useState } from 'react';
import { Router } from 'react-router-dom';
import Routes from './Routes';
import { createBrowserHistory } from 'history';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { LocationContext } from 'context';

const history = createBrowserHistory();

function AppComponent() {
  const [,updateLocation] = useContext(LocationContext);

  useEffect(() => {
      fetch('https://ipapi.co/json/').then(async (response) => {
          let data = await response.json();
          updateLocation(data.country === 'US' ? 'US' : 'OUS');
      }).catch((error) => {
          console.log(error);
      });
  },[])
  
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'brandon-grotesque, sans-serif',
      ].join(','),
      h3: {
        color: "#FF0000"
      },
      h6: {
        fontSize: "1rem",
        color: "#FF0000",
      }
    },
    palette: {
      primary: {
        main: '#FFFFFF',
      },
    },

  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Routes />
        </Router>
      </ThemeProvider>
    </div>
  );
}

const App = () => {
  const userLocation = useState(LocationContext)
  return (
    <LocationContext.Provider value={userLocation}>
      <AppComponent />
    </LocationContext.Provider>
  )
}

export default App;
