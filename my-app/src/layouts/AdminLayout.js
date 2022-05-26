import Header from "./components/Header";

const AdminLayout = (Component) => {
  return (props) => (
    <div>
      <Header/>
      <Component {...props} />
    </div>
  )
}

export default AdminLayout;
