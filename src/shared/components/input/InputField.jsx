import React from 'react'

export const InputField = ({ label, type = "text", placeholder, props }) => {
    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">{label}</label>
            <input {...props} type={type} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder={placeholder} required="" />
        </div>)
}
