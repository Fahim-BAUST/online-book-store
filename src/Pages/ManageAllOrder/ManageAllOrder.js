import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, LinearProgress, Paper, Slide, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Font from 'react-font';
import Swal from 'sweetalert2'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const ManageAllOrder = () => {
    const [orders, setOrders] = useState([]);
    const [displayOrders, setDisplayOrders] = useState([]);

    const [openModal, setOpenModal] = React.useState(false);
    const [deleteId, setDeleteId] = React.useState(null);


    useEffect(() => {
        fetch("http://localhost:5000/allOrders")
            .then((res) => res.json())
            .then((data) => {
                setOrders(data)
                setDisplayOrders(data)
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message === "Failed to fetch" ? "No network connection" : error.message}`,
                })
            });
    }, []);

    const handleCloseModal = () => {
        setOpenModal(false);
    };
    const handleOpenModal = (id) => {
        setOpenModal(true);
        setDeleteId(id);
    };

    const handleUpdateclick = (id, status) => {
        const data = { status: status };

        const url = `https://morning-peak-49686.herokuapp.com/updateStatus/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount === 1) {
                    Swal.fire(
                        `Success `,
                        `Status is ${status} `,
                        'success'
                    )
                    setOrders(orders);
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })
                }
            }).catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message === "Failed to fetch" ? "No network connection" : error.message}`,
                })
            })

    };

    const handleDeleteModal = (id) => {

        const url = `https://morning-peak-49686.herokuapp.com/allOrders/${id}`;
        fetch(url, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount === 1) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    setOpenModal(false);
                    const remainingOrders = orders.filter((order) => order?._id !== id);
                    setOrders(remainingOrders);
                } else {
                    setOpenModal(false);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })
                }
            }).catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message === "Failed to fetch" ? "No network connection" : error.message}`,
                })
            })

    };

    const handleCategory = (category) => {
        const matchedOrders = orders.filter(order => order?.orderStatus.toLowerCase().includes(category.toLowerCase()));

        setDisplayOrders(matchedOrders);

    }


    return (
        <div>
            <Dialog
                open={openModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseModal}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle sx={{ fontWeight: "bold", backgroundColor: "#98FB98" }}>{"Warning!!!"}</DialogTitle>
                <DialogContent sx={{ backgroundColor: "#98FB98" }}>
                    <DialogContentText id="alert-dialog-slide-description">
                        Are you sure you want to delete?
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ backgroundColor: "#98FB98" }}>
                    <Button sx={{ fontWeight: "bold" }} onClick={() => handleDeleteModal(deleteId)}>delete</Button>
                    <Button sx={{ fontWeight: "bold" }} onClick={handleCloseModal}>Close</Button>
                </DialogActions>
            </Dialog>


            <TableContainer sx={{ mb: 30 }} component={Paper}>

                <Font family="Yuji Syuku">
                    <Typography
                        sx={{
                            textAlign: "center",
                            pt: 3,
                            fontWeight: 800,
                            marginTop: 2,
                            marginBottom: 2,
                            color: "#3F000F",
                            fontSize: "40px",
                        }}
                        variant="h3"
                    >
                        Manage all Order
                    </Typography>
                    <center>
                        <div className="btn-group">
                            <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Order Status
                            </button>
                            <ul className="dropdown-menu">
                                <li><button onClick={() => handleCategory('Pending')} className="dropdown-item" >Pending</button></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><button onClick={() => handleCategory('Delivered')} className="dropdown-item" >Delivered</button></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><button onClick={() => handleCategory('Shipped')} className="dropdown-item" >Shipped</button></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><button onClick={() => handleCategory('Approved')} className="dropdown-item" >Approved</button></li>

                            </ul>
                        </div>
                    </center>
                    <Table sx={{ mt: 5 }} aria-label="simple table">

                        <TableHead>
                            <TableRow sx={{ backgroundColor: "dimgray" }}>
                                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "20px", color: "white" }}>Name</TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "20px", color: "white" }}>Order Item</TableCell>

                                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "20px", color: "white" }}>Price</TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "20px", color: "white" }}>Email</TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "20px", color: "white" }}>Phone</TableCell>

                                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "20px", color: "white" }}>Status</TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "20px", color: "white" }}>Change Status</TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "20px", color: "white" }}>Payment Status</TableCell>
                                <TableCell align="center" sx={{ fontWeight: "bold", fontSize: "20px", color: "white" }}>Delete</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.length === 0 ? (
                                <Box sx={{ width: "100%" }}>
                                    <LinearProgress color="secondary" />
                                </Box>
                            ) :

                                displayOrders.map((order) => (
                                    <TableRow
                                        key={order._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        className="order-cart"
                                    >
                                        <TableCell >{order?.name}</TableCell>
                                        <TableCell ><ul>{order?.order?.map(order => <li key={order?._id}> {order.orderName} <span className="fw-bold">(Qty={order?.quantity})</span> </li>)}</ul></TableCell>

                                        <TableCell > {order?.totalPrice} TK</TableCell>
                                        <TableCell > {order?.email}</TableCell>
                                        <TableCell > {order?.phone}</TableCell>
                                        <TableCell align="center">{order?.orderStatus === "Pending" && (
                                            <i className="me-1 fas fa-spinner text-warning fw-bolder fs-6"></i>
                                        )}
                                            {order?.orderStatus === "Shipped" && (
                                                <i className="me-1 fas fa-truck text-info fs-6"></i>
                                            )}
                                            {order?.orderStatus === "Delivered" && (
                                                <i className="me-1 fas fa-smile-wink fs-5 text-warning"></i>
                                            )}
                                            {order?.orderStatus === "Approved" && (
                                                <i className="me-1 fas fa-check-circle fs-5 text-success"></i>
                                            )}
                                            {order?.orderStatus}{" "}</TableCell>

                                        <TableCell align="center"> <div className="dropdown">
                                            <button
                                                className="btn btn-outline-dark dropdown-toggle btn-sm"
                                                type="button"
                                                id="dropdownMenu2"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="fas fa-tasks"></i> manage
                                            </button>
                                            <ul
                                                className="dropdown-menu"
                                                aria-labelledby="dropdownMenu2"
                                            >
                                                <li>
                                                    <button
                                                        onClick={() =>
                                                            handleUpdateclick(order._id, "Approved")
                                                        }
                                                        className="dropdown-item"
                                                        type="button"
                                                    >
                                                        Approved
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        onClick={() =>
                                                            handleUpdateclick(order._id, "Pending")
                                                        }
                                                        className="dropdown-item"
                                                        type="button"
                                                    >
                                                        Pending
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        onClick={() =>
                                                            handleUpdateclick(order._id, "Shipped")
                                                        }
                                                        className="dropdown-item"
                                                        type="button"
                                                    >
                                                        Shipped
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        onClick={() =>
                                                            handleUpdateclick(order._id, "Delivered")
                                                        }
                                                        className="dropdown-item"
                                                        type="button"
                                                    >
                                                        Delivered
                                                    </button>
                                                </li>
                                            </ul>
                                        </div></TableCell>
                                        <TableCell align="center"> {order?.paymentStatus === 'paymentComplete' ? 'paid' : 'not paid yet'}</TableCell>
                                        <TableCell align="center"> <button
                                            onClick={() => handleOpenModal(order._id)}
                                            className="ms-1 border-0"
                                        >
                                            <i className="fas fa-trash text-danger"></i>
                                        </button></TableCell>


                                    </TableRow>
                                ))
                            }
                        </TableBody>

                    </Table>
                </Font>
            </TableContainer >

        </div>
    );
};

export default ManageAllOrder;