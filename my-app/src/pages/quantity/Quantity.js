
import {
    Box,
    CircularProgress,
    Pagination,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
  import { useFetch } from "hooks/useFetch";
  import AdminLayout from "layouts/AdminLayout";
  import { useMemo, useState } from "react";
  
  import { Typography , Button} from "@mui/material";
  
  
  
  const Quantity = () => {
    const limit = useMemo(() => 5, []);
    const [activePage, setActivePage] = useState(1);
    const { data, loading } = useFetch(`products?_page=${activePage}&_limit=${limit}`);
    
    return (
      <>
         <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin:"17px"
          }}
        >
          <Typography variant="h6" >مدیریت موجودی و قیمت ها </Typography>
          <>
            <Button  variant="contained" color="success">ذخیره </Button>
            
          </>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            marginInline: 2,
          }}
        >
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650, minHeight: 100 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>کالا</TableCell>
                  <TableCell>قیمت</TableCell>
                  <TableCell>موجودی </TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ position: "relative" }}>
                {loading ? (
                  <Box
                    sx={{
                      position: "absolute",
                      background: "#fafafa",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CircularProgress />
                  </Box>
                ) : (
                  <>
                    {data.data.map((record) => (
                      <TableRow key={record.id}>
                        <TableCell>{record.id}</TableCell>
                        <TableCell>{record.name}</TableCell>
                        <TableCell>{record.price}</TableCell>
                        <TableCell>{record.count}</TableCell>
                      </TableRow>
                    ))}
                  </>
                )}
              </TableBody>
            </Table>
          </TableContainer>
  
          <Pagination
            variant="outlined"
            defaultPage={1}
            page={activePage}
            count={Math.ceil(data?.headers["x-total-count"] / limit)}
            onChange={(_, page) => setActivePage(page)}
          />
        </Box>
     
      </>
      
    );
  };
  
  export default AdminLayout(Quantity);
  
  