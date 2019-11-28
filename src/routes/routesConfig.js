import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
export const routes = [
    {
        path: "/login",
        component: Login,
        label: "Login",
        authentication: false,
        authorization: false
    },
    {
        path: "/register",
        component: Register,
        label: "Register",
        authentication: false,
        authorization: false
    },
    {
        path: "/",
        component: "",
        label: "Login",
        authentication: true,
        authorization: true
    }
];