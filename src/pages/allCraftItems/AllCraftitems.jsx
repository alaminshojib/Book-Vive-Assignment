import React, { useState } from 'react';
import CraftCard from '../../components/CraftCard';
import { useLoaderData } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

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
                <h2 className=" lg:text-3xl text-xl font-semibold leading-tight text-center my-3"><Typewriter
        words={['All Art & Craft Items :']} 
        loop={0} 
        typeSpeed={100} 
        deleteSpeed={0} 
        delaySpeed={0} 
        cursor={null} // Disable cursor for smoother typing effect
        typeWriterSpan={props => <span {...props} className="inline-block"/>} // Wrap each letter in a span for styling
    /> </h2>
                {/* Dropdown menu for selecting subcategory */}
                <div className="flex justify-center ">

                 
                    <fieldset className="space-y-1 text-gray-100 dark:text-gray-800 w-fit mx-auto">
                        <div className="flex">
                            <span className="flex items-center px-2 py-2 pointer-events-none text-xs rounded-l-md bg-gray-700 dark:bg-gray-300">Filter By Subcategory:</span>
                            <select name="subcategory_Name" value={selectedSubcategory} onChange={handleSubcategoryChange}
                                className="pl-2 flex flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-700 dark:border-gray-300 text-gray-100 dark:text-gray-800 bg-gray-800 dark:bg-gray-100 focus:ring-violet-400 focus:dark:ring-violet-600">
                                <option disabled value="">Select Subcategory</option>
                                <option value="">All</option>
                                <option value="Landscape Painting">Landscape Painting</option>
                                <option value="Portrait Drawing">Portrait Drawing</option>
                                <option value="Watercolour Painting">Watercolour Painting</option>
                                <option value="Oil Painting">Oil Painting</option>
                                <option value="Charcoal Sketching">Charcoal Sketching</option>
                                <option value="Cartoon Drawing">Cartoon Drawing</option>
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
