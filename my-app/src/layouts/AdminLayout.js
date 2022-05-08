import Header from 'components/Header'
import Footer from 'components/Footer'

const AdminLayout = (Component) => {
  return (props) => (
    <div>
      <Header />
      <Component {...props} />
      <Footer />
    </div>
  );
};

export default AdminLayout;