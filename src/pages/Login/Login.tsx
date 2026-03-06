import React, { useState } from 'react';
import './styles.css';
import { useLogin } from '../../hooks/useLogin';

export default function Login() {

  type User = {
    name: string;
    password: string;
  };

  const [user, setUser] = useState<User>({ name: '', password: '' });

  const navigate = () => {
    window.location.href = "/";
  };

  const { login } = useLogin();

  const onLogin = async () => {
    await login(user.name, user.password);
    navigate();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem', maxWidth: '250px', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>
      <h2>Login Page</h2>
      <input style={{ padding: '0.5rem', borderRadius: '5px', border: 'none' }} type="text" placeholder="Username" name="name" onChange={onChange} />
      <input style={{ padding: '0.5rem', borderRadius: '5px', border: 'none' }} type="password" placeholder="Password" name="password" onChange={onChange} />
      <button className='login-btn' onClick={onLogin}>Login</button>
    </div>
  );
}
