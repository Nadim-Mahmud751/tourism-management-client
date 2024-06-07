import React from 'react'
import { SectionTitle } from '../../../../shared/components/Typography/Typography'
import { Link } from 'react-router-dom'
import { CountryCard } from '../../../../shared/components/card/CountryCard'

export const CountrySection = () => {
    return (
        <section className='app-container py-section'>
            <SectionTitle>Countries</SectionTitle>


            <div className="grid grid-cols-1  gap-x-4 gap-y-4 py-section md:grid-cols-2 lg:grid-cols-3">
                <CountryCard />


            </div>
        </section>
    )
}
