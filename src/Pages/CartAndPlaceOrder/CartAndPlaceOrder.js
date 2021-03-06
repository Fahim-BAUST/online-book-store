import { Divider, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Slide } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Swal from 'sweetalert2'
import useAuth from '../Hooks/useAuth';
import CartItem from './CartItem';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CartAndPlaceOrder = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [prod, setProd] = useState([]);
    const [total, setTotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [hDelete, sethDelete] = useState(false);
    const [home, setHome] = useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    const [deleteId, setDeleteId] = React.useState(null);


    const { user } = useAuth();
    const email = user.email;
    let sum = 0;

    const url = `http://localhost:5000/addToCart/cart/${email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProd(data);
                data.map(p => {
                    sum = sum + (parseInt(p.price) * parseInt(p.quantity));
                })
                const tax = (5 * sum) / 100;
                const shipping = home === true ? 150 : 50;
                setTax(tax);
                setTotal(sum + shipping + tax);

            }).catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message === "Failed to fetch" ? "No network connection" : error.message}`,
                })
            })

    }, [prod, hDelete]);

    const handleCloseModal = () => {
        setOpenModal(false);
    };
    const handleOpenModal = (id) => {
        setOpenModal(true);
        setDeleteId(id);
    };



    const handleDeleteModal = (id) => {
        setOpenModal(false);
        const url = `http://localhost:5000/cart/${id}`;
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
                    const remainingOrders = prod.filter((order) => order?._id !== id);
                    setProd(remainingOrders);

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

    const handleDeleteAll = (email) => {
        setOpenModal(false);

        const url = `http://localhost:5000/cartRemove/${email}`;
        fetch(url, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged === true) {
                    let timerInterval
                    Swal.fire({
                        title: 'Deleting!',
                        html: ' close in <b></b> milliseconds.',
                        timer: 1000,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading()
                            const b = Swal.getHtmlContainer().querySelector('b')
                            timerInterval = setInterval(() => {
                                b.textContent = Swal.getTimerLeft()
                            }, 100)
                        },
                        willClose: () => {
                            clearInterval(timerInterval)
                        }
                    }).then((result) => {
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log('I was closed by the timer')
                        }
                    })
                    setOpenModal(false);
                    sethDelete(true);
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

    const onSubmit = data => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You want to submit?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {
                data.order = prod;
                data.orderStatus = "Pending";
                data.totalPrice = total;
                data.total_amount = total;
                data.cus_email = user?.email

                fetch('http://localhost:5000/init', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        window.location.replace(result)

                    }).catch((error) => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: `${error.message === "Failed to fetch" ? "No network connection" : error.message}`,
                        })
                    })
            }
        })

    };

    const handleClickedChange = e => {
        e.target.checked ? setHome(true) : setHome(false);
    }



    return (
        <div>
            <div className="container mt-3">
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
                        <Button sx={{ fontWeight: "bold" }} onClick={() => handleDeleteModal(deleteId)}>Clear one</Button>
                        <Button sx={{ fontWeight: "bold" }} onClick={() => handleDeleteAll(user?.email)}> Clear All</Button>
                        <Button sx={{ fontWeight: "bold" }} onClick={handleCloseModal}>Close</Button>
                    </DialogActions>
                </Dialog>

                <div className="row">

                    <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 px-5">

                        <Typography className="text-center" sx={{ fontWeight: "bold", color: "#3F000F", marginBottom: 5, fontSize: "2em" }} ><span >Your Orders</span> </Typography>

                        {prod.map(product => <CartItem
                            product={product}
                            handleOpenModal={handleOpenModal}
                            openModal={openModal}
                        ></CartItem>
                        )}
                        <br />
                        <Divider></Divider>
                        <div >
                            <div className="row d-flex align-items-center justify-content-around ">

                                <div className="col text-center ">
                                    <p className=" fw-bold mt-3">Home Delivery?</p>
                                </div>
                                <div className="col text-center ">
                                    <input style={{ border: "2px solid tomato" }} onChange={handleClickedChange} className="form-check-input " type="checkbox" />
                                </div>
                            </div>

                            <div className="row d-flex align-items-center justify-content-around">
                                <div className=" text-center  col">
                                    <p className=" fw-bold"> Shipping cost :  </p>
                                </div>
                                <div className=" text-center col">
                                    <p className=" fw-bold">  <span className="text-danger"> {home === true ? 150 : 50}</span> TK </p>
                                </div>

                            </div>
                            <div className="row d-flex align-items-center justify-content-around">
                                <div className=" text-center  col">
                                    <p className=" fw-bold"> Tax (5%) :  </p>
                                </div>
                                <div className=" text-center col">
                                    <p className=" fw-bold">  <span className="text-danger"> {tax}</span> TK </p>
                                </div>

                            </div>
                            <div className="row d-flex align-items-center justify-content-around">
                                <div className=" text-center col">


                                    <p className="text-center fw-bold"> ToTall Cost : </p>

                                </div>
                                <div className=" text-center col">


                                    <p className="text-center fw-bold"><span className="text-danger"> {total}</span> TK </p>

                                </div>
                            </div>
                        </div>


                        <Divider></Divider>
                        <br />
                        <Divider></Divider>

                    </div>

                    <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 px-5">

                        <Typography className="text-center" sx={{ fontWeight: "bold", color: "#3F000F", marginBottom: 5, fontSize: "2em" }} ><span >Place Order</span> </Typography>

                        <form className=" mb-5" onSubmit={handleSubmit(onSubmit)}>


                            <input className="form-control" aria-label="Username" aria-describedby="basic-addon1" defaultValue={user.displayName} {...register("name")} />
                            <br />

                            <input readOnly className="form-control" aria-label="Username" aria-describedby="basic-addon1" value={user.email} {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className="error">This field is required</span>}

                            <input className="form-control" aria-label="Username" aria-describedby="basic-addon1" placeholder="Address" defaultValue="" {...register("address", { required: true })} />
                            <br />
                            <input className="form-control" aria-label="Username" aria-describedby="basic-addon1" placeholder="City" defaultValue="" {...register("city", { required: true })} />
                            <br />
                            <input className="form-control" aria-label="Username" aria-describedby="basic-addon1" placeholder="phone number" type="number" defaultValue="" {...register("phone", { required: true })} /> <br />

                            <input className="fw-bold" style={{ borderRadius: "20px", padding: "10px 50px", border: "1px solid #00BFFF", color: "#3F000F", backgroundColor: "#E0FFFF" }} type="submit" />
                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default CartAndPlaceOrder;