import React from 'react';
import {Text} from 'react-native';
import {lang} from '@assets/language/i18n';
import {Style} from './Style';
import {sprintf} from 'sprintf-js';

export function showErrorField(text) {
  return text && <Text style={Style.validationText}>{text}</Text>;
}

export function validateForm(rules) {
  let errors = {};
  rules.map(val => {
    errors[val.key] = validateItem(val.value, val.rules, val.label);
  });
  cleanObject(errors);
  return errors;
}

export function stringFormat(fmtstr) {
  var args = Array.prototype.slice.call(arguments, 1);
  return fmtstr.replace(/\{(\d+)\}/g, function (match, index) {
    return args[index];
  });
}

function validateItem(value, rules, label) {
  if (rules.length > 0) {
    let arrExp = rules.split('|');
    let error = '';
    for (var i = 0; i < arrExp.length; i++) {
      let elm, params, key, vParam;
      elm = arrExp[i].split('[');
      if (elm.length > 1) {
        params = elm[1].split(']');
        vParam = params[0];
      }
      key = elm[0];
      switch (key) {
        case 'required':
          error = checkEmpty(value, label);
          break;
        case 'min_length':
          error = minLength(value, vParam, label);
          break;
        case 'max_length':
          error = maxLength(value, vParam, label);
          break;
        case 'email':
          error = checkMail(value, label);
          break;
        case 'phone':
          error = checkPhone(value, label);
          break;
        case 'match':
          error = checkConfirmPassword(value, vParam, label);
          break;
        default:
          break;
      }
      if (error !== true) {
        break;
      }
    }
    return error;
  }
  return;
}

function checkEmpty(val, label) {
  if (val.trim() === '') {
    return sprintf(lang('errorCode.ERR_0001'), label);
  }
  return true;
}

function minLength(val, length, label) {
  if (val.trim() !== '' && val.length < length) {
    return sprintf(lang('errorCode.ERR_0011'), label, length);
  }
  return true;
}

function maxLength(val, length, label) {
  if (val.trim() !== '' && val.length > length) {
    return sprintf(lang('errorCode.ERR_0005'), label, length);
  }
  return true;
}

function checkConfirmPassword(value, check_value, label) {
  if (
    value.trim() !== '' &&
    check_value.trim() !== '' &&
    value.trim() !== check_value.trim()
  ) {
    return lang('errorCode.ERR_0012');
  }
  return true;
}

function checkMail(val, label) {
  if (val !== '') {
    let regex = /^(?!\.)(?!.*\.$)(?!.*?\.\.)(?!.*\.@)(?!.*@\.)[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+(\.[a-zA-Z]{2,})$/;
    let is_email = regex.test(val.trim());
    if (!is_email) {
      return lang('errorCode.ERR_0009');
    }
  }

  return true;
}
function checkPhone(val, label) {
  if (val !== '') {
    let regex = /^\+?\d{6,}\d?$/gm;
    let is_phone = regex.test(val.trim());
    if (!is_phone) {
      return lang('errorCode.ERR_0013');
    }
  }
  return true;
}

export function cleanObject(obj) {
  for (var propName in obj) {
    if (
      obj[propName] === null ||
      obj[propName] === undefined ||
      obj[propName] === true
    ) {
      delete obj[propName];
    }
  }
  return obj;
}
