/* eslint-disable */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import style from '../Management.module.scss'
import { useState, useEffect, useRef } from 'react';
import BasicModal from '../../../components/Modal';
import dayjs from 'dayjs';
import { Pagination } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function BookingManagement() {
    const [data, setData] = useState([])
    const [condition, setCondition] = useState(
        {
            from: null,
            to: null,
            page: 1,
            pageSide: 10,
            totalPage: 10
        }
    )
    useEffect(() => {
        if (condition.from && condition.to) {
            setData([...[
                {
                    email: 'rocky@gmail.com',
                    come: '01-02-2024',
                    go: '01-02-2024',
                    total: 4,
                    created: '01-02-2024',
                    id: 1
                },
                {
                    email: 'rocky@gmail.com',
                    come: '01-02-2024',
                    go: '01-02-2024',
                    total: 4,
                    created: '01-02-2024',
                    id: 2
                },
                {
                    email: 'rocky@gmail.com',
                    come: '01-02-2024',
                    go: '01-02-2024',
                    total: 4,
                    created: '01-02-2024',
                    id: 3
                },
                {
                    email: 'rocky@gmail.com',
                    come: '01-02-2024',
                    go: '01-02-2024',
                    total: 4,
                    created: '01-02-2024',
                    id: 4
                },
                {
                    email: 'rocky@gmail.com',
                    come: '01-02-2024',
                    go: '01-02-2024',
                    total: 4,
                    created: '01-02-2024',
                    id: 5
                },
            ]])
        }
    }, [condition.from, condition.to, condition.page])

    const handleDateStart = (e) => {
        setCondition(pre => ({ ...pre, from: dayjs(e).format('DD/MM/YYYY') }))
    }

    const handleDateEnd = (e) => {
        setCondition(pre => ({ ...pre, to: dayjs(e).format('DD/MM/YYYY') }))
    }

    return (
        <div className={style.table}>
            <div className={style.tableHeader}>
                <div className={style.tableHeaderText}>Booking List Table</div>
                <div className={style.dateRange}>
                    <div className={style.calendar}>
                        <LocalizationProvider
                            dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker label="Pick a date start" onChange={handleDateStart} />
                                <DatePicker label="Pick a date end" onChange={handleDateEnd} />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                </div>
            </div>
            <TableContainer component={Paper} className={style.tableContent}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell align="right">Date come</TableCell>
                            <TableCell align="right">Date go</TableCell>
                            <TableCell align="right">Total days</TableCell>
                            <TableCell align="right">Created at</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.email}
                                </TableCell>
                                <TableCell align="right">{row.come}</TableCell>
                                <TableCell align="right">{row.go}</TableCell>
                                <TableCell align="right">{row.total}</TableCell>
                                <TableCell align="right">{row.created}</TableCell>
                                <TableCell align="right">
                                    <BasicModal id={row.id} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Pagination onChange={(_, value) => {
                    setCondition(pre => ({ ...pre, page: value }))
                }} count={condition.totalPage} shape="rounded" className={style.pagination} />
            </TableContainer>
        </div>

    );
}
