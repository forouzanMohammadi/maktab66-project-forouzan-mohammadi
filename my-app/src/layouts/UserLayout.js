import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";


const UserLayout = (Component) => {
  return (props) => (
    <>
      <Navbar />
      <Component {...props} />
      {/* <Footer /> */}
    </>
  );
};

export default UserLayout;
