import { Link } from 'react-router-dom';
import { useState } from 'react';
import Swal from "sweetalert2";

const MySingleCraftCard = ({ craft, crafts, setCrafts }) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async (_id) => {
        try {
            const result = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            });

            if (result.isConfirmed) {
                setIsDeleting(true);
                const response = await fetch(`http://localhost:5000/artCrafts/${_id}`, {
                    method: 'DELETE'
                });

                if (!response.ok) {
                    throw new Error('Failed to delete craft item');
                }

                const data = await response.json();
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your craft item has been deleted.',
                        'success'
                    );
                    const remaining = crafts.filter(cof => cof._id !== _id);
                    setCrafts(remaining);
                }
            }
        } catch (error) {
            console.error('Error deleting craft item:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to delete craft item. Please try again later.',
            });
        } finally {
            setIsDeleting(false);
            window.location.reload()
        }
    };

    return (
        <div className="max-w-xs rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
            <img src={craft.image} alt="Image" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold tracking-wide">{craft.item_name}</h2>
                    <p className="text-gray-100 dark:text-gray-800">{craft.short_description}</p>
                    <p className='text-gray-100 dark:text-gray-800'>{craft.processing_time}</p>
                    <p className='text-gray-100 dark:text-gray-800'>{craft.price}</p>
                    <p className='text-gray-100 dark:text-gray-800'>{craft.stockStatus}</p>
                </div>
                <div className='flex gap-3'>
                    <Link to={`/updateCraftDetails/${craft._id}`}>
                        <button type="button" className="btn-sm flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">
                            Update
                        </button>
                    </Link>
                    <button
                        onClick={() => handleDelete(craft._id)}
                        type="button"
                        className={`btn-sm flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50 ${isDeleting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isDeleting}
                    >
                        {isDeleting ? 'Deleting...' : 'Delete'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MySingleCraftCard;
