import React from 'react'

const UpdateTouristSpot = () => {
    return (
        <div className='app-container'>

            <div class="py-6  flex flex-col items-center justify-center sm:py-12">
                <div class="w-full md:w-[500px] shadow px-4 bg-white lg:w-[700px]">
                    <div class="py-10  w-full  rounded-3xl">
                        <div class="flex items-center space-x-5">
                            <div class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
                            <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                                <h2 class="leading-relaxed">Updating abc</h2>
                                <p class="text-sm text-gray-500 font-normal leading-relaxed">It&apos; so easy to create.</p>
                            </div>
                        </div>
                        <div class="divide-y divide-gray-200">
                            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div class="flex flex-col">
                                    <label class="leading-loose">Tourist Spot Name</label>
                                    <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Event title" />
                                </div>
                                <div class="flex flex-col">
                                    <label class="leading-loose">Country name</label>
                                    <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                                </div>
                                <div class="flex flex-col">
                                    <label class="leading-loose">Photo url</label>
                                    <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                                </div>
                                <div class="flex flex-col">
                                    <label class="leading-loose">Location</label>
                                    <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                                </div>
                                <div class="flex flex-col">
                                    <label class="leading-loose">Photo url</label>
                                    <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                                </div>
                                <div class="flex flex-col">
                                    <label class="leading-loose">Average cost</label>
                                    <input type="number" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                                </div>
                                <div class="flex flex-col">
                                    <label class="leading-loose">Seasonality</label>
                                    <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                                </div>
                                <div class="flex flex-col">
                                    <label class="leading-loose">Travel Time</label>
                                    <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                                </div>
                                <div class="flex flex-col">
                                    <label class="leading-loose">User name</label>
                                    <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                                </div>
                                <div class="flex flex-col">
                                    <label class="leading-loose">User email</label>
                                    <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                                </div>
                                <div class="flex flex-col">
                                    <label class="leading-loose">Total visitor per year</label>
                                    <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                                </div>


                                <div class="flex flex-col">
                                    <label class="leading-loose">Short Description</label>
                                    <input type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" />
                                </div>
                            </div>
                            <div class="pt-4 flex items-center space-x-4">
                                <button class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                                    <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
                                </button>
                                <button class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateTouristSpot