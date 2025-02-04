import React from 'react'
import { toast } from 'react-toastify';

const SingleColor = ({color,index}) => {
  const {hex,weight}=color;


const savetoClipboard=async ()=>{

  if(navigator.clipboard){

    try{
      await navigator.clipboard.writeText(`#${hex}`);
      toast.success('Color copied to clip board')
    }
    catch(error){
      toast.error('Failed to copy color to clipboard')
    }
  }
  else{
    toast.error('Clipboard access not available')
  }
}
  return (
    <article className={index<5?'color':'color color-light'} style={{backgroundColor:`#${hex}`}} onClick={savetoClipboard}>

        <p className='color-value'>#{hex}</p>
        <p className='percent-value'>{weight}%</p>

    </article>
  )
}

export default SingleColor