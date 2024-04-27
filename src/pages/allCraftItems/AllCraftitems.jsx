import React, { useState } from 'react';
import CraftCard from '../../components/CraftCard';
import { useLoaderData } from 'react-router-dom';


const AllCraftitems = () => {
    const loadedcrafts = useLoaderData();
    const [crafts, setCrafts] = useState(loadedcrafts);


    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 text-gray-100 dark:text-gray-800 md:w-4/5 rounded-xl">
                <h2 className="mb-4 text-3xl font-semibold leading-tight text-center my-5 dark:text-white">All Art & Craft Items </h2>
                <div className="overflow-x-auto mt-5 rounded-xl">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="bg-gray-700 dark:bg-gray-300">
                            <tr className="text-left bg-blue-900 text-white">
                                <th className="lg:p-3 items-center flex-col justify-center m-auto text-center">Item Image</th>
                                <th className="lg:p-3 items-center flex-col justify-center m-auto text-center">Item Name</th>
                                <th className="lg:p-3 items-center flex-col justify-center m-auto text-center">Subcategory Name</th>
                                <th className="lg:p-3 items-center flex-col justify-center m-auto text-center">Price</th>
                                <th className="lg:p-3 items-center flex-col justify-center m-auto text-center">Status</th>
                                <th className="lg:p-3 items-center flex-col justify-center m-auto text-center">More Info</th>
                            </tr>
                        </thead>
                        <tbody>
                       
                            {
                                crafts.map(craft => <CraftCard
                                    key={craft._id}
                                    craft={craft}
                                    crafts={crafts}
                                    setCrafts={setCrafts}
                                ></CraftCard>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>



        </div>
    );
};

export default AllCraftitems;