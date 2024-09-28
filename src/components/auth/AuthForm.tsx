import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { useState } from 'react';
import { loginUser } from './service';
import '../../styles/components/Auth.styles.scss';

function AuthComponent() {
  const [username, setUsername] = useState('login');
  const [password, setPassword] = useState('password');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await loginUser({ username, password });
    setPassword('');
    setUsername('');
    if (response) {
      sessionStorage.setItem('token', response.accessToken);
      console.log(sessionStorage.getItem('token'));
      location.reload();
    }
  };

  return (
    <div className="wrapper">
      <div>
        <h1>Вход</h1>
        <div>
          <form className="form" onSubmit={e => handleLogin(e)}>
            <label htmlFor="email">Login</label>
            <InputText
              id="email"
              placeholder="Your e-mail"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <Password
              id="password"
              placeholder="your password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              label="Войти"
              // onClick={handleLogin}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthComponent;
