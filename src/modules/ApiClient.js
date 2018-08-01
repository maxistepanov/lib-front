import Api from './Api';

const getCatalog = async (categoryId) => Api.get('catalog/card');

const getMenu = async () => Api.get('menu');

const getPosts = async () => Api.get('posts');

export { getCatalog, getMenu, getPosts };
