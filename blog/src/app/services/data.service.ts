import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://localhost:3001';

  constructor(private http: HttpClient) {
  }

  getAll() {
	return this.http.get(this.url + '/api/posts');
  }
}

