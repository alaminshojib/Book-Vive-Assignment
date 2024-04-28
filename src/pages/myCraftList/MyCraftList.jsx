import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import MySingleCraftCard from "../../components/MySingleCraftCard";
import EmptyState from "../../components/EmptyState";

const MyCraftList = () => {
    const { user } = useContext(AuthContext);
    const MyCrafts = useLoaderData();
    const [filteredCrafts, setFilteredCrafts] = useState([]);
    const [selectedCustomization, setSelectedCustomization] = useState('');

    useEffect(() => {
        if (MyCrafts && user && user.email) {
            let filtered = MyCrafts.filter(craft => craft.userEmail === user.email);

            if (selectedCustomization) {
                filtered = filtered.filter(craft => craft.customization === selectedCustomization);
            }

            setFilteredCrafts(filtered);
        }
    }, [MyCrafts, user, selectedCustomization]);

    const handleCustomizationChange = (e) => {
        setSelectedCustomization(e.target.value);
    };

    const craftsToRender = filteredCrafts.length > 0 ? filteredCrafts : MyCrafts;

    return (
        <div>
            <div className="flex flex-col justify-center items-center pt-5 ">
                <h1 className="font-semibold text-xl lg:text-3xl p-3">My Art & Craft List </h1>
                <fieldset className="w-fit space-y-2 text-gray-100 dark:text-gray-800">
                    <div className="flex">
                        <span className="flex items-center px-3 py-2 pointer-events-none sm:text-sm rounded-l-md bg-gray-700 dark:bg-gray-300">Customization:</span>

                        <select
                            name="customization"
                            value={selectedCustomization}
                            onChange={handleCustomizationChange}
                            required
                            className="pl-2 flex flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-700 dark:border-gray-300 text-gray-100 dark:text-gray-800 bg-gray-800 dark:bg-gray-100 focus:ring-violet-400 focus:dark:ring-violet-600"
                        >
                            <option disabled value="">Select Customization Option</option>
                            <option value="">All</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </fieldset>
            </div>
            {craftsToRender.length < 1 ? (
                <EmptyState
                    message="No Craft Items Found"
                    address="/addCraftItem"
                    label="Add Craft"
                />
            ) : (
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mx-auto p-10 ">
                    {craftsToRender.map(craft => (
                        <MySingleCraftCard
                            key={craft._id}
                            craft={craft}
                        ></MySingleCraftCard>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyCraftList;
