import { NbMenuItem } from "@nebular/theme";
import { Title } from "@angular/platform-browser";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "E-commerce",
    icon: "shopping-cart-outline",
    link: "/pages/dashboard",
    home: true
  },
  {
    title: "IoT Dashboard",
    icon: "home-outline",
    link: "/pages/iot-dashboard"
  },
  {
    title: "FEATURES",
    group: true
  },
  {
    title: "Users",
    icon: "grid-outline",
    children: [
      {
        title: "Add User",
        link: "/pages/users/add"
      },
      {
        title: "View all users",
        link: "/pages/users/view"
      }
    ]
  },
  {
    title: "Appointment",
    icon: "grid-outline",
    children: [
      {
        title: "View all Appointments",
        link: "/pages/appointments/view"
      },
      {
        title: "Fullfilled Appointments",
        link: "/pages/appointments/view-fullfilled"
      }
    ]
  },
  {
    title: "Hospitals",
    icon: "grid-outline",
    children: [
      {
        title: "View Hospitals",
        link: "/pages/hospitals/view"
      }
    ]
  },
  {
    title: "Manage Labs",
    icon: "grid-outline"
  },
  {
    title: "Transactions",
    icon: "grid-outline",
    children: [
      {
        title: "View all transactions",
        link: "/pages/transactions/view"
      }
    ]
  },
  {
    title: "Doctors",
    icon: "grid-outline",
    children: [
      {
        title: "View Doctors",
        link: "/pages/doctors/view"
      },
      {
        title: "Add Doctors",
        link: "/pages/doctors/add"
      },
      {
        title: `Manage Specializations`,
        link: `/pages/doctors/managespecialization`
      }
    ]
  },
  {
    title: "Q N A",
    icon: "layout-outline",
    children: [
      {
        title: "un-Answered Questions",
        link: "/pages/qna/unanswered"
      },
      {
        title: "Answered Questions",
        link: "/pages/qna/answered"
      }
    ]
  },
  {
    title: "Blogs",
    icon: "layout-outline",
    children: [
      {
        title: "View Blogs",
        link: "/pages/blogs/view"
      },
      {
        title: "Add Blogs",
        link: "/pages/blogs/add"
      },
      {
        title: "Manage Categories",
        link: "/pages/blogs/manage"
      }
    ]
  },
  {
    title: "Auth",
    icon: "lock-outline",
    children: [
      {
        title: "Login",
        link: "/auth/login"
      },
      {
        title: "Register",
        link: "/auth/register"
      },
      {
        title: "Request Password",
        link: "/auth/request-password"
      },
      {
        title: "Reset Password",
        link: "/auth/reset-password"
      }
    ]
  }
];
