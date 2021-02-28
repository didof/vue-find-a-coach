import Formatter from './Formatter';

const registerComponents = (app, componentsList) => {
  Object.entries(componentsList).forEach(
    ([componentName, componentReference]) => {
      const kebab = Formatter.fromCamelCaseToKebab(componentName);
      app.component(kebab, componentReference);
    }
  );
};

export default registerComponents;
