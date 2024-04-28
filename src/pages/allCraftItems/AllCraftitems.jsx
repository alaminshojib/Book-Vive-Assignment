import React, { useState } from 'react';
import CraftCard from '../../components/CraftCard';
import { useLoaderData } from 'react-router-dom';

const AllCraftitems = () => {
    const loadedcrafts = useLoaderData();
    const [crafts, setCrafts] = useState(loadedcrafts);
    const [selectedSubcategory, setSelectedSubcategory] = useState('');

    const filteredCrafts = selectedSubcategory
        ? crafts.filter(craft => craft.subcategory_Name === selectedSubcategory)
        : crafts;

    const handleSubcategoryChange = (e) => {
        setSelectedSubcategory(e.target.value);
    };

    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 rounded-xl ">
                <h2 className=" lg:text-3xl text-xl font-semibold leading-tight text-center my-3">All Art & Craft Items </h2>
                {/* Dropdown menu for selecting subcategory */}
                <div className="flex justify-center ">

                    <fieldset className="w-fit space-y-2 text-gray-100 dark:text-gray-800">
                    <div className="flex">
                        <span className="flex items-center px-2 py-2 pointer-events-none sm:text-sm rounded-l-md bg-gray-700 dark:bg-gray-300">Customization:</span>

                        <select
                            name="customization"
                            value={selectedSubcategory} onChange={handleSubcategoryChange}
                            required
                            className="pl-2 flex flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-700 dark:border-gray-300 text-gray-100 dark:text-gray-800 bg-gray-800 dark:bg-gray-100 focus:ring-violet-400 focus:dark:ring-violet-600"
                        >
                            <option disabled value="">Select Customization Option</option>
                            <option value="">All</option>
                            {[
                                            "Landscape Painting",
                                            "Portrait Drawing",
                                            "Watercolour Painting",
                                            "Oil Painting",
                                            "Charcoal Sketching",
                                            "Cartoon Drawing"
                                        ].map((subcategory) => (
                                            <option key={subcategory} value={subcategory}>
                                                {subcategory}
                                            </option>
                                        ))}
                        </select>
                    </div>
                </fieldset>
                </div>
                <div className="overflow-x-auto mt-2 rounded-xl md:px-10 p-5 h-screen">
                    <table className="min-w-full text-xs border-2">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead className="bg-gray-700 dark:bg-gray-300 rounded-xl">
                            <tr className="text-left bg-blue-900 text-white ">
                                <th className="lg:p-3 items-center flex-col justify-center m-auto text-center">Serial Number</th>
                                <th className="lg:p-3 items-center flex-col justify-center m-auto text-center">Item Image</th>
                                <th className="lg:p-3 items-center flex-col justify-center m-auto text-center">Item Name</th>
                                <th className="lg:p-3 items-center flex-col justify-center m-auto text-center">Subcategory Name</th>
                                <th className="lg:p-3 items-center flex-col justify-center m-auto text-center">Price</th>
                                <th className="lg:p-3 items-center flex-col justify-center m-auto ">More Info</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredCrafts.map((craft, index) => (
                                    <CraftCard
                                        key={craft._id}
                                        index={index}
                                        craft={craft}
                                        crafts={crafts}
                                        setCrafts={setCrafts}
                                    />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllCraftitems;
