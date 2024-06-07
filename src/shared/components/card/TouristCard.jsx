import React from 'react'
import { Link } from 'react-router-dom'

export const TouristCard = () => {
    return (
        <div className="tourist-card">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1523978591478-c753949ff840" alt="Destination Image" />
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800">Title</h2>
                    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
                    <div className="mt-4">
                        <Link to="#" className="block text-center text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">View details</Link>
                    </div>
                </div>
            </div>
        </div>)
}
