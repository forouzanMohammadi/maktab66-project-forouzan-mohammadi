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
  import { Typography} from "@mui/material";
  import Radio from "@mui/material/Radio";
  import RadioGroup from "@mui/material/RadioGroup";
  import FormControlLabel from "@mui/material/FormControlLabel";
  import FormControl from "@mui/material/FormControl";
//   import FormLabel from "@mui/material/FormLabel";
  
  const Order = () => {
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
            margin: "17px",
          }}
        >
          <Typography variant="h6">مدیریت سفارش ها </Typography>
          <>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="سفارش های در انتظار بررسی"
                />
                <FormControlLabel value="male" control={<Radio />} label="سفارش های تحویل شده" />
               
              </RadioGroup>
            </FormControl>
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
                  <TableCell>نام کاربر</TableCell>
                  <TableCell>مجموع مبلغ</TableCell>
                  <TableCell>زمان ثبت سفارش</TableCell>
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
                        <TableCell>{record.createdAt}</TableCell>
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
  
  export default AdminLayout(Order);
  