import React, { ImgHTMLAttributes } from 'react'

interface ImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  notfoundsrc?: string;
    alternative?: string;
}


function Img(props: ImgProps) {
  return (
    <img
      {...props}
      onError={e => {
        props?.onError?.(e)

        if (!props.notfoundsrc) return
        e.currentTarget.src = props.notfoundsrc
      }}
    />
  )
}

export default Img