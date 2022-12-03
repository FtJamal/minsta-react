import profile1 from "../asset/profile.jpg";
import profile2 from "../asset/tshop.png";
import profile3 from "../asset/book.jpg";
import post1 from "../asset/pak.jpg";
import post2 from "../asset/toys.webp";

import "./index.css"

function Sidebar2() {
    return (
        <div className="Sidebar2">
            <div className="two">
                <p className="sidepro"><img src={profile1} alt="" className='profileSide' width="50" height={50} />
                    <p><span className="followu">faryajamal</span> <span className="fcolor">farya</span></p>
                </p>
                <span className="follow">Switch</span>
            </div>
            <div className="two">
                <p className="followu"><b>Suggestions For You</b></p>
                <p className="follow"><b>See All</b></p>
            </div>

            <div className="two">
                <p className="sidepro"><img src={post2} alt="" className='profileSide' width="40" height={40} />
                    <p className="followu"><span>mariaimran</span> <span className="gcolor">Follows you</span></p>
                </p>
                <p className="follow">Follow</p>
            </div>

            <div className="two">
                <p className="sidepro"><img src={profile2} alt="" className='profileSide' width="40" height={40} />
                    <p className="followu"><span>nabihamomina</span> <span className="gcolor">Follows you</span></p>
                </p>
                <p className="follow">Follow</p>
            </div>

            <div className="two">
                <p className="sidepro"><img src={profile3} alt="" className='profileSide' width="40" height={40} />
                    <p className="followu"><span>aqsafaisal</span> <span className="gcolor">Follows you</span></p>
                </p>
                <p className="follow">Follow</p>
            </div>

            <div className="two">
                <p className="sidepro"><img src={post1} alt="" className='profileSide' width="40" height={40} />
                    <p className="followu"><span>tasmiyahussain</span> <span className="gcolor">Follows you</span></p>
                </p>
                <p className="follow">Follow</p>
            </div>

        </div>

    );
}

export default Sidebar2;
