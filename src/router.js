import { createWebHistory, createRouter } from "vue-router";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Home from "./components/Home.vue";
import Admin from "./components/Admin.vue";
import Student from "./components/Student.vue";
import Teacher from "./components/Teacher.vue";

const routes =[
    {
        path: "/",
        name: "login",
        component: Login,
    },

    {
        path: "/register",
        name: "register",
        component: Register,
    },

    {
        path: "/home",
        name: "home",
        component: Home,
    },
   
    {
        path: "/admin",
        name: "Admin",
        component: Admin,
    },
    {
        path: "/student",
        name: "Student",
        component: Student,
    },
    {
        path: "/teacher",
        name: "Teacher",
        component: Teacher,
    }
];

const _router = createRouter({
    history: createWebHistory(),
    routes,
});

export default _router;