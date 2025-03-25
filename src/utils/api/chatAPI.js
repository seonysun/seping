import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    accept: 'application/json',
  },
});

const chatAPI = {
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
  updateViews: (postId) => ({
    queryKey: ['updateViews', postId],
    queryFn: async () => {
      const { data } = await instance.patch(`/posts/${postId}`, {
        views: 1,
      });
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
};

export default chatAPI;
