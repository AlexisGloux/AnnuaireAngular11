import {Inject, InjectionToken} from '@angular/core';

export class Service1 {}

export class Service2 {}

export class Service3 {
  constructor(private service1: Service1, @Inject(Service2) private service2, @Inject(API_URL_TOKEN) private apiUrl) {}
}

export const API_URL = 'http://api.dawan.fr';
export const API_URL_TOKEN =  new InjectionToken('app.api-url');

export class Service4 {
  constructor(param) {}
}

export const service4Factory = (options) => {
  const arg = 'un traitement' + options;
  return new Service4(arg);
};
