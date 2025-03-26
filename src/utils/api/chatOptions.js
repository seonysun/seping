import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    accept: 'application/json',
  },
});

const chatOptions = {
  getChatList: (pageParam = 0, limit = 10) => ({
    queryKey: ['chats', pageParam],
    queryFn: async () => {
      const { data } = await instance.get('/posts', {
        params: { pageParam, limit },
      });
      return data;
    },
  }),
  getUsers: () => ({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await instance.get('/users');
      return data;
    },
  }),
  getComments: (postId) => ({
    queryKey: ['comments', postId],
    queryFn: async () => {
      const { data } = await instance.get(`/comments?postId=${postId}`);
      return data;
    },
  }),

  updateViews: async (postId, currentViews) => {
    const { data } = await instance.patch(`/posts/${postId}`, {
      views: currentViews + 1,
    });
    return data;
  },
};

export default chatOptions;
