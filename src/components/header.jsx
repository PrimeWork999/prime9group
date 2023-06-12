import ParticlesBg from "particles-bg";
import icon from "../icon";
import MouseParticles from 'react-mouse-particles'
export const Header = (props) => {
  let config = {
    num: [4, 7],
    rps: 0.4,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-50, 50],
    alpha: [0.6, 0],
    scale: [0.1, 0.9],
    body: icon,
    position: 'all',
    //color: ["random", "#ff0000"],
    cross: 'dead',
    random: 10,
  };
  return (

    <header id='header'>
      <MouseParticles g={1} color="#dba607" cull="col,image-wrapper"/>
      <div className='intro' style={{ backgroundImage: 'img/PRIME999.png' }}>
       

   <ParticlesBg type= "custom" config={config} color="#981609" bg={{zIndex: 0, position:"absolute", top:0}} />
        <div className='overlay'>
          <div className='container'>

            <div className='row'>
              
              <div className='col-md-8 col-md-offset-2 intro-text'>
            
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                
                <a
                  href='http://prime999pay.com/'
                  target="_blank"
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Visit prime999pay
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
