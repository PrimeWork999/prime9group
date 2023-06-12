
import MouseParticles from 'react-mouse-particles'
export const Features = (props) => {
  const phoneNumbers = ['+918871966513','+919179272427','+919893298959'];
  const sendWhatsAppMessage = (phoneNumber) => {
    const message = 'I want a new ID!'; // replace with your message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const updatePhoneNumber = () => {
    const randomIndex = Math.floor(Math.random() * phoneNumbers.length);
    const phoneNumber = phoneNumbers[randomIndex];
    sendWhatsAppMessage(phoneNumber);
  };
  return (
    <div id='features' className='text-center'>

<MouseParticles g={1} color="#000" cull="col,image-wrapper"/>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Social Media Handles</h2>
          <h4>Click on Whatsapp Icon to get your ID now</h4>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-12 col-md-4'>
                  {' '}
                  {d.title && d.title!=='Whatsapp - Click Here!'?
                  <a target='_blank' href={d.link}><i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p></a>:
                  <a target='_blank' style={{cursor:"pointer"}} onClick={()=>updatePhoneNumber()}><i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p></a>}

                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
