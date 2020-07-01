import React, { useEffect } from 'react'
import Plyr from "plyr"

const Index = ({ srcUrl }) => {
    useEffect(() =>{
        new Plyr('#vdepa');
    }) 
    return (
        <div className="vdepa">
        <video
            id="vdepa"
            playsInline
            controls
            className="media-player__Video-gqzi7w-5 kueHaM"
            autoPlay="autoplay"
          >
            <source
              src={srcUrl}
              type="video/mp4"
            />
          </video>
          </div>
    )
}

export default Index;
