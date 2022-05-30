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
  Grid
} from '@mui/material'
import AdminLayout from 'layouts/AdminLayout'
import { useEffect, useMemo, useState } from 'react'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { IconButton, Typography, Button } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Modal from './Modal'
import { AdminApis } from 'service/AdminApis'
import axios from 'axios'
// import Add from "components/Add";
import { useFetch } from 'hooks/useFetch'
const BASE_URl = 'http://localhost:3002'
const delay = () => {
  return new Promise((resolve) => setTimeout(() => resolve('delay'), 3000))
}

const AdminPanel = () => {
  const limit = useMemo(() => 5, [])
  const [activePage, setActivePage] = useState(1)
  const { data, loading, getPosts } = useFetch(
    `products?_page=${activePage}&_limit=${limit}`,
  )

  const [showModal, setShowModal] = useState(false)
  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
  })

  const handleClickOpen = (id) => {
    setShowModal(true)
    setInEditMode({
      status: true,
      rowKey: id,
    })
  }

  const handleClose = () => {
    setShowModal(false)
  }

  // deletePost
  const DeletePost = (id) => {
    AdminApis.delete(`${id}`)
    getPosts()
  }

  return (
    <div className='adminBody'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '30px',
        }}
      >
        <Typography mr={10} variant="h5">مدیریت کالا</Typography>
        <>
          <Button className='adminAddBtn' variant="contained" onClick={() => handleClickOpen()}>
            افزودن کالا
          </Button>
        </>
      </Box>
      <Grid className="tblContainer">
      <Box
        className="boxContainer"
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
              className="adminTbl"
              // sx={{ minWidth: 650, minHeight: 100 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow className='tblRow'>
                  <TableCell className='tblcel'>ID</TableCell>
                  <TableCell className='tblcel'>تصویر</TableCell>
                  <TableCell className='tblcel'>نام کالا</TableCell>
                  <TableCell className='tblcel'>دسته بندی</TableCell>
                  <TableCell className='tblcel'>ویرایش/حذف کالا</TableCell>
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
                    {data?.data.map((record) => (
                      <TableRow key={record.id}>
                        <TableCell className='tbodyOdd'>{record.id}</TableCell>
                        <TableCell className='tbodyEven'>
                          <img
                            src={'http://localhost:3002' + record.image}
                            className="imageAdmin"
                          />
                        </TableCell>
                        <TableCell className='tbodyOdd'>{record.name}</TableCell>
                        <TableCell className='tbodyEven'>{record.categoryName}</TableCell>
                        <TableCell className='tbodyOdd'>
                          <Grid sx={{display:"flex", marginRight:"20px", justifyContent:"space-around"}}>
                          <IconButton 
                            onClick={() => handleClickOpen(record.id)}
                          >
                            <ModeEditOutlineIcon className='editIcon'/>
                          </IconButton>
                          <IconButton onClick={() => DeletePost(record.id)}>
                            <DeleteOutlineIcon className='deletIcon' />
                          </IconButton>
                          </Grid>
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
          count={Math.ceil(data?.headers['x-total-count'] / limit)}
          onChange={(_, page) => setActivePage(page)}
        />
      </Box>
      </Grid>
      {showModal ? (
        <Modal
          open={showModal}
          handleClose={handleClose}
          inEditMode={inEditMode}
          getPosts={getPosts}
        />
      ) : (
        ''
      )}
    </div>
  )
}

export default AdminLayout(AdminPanel)
