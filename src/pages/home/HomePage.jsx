import React from 'react'
import HomePageSlider from './components/slider/HomePageSlider'
import { TouristSpotSection } from './components/tourist-spots/TouristSpotSection'
import { CountrySection } from './components/countries/CountrySection'

const HomePage = () => {
    return (
        <>
            <HomePageSlider />
            <TouristSpotSection />
            <CountrySection />

        </>
    )
}

export default HomePage