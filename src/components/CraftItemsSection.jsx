import { Link } from "react-router-dom";

const CraftItemsSection = ({ craft }) => {


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
    userName } = craft;


  return (
    <div className="drop-shadow-xl ">
      <article className="flex flex-col bg-white rounded-3xl">
        <div>
          <img alt="" className="object-cover lg:h-56 mx-auto p-2 rounded-3xl bg-cover" src={image} />
        </div>

        <div className="flex flex-col flex-1 px-6 py-3">
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-lg dark:text-gray-600 font-semibold">
            <span>{price}</span>
            <Link to={`/CraftCardDetails/${_id}`} className="flex flex-wrap justify-between items-center gap-2 bg-cyan-600 hover:bg-green-700 py-1 px-2 rounded-full text-sm text-white">View Details</Link>

          </div>
          <h3 className="flex-1 py-2 lg:text-xl text-md leading-snug font-bold">
            {item_name.slice(0, 30)}
          </h3>
          <h4>Location: {customization}</h4>
          <h4>Area: {rating}</h4>
          <span>Status: {stockStatus}</span>
          <p>Facilities : {short_description}</p>
          
        </div>
      </article>
    </div>
  );
};


export default CraftItemsSection;