import { schema } from 'normalizr';

const menu = new schema.Entity('items');
export const mainSchema = { items: [menu] };
