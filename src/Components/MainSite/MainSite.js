import React, { useEffect, useState } from 'react';

const MainSite = () => {
  const [userInfos, setInfo] = useState ([]);

  useEffect (()=>{
    fetch ('data.json')
    .then(res => res.json())
    .then(data => setInfo(data))
  },[])

  return (
    <div className='container '>
      <div className='row row-cols-1 row cols-md-3 g-4'>
        <div className='col'>
          <div className='card' style={{width: '18rem'}}>
            <img className='card-img-top' src="https://cdn.mos.cms.futurecdn.net/4bE2LjQJAqGBpvTjnsvMMS.jpg" alt="" />
            <div className='card-body'>
              <h5 className='card-title'>Breakfast</h5>
              <p>All happiness depends on a leisurely breakfast.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Age: {}</li>
              <li className="list-group-item">Time required: </li>
            </ul>
            <div className="card-bod">
              <button className='btn btn-primary' style={{width: '100%'}}>Add to list</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSite;
