export const formatModules = (modules, except = []) => {
  return Object.keys(modules).reduce((accumulator, moduleName) => {
    if (!~except.indexOf(moduleName))
      accumulator[moduleName] = modules[moduleName];
    return accumulator;
  }, {});
};

export const formatToNamespaces = (modules, except = []) => {
  return Object.keys(modules).reduce((accumulator, moduleName) => {
    if (!~except.indexOf(moduleName)) {
      const subStringModuleIndex = moduleName.lastIndexOf('Module');
      const streamlinedModuleName = moduleName.substr(0, subStringModuleIndex);

      accumulator[streamlinedModuleName] = moduleName;
    }
    return accumulator;
  }, {});
};
