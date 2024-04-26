import React, { useState } from 'react';
import CraftCard from '../../components/CraftCard';
import { useLoaderData } from 'react-router-dom';


const AllCraftitems = () => {
    const loadedcrafts = useLoaderData();
    const [crafts, setCrafts] = useState(loadedcrafts);


    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 text-gray-100 dark:text-gray-800">
                <h2 className="mb-4 text-3xl font-semibold leading-tight text-center my-5">All Art & Craft Items </h2>
                <div className="overflow-x-auto mt-5">
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
                            <tr className="text-left">
                                <th className="p-3">Item Image</th>
                                <th className="p-3">Item Name</th>
                                <th className="p-3">Subcategory Name</th>
                                <th className="p-3">Price</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">More Info</th>
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