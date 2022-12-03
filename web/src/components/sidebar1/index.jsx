import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faCompass, faLocationArrow, faSquarePlus, faHeart, faBars } from '@fortawesome/free-solid-svg-icons'
import profile1 from "../asset/profile.jpg";
import './index.css';

function Sidebar() {
    return (
        <div className='main'>
            <div className="Side">
                <div className='container'>
                    <h2>Instagram</h2>
                    <ul>
                        <li><FontAwesomeIcon className="sideicon" icon={faHouse} /> Home</li>
                        <li><FontAwesomeIcon className="sideicon" icon={faMagnifyingGlass} /> Search</li>
                        <li><FontAwesomeIcon className="sideicon" icon={faCompass} /> Explore</li>
                        <li><FontAwesomeIcon className="sideicon" icon={faLocationArrow} /> Messages</li>
                        <li><FontAwesomeIcon className="sideicon" icon={faHeart} /> Notifications</li>
                        <li><FontAwesomeIcon className="sideicon" icon={faSquarePlus} /> Create</li>
                        <li><img src={profile1} alt="" className='profileSide' width="23" height={23} /> Profile</li>

                        <li><FontAwesomeIcon className="sideiconLast" icon={faBars} /> More</li>


                    </ul>
                </div>
            </div>
            <div className="tablet">

                <div className='container2'>
                    <ul>
                        <li><FontAwesomeIcon className="sideicon2" icon={faHouse} /> </li>
                        <li><FontAwesomeIcon className="sideicon2" icon={faMagnifyingGlass} /> </li>
                        <li><FontAwesomeIcon className="sideicon2" icon={faCompass} /> </li>
                        <li><FontAwesomeIcon className="sideicon2" icon={faLocationArrow} /> </li>
                        <li><FontAwesomeIcon className="sideicon2" icon={faHeart} /> </li>
                        <li><FontAwesomeIcon className="sideicon2" icon={faSquarePlus} /> </li>



                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
