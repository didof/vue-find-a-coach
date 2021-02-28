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

  static fromKebabToCamelCase = input => {
    let transformToUpperCase = false;
    return input
      .toLowerCase()
      .split('')
      .reduce((output, character, index) => {
        switch (character) {
          case '-':
            transformToUpperCase = true;
            break;
          default:
            if (index === 0) {
              output += character.toUpperCase();
              break;
            }

            if (transformToUpperCase) {
              output += character.toUpperCase();
              transformToUpperCase = false;
            } else {
              output += character;
            }
        }

        return output;
      }, '');
  };
}
