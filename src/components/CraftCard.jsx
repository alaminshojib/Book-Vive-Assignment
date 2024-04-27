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
            <tr className=" border-b border-opacity-20 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50">

                <td className=" md:w-32 md:h-28 w-10 h-10">
                    <img className="w-full h-full items-center flex-col justify-center m-auto rounded-md " src={image} alt="Item Image" />
                </td>
                <td className=" md:pl-5 md:w-40 items-center flex-col justify-center m-auto text-center">
                    <p>{item_name}</p>
                </td>
                <td className=" items-center  flex-col justify-center m-auto text-center">
                    <p>{subcategory_Name}</p>
                </td>
                <td className=" items-center flex-col justify-center m-auto text-center">
                    <p>{price}</p>
                </td>
                <td className=" items-center flex-col justify-center m-auto text-center">
                    <p>{stockStatus}</p>
                </td>
                <td className=" items-center flex-col justify-center m-auto text-center">
                    <div>
                        <Link to={`/CraftCardDetails/${_id}`} className="w-fit flex flex-wrap justify-between items-center gap-2 bg-green-600 hover:bg-green-700 py-1 px-2 rounded-full text-sm text-white">View Details</Link>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default CraftCard;