import Navbar from './components/Navbar'
// import Footer from "./components/Footer";
import Sidebar from './components/Sidebar'
import { Grid} from '@mui/material'

const ProductsLayout = (Component) => {
  return (props) => (
    <>
      <Navbar />
      <Grid sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Sidebar />
        <Component {...props} />
      </Grid>
      {/* <Footer /> */}
    </>
  )
}

export default ProductsLayout
