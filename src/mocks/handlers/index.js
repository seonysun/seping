import challengeHandler from './challenges';
import postHandler from './posts';
import userHandler from './users';

const handlers = [...challengeHandler, ...postHandler, ...userHandler];

export default handlers;
