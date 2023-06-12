export const Payments = (props) => {
  return (
    <div id='payments' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Payments</h2>
          <p>
          Withdraw Your Winnings Instantly With
          </p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 payments'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='payments-img' />
                    <div className='caption'>
                    {''}
                      <h4>{d.name}</h4>

                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
