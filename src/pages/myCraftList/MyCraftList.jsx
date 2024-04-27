import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import MySingleCraftCard from "../../components/MySingleCraftCard";
import EmptyState from "../../components/EmptyState";

const MyCraftList = () => {
    const { user } = useContext(AuthContext);
    const MyCrafts = useLoaderData();
    const [filteredCrafts, setFilteredCrafts] = useState([]);

    useEffect(() => {
        if (MyCrafts && user && user.email) {
            // Filter crafts only if user and user.email are defined
            const filtered = MyCrafts.filter(craft => craft.userEmail === user.email);
            setFilteredCrafts(filtered);
        }
    }, [MyCrafts, user]);

    console.log(filteredCrafts);
    const [crafts, setCrafts] = useState(filteredCrafts);

    if (filteredCrafts.length < 1) {
        return (
          <EmptyState
            message="No Craft Items Found"
            address="/addCraftItem"
            label="Add Craft"
          />
        );
      }


    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mx-auto p-10">
            {/* Render filtered crafts */}
            {filteredCrafts.map(craft => (

                <MySingleCraftCard
                    crafts={crafts}
                    setCrafts={setCrafts}
                    key={craft._id}
                    craft={craft}
                ></MySingleCraftCard>
            ))}
        </div>
    );
};

export default MyCraftList;
