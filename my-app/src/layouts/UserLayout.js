import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Sidebar from "./components/Sidebar";

const UserLayout = (Component) => {
  return (props) => (
    <>
      <Navbar />
      <Component {...props} />
      {/* <Sidebar/>
      <Footer /> */}
    </>
  );
};

export default UserLayout;
