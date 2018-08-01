import { normalize, schema } from 'normalizr';

const menu = new schema.Entity('items');
export const menuSchema = { items: [menu] };

// const item = new schema.Entity('menus');
// const mySchema = { items: [item] };
