import TouristSpotsList from "../pages/all-tourist-spots/TouristSpotsList";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import SignupPage from "../pages/signup/SignupPage";

export const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/signup", element: <SignupPage /> },
    { path: "/tourists-spots", element: <TouristSpotsList /> },
    { path: "/tourists-spots/:id", element: <TouristSpotsList /> },
]