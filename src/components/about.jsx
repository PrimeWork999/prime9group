import ReactPlayer from 'react-player';
import React, { useState, useRef } from 'react';
export const About = (props) => {
  const [isMuted, setIsMuted] = useState(true);

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };
  return (
    <div id='about'>
      <div className='container'>
      <div className='row'>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
     <ReactPlayer
        url= {props.data ? props.data.videoLink : 'loading...'}
        controls
        playing
        muted={isMuted}
        width="100%"
        height="auto"
      />
      <button className=' btn btn-custom btn-lg page-scroll' style={{ marginTop: '10px' }} onClick={handleToggleMute}>
        {isMuted ? 'Unmute' : 'Mute'}
      </button>
    </div>
        </div>
       <br />
       <br />
       <br />
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img src='img/PRIME999.png' className='img-responsive' alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
