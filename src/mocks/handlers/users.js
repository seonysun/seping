import { delay, http, HttpResponse } from 'msw';
import { users } from '../datas/users';

const userHandler = [
  http.get('/api/posts', async () => {
    await delay(1000);
    return HttpResponse.json(users, { status: 200 });
  }),
];

export default userHandler;
