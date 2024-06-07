import React from 'react'
import { TouristCard } from '../../shared/components/card/TouristCard'

const TouristSpotsList = () => {
    return (
        <div className='app-container py-section'>
            <div class="mb-4">
                <label htmlFor="sort" class="block text-sm font-medium text-gray-700">Sort by Average Cost</label>
                <select id="sort" name="sort" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <TouristCard />
                <TouristCard />
                <TouristCard />
                <TouristCard />
                <TouristCard />
            </div>
        </div>
    )
}

export default TouristSpotsList