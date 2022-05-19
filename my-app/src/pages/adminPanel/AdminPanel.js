import React, { useMemo, useState } from 'react';
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
} from '@mui/material';
import {useFetch} from 'hooks/useFetch';
import AdminLayout from 'layouts/AdminLayout'
import EditIcon from '@mui/icons-material/Edit'
import { IconButton, Typography, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import Modal from './Modal'
// import { AdminApis } from 'service/AdminApis';
// import { useDispatch } from "react-redux";
// import { productRemoved } from "redux/ProductSlice";

const AdminPanel = () => {
  const limit = useMemo(() => 5, [])
  const [activePage, setActivePage] = useState(1)
  const { data, loading } = useFetch(`products?_page=${activePage}&_limit=${limit}`)
  const [showModal, setShowModal] = useState(false)
  // const {dispatch} =useDispatch()

  const BASE_URl = 'http://localhost:3002'

  const handleClickOpen = () => {
    setShowModal(true)
    // () => console.log(params.id)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  // const deletePost=async (id)=>{
  //   let response =await ApiAdmin.delete(id)
  //     console.log(response)

  // }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: '17px',
        }}
      >
        <Typography variant="h6">مدیریت کالا</Typography>
        <>
          <Button variant="contained" onClick={handleClickOpen}>
            افزودن کالا{' '}
          </Button>
        </>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
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
            <TableBody sx={{ position: 'relative' }}>
              {loading ? (
                <Box
                  sx={{
                    position: 'absolute',
                    background: '#fafafa',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CircularProgress />
                </Box>
              ) : (
                <>
                  {data.data.map((record) => (
                    // console.log(record)
                    <TableRow key={record.id}>
                      <TableCell>{record.id}</TableCell>
                      <TableCell>
                        <img className='imgDashboard' src={BASE_URl+record.image} />
                      </TableCell>
                      <TableCell>{record.name}</TableCell>
                      <TableCell>{record.subCategoryId}</TableCell>
                      <TableCell>
                        <IconButton onClick={handleClickOpen}>
                          <EditIcon style={{ color: 'blue' }} />
                        </IconButton>
                        <IconButton>
                          <DeleteIcon style={{ color: 'red' }} />
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
          variant="outlined"
          defaultPage={1}
          page={activePage}
          count={Math.ceil(data?.headers["x-total-count"] / limit)}
          onChange={(_, page) => setActivePage(page)}
        />
      </Box>
      {showModal ? <Modal open={showModal} handleClose={handleClose} /> : ''}
    </>
  )
}

export default AdminLayout(AdminPanel)
