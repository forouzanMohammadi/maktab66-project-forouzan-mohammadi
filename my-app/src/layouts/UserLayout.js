import Header from 'components/Header'
import Footer from 'components/Footer'
import Sidebar from 'components/Sidebar'

const UserLayout = (component) => {
  return (props) => (
    <>
      <Header />
      <Sidebar/>
      <component {...props} />
      <Footer />
    </>
  );
};

export default UserLayout;
