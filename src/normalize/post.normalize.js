import { schema } from 'normalizr';

const post = new schema.Entity('posts');
export const postSchema = [post];
