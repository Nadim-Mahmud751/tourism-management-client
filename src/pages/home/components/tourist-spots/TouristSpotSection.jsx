import React from 'react'
import { SectionTitle } from '../../../../shared/components/Typography/Typography'
import { Link } from 'react-router-dom'
import { TouristCard } from '../../../../shared/components/card/TouristCard'

export const TouristSpotSection = () => {
    return (
        <section className='app-container py-section'>
            <SectionTitle>Tourists Spots</SectionTitle>


            <div className="grid grid-cols-1  gap-x-4 gap-y-4 py-section md:grid-cols-2 lg:grid-cols-3">
                <TouristCard />
                <TouristCard />
                <TouristCard />
                <TouristCard />
                <TouristCard />
                <TouristCard />


            </div>
        </section>
    )
}
