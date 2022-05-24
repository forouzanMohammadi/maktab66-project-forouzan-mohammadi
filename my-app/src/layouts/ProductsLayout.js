import Navbar from './components/Navbar'
// import Footer from "./components/Footer";
import Sidebar from './components/Sidebar'
import { Grid } from '@mui/material'

const ProductsLayout = (Component) => {
  return (props) => (
    <>
      <Navbar />
      <Grid container>
        <Grid item sm={0} xs={0}  lg={2.5} md={2.5} ml={4}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={12} lg={9} md={9}>
          <Component {...props} />
        </Grid>
      </Grid>
      {/* <Footer /> */}
    </>
  )
}

export default ProductsLayout
