import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import './loading.css'

const Loading = function Loading(props){
  return (
    <div className='loading-container'>
      <CircularProgress color={'#0275d8'} className='loading' size={100} />
    </div>
  )
}

export default Loading
