import React from 'react'
import { Link } from 'react-router-dom'

export const TouristCard = () => {
    return (
        <div className="tourist-card">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400" alt="Tourist Spot" />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">Tourist Spot Name</h2>
                    <p className="text-gray-700 mb-1">Average Cost: $200</p>
                    <p className="text-gray-700 mb-1">Total Visitors Per Year: 5000</p>
                    <p className="text-gray-700 mb-1">Travel Time: 2 hours</p>
                    <p className="text-gray-700 mb-1">Seasonality: Summer</p>
                    <Link to="/tourists-spots/415561" className="text-indigo-600 hover:text-indigo-900 font-semibold">View Details</Link>
                </div>
            </div>
        </div>)
}
