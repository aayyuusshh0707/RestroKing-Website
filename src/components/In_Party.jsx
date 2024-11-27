import React from 'react'

export default function In_Party({ head, body, foot }) {
  return (
    <>

      <div className='d_Card text-center'>

        <div className='d_img'>
          <img src="https://restroking.dexignzone.com/react/static/media/cake1.a135215d.jpg"></img></div>
        <div className='d_Head'>{head}</div>
        <div className='d_body'>{body}</div>
        <div className='d_foot'>{foot}</div>
      </div>


    </>
  )
}
