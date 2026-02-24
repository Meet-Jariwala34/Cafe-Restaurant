import React from 'react'
import Hero from './Hero'
import Items from './Items'
import Reserve from '../../../component/Reserve'

export default function Menu2() {
  return (
    <div>
        <Hero/>
        <Items a={0} b={4} />
        <Reserve/>
        <Items a={8} b={4} />
    </div>
  )
}
