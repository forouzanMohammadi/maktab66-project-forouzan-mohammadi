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
  Grid,
} from '@mui/material'
import { useFetch } from 'hooks/useFetch'
import AdminLayout from 'layouts/AdminLayout'
import { useMemo, useState } from 'react'
import { Typography } from '@mui/material'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'

const Order = () => {
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
        <Typography className="typomanage" mr={10} variant="h6">
          مدیریت سفارش ها{' '}
        </Typography>
        <>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
              className='rdioBtn'
                value="female"
                control={<Radio />}
                label="سفارش های در انتظار بررسی"
              />
              <FormControlLabel
              className='rdioBtn'
                value="male"
                control={<Radio />}
                label="سفارش های تحویل شده"
              />
            </RadioGroup>
          </FormControl>
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
              sx={{ minWidth: 650, minHeight: 100 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow className='tblRow'>
                  <TableCell className='tblcel idCel'>Id</TableCell>
                  <TableCell className='tblcel'>نام کاربر</TableCell>
                  <TableCell className='tblcel'>مجموع مبلغ</TableCell>
                  <TableCell className='tblcel'>زمان ثبت سفارش</TableCell>
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
                        <TableCell className='tbodyEven'>{record.createdAt}</TableCell>
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

export default AdminLayout(Order)
