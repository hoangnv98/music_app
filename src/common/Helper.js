/**
 * All common function
 * @author hoangnv
 * @since 2021
 * @version 0.0.1
 */

import {
  Platform,
  StatusBar,
  Dimensions,
  Linking,
  PixelRatio,
} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

const GuidelineBase = {
  WIDTH: 375,
  HEIGHT: 812,
};
const IphoneHeight = {
  IPHONE_X: 812,
  IPHONE_XR: 896,
  IPHONE_XS: 896,
  IPHONE_XSMAX: 896,
  IPHONE_SE: 568,
};
const pixelRatio = PixelRatio.get();
export const Screen = Dimensions.get('window');
export const ScreenWidth = Screen.width;
export const ScreenHeight = Screen.height;

export function getWidth(width) {
  return widthPercentageToDP((width / GuidelineBase.WIDTH) * 100);
}

export function getHeight(height) {
  return heightPercentageToDP((height / GuidelineBase.HEIGHT) * 100);
}

export function normalize(size) {
  if (pixelRatio >= 2 && pixelRatio < 3) {
    // iphone 5s and older Androids
    if (ScreenWidth < 360) {
      return size * 0.95;
    }

    // iphone 5
    if (ScreenWidth < 667) {
      return size;
      // iphone 6-6s
    }

    if (ScreenHeight >= 667 && ScreenHeight <= 735) {
      return size * 1.15;
    }
    // older phablets
    return size * 1.25;
  }

  if (pixelRatio >= 3 && pixelRatio < 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (ScreenWidth <= 360) {
      return size;
    }

    // Catch other weird android width sizings
    if (ScreenHeight < 667) {
      return size * 1.15;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }

    if (ScreenHeight >= 667 && ScreenHeight <= 735) {
      return size * 1.2;
    }

    // catch larger devices
    // ie iphone 6s plus / 7 plus / mi note 等等
    return size * 1.27;
  }

  if (pixelRatio >= 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (ScreenWidth <= 360) {
      return size;
      // Catch other smaller android height sizings
    }

    if (ScreenHeight < 667) {
      return size * 1.2;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }

    if (ScreenHeight >= 667 && ScreenHeight <= 735) {
      return size * 1.25;
    }

    // catch larger phablet devices
    return size * 1.4;
  }

  return size;
}

export function hasNotch() {
  return detectIphone();
}

export function isIPhoneSE(dim) {
  return dim.height === IphoneHeight.IPHONE_SE;
}

export function isIPhoneX(dim) {
  return dim.height === IphoneHeight.IPHONE_X;
}

export function isIPhoneXs(dim) {
  return dim.height === IphoneHeight.IPHONE_XS;
}

export function isIPhoneXsMax(dim) {
  return dim.height === IphoneHeight.IPHONE_XSMAX;
}

export function isIPhoneXr(dim) {
  return dim.height === IphoneHeight.IPHONE_XR;
}

export function getStatusBarHeight() {
  return Platform.select({
    ios: hasNotch() ? 44 : 30,
    android: StatusBar.currentHeight,
  });
}

export function parseUrl(url) {
  var match = url.match(
    /^(https?:)\/\/(([^:/?#]*)(?::([0-9]+))?)([/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/,
  );
  return (
    match && {
      href: url,
      protocol: match[1],
      host: match[2],
      hostname: match[3],
      port: match[4],
      pathname: match[5],
      search: match[6],
      hash: match[7],
    }
  );
}

export function openURL(url) {
  Linking.openURL(url);
}

export function openPhoneCall(phone) {
  let phoneCall = Platform.OS === 'ios' ? 'telprompt:' + phone : 'tel:' + phone;
  Linking.openURL(phoneCall);
}

export function openEmailApp(email) {
  let emailTo = 'mailto:' + email;
  Linking.openURL(emailTo);
}

export function renderIf(condition, content) {
  return condition ? content : null;
}

export function calculateDistance(
  latSource,
  longSource,
  latDestination,
  longDestination,
) {
  var R = 6371;
  var dLat = degToRad(latDestination - latSource);
  var dLong = degToRad(longDestination - longSource);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degToRad(latSource)) *
      Math.cos(degToRad(latDestination)) *
      Math.sin(dLong / 2) *
      Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

export function buildQueryParams(params) {
  let encodedURI = encodeURIComponent;
  return Object.keys(params)
    .map(k => encodedURI(k) + '=' + encodedURI(params[k]))
    .join('&');
}

export function removeVietnameseTones(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
  str = str.replace(/Đ/g, 'D');
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
  str = str.replace(/\u02C6|\u0306|\u031B/g, '');
  str = str.replace(/ + /g, ' ');
  str = str.trim();
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|=|<|>|\?|\/|,|\.|:|;|'|"|&|#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    ' ',
  );
  return str;
}

function detectIphone() {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (isIPhoneX(Screen) ||
      isIPhoneXr(Screen) ||
      isIPhoneXs(Screen) ||
      isIPhoneXsMax(Screen))
  );
}

function degToRad(deg) {
  return deg * (Math.PI / 180);
}
