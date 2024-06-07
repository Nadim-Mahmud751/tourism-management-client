import AddTouristSpotPage from "../pages/add-tourist-spot/AddTouristSpotPage";
import TouristSpotsList from "../pages/all-tourist-spots/TouristSpotsList";
import TouristSpotDetails from "../pages/all-tourist-spots/details/TouristSpotDetails";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import MylistPage from "../pages/my-list/MylistPage";
import SignupPage from "../pages/signup/SignupPage";
import UpdateTouristSpot from "../pages/update-tourist/UpdateTouristSpot";

export const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/signup", element: <SignupPage /> },
    { path: "/tourists-spots", element: <TouristSpotsList /> },
    { path: "/tourists-spots/:id", element: <TouristSpotDetails /> },
    { path: "/add-tourists-spots", element: <AddTouristSpotPage /> },
    { path: "/my-list", element: <MylistPage /> },
    { path: "/update/:id", element: <UpdateTouristSpot /> },
]