import React from 'react'

function page({params}) {
  return (
    <div>
        <h1> Product {params.dynamicId}</h1>
    </div>
  )
}

export default page