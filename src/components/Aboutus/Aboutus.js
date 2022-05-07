import React, { useState } from "react";
import "../Aboutus/Aboutus.css";
import profileImage from "../../assets/images/profile.webp";

export default function Aboutus() {
  const [subInitial, SetSubscribe] = useState("Subscribe");
  const [subCount, SetsubCount] = useState(1031083);
  const subscribing = () => {
    SetSubscribe("Subscribed");
    const newsubCount = subCount + 1;
    SetsubCount(newsubCount);
  };
  return (
    <>
      <div className="col-sm-12 about-profile container">
        <div className="col-sm-3 blank1"></div>
        <div className="col-sm-6 profile-Div">
          <div className="profile-pic">
            <img src={profileImage} alt="" />
          </div>
          <div className="profile-name">Jack Carter</div>
          <div className="social-network">
            <span>
              <i class="fa-brands fa-instagram"></i>
            </span>
            <span>
              <i class="fa-brands fa-github"></i>
            </span>
            <span>
              <i class="fa-brands fa-twitter"></i>
            </span>
          </div>
          <div>
            <button
              className="btn btn-danger SubscribeBtn-aboutus"
              onClick={subscribing}
            >
              <i class="fa-solid fa-bell">&nbsp;&nbsp;{subInitial}</i>
            </button>
          </div>
          <div className="subsCount">
            <strong>
              <i class="fa-solid fa-people-group">&nbsp;&nbsp;&nbsp;</i>
              {subCount}
            </strong>
            <br></br>
            <strong>&nbsp;&nbsp;&nbsp;&nbsp;Subscribers</strong>
          </div>
        </div>
        <div className="col-sm-3 blank1"></div>
      </div>
      <div className="container sol-sm-12 about-me">
        <p>
          If you do find this paragraph tool useful, please do us a favor and
          let us know how you're using it. It's greatly beneficial for us to
          know the different ways this tool is being used so we can improve it
          with updates. This is especially true since there are times when the
          generators we create get used in completely unanticipated ways from
          when we initially created them. If you have the time, please send us a
          quick note on what you'd like to see changed or added to make it
          better in the future.
        </p>
      </div>
    </>
  );
}
