import React from "react";
import "./stylesheets/Mission.scss";
import "./stylesheets/Global.scss";

const Mission = () => {
  return (
    <section id="mission">
      <div className="frame--mission">
        <div className="row">
          <div className="col-lg-3 col-sm-12">
            <h2 className="h2--mission">Our Mission</h2>
          </div>
          <div className="col-lg-9 col-sm-12">
            <p>
              We are in danger! The stinky Humans try to destroy our homes and
              our families. Read all about Human News to know what they are
              planning next.
              <br />
              <span>Stand up, fight back!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
