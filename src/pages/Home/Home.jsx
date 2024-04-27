import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "../../components/Slider";
import Sidebar from '../../components/Sidebar';
import MainCraftSection from '../../components/MainCraftSection';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);


const craft = useLoaderData()


    return (
        <div>
            <Slider ></Slider>
            <MainCraftSection key={craft._id} craft={craft}></MainCraftSection>
            <section>
                <div className="mx-auto flex flex-col justify-center text-center px-5">
                    <h1 className="font-bold text-2xl py-5 text-white" >Explore the Premier Apartments and Experience Unmatched Luxury</h1>
                    <p className="max-w-3xl text-center mx-auto text-gray-400">Immerse yourself in the realm of luxury living with our exceptional listings featuring a diverse selection of opulent apartments and exquisite villas. Uncover the perfect home that reflects your unique taste and lifestyle, whether it’s a chic apartment or a lavish villa.</p>
                </div>
            </section>

            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-2 lg:p-10 p-2">
                {/* {estate.map((estateCard) => (
                    <div key={estateCard.id} data-aos="zoom-in">
                        <EstateCard estateCard={estateCard} />
                    </div>
                ))} */}
            </div>

            
        </div>
    );
};

export default Home;
