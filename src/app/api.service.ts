import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { IMeiosPagamento } from './IMeiosPagamento';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private httpClient: HttpClient) { }

  obterTodos() {
    return this.httpClient.get<IMeiosPagamento[]>(`${API_PATH}vendas`).toPromise();
  }
}
