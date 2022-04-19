import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-api';
  data:[] = [];

  constructor(private apiService: ApiService) {}

  obterMeiosDePagamento(){
    this.apiService.obterTodos()
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }


}
