import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const UserLayout = (Component) => {
  return (props) => (
    <>
      <Header />
      <Component {...props} />
      <Sidebar/>
      <Footer />
    </>
  );
};

export default UserLayout;
