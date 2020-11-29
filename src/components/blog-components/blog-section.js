import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BlogSection extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'

    return (
      <div className="blog-area pd-top-120 viaje-go-top">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-6">
		        <div className="single-blog single-blog-wrap style-two">
		          <div className="thumb single-blog-left-wrap">
		            <img src={publicUrl+"assets/img/blog/10.png"} alt="blog" />
		          </div>
		          <div className="single-blog-details single-blog-right-wrap">
		            <Link className="tag" to="/blog-details">Tri Dang</Link>
		            <p className="date">12 November 2020</p>
		            <h4 className="title">Landmark Vinhomes central park, Sài Gòn</h4>
		            <p className="content">Landmark Vinhomes central park, Sài Gòn. Text ..... ... </p>
		            <Link className="btn btn-yellow" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-6">
		        <div className="row">
		          <div className="col-sm-6">
		            <div className="single-blog style-three">
		              <div className="thumb">
		                <img src={publicUrl+"assets/img/blog/11.png"} alt="blog" class="smallblogimg" />
		              </div>
		              <div className="single-blog-details-wrap">
		                <div className="single-blog-details text-center">
		                  <Link className="tag" to="/blog-details">Tri Dang</Link>
		                  <p className="date">12 November 2020</p>
		                  <h4 className="title">Why You Shouldn’t Ride Horese in Đà Lạt</h4>
		                  <Link className="btn btn-yellow" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-sm-6">
		            <div className="single-blog style-three">
		              <div className="thumb">
		                <img src={publicUrl+"assets/img/blog/12.png"} alt="blog" class="smallblogimg" />
		              </div>
		              <div className="single-blog-details-wrap">
		                <div className="single-blog-details text-center">
		                  <Link className="tag" to="/blog-details">Tri Dang</Link>
		                  <p className="date">12 November 2020</p>
		                  <h4 className="title">10 Best Highways for Romantic Long Drive</h4>
		                  <Link className="btn btn-yellow" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-sm-6">
		            <div className="single-blog style-three">
		              <div className="thumb">
		                <img src={publicUrl+"assets/img/blog/13.png"} alt="blog" class="smallblogimg"  />
		              </div>
		              <div className="single-blog-details-wrap">
		                <div className="single-blog-details text-center">
		                  <Link className="tag" to="/blog-details">Tri Dang</Link>
		                  <p className="date">12 November 2020</p>
		                  <h4 className="title">Rock Climbing Limestone Cliffs At Nha Trang Beach</h4>
		                  <Link className="btn btn-yellow" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		                </div>
		              </div>
		            </div>
		          </div>
		          <div className="col-sm-6">
		            <div className="single-blog style-three">
		              <div className="thumb">
		                <img src={publicUrl+"assets/img/blog/14.png"} alt="blog" class="smallblogimg"  />
		              </div>
		              <div className="single-blog-details-wrap">
		                <div className="single-blog-details text-center">
		                  <Link className="tag" to="/blog-details">Tri Dang</Link>
		                  <p className="date">12 November 2020</p>
		                  <h4 className="title">Cafe Sài Gòn .. </h4>
		                  <Link className="btn btn-yellow" to="/blog-details"><span>Read More<i className="la la-arrow-right" /></span></Link>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
    )
  }
}

export default BlogSection;
