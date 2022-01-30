
import React from 'react';
import Font from 'react-font';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

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

                fetch('https://morning-peak-49686.herokuapp.com/addProduct', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.insertedId) {
                            Swal.fire(
                                'Product Added!',
                                'Your product has been added.',
                                'success'
                            )
                            reset();
                        } else {
                            Swal.fire(
                                'Cancelled',
                                'Your product is not added',
                                'error'
                            )
                        }
                    }).catch((error) => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: `${error.message === "Failed to fetch" ? "No network connection" : error.message}`,
                        })
                    })

            }
        })

    }
    return (
        <div>

            <div>
                <Font family="Mochiy Pop One">
                    <h1 style={{ textAlign: "center", paddingTop: 3, marginTop: 20, marginBottom: 40, color: "#3F000F", fontSize: "40px" }}>Add Product</h1>

                </Font>
                <form className=" container w-50" onSubmit={handleSubmit(onSubmit)}>

                    <input type="text" className="form-control" aria-label="Username" placeholder="Product Name" aria-describedby="basic-addon1" required  {...register("bookName")} />
                    <br />

                    <input type="text" className="form-control" aria-label="Username" placeholder="Image url" aria-describedby="basic-addon1" {...register("image", { required: true })} />
                    <br />
                    <input type="text" className="form-control" aria-label="Username" placeholder="Features (write all list with [=])" aria-describedby="basic-addon1" {...register("details", { required: true })} />
                    <br />
                    <input type="text" className="form-control" aria-label="Username" placeholder="Sub Category" aria-describedby="basic-addon1" {...register("subCatagory", { required: true })} />
                    <br />
                    {errors.email && <span className="error">This field is required</span>}

                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" placeholder="Category?" defaultValue="" {...register("category")} /> <br />

                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" placeholder="Offer" defaultValue="" {...register("offer")} /> <br />
                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" placeholder="Author" defaultValue="" {...register("author")} /> <br />
                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" placeholder="publisher" defaultValue="" {...register("publisher")} /> <br />
                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" placeholder="edition" defaultValue="" {...register("edition")} /> <br />
                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" placeholder="Rating" defaultValue="" {...register("rating", { required: true })} /> <br />
                    <input type="number" className="form-control" aria-label="Username" aria-describedby="basic-addon1" placeholder="Price" defaultValue="" {...register("cost", { required: true })} /> <br />

                    <input style={{ borderRadius: "20px", padding: "10px 50px", border: "none", color: "#3F000F", backgroundColor: "#E0FFFF", fontWeight: "bold" }} type="submit" />

                </form>
            </div>
        </div >
    );
};

export default AddProduct;