import React, { Fragment } from 'react'

// FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUser, faSnowflake, faTachometerAlt , faLaptop } from '@fortawesome/free-solid-svg-icons';

const menuItem = [
  { name: 'Age Calculator', path: '/age-calculator', icon: faTachometerAlt },
  { name: 'Levenshtein Distance', path: '/levenshtein-distance', icon: faLaptop },
  { name: 'Wealth Calculator', path: '/wealth-calculator', icon: faSnowflake },
  { name: 'EMI Calculator', path: '/emi-calculator', icon: faUser },
  { name: 'Home Load Calculator', path: '/home-loan-calculator', icon: faUser }
];

export default function SideBar() {

  const navigateToURL = (pathName) => window.location.href = `${window.location.origin}${pathName}`;



  return (
    <Fragment>

      {/* Side Bar */}
      <div className="sidebar">
        <div className="textCenter">
          <div className='sidebarLogo'>
            DEV BLOGGER
          </div>
        </div>
        <hr className="MuiDivider-root"></hr>

        <ul>
          {menuItem.map(field =>
            <li name={field.path} className={field.path === window.location.pathname ? "menuLink menuActiveLink" : "menuLink"}
              onClick={() => navigateToURL(field.path)}>  <FontAwesomeIcon className="MenuIcon" icon={field.icon} /> {field.name}</li>)}
        </ul>

        <div className="logoBottom">
          <div className='textCenter'>
            <h5 className=''>Powered by</h5>
            <img src={require('./logo.png')} alt='logo' className='fullSizeDoc' />
          </div>
        </div>

      </div>

      {/* Main Header */}
      <div className="headbar flexRow">
        <div className="verticalAlign">
          <FontAwesomeIcon className="MenuIcon" icon={faUser} />
          <p className='nameText'>{"DevBlogger"}</p>
        </div>
      </div>

    </Fragment>
  )
}
