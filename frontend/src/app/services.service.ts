import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ServicesService {
  base_url = "http://localhost:3000";

  constructor(private http: HttpClient) {}
  signup(user: any) {
    return this.http.post(`${this.base_url}/signup`, user);
  }

  login(user: any) {
    return this.http.post(`${this.base_url}/login`, user);
  }

  get_ques() {
    return this.http.get(`${this.base_url}/ques/qna`);
  }

  ask_ques(ques_obj) {
    return this.http.post(`${this.base_url}/ques/ask`, ques_obj);
  }
}
