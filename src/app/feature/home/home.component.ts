import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {finalize} from 'rxjs/operators';
import {HomeService} from './home.service';
import {IResult} from '../../models/model';
import {CONSTANTS} from '../../constants';
import {Router} from '@angular/router';
import {DropdownItem} from "../../shared/components/dropdown/dropdown.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public results: IResult[];
  public inputSearch = '';
  public dropdownCtrl: FormControl = new FormControl();
  inputCtrl: FormControl = new FormControl();
  checkBocCtrl: FormControl = new FormControl();
  radioCtrl: FormControl = new FormControl();
  public dropdownItems: DropdownItem[] = [
    new DropdownItem(1, 'option-1'),
    new DropdownItem(2, 'option-2'),
    new DropdownItem(3, 'option-3'),
    new DropdownItem(4, 'option-4'),
  ];



  constructor(private  homeService: HomeService, private router: Router) { }

  ngOnInit() {


  }
  public bookmarkResult(item: IResult): void {
    this.homeService.addToBookMark(item);
  }
  public goToBookmark(): void{
    this.router.navigate([CONSTANTS.ROUTES.BOOKMARK], );
  }
  public goSearch(): void{
    // dont fire if search empty
    const param = this.inputSearch;
    if (!param || !param.length) {
      return;
    }

    this.homeService.githubSearch(param).pipe(
      finalize(() => {



      })
    ).subscribe((data => {
      this.results = data;
    }));
  }

}
