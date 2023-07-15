import React from 'react';

const MainContent = () => {
  return (
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card text-center">
          <div className="card-body">
            <span className="material-icons text-warning">equalizer</span>
            <h5 className="card-title">systttummmmmmmmmmmmmmmmm</h5>
            <h3 className="card-text">70,340</h3>
          </div>
          <div className="card-footer">
            <div className="stats">
              <i className="material-icons text-info">info</i>
              <a href="#pablo">See detailed report</a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card text-center">
          <div className="card-body">
            <span className="material-icons text-rose">shopping_cart</span>
            <h5 className="card-title">Orders</h5>
            <h3 className="card-text">102</h3>
          </div>
          <div className="card-footer">
            <div className="stats">
              <i className="material-icons">local_offer</i> Product-wise sales
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card text-center">
          <div className="card-body">
            <span className="material-icons text-success">attach_money</span>
            <h5 className="card-title">Revenue</h5>
            <h3 className="card-text">$23,100</h3>
          </div>
          <div className="card-footer">
            <div className="stats">
              <i className="material-icons">date_range</i> Weekly sales
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card text-center">
          <div className="card-body">
            <span className="material-icons text-info">follow_the_signs</span>
            <h5 className="card-title">Followers</h5>
            <h3 className="card-text">+245</h3>
          </div>
          <div className="card-footer">
            <div className="stats">
              <i className="material-icons">update</i> Just Updated
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
