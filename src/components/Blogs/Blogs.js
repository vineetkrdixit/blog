import React from "react";
import { Link } from "react-router-dom";
import "../Blogs/Blogs.css";

export default function Blogs() {
  return (
    <div>
      <div className="container">
        <Link to="" className="blogbox-link">
          <div className="row">
            <div className="col-sm-1"></div>

            <div className="col-sm-10 blogbox">
              <div className="blogbox-heading">
                <h4>Heading...</h4>
              </div>
              <div className="blogbox-discription">
                <h6>Discription....</h6>
              </div>
              <div className="blogbox-authorDetails">
                <div className="col-sm-2">
                  <h5>
                    <i class="fa-solid fa-thumbs-up"></i>&nbsp;246
                  </h5>
                </div>
                <div className="col-sm-7 category-center">
                  <h5>
                    <i class="fa-solid fa-tag"></i>&nbsp;Category
                  </h5>
                </div>
                <div className="col-sm-3">
                  <h6>By Author : Author Name</h6>
                </div>
              </div>
            </div>

            <div className="col-sm-1"></div>
          </div>
        </Link>
      </div>
      <div className="container">
        <Link to="" className="blogbox-link">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10 blogbox">
              <div className="blogbox-heading">
                <h4>Heading...</h4>
              </div>
              <div className="blogbox-discription">
                <h6>Discription...</h6>
              </div>
              <div className="blogbox-authorDetails">
                <div className="col-sm-2">
                  <h5>
                    <i class="fa-solid fa-thumbs-up"></i>&nbsp;246
                  </h5>
                </div>
                <div className="col-sm-7 category-center">
                  <h5>
                    <i class="fa-solid fa-tag"></i>&nbsp;Category
                  </h5>
                </div>
                <div className="col-sm-3">
                  <h6>By Author : Author Name</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-1"></div>
          </div>
        </Link>
      </div>
      <div className="container">
        <Link to="" className="blogbox-link">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10 blogbox">
              <div className="blogbox-heading">
                <h4>Heading...</h4>
              </div>
              <div className="blogbox-discription">
                <h6>Discription....</h6>
              </div>
              <div className="blogbox-authorDetails">
                <div className="col-sm-2">
                  <h5>
                    <i class="fa-solid fa-thumbs-up"></i>&nbsp;246
                  </h5>
                </div>
                <div className="col-sm-7 category-center">
                  <h5>
                    <i class="fa-solid fa-tag"></i>&nbsp;Category
                  </h5>
                </div>
                <div className="col-sm-3">
                  <h6>By Author : Author Name</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-1"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}
