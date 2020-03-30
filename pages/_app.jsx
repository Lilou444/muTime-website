import LinearProgress from '@material-ui/core/LinearProgress';
import Alert from '@material-ui/lab/Alert';
import axios from 'axios';
import React from 'react';
import { useCookies } from 'react-cookie';

import Navbar from '../components/navbar/Navbar';
import useInterval from '../hooks/useInterval';

const App = ({ Component, pageProps }) => {
  const [showExpirationNotice, setShowExpirationNotice] = React.useState(false);

  const [{ token },, removeCookie] = useCookies(['token']);

  const removeToken = () => removeCookie('token');

  useInterval(
    () => {
      const checkLogin = async () => {
        if (token) {
          try {
            await axios.post(
              'https://mutime-api.herokuapp.com/auth/ping',
              {},
              { headers: { Authorization: `Bearer ${token}` } },
            );
          } catch (err) {
            setShowExpirationNotice(true);
            removeCookie('token');
          }
        }
      };

      checkLogin();
    }, 5000,
  );

  return (
    <>
      <Navbar />
      {
        showExpirationNotice && (
        <>
          <Alert severity="warning" style={{ marginTop: '1em' }}>
            Votre session a expiré, redirection vers l&apos;accueil
          </Alert>
          <LinearProgress />
        </>
        )
      }
      <Component
        {...pageProps}
        removeToken={removeToken}
        token={token}
      />
    </>
  );
};

export default App;
