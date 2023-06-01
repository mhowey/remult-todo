import { remultExpress } from 'remult/remult-express';
import { Task } from '../shared/Task'
import { Post } from '../shared/Post'

export const api = remultExpress({
  entities: [Task, Post]
});