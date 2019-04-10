// API请求正常，数据正常
export const ERR_OK = '200';
// API请求正常，数据异常
export const ERR_DATA = 1;
// API请求正常，登录异常
export const ERR_LOGIN = 2;
// API请求异常
export const API_FAILED = '网络连接异常，请稍后再试';

const API_DOMAIN = 'http://localhost/v1.1/';
export const API_LIST = {
  // 用户登录
  USER_SIGNIN: API_DOMAIN + 'user/signin'
};

/*
 * AJAX请求状态
 */
export const DATA_STATUS_INIT = 0;
export const DATA_STATUS_OK = 1;
export const DATA_STATUS_LOADING = 2;
export const DATA_STATUS_ERROR = 3;
export const DATA_STATUS_NO_DATA = 4;
