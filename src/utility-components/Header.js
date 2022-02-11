import React from 'react'

export default function Header({headerTitle}) {
  return (
    <div className='container-fluid'>
        <div className='row p-2 shadow-sm'>
            <div className='col display-6 text-center'>{headerTitle}</div>
        </div>
    </div>
  )
}
