// import Swal from 'sweetalert2'

//     const handleAddCoffee = event => {
//         event.preventDefault();

//         const form = event.target;

//         const name = form.name.value;
//         const quantity = form.quantity.value;
//         const supplier = form.supplier.value;
//         const taste = form.taste.value;
//         const category = form.category.value;
//         const details = form.details.value;
//         const photo = form.photo.value;

//         const newCoffee = { name, quantity, supplier, taste, category, details, photo }

//         console.log(newCoffee);

//         // send data to the server
//         fetch('http://localhost:5000/coffee', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(newCoffee)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.insertedId) {
//                     Swal.fire({
//                         title: 'Success!',
//                         text: 'Coffee Added Successfully',
//                         icon: 'success',
//                         confirmButtonText: 'Cool'
//                     })
//                 }
//             })
//     }

// const AddCraftitem = () => {
//     return (



//         <div className="bg-[#F4F3F0] p-24">
//             <h2 className="text-3xl font-extrabold">Add a Coffee</h2>
//             <form onSubmit={handleAddCoffee}>
//                 {/* form name and quantity row */}
//                 <div className="md:flex mb-8">
//                     <div className="form-control md:w-1/2">
//                         <label className="label">
//                             <span className="label-text">Coffee Name</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
//                         </label>
//                     </div>
//                     <div className="form-control md:w-1/2 ml-4">
//                         <label className="label">
//                             <span className="label-text">Available Quantity</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
//                         </label>
//                     </div>
//                 </div>
//                 {/* form supplier row */}
//                 <div className="md:flex mb-8">
//                     <div className="form-control md:w-1/2">
//                         <label className="label">
//                             <span className="label-text">Supplier Name</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
//                         </label>
//                     </div>
//                     <div className="form-control md:w-1/2 ml-4">
//                         <label className="label">
//                             <span className="label-text">Taste</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
//                         </label>
//                     </div>
//                 </div>
//                 {/* form category and details row */}
//                 <div className="md:flex mb-8">
//                     <div className="form-control md:w-1/2">
//                         <label className="label">
//                             <span className="label-text">Category</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
//                         </label>
//                     </div>
//                     <div className="form-control md:w-1/2 ml-4">
//                         <label className="label">
//                             <span className="label-text">Details</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
//                         </label>
//                     </div>
//                 </div>
//                 {/* form Photo url row */}
//                 <div className="mb-8">
//                     <div className="form-control w-full">
//                         <label className="label">
//                             <span className="label-text">Photo URL</span>
//                         </label>
//                         <label className="input-group">
//                             <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
//                         </label>
//                     </div>
//                 </div>
//                 <input type="submit" value="Add Coffee" className="btn btn-block" />

//             </form>

//         </div>
//     );
// };

// export default AddCraftitem;


