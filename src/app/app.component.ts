import {Component, OnInit} from '@angular/core';
import {AppInitService} from './services/api.init';
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  title = 'github';
  appFinishedLoaded = false;

  constructor(private appInitService: AppInitService) {
  }

  ngOnInit(): void {

    this.appInitService.Init().pipe(finalize(() => this.appFinishedLoaded = true)).subscribe();


  }
}
