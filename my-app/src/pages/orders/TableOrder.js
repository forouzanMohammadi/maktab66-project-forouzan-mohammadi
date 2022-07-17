import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const TableOrder = ({ data }) => {
  console.log(data,"yeah");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "17px",
        }}
      ></Box>

      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, minHeight: 100 }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell> کالا</TableCell>
              <TableCell>قیمت </TableCell>
              <TableCell>تعداد</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data?.cart?.cartItems.map((item) => (
              <TableRow key={item.id}>
                {" "}
                <TableCell>
                  {item?.product.name}
                </TableCell>
                <TableCell>{item?.totalRow} تومان</TableCell>
                <TableCell>{item?.inventory}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableOrder;
