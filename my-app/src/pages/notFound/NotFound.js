import React from 'react';
import UserLayout from 'layouts/UserLayout';

function NotFound() {
  return (
    <div className='bodyNotFound'>
        <span className='firstSpn'>ERROR</span>
        <span className='secondSpn'>404</span>
        <span className='thirdSpan'>¯\_(ツ)_/¯</span>
    </div>
  )
}

export default UserLayout(NotFound);