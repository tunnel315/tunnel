'use strict';

const request = require('request');
const rp =require('request-promise');
const logger = require('./logger');


// options {
//   uri : 'xxxx',
//   qs  : {
//     access_token :'xxxx', //uri+'?access_token='xxx'
//   },
//   headers : {
//     'User-Agent' : 'xxxx',
//   },
//   json : true, // Automatically parses the JSON string in the response
// }




function sendRequest(options){
  return new Promise((resolve,reject) => {
    rp(options)
      .then((body) => {
        if (typeof body === 'string') {
            body = JSON.parse(body);
        };
        resolve(body);
      })
      .catch ((err) => {
        logger.error(err)
        resolve(err.response)
      })
  });
}


/**
 * get request with url
 */

function get(uri, params, headers) {
    let contentType = {}, query = '';
    headers = headers ? Object.assign(contentType, headers) : contentType;
    for(let key in params){
        if(query){
            params[key] && (query += '&' + key + '=' + encodeURIComponent(params[key]));
        }else{
            params[key] && (query += '?' + key + '=' + encodeURIComponent(params[key]));
        }
    }
    query && (uri = uri + query);
    let opt = {
        uri: uri, method: 'get', json: true, headers: headers
    };
    return sendRequest(opt);
}

/**
 * request with content-type : application/json
 */
function jsonTransfer(url, method, body, headers) {
    let contentType = {};
    headers = headers ? Object.assign(contentType, headers) : contentType;
    let opt = {
        uri: url, method: method ? method : 'get', json: true, body: body, headers: headers
    };
    return sendRequest(opt);
}


/**
 * request with content-type : application/x-www-form-urlencoded
 */
function formTransfer(url, method, form, headers) {
    let contentType = {'content-type': 'application/x-www-form-urlencoded'};
    headers = headers ? Object.assign(contentType, headers) : contentType;
    let opt = {
        uri: url, method: method ? method : 'get', form: form, headers: headers
    };
    return sendRequest(opt);
}

/**
 * request with content-type : multipart/form-data
 */

function formDataTransfer(url, method, form, headers) {
    let contentType = {'content-type': 'multipart/form-data'};
    headers = headers ? Object.assign(contentType, headers) : contentType;
    let opt = {
        uri: url, method: method ? method : 'post', formData: form, headers: headers
    };
    return sendRequest(opt);
}

module.exports = {
    get: get,
    jsonTransfer: jsonTransfer,
    formTransfer: formTransfer,
    formDataTransfer: formDataTransfer
};
