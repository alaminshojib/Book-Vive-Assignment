import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";


const CraftCard = ({ craft, crafts, setCrafts }) => {
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
    } = craft;


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
        </>
    );
};

export default CraftCard;