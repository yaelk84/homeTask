import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {finalize} from 'rxjs/operators';
import {HomeService} from './home.service';
import {IERROR, IRadio, IResult} from '../../models/model';
import {CONSTANTS} from '../../constants';
import {Router} from '@angular/router';
import {DropdownItem} from "../../shared/components/dropdown/dropdown.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UtilsService} from "../../services/utils.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public divisionRadio: IRadio[];
public fullWidth = false;
  public errors: IERROR = {required: 'field is required'};
  public years: IRadio[] = [ {id: '1-3', desc: '1-3'}, {id: '4-6', desc: '4-6'},{id: '7-10', desc: '7-10'}, {id: '11-20', desc: '11-20'} , {id: '20+', desc: '20+'}];
  public dropdownItems: DropdownItem[] = [
    new DropdownItem(1, 'option-1'),
    new DropdownItem(2, 'option-2'),
    new DropdownItem(3, 'option-3'),
    new DropdownItem(4, 'option-4'),
  ];
  public formData: FormGroup;


  constructor(private  homeService: HomeService,private utils: UtilsService) {
  }

  ngOnInit() {
    this.homeService.getDivisions().pipe(
      finalize(() => {


      })
    ).subscribe((data => {
      this.divisionRadio = data;
      this.createFormData();
      console.log("didvison", this.divisionRadio)
    }));

  }

  public createFormData(): void {
    this.formData = new FormGroup({
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      language: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      years: new FormControl('', Validators.required),
      division: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required)
    })

  }

  submit() {
    console.log(this.formData.value);
    this.utils.markAllDirty(this.formData);
  }


}
