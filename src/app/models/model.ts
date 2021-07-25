import {FormControl, Validators} from "@angular/forms";

export interface IResult {
 repoName: string;
 repoAvatar: string
}

export interface IServerDataItem {
  name: string;
  owner: {
    avatar_url:string
  }
}


export interface IRadio {
  id: string;
  desc: string;
}
  export enum IHttpType {
  post = 'post',
  put = 'put',
  get = 'get',

}
export interface IERROR {
  [key: string]: string;
}
export interface Idata {
  lastName: string;
  email: string;
  location: string;
  language: string;
  phone: string;
  years: string;
  division: string;
   role: string;

}


