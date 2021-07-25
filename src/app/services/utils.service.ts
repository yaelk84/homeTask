import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {IERROR} from "../models/model";

export class UtilsService {

  constructor() { }

  public getErrorMsg(formControl: FormControl, errors: IERROR): string {
    if (formControl.errors && errors) {
      for (const errorKey in formControl.errors) {
        if (errors[errorKey]) {
          return errors[errorKey];
        }
      }
    }
    return null;
  }
  public markAllDirty(form: FormGroup){
    Object.keys(form.controls).forEach((controlKey) => {
      form.controls[controlKey].markAsDirty();

    });

  }


}
