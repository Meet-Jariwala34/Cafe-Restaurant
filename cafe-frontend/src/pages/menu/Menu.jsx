import React from 'react'
import Hero from './Hero'
import Items from './Items'
import Footer from '../../component/Footer';
import Reserve from '../../component/Reserve';

export default function Menu() {
  return (
    <div id='menu'>
        <Hero/>
        <Items/>
        <Reserve/>
    </div>
  )
}
