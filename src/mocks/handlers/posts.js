import { delay, http, HttpResponse } from 'msw';
import { posts } from '../datas/posts';

const postHandler = [
  http.get('/api/posts', async () => {
    await delay(1000);
    return HttpResponse.json(posts, { status: 200 });
  }),
];

export default postHandler;
