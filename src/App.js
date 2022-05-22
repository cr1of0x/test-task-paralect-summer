import { MainPage } from "./components/pages/MainPage/MainPage";
import "./App.css";
import { Preloader } from "./components/components/Preloader/Preloader";
import { withProvider } from "./hocs/withProvider";

const App = () => {
  return (
    <>
      <MainPage />
      <Preloader />
    </>
  );
};

export default withProvider(App);
