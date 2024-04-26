// AddCraftItemPage.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Assuming you're using React Router for routing
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for toast messages

const AddCraftItemPage = () => {
    const history = useHistory();

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
            const response = await fetch('http://localhost:5000/coffee', {
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
            toast.success('Craft item added successfully!');
            
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
                userEmail: '',
                userName: ''
            });

            // Redirect to another page or do any necessary action
            history.push('/'); // Redirect to homepage after successful submission
        } catch (error) {
            // Handle error
            console.error('Error adding craft item:', error);
            toast.error('Failed to add craft item. Please try again later.');
        }
    };

    return (
        <div>
            <h2>Add Craft Item</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Image URL:</label>
                    <input type="text" name="image" value={formData.image} onChange={handleChange} required />
                </div>
                <div>
                    <label>Item Name:</label>
                    <input type="text" name="item_name" value={formData.item_name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Subcategory Name:</label>
                    <input type="text" name="subcategory_Name" value={formData.subcategory_Name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Short Description:</label>
                    <textarea name="short_description" value={formData.short_description} onChange={handleChange} required />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} required />
                </div>
                <div>
                    <label>Rating:</label>
                    <input type="number" name="rating" value={formData.rating} onChange={handleChange} required />
                </div>
                <div>
                    <label>Customization:</label>
                    <select name="customization" value={formData.customization} onChange={handleChange} required>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div>
                    <label>Processing Time:</label>
                    <input type="text" name="processing_time" value={formData.processing_time} onChange={handleChange} required />
                </div>
                <div>
                    <label>Stock Status:</label>
                    <select name="stockStatus" value={formData.stockStatus} onChange={handleChange} required>
                        <option value="In stock">In stock</option>
                        <option value="Made to Order">Made to Order</option>
                    </select>
                </div>
                <div>
                    <label>User Email:</label>
                    <input type="email" name="userEmail" value={formData.userEmail} onChange={handleChange} required />
                </div>
                <div>
                    <label>User Name:</label>
                    <input type="text" name="userName" value={formData.userName} onChange={handleChange} required />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddCraftItemPage;
