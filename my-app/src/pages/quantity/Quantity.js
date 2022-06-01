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
import { useFetch } from 'hooks/useFetch'
import AdminLayout from 'layouts/AdminLayout'
import { useMemo, useState } from 'react'

import { Typography, Button } from '@mui/material'

const Quantity = () => {
  const limit = useMemo(() => 5, [])
  const [activePage, setActivePage] = useState(1)
  const { data, loading } = useFetch(
    `products?_page=${activePage}&_limit=${limit}`,
  )

  return (
    <Grid className="adminBody">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '30px',
        }}
      >
        <Typography className='typomanage' mr={10} variant="h6">مدیریت موجودی و قیمت ها </Typography>
          <Button className='saveBtn' variant="contained" color="success">
            ذخیره
          </Button>
      </Box>
      <Grid className='tblContainer'>
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
            sx={{ minWidth: 650, minHeight: 100 }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow className='tblRow'>
                <TableCell className='tblcel idCel'>Id</TableCell>
                <TableCell className='tblcel'>کالا</TableCell>
                <TableCell className='tblcel'>قیمت</TableCell>
                <TableCell className='tblcel'>موجودی </TableCell>
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
                    <TableRow key={record.id}>
                      <TableCell className='tbodyOdd idCel'>{record.id}</TableCell>
                      <TableCell className='tbodyEven'>{record.name}</TableCell>
                      <TableCell className='tbodyOdd'>{record.price}</TableCell>
                      <TableCell className='tbodyEven'>{record.count}</TableCell>
                    </TableRow>
                  ))}
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <Pagination
        className="adminpagination"
        dir="ltr"
          variant="outlined"
          defaultPage={1}
          page={activePage}
          count={Math.ceil(data?.headers['x-total-count'] / limit)}
          onChange={(_, page) => setActivePage(page)}
        />
      </Box>
      </Grid>
    </Grid>
  )
}

export default AdminLayout(Quantity)
