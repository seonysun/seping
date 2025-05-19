import { delay, http, HttpResponse } from 'msw';
import { posts } from '../datas/posts';

const baseURL = 'http://localhost:3000';

const postHandler = [
  // 게시글 목록 가져오기
  http.get(`${baseURL}/api/posts`, async ({ request }) => {
    const url = new URL(request.url);
    const pageParam = Number(url.searchParams.get('pageParam')) || 0;
    const limit = Number(url.searchParams.get('limit')) || 10;

    const start = pageParam * limit;
    const end = start + limit;
    const paginatedPosts = posts.slice(start, end);

    await delay(1000);
    return HttpResponse.json(paginatedPosts, { status: 200 });
  }),

  // 조회수 증가
  http.patch(`${baseURL}/api/posts/:id/views`, async ({ params }) => {
    const { id } = params;
    const postIndex = posts.findIndex((post) => post.id === id);

    if (postIndex === -1) {
      return HttpResponse.json(
        { message: '게시글을 찾을 수 없습니다' },
        { status: 404 },
      );
    }

    posts[postIndex].views = (posts[postIndex].views || 0) + 1;

    await delay(1000);
    return HttpResponse.json(posts[postIndex], { status: 200 });
  }),

  // 게시글 조회
  http.get(`${baseURL}/api/posts/:id`, async ({ params }) => {
    const { id } = params;
    const post = posts.find((el) => el.id === id);

    await delay(1000);
    return HttpResponse.json(post, { status: 200 });
  }),

  // 게시글 추가
  http.post(`${baseURL}/api/posts`, async ({ request }) => {
    const newPost = await request.json();

    newPost.id = (posts.length + 1).toString();
    posts.push(newPost);

    await delay(1000);
    return HttpResponse.json(newPost, { status: 201 });
  }),

  // 게시글 수정
  http.patch(`${baseURL}/api/posts/:id`, async ({ request, params }) => {
    const { id } = params;
    const postIndex = posts.findIndex((post) => post.id === id);

    const updatedPostData = await request.json();

    if (postIndex === -1) {
      return HttpResponse.json(
        { message: '게시글을 찾을 수 없습니다' },
        { status: 404 },
      );
    }

    posts[postIndex] = { ...posts[postIndex], ...updatedPostData };

    await delay(1000);
    return HttpResponse.json(posts[postIndex], { status: 200 });
  }),

  // 게시글 삭제
  http.delete(`${baseURL}/api/posts/:id`, async ({ params }) => {
    const { id } = params;
    const postIndex = posts.findIndex((post) => post.id === id);

    if (postIndex === -1) {
      return HttpResponse.json(
        { message: '게시글을 찾을 수 없습니다' },
        { status: 404 },
      );
    }

    posts.splice(postIndex, 1);

    await delay(1000);
    return HttpResponse.json(
      { message: '게시글이 삭제 되었습니다' },
      { status: 200 },
    );
  }),
];

export default postHandler;
