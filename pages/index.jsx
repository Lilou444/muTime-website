import Button from '@material-ui/core/Button';
import axios from 'axios';
import Head from 'next/head';
import React from 'react';

import LoginForm from '../components/LoginForm';

const Index = ({ removeToken, setShowExpirationNotice, token }) => {
  const [firstname, setFirstname] = React.useState('');

  React.useEffect(() => {
    const getFirstname = async () => {
      if (token) {
        try {
          const result = await axios.get(
            'https://mutime-api.herokuapp.com/users/self',
            { headers: { Authorization: `Bearer ${token}` } },
          );
          setFirstname(result.data.firstname);
        } catch (err) {
          // won't process
        }
      }
    };

    getFirstname();
  }, [token]);

  return (
    <div>
      <Head>
        <title>muTime - Accueil</title>
      </Head>
      <center>
        {!token
          ? <LoginForm setShowExpirationNotice={setShowExpirationNotice} />
          : (
            <>
              <p>
                Bienvenue
                {' '}
                {firstname}
              </p>
              <Button
                color="primary"
                onClick={() => removeToken()}
                type="button"
                variant="contained"
              >
                Déconnexion
              </Button>
            </>
          )}
      </center>
    </div>
  );
};

export default Index;
