import Api from './Api';

const catalog = async (categoryIв) => {
  const categories = await Api.get('catalog/card');
  console.log('categories', categories);
  return categories;
};

export { catalog };
