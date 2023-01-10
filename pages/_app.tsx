import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { Login } from './login';
import { Loading } from '../components/Loading';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    const setUser = async () => {
      if (user) {
        await setDoc(
          doc(db, 'users', user.uid),
          {
            email: user.email,
            lastSeen: serverTimestamp(),
            photoURL: user.photoURL,
          },
          { merge: true }
        );
      }
    };
    setUser();
  }, [user]);

  if (loading) return <Loading />;
  if (!user) return <Login />;

  return <Component {...pageProps} />;
}
