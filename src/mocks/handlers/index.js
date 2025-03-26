import postHandler from './posts';
import userHandler from './users';

const handlers = [...postHandler, ...userHandler];

export default handlers;
