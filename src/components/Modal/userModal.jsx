/* eslint-disable */
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import style from './Modal.module.scss';
import { TextField, Button } from '@mui/material';

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 500,
    overflow: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function UserModal({ id }) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState(
        {}
    );
    React.useEffect(() => {
        setData({
            name: 'Rocky Operation',
            email: 'rocky@gmail.com',
            phone: '0355669359',
            birth: '09-09-2002',
            gender: 'Male',
            address: 'Chau Thanh, Dong Thap',
            nationality: 'Viet Nam',
            reviews: [
                {
                    content: 'ok',
                    date: '02-01-2024'
                },
                {
                    content: 'ok',
                    date: '02-01-2024'
                },
                {
                    content: 'ok',
                    date: '02-01-2024'
                },
                {
                    content: 'ok',
                    date: '02-01-2024'
                }
            ]
        })
    }, [])


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const resetPassword = () => {
        alert('clicked!')
    }
    return (
        <div>
            <Button onClick={handleOpen}>Detail</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleModal}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Detail User {data.name}
                    </Typography>
                    <Typography
                        id="modal-modal-description"
                        sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <TextField
                            label={'Full Name'}
                            size='small'
                            value={data.name}
                            onChange={(e) => setData(pre => ({ ...pre, email: e.target.value }))}
                            disabled
                        />
                        <TextField
                            label={'Email'}
                            size='small'
                            value={data.email}
                            onChange={(e) => setData(pre => ({ ...pre, name: e.target.value }))}
                            disabled
                        />
                    </Typography>
                    <Typography
                        id="modal-modal-description"
                        sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <TextField
                            label={'Phone'}
                            size='small'
                            value={data.phone}
                            onChange={(e) => setData(pre => ({ ...pre, phone: e.target.value }))}
                            disabled
                        />
                        <TextField
                            label={'Date of birth'}
                            size='small'
                            value={data.birth}
                            onChange={(e) => setData(pre => ({ ...pre, birth: e.target.value }))}
                            disabled
                        />
                    </Typography>
                    <Typography
                        id="modal-modal-description"
                        sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <TextField
                            label={'Gender'}
                            size='small'
                            value={data.gender}
                            onChange={(e) => setData(pre => ({ ...pre, gender: e.target.value }))}
                            disabled
                        />
                        <TextField
                            label={'Nationality'}
                            size='small'
                            value={data.nationality}
                            onChange={(e) => setData(pre => ({ ...pre, nationality: e.target.value }))}
                            disabled
                        />
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <span className={style.label}>Reviews:</span>
                        {data?.reviews?.map(item => (
                            <div className={style.guest} key={item}>
                                -------------------------
                                <div>
                                    <span className={style.label}>Comment:</span> {item.content}
                                </div>
                                <div>
                                    <span className={style.label}>Date created:</span> {item.date}
                                </div>
                            </div>
                        ))}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Button variant='contained' onClick={resetPassword}>Reset password for this user</Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
