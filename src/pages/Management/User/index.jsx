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
import { useState, useEffect } from 'react';
import { Pagination, TextField } from '@mui/material';
import UserModal from '../../../components/Modal/userModal';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function UserManagement() {
    const [data, setData] = useState([])
    const [condition, setCondition] = useState(
        {
            text: '',
            page: 1,
            pageSide: 10,
            totalPage: 1
        }
    )
    const token = localStorage.getItem('admin')

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (condition.text !== '') {
                const fetch = async () => {
                    try {
                        const response = await axios.post(
                            `http://localhost:8080/api/auth/all`,
                            {
                                ...condition,
                                size: condition.pageSide
                            },
                            {
                                headers: {
                                    'Authorization': `Bearer ${token}`
                                }
                            }
                        );
                        if (response.data !== null) {
                            setData(response.data.users);
                            setCondition((prev) => ({
                                ...prev,
                                totalPage: response.data.totalPage
                            }));
                        }
                    } catch (error) {
                        console.log(error);
                        toast.error('Could not fetch data! Something went wrong!');
                    }
                };
                fetch();
            }
        }, 500); // 2 second delay

        return () => clearTimeout(delayDebounceFn);
    }, [condition.page, condition.text])

    return (
        <div className={style.table}>
            <div className={style.tableHeader}>
                <div className={style.tableHeaderText}>Customer List Table</div>
                <div className={style.floorContainer}>
                    <div className={style.textInput}>
                        <TextField
                            label={'Search by name, phone or email'}
                            fullWidth
                            size='small'
                            value={condition.text}
                            onChange={(e) => setCondition(pre => ({ ...pre, text: e.target.value }))}
                        />
                    </div>
                </div>
            </div>
            <TableContainer component={Paper} className={style.tableContent}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell align="right">Full name</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Address</TableCell>
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
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">
                                    <UserModal id={row._id} />
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
