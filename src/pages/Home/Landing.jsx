import { Navigate } from 'react-router-dom';
import LockScreen from './LockScreen';
import useResize from '../../hooks/useResize';

function Landing() {
  const isMobile = useResize();

  return isMobile ? <LockScreen /> : <Navigate to="/home" />;
}

export default Landing;
