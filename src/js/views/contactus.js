import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

export const ContactUs = () => {

return (
    <>
<section className="section">
  <div className="container py-4">
    <h2 className="title has-text-centered mb-6">Contact our team</h2>
    <div className="columns is-centered">
      <div className="column is-8">
        <form>
          <div className="field is-grouped">
            <div className="control is-expanded">
              <input className="input" type="email" placeholder="Name">
            </div>
            <div className="control is-expanded">
              <input className="input" type="email" placeholder="Email">
            </div>
          </div>
          <div className="field mb-6">
            <div className="control"><textarea className="textarea" rows="5" placeholder="Write something..."></textarea></div>
          </div>
          <div className="field my-5">
            <div className="control has-text-centered">
              <button className="button is-primary" type="submit">Submit</button>
            </div>
          </div>
          <div className="field has-text-centered">
            <p>Or just email us on</p>
            <a href="#">support@investico.com</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</>
	)
};
