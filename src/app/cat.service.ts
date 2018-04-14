import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface Cat {
  name: string;
}

@Injectable()
export class CatService {

  constructor(private http: HttpClient) { }

  getAllCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>('http://localhost:3000/catApi/cats');
  }

  getCat(name: string): Observable<Cat> {
    return this.http.get<Cat>('http://localhost:3000/catApi/cats/:' + name);
  }

  insertCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>('http://localhost:3000/catApi/cats/', cat);
  }

  updateCat(cat: Cat): Observable<void> {
    return this.http.put<void>('http://localhost:3000/catApi/cats/:' + cat.name, cat);
  }

  deleteCat(name: string) {
    return this.http.delete('http://localhost:3000/catApi/cats/:' + name);
  }

}
