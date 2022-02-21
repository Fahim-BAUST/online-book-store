
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Success = () => {
    let history = useNavigate()
    const { id } = useParams();
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${id}`)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [id])
    const validatePayment = () => {
        const data = {
            tran_id: id,
            val_id: books?.val_id
        }
        fetch(`http://localhost:5000/validate`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    Swal.fire(
                        'Order Placed!',
                        'Your order has been placed and payment successfully done',
                        'success'
                    )
                    history('/myOrder')
                }

            })
    }

    return (
        <main>
            <h1></h1>
            <div style={{ height: '600px' }} className="row d-flex align-items-center w-100">
                <div className="col-md-12 col-lg-4 offset-md-1 mb-4 fw-bolder text-dark">
                    <h1 style={{ color: '#ff4d30' }}>Payment Successful. Please validate your Order</h1>
                    <p className="text-secondary"></p>

                    <button className="btn btn-lg btn-warning fw-bold text-secondary" onClick={validatePayment}>Confirm</button>

                </div>
                <div className="col-md-12 col-lg-6">
                    <img src='https://image.freepik.com/free-vector/concept-landing-page-credit-card-payment_23-2148298751.jpg' alt="" className="img-fluid w-70 " />
                </div>
            </div>
        </main>
    );
};


export default Success;