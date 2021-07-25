import { Component, OnInit } from '@angular/core';
import {finalize} from 'rxjs/operators';
import {HomeService} from './home.service';
import {IERROR, IRadio, IResult} from '../../models/model';
import {DropdownItem} from '../../shared/components/dropdown/dropdown.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UtilsService} from '../../services/utils.service';
import {RadioItem} from "../../shared/components/radio/radio.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

public dataWasLoad = false;
  public fullWidth = false;
  public divisionRadio: RadioItem[];
  public errors: IERROR = {required: 'field is required'};
   public dropdownItems: DropdownItem[] = [
    new DropdownItem(1, 'option-1'),
    new DropdownItem(2, 'option-2'),
    new DropdownItem(3, 'option-3'),
    new DropdownItem(4, 'option-4'),
  ];
  public years: RadioItem[] = [
    new RadioItem('1-3', '1-3'),
    new RadioItem('4-6', '4-6'),
    new RadioItem('7-10', '7-10'),
    new RadioItem('11-20', '11-20'),
    new RadioItem('20+', '20+'),

  ];
  public formData: FormGroup;


  constructor(private  homeService: HomeService, private utils: UtilsService) {
  }

  ngOnInit() {
    this.homeService.getDivisions().pipe(
      finalize(() => {
    this.dataWasLoad = true;

      })
    ).subscribe((data => {
      this.divisionRadio = data;
      this.createFormData();

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

    this.utils.markAllDirty(this.formData);
    if(this.formData.valid){
      this.homeService.submit(this.formData.value).subscribe(data => {console.log('succesee'); });


    }
  }


}
