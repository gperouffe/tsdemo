import { Component, AfterViewInit } from '@angular/core';
import { UserApiService } from './services/user-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  constructor(private userApi: UserApiService){}

  ngAfterViewInit(): void {
    this.userApi.get().subscribe(
      users => console.log(users),
      err => console.log(err)
    );
  }

}
