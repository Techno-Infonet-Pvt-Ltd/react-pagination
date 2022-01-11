import React, { Component } from 'react';
import { API_ROOT } from '../config/api-config';
import axios  from 'axios';
const baseUrl = API_ROOT;

/*
export function ServerService() {

  let loggedIn = false;
  let token;

  function setLoggedIn(loggedIn,token) {
    this.loggedIn = loggedIn;
    this.token = token;
  }

  function request(method, route, data='') {
    if (method === 'GET') {
      return this.get(route, data);
    }
    let header ={
        "Authorization": "Bearer "+this.token,
        'Content-Type':'application/json; charset=utf-8',
    };
    axios.post(baseUrl+route,{body: data},header).then((response) => {
      return response.data;
    }).catch(e => {
       return e.response.data;
    });

  }


  function get(route, data='') {

    const header = (this.loggedIn) ? { Authorization: `Bearer ${this.token}` } : undefined;

    let params = {};
    if (data !== undefined) {
      Object.getOwnPropertyNames(data).forEach(key => {
        params = params.set(key, data[key]);
      });
    }

    return this.http.get(baseUrl + route, {
      responseType: 'json',
      headers: header,
      params
    });
  }


}
/*

const ServerService {

  let loggedIn = false;
  let token: string;


  function setLoggedIn(loggedIn: boolean, token?: string) {
    this.loggedIn = loggedIn;
    this.token = token;
  }

  function request(method: string, route: string, data?: any) {
    if (method === 'GET') {
      return this.get(route, data);
    }
    let header = new HttpHeaders(
      {
      "Authorization": "Bearer "+this.token,
      'Content-Type':'application/json; charset=utf-8',
      }
    );
    // const header = (this.loggedIn) ? { Authorization: `Bearer ${this.token}` } : undefined;
    return this.http.request(method, baseUrl + route, {
      body: data,
      responseType: 'json',
      observe: 'body',
      headers: header
    });

  }

  function get(route: string, data?: any) {
    const header = (this.loggedIn) ? { Authorization: `Bearer ${this.token}` } : undefined;

    let params = new HttpParams();
    if (data !== undefined) {
      Object.getOwnPropertyNames(data).forEach(key => {
        params = params.set(key, data[key]);
      });
    }

    return this.http.get(baseUrl + route, {
      responseType: 'json',
      headers: header,
      params
    });
  }


}

*/
