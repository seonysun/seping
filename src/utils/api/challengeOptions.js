import challengeAPI from './challengeAPI';

const challengeOptions = {
  challengeList: () => ({
    queryKey: ['challenge', 'list'],
    queryFn: () => challengeAPI.challengeList(),
  }),
};

export default challengeOptions;
