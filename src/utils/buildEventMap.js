import Formatter from './Formatter';

const buildEventMap = list => {
  return list.reduce((accumulator, kebab) => {
    accumulator[Formatter.fromKebabToCamelCase(kebab)] = kebab;
    return accumulator;
  }, {});
};

export default buildEventMap;
