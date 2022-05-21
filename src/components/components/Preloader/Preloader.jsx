import { useSelector } from "react-redux";
import "./Preloader.css";

export const Preloader = () => {
  const loading = useSelector((state) => state.preloader.loading);

  if (!loading) return null;
  return (
    <div className="wrapper">
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
