import Card from '@/ui/card'
import CardHeader from '@/ui/cardHeader'
import React from 'react'

function Productsection() {
  return (
    <div>
        <>
        <CardHeader/>
        </>
        <div className="flex flex-wrap justify-evenly sm:gap-0 gap-5">
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Productsection