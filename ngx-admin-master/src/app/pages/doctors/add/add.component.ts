import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { ServicesService } from "../../../services.service";
import { SmartTableData } from "../../../@core/data/smart-table";

import { ToasterConfig } from "angular2-toaster";
import "style-loader!angular2-toaster/toaster.css";
import {
  NbComponentStatus,
  NbGlobalPhysicalPosition,
  NbToastrService
} from "@nebular/theme";

import { days, hours } from "./weekList";
const state = require("./state_list");

@Component({
  selector: "ngx-smart-table",
  templateUrl: "./add.component.html",
  styles: [
    `
      nb-card {
        transform: translate3d(0, 0, 0);
      }
    `
  ]
})
export class AddComponent {
  config: ToasterConfig;
  data1: any;
  status: NbComponentStatus = "primary";

  specs: any;
  dropdownList: any;
  selectedItems: any;
  dropdownSettings: any;
  weekList: any;
  dropdownSettings_noSearch: any;
  selectedDay: any = [];
  timelist: any;
  state_list = state;
  doctor: any;
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>'
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>'
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true
    },
    columns: {
      title: {
        title: "Title",
        type: "string"
      },
      name: {
        title: "Full Name",
        type: "string"
      },
      phone: {
        title: "Contact",
        type: "string"
      },
      email: {
        title: "E-mail",
        type: "string"
      },
      charges: {
        title: "Charges",
        type: "number"
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private service: SmartTableData,
    private auth: ServicesService,
    private toastrService: NbToastrService
  ) {
    this.initializeFormModel();
    this.auth.show_doctors().subscribe(doctors => {
      this.data1 = doctors;
      this.source.load(this.data1.doctor_non_verified);
    });

    this.auth.get_specialization().subscribe(specs => {
      this.specs = specs;
      this.dropdownList = this.specs;
    });
    this.dropdownSettings = {
      singleSelection: false,
      idField: "_id",
      textField: "name",
      enableCheckAll: false,
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.dropdownSettings_noSearch = {
      singleSelection: false,
      idField: "_id",
      textField: "name",
      enableCheckAll: false,
      itemsShowLimit: 3,
      allowSearchFilter: false
    };

    this.timelist = hours;
    this.weekList = days;
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

  initializeFormModel() {
    this.doctor = {
      title: "",
      phone: "",
      name: "",
      password: "",
      repassword: "",
      reg_no: "",
      email: "",
      specialization: [],
      gender: "",
      address_line1: "",
      address_city: "",
      address_state: "",
      address_zipcode: "",
      time_slot: [[], [], [], [], [], [], []],
      charges: "",
      experience: "",
      hospital: "",
      verified: true,
      role: "doctor"
    };
  }
  //restrict input type

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  alphabetOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if ((charCode > 64 && charCode < 123) || charCode == 32) {
      return true;
    }
    return false;
  }

  onItemSelect(item: any) {
    this.doctor.specialization.push(item.name);
  }
  removeSpecs(item: any) {
    let index = this.doctor.specialization.indexOf(item.name);
    if (index !== -1) this.doctor.specialization.splice(index, 1);
  }
  addWeek(day: any) {
    this.selectedDay.push({ _id: day._id, name: day.name });
  }
  removeWeek(day: any) {
    this.selectedDay = this.selectedDay.filter(d => d._id != day._id);
    this.doctor.time_slot[day._id - 1] = [];
  }

  addTime(time: any, day_id: any) {
    this.doctor.time_slot[day_id].push(time);
  }

  removeTime(time: any, day_id: any) {
    this.doctor.time_slot[day_id] = this.doctor.time_slot[day_id].filter(
      d => d != time
    );
  }
  alertMsg: any = [];
  showMsg(msg) {
    this.alertMsg.push(msg);
    this.alertMsg = this.alertMsg.filter((v, i, a) => a.indexOf(v) === i);
  }
  checkEmail() {
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(this.doctor.email)) return false;
    return true;
  }

  checkPassword() {
    let filter = /^(?=.{8,})/;
    if (!filter.test(this.doctor.password)) return false;
    return true;
  }

  validate() {
    let validated = true;
    this.alertMsg = [];
    if (this.doctor.title == "") {
      validated = false;
      this.showMsg("Please Enter Title");
    } else if (this.doctor.reg_no == "") {
      validated = false;
      this.showMsg("Please Enter Registration Number");
    } else if (this.doctor.name == "") {
      validated = false;
      this.showMsg("Please Enter Name");
    } else if (!this.checkEmail()) {
      validated = false;
      this.showMsg("Invalid Email Address");
    } else if (this.doctor.specialization.length == 0) {
      validated = false;
      this.showMsg("Please Tell us about Doctor's Specialization Area");
    } else if (this.doctor.phone == "") {
      validated = false;
      this.showMsg("Please Enter Phone Number");
    } else if (!this.checkPassword()) {
      validated = false;
      this.showMsg("Password must be of minimum 8 character long");
    } else if (this.doctor.password != this.doctor.repassword) {
      validated = false;
      this.showMsg("Password did'nt match");
    } else if (this.doctor.gender == "") {
      validated = false;
      this.showMsg("Please Select Gender");
    } else if (this.doctor.charges == "") {
      validated = false;
      this.showMsg("Don't do it for free");
    } else if (
      this.doctor.address_city == "" ||
      this.doctor.address_line1 == "" ||
      this.doctor.address_state == "" ||
      this.doctor.address_zipcode == ""
    ) {
      validated = false;
      this.showMsg("Your Location seems incomplete to me !!");
    }
    return validated;
  }

  add_doctor(doctor) {
    console.log(this.validate());
    if (this.validate()) {
      console.log(doctor);
      this.auth.add_doctor(this.doctor).subscribe(doctor => {
        console.log(doctor);
        this.initializeFormModel();
        this.showToast(this.status, "Doctor Profile Added Successfully", ``);
      });
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
