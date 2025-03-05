import { Link } from 'react-router-dom';
import { Button } from '../components';

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-xl">
      <h2 className="text-4xl font-bold">Error 404</h2>
      <p>존재하지 않는 페이지입니다.</p>
      <Link to="/">
        <Button text="홈으로" size="high" />
      </Link>
    </div>
  );
}

export default NotFound;
