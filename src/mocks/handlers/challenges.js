import { delay, http, HttpResponse } from 'msw';
import { challenges } from '../datas/challenges';

const challengeHandler = [
  http.get('http://localhost:3000/api/challenges', async () => {
    await delay(1000);
    return HttpResponse.json(challenges, { status: 200 });
  }),
];

export default challengeHandler;
