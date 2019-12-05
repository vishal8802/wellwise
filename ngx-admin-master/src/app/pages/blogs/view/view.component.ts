import { Component, ViewChild } from "@angular/core";
import { ServicesService } from "../../../services.service";

import { ToasterConfig } from "angular2-toaster";
import "style-loader!angular2-toaster/toaster.css";
import {
  NbGlobalPhysicalPosition,
  NbToastrService,
  NbComponentStatus
} from "@nebular/theme";

@Component({
  selector: "ngx-view",
  templateUrl: "view.component.html",
  styleUrls: ["view.component.scss"]
})
export class ViewComponent {
  ins = true;

  config: ToasterConfig;
  status: NbComponentStatus = `primary`;

  blogs: any;
  new_blog: any;
  categories: any;
  dropdown_btn_text = "All";

  formshow = false;
  current_blog: any = [];
  current_headings: any = [];
  editenabled = false;
  model_blog: any;
  constructor(
    private auth: ServicesService,
    private toastrService: NbToastrService
  ) {
    this.get_blog();
    this.current_blog.push({ topic: "Select a Blog to view" });
    this.auth.get_category().subscribe(cat => {
      this.categories = cat;
    });

    this.initializeBlogModel();
  }

  initializeBlogModel() {
    this.model_blog = {
      topic: "",
      heading: [],
      content: []
    };
  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: true,
      duration: 4000,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: false
    };
    const titleContent = title ? ` ${title}` : "";
    this.toastrService.show(body, titleContent, config);
  }

  get_blog() {
    this.auth.get_blog().subscribe(b => {
      this.blogs = b;
      this.new_blog = this.blogs;
    });
  }

  showAddButton() {
    if (this.current_blog[0].topic != "Select a Blog to view")
      this.editenabled = true;
  }
  setCurrentBlog(event: any) {
    let topic = event.target.innerText;
    this.current_blog = this.blogs.filter(cb => cb.topic == topic);
    this.current_headings = this.current_blog[0].heading;
    this.editenabled = true;
    this.ins = false;
    this.formshow = false;
    this.model_blog = {
      _id: this.current_blog[0]._id,
      topic: this.current_blog[0].topic,
      heading: this.current_blog[0].heading,
      content: this.current_blog[0].content
    };
  }

  convertToForm() {
    this.formshow = true;
    this.editenabled = false;
  }

  updateBlog(model_blog: any) {
    this.auth.update_Blog(model_blog).subscribe(x => {
      this.get_blog();
      // window.location.reload();
      this.formshow = false;
      this.editenabled = true;
      this.showToast(this.status, "Blog updated", ``);
    });
  }

  orderByCat(c) {
    if (c == "all") {
      this.new_blog = this.blogs;
      return null;
    }
    this.dropdown_btn_text = c.name;
    this.new_blog = this.blogs.filter(d => d.category_id == c._id);
  }
}
