import { Link, useParams, useNavigate, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const CraftCardDetails = () => {
    const loadedCraft = useLoaderData();


  const navigate = useNavigate()

  const { id } = useParams();

  const [singleData, setSingleData] = useState();


  useEffect(() => {
    if (loadedCraft) {
      const signData = loadedCraft.find((item) => item._id == id);
      setSingleData(signData);
      console.log(signData)
    }
  }, [loadedCraft,id]);
  console.log(loadedCraft)

  const {
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
} = singleData || {};

console.log(item_name)

  return (
    <div>

      <div className=" justify-center mx-auto px-5 w-5/6 p-3 mb-3">
        <article className="lg:flex dark:bg-gray-50 border  rounded-lg">
          <div className='lg:w-1/2 p-5 flex-col items-center my-auto'>
            <img alt="" className="object-cover rounded-2xl mx-auto p-2 my-5" src={image} />
          </div>

          <div className="flex flex-col flex-1 mx-auto lg:w-2/5 drop-shadow-xl p-8 ">
            <div className="flex flex-wrap justify-between items-center space-x-2 md:text-lg dark:text-gray-800 font-semibold">
              <span>Price:{price}</span>
              <div  className="flex flex-wrap justify-between items-center gap-2 px-3 rounded-full">

                <Link className='bg-green-500 font-medium hover:bg-violet-500 lg:text-md text-white md:py-1 px-3 rounded-full'>Order Now</Link>
              </div>
            </div>
            <h3 className="flex-1 py-2 lg:text-xl text-md leading-snug font-bold">
            
            </h3>
            <h4 className='mb-1'> <span className='font-semibold text-md'>Location:{stockStatus} </span></h4>
            <h4 className='mb-1'><span className='font-semibold text-md'>Area:{userName} </span></h4>
            <h4 ><span className='font-semibold text-md'>Segment Name:{userEmail} </span></h4>
            <h4 className='my-1'><span className='font-semibold text-md'>Status: </span></h4>
            <p className='font-semibold text-md'>Facilities : {item_name}</p>


           
            <p className='my-5'><span className='font-semibold text-md '>Description:</span> </p>
            <div className='flex gap-5 justify-center items-center'>
              <button
                onClick={() => navigate(-1 || '/')}
                className='flex my-7 items-center justify-center w-full p-1 md:p-3 text-sm font-bold transition-colors duration-200 bg-blue-500 border rounded-lg gap-x-2 sm:w-auto mt-2   hover:bg-blue-600 text-white'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='w-5 h-5 rtl:rotate-180 text-primary'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                  />
                </svg>

                <span>Go back</span>
              </button>
              <button
                onClick={() => navigate('/carts')}
                className='flex my-7 items-center justify-center w-full p-1 md:p-3 text-sm font-bold transition-colors duration-200 bg-green-500 border rounded-lg gap-x-2 sm:w-auto mt-2   hover:bg-blue-600 text-white'
              >
                <span>Your Order list</span>
              </button>
            </div>
          </div>
        </article>

      </div>



    </div>
  );
};

export default CraftCardDetails;