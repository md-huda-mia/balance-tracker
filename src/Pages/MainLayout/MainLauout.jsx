import React from "react";
import Header from "../../Components/Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import Footer from "../../Components/Footer/Footer";

const MainLauout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header />
      <div>{navigation.state === "loading" ? <Loading /> : <Outlet />}</div>
      <Footer />
    </div>
  );
};

export default MainLauout;
