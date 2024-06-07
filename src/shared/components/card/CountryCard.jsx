import React from 'react'
import { Link } from 'react-router-dom'

export const CountryCard = () => {
    return (
        <div className="tourist-card">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1523978591478-c753949ff840" alt="Destination Image" />
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800">Bangladesh</h2>
                    <p className="mt-2 text-gray-600">এটি নদিমাত্রিক দেশ</p>
                    <div className="mt-4">
                        <Link to="#" className="block text-center text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">Go</Link>
                    </div>
                </div>
            </div>
        </div>)
}
