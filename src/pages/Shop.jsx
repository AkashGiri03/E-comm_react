import React from 'react'
import Hero from  '../components/Hero/Hero'
import { Popular } from '../components/Popular/Popular'
import Offer from '../components/Offers/Offer'
import NewCollection from '../components/NewCollections/NewCollections'
import NewsLetter from '../components/NewsLetter/NewsLetter'

export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollection/>
      <NewsLetter/>
    </div>
  )
}

