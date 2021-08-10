import axios from 'axios';
import {Config} from '@config/index';
import {lang} from '@assets/language/i18n';
import {sprintf} from 'sprintf-js';
import Toast from 'react-native-simple-toast';

export const Request = {
  header(hasFile = false) {
    let header_data = {};
    header_data = {
      'Content-Type': hasFile ? 'multipart/form-data' : 'application/json',
      languageCode: Config.languageCode,
    };

    let token = {
      Authorization: 'Bearer ' + Config.accessToken,
    };

    header_data = {...header_data, ...token};
    return axios.create({
      baseURL: Config.baseUrl,
      timeout: Config.timeOut,
      headers: header_data,
    });
  },

  async get(url, _params = null) {
    return new Promise(async (rs, rj) => {
      try {
        let header = this.header();
        _params
          ? rs(await header.get(url, {params: _params}))
          : rs(await header.get(url));
      } catch (error) {
        let apiErr = error.response.data.apierror;
        let errorShow = {};
        apiErr.errorList?.forEach(e => {
          errorShow[e.item] = sprintf(lang(`errorCode.${e.errorCode}`), e.item);
        });
        Toast.show(errorShow.user && errorShow.user);
        rj(error);
      }
    });
  },

  async post(url, json) {
    return new Promise(async (rs, rj) => {
      try {
        let header = this.header();
        rs(await header.post(url, json));
      } catch (error) {
        let apiErr = error.response.data.apierror;
        let errorShow = {};
        apiErr.errorList?.forEach(e => {
          errorShow[e.item] = sprintf(lang(`errorCode.${e.errorCode}`), e.item);
        });
        Toast.show(errorShow.user && errorShow.user);
        rj(error);
      }
    });
  },

  async uploadImage(url, photo, json, fieldNameOfFile) {
    const data = new FormData();
    if (photo && photo.fileName && photo.type) {
      data.append(fieldNameOfFile ? fieldNameOfFile : 'file', {
        name: photo.fileName,
        uri: photo.uri,
        type: photo.type,
      });
    }

    Object.keys(json).forEach(key => {
      if (Array.isArray(json[key])) {
        json[key].forEach(e => {
          data.append(key + '[]', JSON.stringify(e));
        });
      } else if (typeof json[key] === 'object') {
        data.append(key, JSON.stringify(json[key]));
      } else {
        data.append(key, json[key]);
      }
    });

    return new Promise(async (rs, rj) => {
      try {
        let header = this.header(true);
        rs(await header.post(url, data));
      } catch (error) {
        let apiErr = error.response.data.apierror;
        let errorShow = {};
        apiErr.errorList?.forEach(e => {
          errorShow[e.item] = sprintf(lang(`errorCode.${e.errorCode}`), e.item);
        });
        Toast.show(errorShow.user && errorShow.user);
        rj(error);
      }
    });
  },
};
