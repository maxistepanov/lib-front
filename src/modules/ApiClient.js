import Api from './Api';

const getCatalog = async (categoryId) => Api.get('catalog/card');

const getMenu = async () => Api.get('menu');

const getPosts = async () => Api.get('posts');

const getPostBySlug = async (slug) => Api.get(`posts/${slug}`);

export { getCatalog, getMenu, getPosts, getPostBySlug };
