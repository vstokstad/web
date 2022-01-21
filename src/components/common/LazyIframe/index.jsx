import React, { useRef } from 'react'
import useIntersectionObserver from '@react-hook/intersection-observer'

const LazyIframe = ({ url, title }) => {
  const containerRef = useRef()
  const lockRef = useRef(false)
  const { isIntersecting } = useIntersectionObserver(containerRef)
  if (isIntersecting) {
    lockRef.current = true
  }
  return (
    <div
      ref={containerRef}
    >
      {lockRef.current && (
        <iframe
  title={title}
  style={{
    bottom: 0,
    height: '100%',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    width: '100%',
  }}
  src={url}
  frameborder='0'
  allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
  allowfullscreen='allowfullscreen'
  />
      )}
    </div>
  )
}

export default LazyIframe;

export const LazyImage = ({ src, title }) => {
  const containerRef = useRef()
  const lockRef = useRef(false)
  const { isIntersecting } = useIntersectionObserver(containerRef)
  if (isIntersecting) {
    lockRef.current = true
  }
  return (
    <div
      ref={containerRef}
    >
      {lockRef.current && (
        <img
          src={src}
         alt={title}/>
      )}
    </div>
  )
}
;