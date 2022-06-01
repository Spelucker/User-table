import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface User {
  id?: number
  name: string
  username: string
  email: string
}

@Injectable({providedIn: 'root'})

export class TableUserService {
  constructor(private http: HttpClient) {

  }
  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }


}
