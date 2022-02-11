import React from 'react'

export default function Heading({headingTitle}) {
  return (
    <div className="row p-2 mt-3 shadow-sm">
    <div className="col">
      {headingTitle}
    </div>
  </div>
  )
}
