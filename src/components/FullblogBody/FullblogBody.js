import React from "react";
import "../FullblogBody/FullblogBody.css";
import BlogImage from "../../assets/images/blogimage.jpg";

export default function FullblogBody() {
  return (
    <>
      <div className="container">
        <div className="col-sm-12 blog-heading">
          <h2>Heading</h2>
        </div>
        <div className="like-aut">
          <div className="col-sm-6 like">
            <i class="fa-solid fa-thumbs-up"></i>&nbsp;&nbsp;&nbsp;235
          </div>
          <div className="col-sm-6 author">BY:-Author Name</div>
        </div>
        <div className="blog-main-body">
          <div className="col-sm-12 blog-body1">
            <img src={BlogImage} className="blog-image" />
          </div>
          <div className="col-sm-12 blog-body2">
            Generating random paragraphs can be an excellent way for writers to
            get their creative flow going at the beginning of the day. The
            writer has no idea what topic the random paragraph will be about
            when it appears. This forces the writer to use creativity to
            complete one of three common writing challenges. The writer can use
            the paragraph as the first one of a short story and build upon it. A
            second option is to use the random paragraph somewhere in a short
            story they create. The third option is to have the random paragraph
            be the ending paragraph in a short story. No matter which of these
            challenges is undertaken, the writer is forced to use creativity to
            incorporate the paragraph into their writing.
          </div>
        </div>
      </div>
    </>
  );
}
