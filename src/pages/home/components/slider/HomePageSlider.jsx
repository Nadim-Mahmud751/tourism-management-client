import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const HomePageSlider = () => {
    return (



        <>

            <Swiper navigation={true} modules={[Navigation]}>
                <SwiperSlide>
                    <section style={{ backgroundImage: "url('/public/files/slider/1.jpg')" }} className="relative bg-cover bg-center ">
                        <div className="absolute bg-black bg-opacity-20 top-0 left-0 w-full h-full">
                        </div>

                        <div className="py-8  relative  px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

                            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl ">Unlock the Wonders of South Asia with Our Cutting-Edge Travel Solutions</h1>
                            <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 xl:px-48 ">Dive into the vibrant tapestry of South Asia with Travigo, your premier travel companion for this diverse and enchanting region. Our platform seamlessly combines advanced technology with curated insights, offering personalized itineraries, real-time travel updates, and exclusive deals. From serene beaches to historic landmarks, Travigo empowers you to explore the best of South Asia effortlessly</p>
                            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                                <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
                                    Learn more
                                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </a>
                                <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                    <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                    Watch video
                                </a>
                            </div>

                        </div>

                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section style={{ backgroundImage: "url('/public/files/slider/2.jpg')" }} className="relative bg-cover bg-center ">
                        <div className="absolute bg-black bg-opacity-20 top-0 left-0 w-full h-full">
                        </div>

                        <div className="py-8  relative  px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

                            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl ">Discover the Charm of South Asia with Travigo’s State-of-the-Art Travel Platform</h1>
                            <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 xl:px-48">Immerse yourself in the vibrant cultures and stunning landscapes of South Asia with Travigo, your cutting-edge travel partner. Our platform offers personalized itineraries, live travel updates, and exclusive discounts. Whether you're exploring serene beaches or historical treasures, Travigo ensures your journey through South Asia is both effortless and enriching.</p>
                            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                                <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
                                    Learn more
                                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </a>
                                <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                    <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                    Watch video
                                </a>
                            </div>

                        </div>

                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section style={{ backgroundImage: "url('/public/files/slider/3.jpg')" }} className="relative bg-cover bg-center ">
                        <div className="absolute bg-black bg-opacity-20 top-0 left-0 w-full h-full">
                        </div>

                        <div className="py-8  relative  px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

                            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl ">Experience South Asia Like Never Before with Travigo’s Innovative Travel Solutions</h1>
                            <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 xl:px-48 ">Unlock the wonders of South Asia with Travigo, your ultimate travel companion. Our advanced platform blends technology with expert insights to deliver tailored itineraries, real-time travel updates, and unique deals. From picturesque landscapes to rich cultural heritage.</p>
                            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                                <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
                                    Learn more
                                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </a>
                                <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                    <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                    Watch video
                                </a>
                            </div>

                        </div>

                    </section>
                </SwiperSlide>
            </Swiper>
        </>

    )
}

export default HomePageSlider