import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    accept: 'application/json',
  },
});

const challengeAPI = {
  challengeList: async () => {
    const { data } = await instance.get('/api/challenges');
    return data;
  },
  challenge: async (id) => {
    const { data } = await instance.get(`/api/challenges/${id}`);
    return data;
  },
};

export default challengeAPI;
