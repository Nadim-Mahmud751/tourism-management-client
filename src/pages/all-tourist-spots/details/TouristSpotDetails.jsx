import React from 'react'

const TouristSpotDetails = () => {
    return (
        <div className='app-container py-section'>

            <div class="bg-white rounded-lg overflow-hidden flex flex-col lg:flex-row">
                <img class="w-full lg:w-1/3 h-auto object-cover" src="https://via.placeholder.com/600" alt="Tourist Spot Image" />
                <div class="w-full lg:w-2/3 p-4">
                    <h1 class="text-3xl font-bold mb-4">Tourist Spot Name</h1>
                    <p class="text-gray-700 mb-2"><span class="font-semibold">Average Cost:</span> $200</p>
                    <p class="text-gray-700 mb-2"><span class="font-semibold">Total Visitors Per Year:</span> 5000</p>
                    <p class="text-gray-700 mb-2"><span class="font-semibold">Travel Time:</span> 2 hours</p>
                    <p class="text-gray-700 mb-2"><span class="font-semibold">Seasonality:</span> Summer</p>
                    <p class="text-gray-700 mb-4"><span class="font-semibold">Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.</p>


                    <h2 class="text-2xl font-bold mb-4">Additional Information</h2>
                    <p class="text-gray-700 mb-2"><span class="font-semibold">Best Time to Visit:</span> May - September</p>
                    <p class="text-gray-700 mb-2"><span class="font-semibold">Nearby Attractions:</span> Another Tourist Spot, Museum</p>
                    <p class="text-gray-700 mb-2"><span class="font-semibold">Accommodation Options:</span> Hotels, Resorts</p>
                </div>
            </div>
        </div>
    )
}

export default TouristSpotDetails