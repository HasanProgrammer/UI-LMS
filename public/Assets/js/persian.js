'use strict';

String.prototype.replaceAll = function (mapObj) {
  var regex = new RegExp(Object.keys(mapObj).join('|'), 'gi');
  var str = this;
  return str.replace(regex, function (key) {
    return mapObj[key];
  });
};

function replaceArabicToPersian(str) {
  var arabicSignsCharCode = Array(21).fill(0).map(function (e, i) {
    return i + 1611;
  });

  for (var i = 0; i < arabicSignsCharCode.length; i += 1) {
    str = str.replace(new RegExp(String.fromCharCode(arabicSignsCharCode[i]), 'g'), '');
  }

  var charMap = {
    'ي': 'ی',
    'ى': 'ی',
    'ك': 'ک',
    '‍': '',
    '‌': '',
    '٠': '۰',
    '١': '۱',
    '٢': '۲',
    '٣': '۳',
    '٤': '۴',
    '٥': '۵',
    '٦': '۶',
    '٧': '۷',
    '٨': '۸',
    '٩': '۹'
  };
  return str.replaceAll(charMap);
}

function replaceEnglishToPersian(str) {
  var charMap = {
    '0': '۰',
    '1': '۱',
    '2': '۲',
    '3': '۳',
    '4': '۴',
    '5': '۵',
    '6': '۶',
    '7': '۷',
    '8': '۸',
    '9': '۹'
  };
  return str.replaceAll(charMap);
}

function replacePersianToEnglish(str) {
  var charMap = {
    '۰': '0',
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9'
  };
  return str.replaceAll(charMap);
}

function toPersian(input) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$arabic = _ref.arabic,
      arabic = _ref$arabic === undefined ? true : _ref$arabic,
      _ref$english = _ref.english,
      english = _ref$english === undefined ? true : _ref$english;

  if (typeof input !== 'string' && typeof input !== 'number') {
    throw new TypeError('INPUT_MUST_BE_NUMBER_OR_STRING');
  }
  var result = String(input);
  if (arabic) {
    result = replaceArabicToPersian(result);
  }
  if (english) {
    result = replaceEnglishToPersian(result);
  }
  return result;
}

function toEnglish(input) {
  if (typeof input !== 'string' && typeof input !== 'number') {
    throw new TypeError('INPUT_MUST_BE_NUMBER_OR_STRING');
  }
  return replacePersianToEnglish(String(input));
}

module.exports = {
  toPersian: toPersian,
  toEnglish: toEnglish
};