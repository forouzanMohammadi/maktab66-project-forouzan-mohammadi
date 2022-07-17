import { Grid, Button } from "@mui/material";
import React from "react";
import TableOrder from "./TableOrder";
import { Box } from "@mui/system";
import { useOrder } from "hooks/useOrder";
import axios from "axios";

function ModalFormOrder({ handleClose, inOrder, status }) {
  let id = inOrder.rowKey;
  const { data, loading, getPosts } = useOrder(`orders/${id}`, {
    headers: { token: localStorage.getItem("token") },
  });

  const handleStatus = async (data) => {
    await axios.patch(
      `http://localhost:3002/orders/${id}`,
      { ...data, orderStatus: 6 },
      { headers: { token: localStorage.getItem("token") } }
      );
      getPosts();
      handleClose();
    };
    console.log(data?.data.customerDetail ,"now");
  return (
    <>
      {status === 3 ? (
        <Grid container justify="center">
          <Box>
            <Grid xs={12}>
              نام مشتری: {data?.data.customerDetail.firstName}{" "}
              {data?.data.customerDetail.lastName}{" "}
            </Grid>
            <Grid xs={12}> آدرس: {data?.data.customerDetail.address} </Grid>
            <Grid xs={12}> موبایل: {data?.data.customerDetail.cellPhone} </Grid>
            <Grid xs={12}>
              {" "}
              تاریخ تحویل :{" "}
              {new Date(data?.data.createdAt).toLocaleTimeString("fa-IR")}{" "}
            </Grid>
          </Box>
          <TableOrder data={data} />
          <Grid xs={12} justify="center">
            <Button
              variant="contained"
              color="success"
              onClick={() => handleStatus(data)}
            >
              تحویل شد
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Grid container>
          <Box sx={{ textAlign: "center" }}>
            <Grid xs={12}>
              نام مشتری: {data?.data.customerDetail.firstName}{" "}
              {data?.data.customerDetail.lastName}{" "}
            </Grid>
            <Grid xs={12}> آدرس: {data?.data.customerDetail.address} </Grid>
            <Grid xs={12}> موبایل: {data?.data.customerDetail.cellPhone} </Grid>
            <Grid xs={12}>
              {" "}
              تاریخ تحویل :{" "}
              {new Date(data?.data.createdAt).toLocaleTimeString("fa-IR")}{" "}
            </Grid>
          </Box>
          <TableOrder data={data} />
        </Grid>
      )}
    </>
  );
}

export default ModalFormOrder;
