import { MainPage } from "./components/pages/MainPage/MainPage";
import "./App.css";
import { Preloader } from "./components/components/Preloader/Preloader";

export const App = () => {
  return (
    <>
      <MainPage />
      <Preloader />
    </>
  );
};
