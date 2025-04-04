import React from "react";
import SignIn from "./components/Form/SignIn/signIn";
import NavBar from "./components/Navbar/navbar";
import MainLayout from "./layout/_layout";

const App: React.FC = () => {
  return (
    <>
      <MainLayout>
        <NavBar />
        <SignIn />
      </MainLayout>
    </>
  );
};

export default App;
