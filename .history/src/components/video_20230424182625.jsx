import React from 'react'

const video = () => {
  return (
    <video
    loop
    autoPlay
    muted
    className={background.video}
    src={require("./assets/images/video.mp4")}
  />
  )
}

export default video