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
import AdminLayout from "layouts/AdminLayout";
import { useEffect, useMemo, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "./Modal";
import { AdminApis } from "service/AdminApis"
import axios from "axios";
// import Add from "components/Add";
import { useFetch } from "hooks/useFetch";
const BASE_URl = "http://localhost:3002";
const delay = () => {
  return new Promise((resolve) => setTimeout(() => resolve("delay"), 3000));
};

const AdminPanel = () => {
  const limit = useMemo(() => 5, []);
  const [activePage, setActivePage] = useState(1);
  const { data,loading,getPosts } = useFetch(
    `products?_page=${activePage}&_limit=${limit}`
  );

  const [showModal, setShowModal] = useState(false);
  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
  });
 

  const handleClickOpen = (id) => {
    setShowModal(true);
    setInEditMode({
      status: true,
      rowKey: id,
    });
  };

  const handleClose = () => {
    setShowModal(false);
  };

 // deletePost
  const DeletePost = (id) => {
    AdminApis.delete(`${id}`)
    getPosts()
    
  };

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
        <Typography variant="h6">مدیریت کالا</Typography>
        <>
          <Button variant="contained" onClick={() => handleClickOpen()} >
            افزودن کالا{" "}
          </Button>
         
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
                <TableCell>ID</TableCell>
                <TableCell>تصویر</TableCell>
                <TableCell>نام کالا</TableCell>
                <TableCell>دسته بندی</TableCell>
                <TableCell>حذف/ویرایش کالا</TableCell>
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
                  {data?.data.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell>{record.id}</TableCell>
                      <TableCell>
                        <img src={"http://localhost:3002" + record.image} className="imageAdmin" />
                      </TableCell>
                      <TableCell>{record.model}</TableCell>
                      <TableCell>{record.name}</TableCell>
                      <TableCell>
                        <IconButton onClick={() => handleClickOpen(record.id)}>
                          <EditIcon style={{ color: "blue" }} />
                        </IconButton>
                        <IconButton onClick={() => DeletePost(record.id)}>
                          <DeleteIcon style={{ color: "red" }} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <Pagination
          dir="ltr"
          variant="outlined"
          defaultPage={1}
          page={activePage}
          count={Math.ceil(data?.headers["x-total-count"] / limit)}
          onChange={(_, page) => setActivePage(page)}
        />
      </Box>
      {showModal ? (
        <Modal
          open={showModal}
          handleClose={handleClose}
          inEditMode={inEditMode}
          getPosts={getPosts}
         
        />
      ) : (
        ""
      )}
    </>
  );
};

export default AdminLayout(AdminPanel);
