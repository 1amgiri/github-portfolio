import React from 'react';

const Contact = () => (
  <section className="container my-5">
    <h2>Contact Me</h2>
    <form>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" placeholder="Enter your name" />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" placeholder="Enter your email" />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea className="form-control" rows="4" placeholder="Enter your message"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </section>
);

export default Contact;