// AddCraftItemPage.js
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const AddCraftitem = () => {
    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        image: '',
        item_name: '',
        subcategory_Name: '',
        short_description: '',
        price: '',
        rating: '',
        customization: '',
        processing_time: '',
        stockStatus: '',
        userEmail: '', 
        userName: '' 
    });

    useEffect(() => {
        if (user) {
            setFormData(prevState => ({
                ...prevState,
                userEmail: user.email || '' ,
                userName: user.displayName || '' 
            }));
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/artCrafts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to add craft item');
            }

            // Show success message
            Swal.fire({
                title: 'Success!',
                text: 'Craft Item Added Successfully',
                icon: 'success',
                confirmButtonText: 'Done'
            });

            // Clear the form fields
            setFormData({
                image: '',
                item_name: '',
                subcategory_Name: '',
                short_description: '',
                price: '',
                rating: '',
                customization: '',
                processing_time: '',
                stockStatus: '',
                userEmail: user ? user.email : '', // Populate user email if available
                userName: user ? user.displayName || '' : '' // Populate user name if available
            });
        } catch (error) {
            // Handle error
            console.error('Error adding craft item:', error);
            toast.error('Failed to add craft item. Please try again later.');
        }
    };

        return (
            <>
                <div>
                    <h2 className='text-3xl font-semibold text-center py-5'>Add Craft Item</h2>


                    <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-2 justify-center items-center  gap-5 w-2/3 mx-auto'>
                        <div>
                                <fieldset className="w-full space-y-1 text-gray-100 dark:text-gray-800">
                                    <div className="flex">
                                        <span className="flex items-center px-3 py-3 pointer-events-none sm:text-sm rounded-l-md bg-gray-700 dark:bg-gray-300">Item Name:</span>
                                        <input type="text" name="item_name" value={formData.item_name} onChange={handleChange} required id="url" placeholder="Item Name" className=" pl-2 flex flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-700 dark:border-gray-300 text-gray-100 dark:text-gray-800 bg-gray-800 dark:bg-gray-100 focus:ring-violet-400 focus:dark:ring-violet-600" />
                                    </div>
                                </fieldset>

                            </div>
                            <div >
                                <fieldset className="w-full space-y-1 text-gray-100 dark:text-gray-800">
                                    <div className="flex">
                                        <span className="flex items-center px-3 py-3 pointer-events-none sm:text-sm rounded-l-md bg-gray-700 dark:bg-gray-300">Image URL:</span>
                                        <input type="text" name="image" value={formData.image} onChange={handleChange} required id="url" placeholder="https://ibb.co/kMDQGxC" className=" pl-2 flex flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-700 dark:border-gray-300 text-gray-100 dark:text-gray-800 bg-gray-800 dark:bg-gray-100 focus:ring-violet-400 focus:dark:ring-violet-600" />
                                    </div>
                                </fieldset>

                            </div>
                          
                            <div>
                                <fieldset className="w-full space-y-1 text-gray-100 dark:text-gray-800">
                                    <div className="flex">
                                        <span className="flex items-center px-3 py-3 pointer-events-none sm:text-sm rounded-l-md bg-gray-700 dark:bg-gray-300">Subcategory Name:</span>
                                        <select name="subcategory_Name" value={formData.subcategory_Name} onChange={handleChange} required className=" pl-2 flex flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-700 dark:border-gray-300 text-gray-100 dark:text-gray-800 bg-gray-800 dark:bg-gray-100 focus:ring-violet-400 focus:dark:ring-violet-600" >
                                            <option>Landscape Painting</option>
                                            <option>Portrait Drawing</option>
                                            <option>Watercolour Painting</option>
                                            <option>Oil Painting</option>
                                            <option>Charcoal Sketching</option>
                                            <option>Cartoon Drawing</option>
                                        </select>
                                    </div>
                                </fieldset>

                            </div>
                            <div >
                                <fieldset className="w-full space-y-1 text-gray-100 dark:text-gray-800">
                                    <div className="flex">
                                        <span className="flex items-center border px-3 py-3 pointer-events-none sm:text-sm rounded-l-md bg-gray-700 dark:bg-gray-300 ">Short Description:</span>
                                        <input name="short_description" value={formData.short_description} onChange={handleChange} required id="url" placeholder="Short Description" className=" pl-2 flex flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-700 dark:border-gray-300 text-gray-100 dark:text-gray-800 bg-gray-800 dark:bg-gray-100 focus:ring-violet-400 focus:dark:ring-violet-600" />
                                    </div>
                                </fieldset>

                            </div>
                            <div>
                                <fieldset className="w-full space-y-1 text-gray-100 dark:text-gray-800">
                                    <div className="flex">
                                        <span className="flex items-center px-3 py-3 pointer-events-none sm:text-sm rounded-l-md bg-gray-700 dark:bg-gray-300">Price:</span>
                                        <input type="number" name="price" value={formData.price} onChange={handleChange} required id="url" placeholder="Price" className=" pl-2 flex flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-700 dark:border-gray-300 text-gray-100 dark:text-gray-800 bg-gray-800 dark:bg-gray-100 focus:ring-violet-400 focus:dark:ring-violet-600" />
                                    </div>
                                </fieldset>
                            </div>
                            <div>
                                <fieldset className="w-full space-y-1 text-gray-100 dark:text-gray-800">
                                    <div className="flex">
                                        <span className="flex items-center px-3 py-3 pointer-events-none sm:text-sm rounded-l-md bg-gray-700 dark:bg-gray-300">Rating:</span>
                                        <input type="number" name="rating" value={formData.rating} onChange={handleChange} required id="url" placeholder="Rating" className=" pl-2 flex flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-700 dark:border-gray-300 text-gray-100 dark:text-gray-800 bg-gray-800 dark:bg-gray-100 focus:ring-violet-400 focus:dark:ring-violet-600" />
                                    </div>
                                </fieldset>
                            </div>
                            <div>
                                <fieldset className="w-full space-y-1 text-gray-100 dark:text-gray-800">
                                    <div className="flex">
                                        <span className="flex items-center px-3 py-3 pointer-events-none sm:text-sm rounded-l-md bg-gray-700 dark:bg-gray-300">Customization:</span>
                                        <select name="customization" value={formData.customization} onChange={handleChange} required className=" pl-2 flex flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-700 dark:border-gray-300 text-gray-100 dark:text-gray-800 bg-gray-800 dark:bg-gray-100 focus:ring-violet-400 focus:dark:ring-violet-600" >
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>
                                </fieldset>

                            </div>
                            <div>
                                <fieldset className="w-full space-y-1 text-gray-100 dark:text-gray-800">
                                    <div className="flex">
                                        <span className="flex items-center px-3 py-3 pointer-events-none sm:text-sm rounded-l-md bg-gray-700 dark:bg-gray-300">Processing Time:</span>
                                        <input type="number" name="processing_time" value={formData.processing_time} onChange={handleChange} required id="url" placeholder="Processing Time" className=" pl-2 flex flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-700 dark:border-gray-300 text-gray-100 dark:text-gray-800 bg-gray-800 dark:bg-gray-100 focus:ring-violet-400 focus:dark:ring-violet-600" />
                                    </div>
                                </fieldset>
                            </div>
                            <div>
                                <fieldset className="w-full space-y-1 text-gray-100 dark:text-gray-800">
                                    <div className="flex">
                                        <span className="flex items-center px-3 py-3 pointer-events-none sm:text-sm rounded-l-md bg-gray-700 dark:bg-gray-300">Stock Status:</span>
                                        <select name="stockStatus" value={formData.stockStatus} onChange={handleChange} required className=" pl-2 flex flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-700 dark:border-gray-300 text-gray-100 dark:text-gray-800 bg-gray-800 dark:bg-gray-100 focus:ring-violet-400 focus:dark:ring-violet-600" >
                                            <option value="In stock">In Stock</option>
                                            <option value="Made to Order">Made to Order</option>
                                        </select>
                                    </div>
                                </fieldset>

                            </div>
                            <div>
                                <fieldset className="w-full space-y-1 text-gray-100 dark:text-gray-800">
                                    <div className="flex">
                                        <span className="flex items-center px-3 py-3 pointer-events-none sm:text-sm rounded-l-md bg-gray-700 dark:bg-gray-300">User Name:</span>

                                        <input type="text" disabled name="userName" value={formData.userName} onChange={handleChange} required id="url" placeholder="User Name" className=" pl-2 flex flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-700 dark:border-gray-300 text-gray-100 dark:text-gray-800 bg-gray-800 dark:bg-gray-100 focus:ring-violet-400 focus:dark:ring-violet-600" />
                                    </div>
                                </fieldset>

                            </div>
                            <div>
                                <fieldset className="w-full space-y-1 text-gray-100 dark:text-gray-800">
                                    <div className="flex">
                                        <span className="flex items-center px-3 py-3 pointer-events-none sm:text-sm rounded-l-md bg-gray-700 dark:bg-gray-300">Email:</span>

                                        <input type="email" disabled name="userEmail" value={formData.userEmail} onChange={handleChange} required id="url" placeholder="Email" className=" pl-2 flex flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-700 dark:border-gray-300 text-gray-100 dark:text-gray-800 bg-gray-800 dark:bg-gray-100 focus:ring-violet-400 focus:dark:ring-violet-600" />
                                    </div>
                                </fieldset>

                            </div>
                          
                        </div>
                        <button className='items-center font-semibold btn px-10 mx-auto justify-center flex flex-col m-3 btn-primary' type="submit">Add</button>

                    </form>
                </div>
            </>
            // <div>
            //     <h2 className='text-3xl text-center font-bold my-5'>Add Craft Item</h2>
            //     <form onSubmit={handleSubmit}>
            //         <div>
            //             <label>Image URL:</label>
            //             <input type="text" name="image" value={formData.image} onChange={handleChange} required />
            //         </div>
            //         <div>
            //             <label>Item Name:</label>
            //             <input type="text" name="item_name" value={formData.item_name} onChange={handleChange} required />
            //         </div>
            //         <div>
            //             <label>Subcategory Name:</label>
            //             <input type="text" name="subcategory_Name" value={formData.subcategory_Name} onChange={handleChange} required />
            //         </div>
            //         <div>
            //             <label>Short Description:</label>
            //             <textarea name="short_description" value={formData.short_description} onChange={handleChange} required />
            //         </div>
            //         <div>
            //             <label>Price:</label>
            //             <input type="number" name="price" value={formData.price} onChange={handleChange} required />
            //         </div>
            //         <div>
            //             <label>Rating:</label>
            //             <input type="number" name="rating" value={formData.rating} onChange={handleChange} required />
            //         </div>
            //         <div>
            //             <label>Customization:</label>
            //             <select name="customization" value={formData.customization} onChange={handleChange} required>
            //                 <option value="yes">Yes</option>
            //                 <option value="no">No</option>
            //             </select>
            //         </div>
            //         <div>
            //             <label>Processing Time:</label>
            //             <input type="text" name="processing_time" value={formData.processing_time} onChange={handleChange} required />
            //         </div>
            //         <div>
            //             <label>Stock Status:</label>
            //             <select name="stockStatus" value={formData.stockStatus} onChange={handleChange} required>
            //                 <option value="In stock">In stock</option>
            //                 <option value="Made to Order">Made to Order</option>
            //             </select>
            //         </div>
            //         <div>
            //             <label>User Email:</label>
            //             <input type="email" name="userEmail" value={formData.userEmail} onChange={handleChange} required />
            //         </div>
            //         <div>
            //             <label>User Name:</label>
            //             <input type="text" name="userName" value={formData.userName} onChange={handleChange} required />
            //         </div>
            //         <button type="submit">Add</button>
            //     </form>
            // </div>
        );
    }

    export default AddCraftitem;
