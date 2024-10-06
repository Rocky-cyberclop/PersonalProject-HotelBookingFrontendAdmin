/* eslint-disable */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import style from './Modal.module.scss';

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 700,
    overflow: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({ id }) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState(
        {}
    );
    React.useEffect(() => {
        setData({
            email: 'rocky@gmail.com',
            come: '01-02-2024',
            go: '01-02-2024',
            total: 4,
            created: '01-02-2024',
            id: 1,
            guests: [{
                name: "Hao",
                email: "rocky@gmail.com",
                phone: "0355669359"
            }],
            rooms: [
                {
                    number: 101,
                    price: 400
                }
            ],
            payment: {
                amount: 1000,
                date: "02-10-2024"
            }
        })
    }, [])


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
                        Detail Reservation number {id}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <span className={style.label}>Making by</span> {data?.email}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <span className={style.label}>Come from</span> {data?.come}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <span className={style.label}>Leave at</span>  {data?.go}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <span className={style.label}>Total days:</span> {data?.total}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <span className={style.label}>Created at:</span> {data?.created}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <span className={style.label}>Guests:</span>
                        {data?.guests?.map(item => (
                            <div className={style.guest} key={item}>
                                -------------------------
                                <div>{item.name}</div>
                                <div>{item.email}</div>
                                <div>{item.phone}</div>
                            </div>
                        ))}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <span className={style.label}>Rooms:</span>
                        {data?.rooms?.map(item => (
                            <div className={style.guest} key={item}>
                                -------------------------
                                <div>
                                    <span className={style.label}>Number:</span> {item.number}
                                </div>
                                <div>
                                    <span className={style.label}>Price:</span> {item.price}
                                </div>
                            </div>
                        ))}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <span className={style.label}>Payment method:</span>
                        <div className={style.guest}>
                            <div>
                                <span className={style.label}>Amount: </span>{data?.payment?.amount}
                            </div>
                            <div>
                                <span className={style.label}>Date paid: </span>
                                {data?.payment?.date}

                            </div>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
