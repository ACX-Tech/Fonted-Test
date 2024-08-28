import { createBrowserRouter } from "react-router-dom";
import UserPage from "./userPage";
import MainLayout from "../Components/leyout/mainLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <UserPage />
      </MainLayout>
    ),
  },
]);
