import React, { ImgHTMLAttributes } from 'react'

interface ImgProps extends ImgHTMLAttributes<HTMLImageElement> {
    notFoundSrc?: string;
    alternative?: string;
}


function Img(props: ImgProps) {
  return (
    <img
      {...props}
      onError={e => {
        props?.onError?.(e)

        if (!props.notFoundSrc) return
        e.currentTarget.src = props.notFoundSrc
      }}
    />
  )
}

export default Img