
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const AdminLayout = (Component) => {
  return (props) => (
    <div>

      <Component {...props} />
      <Sidebar/>
      <Footer />
    </div>
  );
};

export default AdminLayout;