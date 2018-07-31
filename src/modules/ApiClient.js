import Api from './Api';

const getCatalog = async (categoryId) => Api.get('catalog/card');
const getMenu = async () => Api.get('menu');

export { getCatalog, getMenu };
