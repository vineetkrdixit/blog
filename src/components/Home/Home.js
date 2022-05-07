import React, { useState } from "react";
import "../Home/Home.css";
import ProfilePic from "../../assets/images/profile.webp";

const Home = () => {
  const [subInitial, SetSubscribe] = useState("Subscribe");
  const [subCount, SetsubCount] = useState(1031083);
  const subscribing = () => {
    SetSubscribe("Subscribed");
    const newsubCount = subCount + 1;
    SetsubCount(newsubCount);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 left-side">
            <div className="side-wrapper">
              <br></br>
              <div className="profile-pic-div">
                <img className="side-wrapper-profile-pic" src={ProfilePic} />
              </div>
              <div className="side-wrapper-other">
                <strong>
                  <i className="fa fa-user" aria-hidden="true">
                    &nbsp;&nbsp;&nbsp;
                  </i>
                  Jack Carter
                </strong>
                <strong>
                  <i class="fa fa-envelope">&nbsp;&nbsp;&nbsp;</i>
                  Jack@gmail.com
                </strong>
                <strong>
                  <i class="fa-solid fa-phone">&nbsp;&nbsp;&nbsp;</i>
                  +91-987654321
                </strong>
                <br></br>
              </div>
              <div className="side-wrapper-subsCount">
                <strong>
                  <i class="fa-solid fa-people-group">&nbsp;&nbsp;&nbsp;</i>
                  {subCount}
                </strong>
                <br></br>
                <strong>&nbsp;&nbsp;&nbsp;&nbsp;Subscribers</strong>
              </div>
            </div>
          </div>

          <div className="col-sm-7">
            <div className="container middle-blog">
              <div className="middle-blog-body">
                <h6>Heading 1</h6>
                <p>Discription....</p>
                <br></br>
                <div className="author-body">
                  <div>
                    <h5>
                      <i class="fa-solid fa-thumbs-up"></i>&nbsp;256
                    </h5>
                  </div>
                  <div className="middle-blog-body-author">
                    By Author Name<br></br>Date of post
                  </div>
                </div>
              </div>
              <div className="middle-blog-body">
                <h6>Heading 1</h6>
                <p>Discription....</p>
                <br></br>
                <div className="author-body">
                  <div>
                    <h5>
                      <i class="fa-solid fa-thumbs-up"></i>&nbsp;246
                    </h5>
                  </div>
                  <div className="middle-blog-body-author">
                    By Author Name<br></br>Date of post
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <button
              className="btn btn-danger SubscribeBtn"
              onClick={subscribing}
            >
              <i class="fa-solid fa-bell">&nbsp;&nbsp;{subInitial}</i>
            </button>
            <h5 className="recentSub">
              <strong>Recent Subscribers</strong>
            </h5>
            <div className="Recent-Subscriber">
              <div className="Recent-Subscriber-pic">
                <img src="https://placeimg.com/640/480/any" />
              </div>
              <div className="Recent-Subscriber-name"> Jack Daniels</div>
            </div>
            <div className="Recent-Subscriber">
              <div className="Recent-Subscriber-pic">
                <img src="https://placeimg.com/640/480/any" />
              </div>
              <div className="Recent-Subscriber-name"> Jack Daniels</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
