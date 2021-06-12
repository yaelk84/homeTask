import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {finalize} from 'rxjs/operators';
import {HomeService} from './home.service';
import {IResult} from '../../models/model';
import {CONSTANTS} from '../../constants';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public results: IResult[];
  public inputSearch:string = '';

  constructor(private  homeService: HomeService, private router: Router) { }

  ngOnInit() {


  }
  public bookmarkResult(item: IResult): void{
    this.homeService.addToBookMark(item);
  }
  public goToBookmark(){
    this.router.navigate([CONSTANTS.ROUTES.BOOKMARK], );
  }
  public goSearch(): void{
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
