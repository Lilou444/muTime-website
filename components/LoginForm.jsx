import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import axios from 'axios';
import React from 'react';
import { useCookies } from 'react-cookie';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginForm = () => {
  const classes = useStyles();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [alert, setAlert] = React.useState('');

  const [, setCookie] = useCookies(['token']);

  const validForm = () => username.trim().length > 0 && password.trim().length > 0;

  const handleError = (error) => {
    const { data } = error.response;

    switch (data.statusCode) {
      case 404:
        setAlert('Utilisateur non trouvé');
        break;
      case 403:
        setAlert("Mauvaise combinaison nom d'utilisateur / mot de passe");
        break;
      default:
        setAlert('Une erreur est survenue');
        break;
    }
  };

  const handleSuccess = (result) => {
    setAlert('');

    setCookie('token', result.data.token);
  };

  const handleLogin = async () => {
    try {
      const result = await axios.post(
        'https://mutime-api.herokuapp.com/auth/login',
        { username, password },
      );

      handleSuccess(result);
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className={classes.paper}>
      {alert !== '' && <Alert severity="error">{alert}</Alert>}
      <form className={classes.form} method="post" noValidate>
        <TextField
          fullWidth
          id="username"
          label="Nom d'utilisateur"
          margin="normal"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          fullWidth
          id="password"
          label="Mot de passe"
          margin="normal"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
        />
        <Button
          className={classes.submit}
          color="primary"
          disabled={!validForm()}
          fullWidth
          onClick={() => handleLogin()}
          type="button"
          variant="contained"
        >
          Connexion
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
