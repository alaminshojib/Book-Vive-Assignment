import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Slider from "../../components/Slider";

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);


    return (
        <div>
            <Slider />

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

            <section>
                <section>
                    <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl px-2">
                        <div data-aos="zoom-out">
                            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-white ">World's Best Luxury Apartments for Sale</h2>
                        </div>
                        <div data-aos="zoom-out-down" className="grid lg:gap-8 lg:grid-cols-2 lg:items-center shadow-xl p-5 rounded-2xl">
                            <div>
                                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-white">Luxury Apartment with Panoramic Views</h3>
                                <p className="mt-3 text-lg text-gray-400">Experience unparalleled luxury in this stunning apartment boasting panoramic views of Manhattan's skyline. Enjoy exclusive amenities such as an infinity pool, gym, and private terrace.</p>
                                <div className="mt-12 space-y-12 px-5">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 text-white ">Infinity pool with stunning views</h4>
                                            <p className="mt-2 text-gray-400">An infinity pool perched on the edge, blending seamlessly with panoramic views, inviting endless relaxation amidst natural splendor.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 text-white ">State-of-the-art gym and spa facilities</h4>
                                            <p className="mt-2 text-gray-400">State-of-the-art gym facilities and a luxurious spa offering rejuvenating treatments, ensuring a perfect balance of fitness and relaxation.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 text-white ">Smart home technology for modern living</h4>
                                            <p className="mt-2 text-gray-400">Innovative smart home technology seamlessly integrated for effortless modern living, enhancing comfort and convenience with intelligent automation features.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div aria-hidden="true" className="mt-10 lg:mt-0">
                                <img src="/assets/images/luxury_apartment_1.jpg" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
                            </div>
                        </div>
                        <div>
                            <div data-aos="zoom-out-down" className="grid lg:gap-8 lg:grid-cols-2 lg:items-center  shadow-xl p-5 rounded-2xl">
                                <div className="lg:col-start-2">
                                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-white">Exclusive Penthouse with Skyline Vista</h3>
                                    <p className="mt-3 text-lg text-gray-400">
                                        An exclusive penthouse offering unparalleled luxury and a breathtaking skyline vista, epitomizing sophistication and elevated living at its finest.
                                    </p>
                                    <div className="mt-12 space-y-12 px-5">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-medium leading-6 text-white">Private elevator for exclusive access</h4>
                                                <p className="mt-2 text-gray-400">A private elevator providing exclusive access, ensuring discretion and convenience for discerning residents in elevated luxury living.</p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-medium leading-6 text-white">Expansive rooftop garden with panoramic views</h4>
                                                <p className="mt-2 text-gray-400">
                                                    An expansive rooftop garden boasting panoramic views, creating a serene oasis high above the city hustle, perfect for relaxation and contemplation.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-400 text-gray-900">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-medium leading-6 text-white">24/7 security for peace of mind</h4>
                                                <p className="mt-2 text-gray-400">24/7 security providing peace of mind, ensuring a safe and secure environment for residents to thrive and enjoy their lifestyle without worries.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                    <img src="/assets/images/luxury_apartment_2.jpg" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
                                </div>
                            </div>
                        </div>
                    </div>



                    
                </section>


            </section>
        </div>
    );
};

export default Home;
