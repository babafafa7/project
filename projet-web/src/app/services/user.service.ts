import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {UserModel} from "../model/user.model";

@Injectable({providedIn: "root"})

export class UserService {

  private host = environment.host+"/user/";

  constructor(private http:HttpClient) {
  }
  getAllUsers():Observable<UserModel[]>{
    return this.http.get<UserModel[]>(environment.host+"/user/all");
  }

  searchUsers(keyword:string):Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.host+"search?search="+keyword);
  }

  deleteUser(id:number):Observable<void> {
    return this.http.delete<void>(this.host+id);
  }

  save(user:UserModel):Observable<UserModel> {
    return this.http.post<UserModel>(this.host+"add", user);
  }

  getUser(id:number):Observable<UserModel>{
    return this.http.get<UserModel>(this.host+id);
  }

  updateUser(user:UserModel):Observable<UserModel>{
    return this.http.put<UserModel>(this.host+user.id+"/update",user);
  }
}
