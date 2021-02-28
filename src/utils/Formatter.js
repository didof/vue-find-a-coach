export default class Formatter {
  static isLastIndex = (index, list) => {
    return index === list.length - 1;
  };

  static fromCamelCaseToKebab = input => {
    return input.split('').reduce((output, character, index) => {
      switch (true) {
        case !isNaN(character * 1):
          output += `-${character}${this.isLastIndex(index, input) ? '' : '-'}`;
          break;
        case character === character.toUpperCase():
          output += `${index === 0 ? '' : '-'}${character.toLowerCase()}`;
          break;
        default:
          output += character;
      }

      return output;
    }, '');
  };

  static fromKebabToCamelCase = () => {};
}
