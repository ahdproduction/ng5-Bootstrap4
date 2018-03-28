import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
// import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
        console.log(data);
    });
}

  public getJSON(): Observable<any> {
    return this.http.get('../assets/dummy-data/movies.json');
}

}
