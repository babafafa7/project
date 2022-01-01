import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {UserModel} from '../models/user.model';

@Injectable({providedIn:"root"})
export class UserService {
  host = environment.host + "user/";
  constructor(private http: HttpClient) {
  }

  getAllUsers():Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this.host+"all");
  }

  getUser(userID:number):Observable<UserModel>{
    return this.http.get<UserModel>(this.host + userID);
  }

  postUser(user:UserModel):Observable<UserModel>{
    return this.http.post<UserModel>(this.host + "add",user);
  }

  putUser(user:UserModel):Observable<UserModel>{
    return this.http.put<UserModel>(this.host + user.id + "/update", user);
  }

  deleteUser(user:UserModel):Observable<String>{
    return this.http.delete<String>(this.host + user.id);
  }

  searchUsers(search:string):Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this.host + "search?search=" + search)
  }

}
