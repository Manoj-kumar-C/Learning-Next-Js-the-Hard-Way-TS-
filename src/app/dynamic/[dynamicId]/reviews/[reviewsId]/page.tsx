import React from 'react'

function page({params}) {
  return (
    <div>
        <h1>Product {params.dynamicId} , Review {params.reviewsId}</h1>
    </div>
  )
}

export default page