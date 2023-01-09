import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import { Login } from './login';

export default function App({ Component, pageProps }: AppProps) {
  const [user] = useAuthState(auth);

  if (!user) return <Login />;

  return <Component {...pageProps} />;
}
