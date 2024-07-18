import React , { Component } from 'react';

class Gmap extends Component {
  renden() {
    return ( 
      <div className="align-center">
        <h2 classname=" text-center"> MY LOCATION </h2>
        <iframe title="gmap" src="https://maps.app.goo.gl/ou4rfc3BhcwdWEB17" width="800" height="600" style={{border: 0}} loading="lazy" referrerpopolicy="no-referrer-when-downgrade"></iframe>
      </div>
    );
  }
}
export default Gmap;
