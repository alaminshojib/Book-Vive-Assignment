import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";


const CraftCard = ({ coffee, coffees, setCoffees }) => {
    const { user } = useContext(AuthContext);


    const {
        _id,
        image,
        item_name,
        subcategory_Name,
        short_description,
        price,
        rating,
        customization,
        processing_time,
        stockStatus,
        userEmail,
        userName
    } = coffee;


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://coffee-store-server-74xiae2di-jhankarphero.vercel.app/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining);
                        }
                    })

            }
        })
    }

    return (


        <>
            <tr className="border-b border-opacity-20 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50">

                <td className="p-3">
                    <img className="w-24 h-20" src={image} alt="Item Image" />
                </td>
                <td className="p-3">
                    <p>{item_name}</p>
                </td>
                <td className="p-3">
                    <p>{subcategory_Name}</p>
                </td>
                <td className="p-3">
                    <p>{price}</p>
                </td>
                <td className="p-3">
                    <p>{stockStatus}</p>
                </td>
                <td className="p-3">
                    <button>
                        <Link to={`/CraftCardDetails/${_id}`} className="flex flex-wrap justify-between items-center gap-2 bg-cyan-600 hover:bg-green-700 py-1 px-2 rounded-full text-sm text-white">View Details</Link>
                    </button>
                </td>
            </tr>


            {/* 
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn">View</button>
                        <Link to={`updateCoffee/${_id}`}>
                        <button className="btn">Edit</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-orange-500">X</button>
                    </div>
                 </div>
            </div> */}
        </>
    );
};

export default CraftCard;