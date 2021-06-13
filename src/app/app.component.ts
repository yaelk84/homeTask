import {Component, OnInit} from '@angular/core';
import {AppInitService} from './services/api.init';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  title = 'github';
  isLogin = false
  constructor(private appInitService: AppInitService) {}
  ngOnInit(): void {

    this.appInitService.Init().subscribe((isLogin) =>{

      this.isLogin = isLogin;
    });

  }
}
