import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ServicesService {
  constructor(private http: HttpClient) {}

  base_url = "http://localhost:3000";

  //doctor
  show_doctors() {
    return this.http.get(`${this.base_url}/list/doctor`);
  }

  get_specialization() {
    return this.http.get(`${this.base_url}/specs/get`);
  }

  add_specs(name) {
    return this.http.post(`${this.base_url}/specs/add`, { name });
  }
  delete_specs(name) {
    return this.http.post(`${this.base_url}/specs/remove`, { name });
  }

  add_doctor(doctor) {
    return this.http.post(`${this.base_url}/signup`, doctor);
  }
  //doctor end

  //blog
  add_blog(blog) {
    return this.http.post(`${this.base_url}/blog/new`, blog);
  }
  get_blog() {
    return this.http.get(`${this.base_url}/blog`);
  }

  update_Blog(blog: any) {
    return this.http.post(`${this.base_url}/blog/edit`, blog);
  }
  get_category() {
    return this.http.get(`${this.base_url}/blog/blog-cat`);
  }

  add_category(blog) {
    return this.http.post(`${this.base_url}/blog/add-cat`, blog);
  }
  delete_category(id) {
    return this.http.post(`${this.base_url}/blog/del-cat`, { id });
  }
  //blog end

  //qna start
  get_qna() {
    return this.http.get(`${this.base_url}/ques/qna`);
  }
  del_qna(id) {
    return this.http.post(`${this.base_url}/ques/delete`, { id });
  }
  //qna end

  //getting user data
  get_user() {
    return this.http.get(`${this.base_url}/users/user-d`);
  }

  //end user data module

  //appointents
  get_app() {
    return this.http.get(`${this.base_url}/appointment/get`);
  }

  //appointments module ends here

  //hospitals

  get_hospital() {
    return this.http.get(`${this.base_url}/hospital/get`);
  }
  //hospital Module ends here

  //transactions
  get_transactions() {
    return this.http.get(`${this.base_url}/transactions/get`);
  }

  //transactions ends here

  //users module
  add_user(user) {
    return this.http.post(`${this.base_url}/signup/adduser-by-admin`, user);
  }
  //users module end
}
