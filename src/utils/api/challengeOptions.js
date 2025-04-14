import challengeAPI from './challengeAPI';

const challengeOptions = {
  challengeList: () => ({
    queryKey: ['challenge', 'list'],
    queryFn: () => challengeAPI.challengeList(),
  }),
  challenge: (id) => ({
    queryKey: ['challenge', id],
    queryFn: () => challengeAPI.challenge(id),
  }),
};

export default challengeOptions;
