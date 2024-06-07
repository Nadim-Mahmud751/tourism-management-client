import React from 'react'
import MyListCard from '../../shared/components/card/MyListCard'

const MylistPage = () => {
    return (
        <div className='app-container py-section'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <MyListCard />
                <MyListCard />
                <MyListCard />
                <MyListCard />
            </div>
        </div>
    )
}

export default MylistPage