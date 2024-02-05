import React, { useState } from "react";
import "./contact.css";
const Contact = () => {
  const [msg, setMsg] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    info: ""
  })

  const handleInput = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    return;
    setMsg((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  return (
    <div className="contact">
      <h2>&nbsp;&nbsp;Contact Us&nbsp;&nbsp;</h2>
      <div className="contactWrapper">
        <div className="formContainer formContainer">
          <form>
            <div className="formInner">
              <div className="inputWrapper">
                <div className="inputField">
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => handleInput(e)}
                  />
                  <label className="active">Name</label>
                </div>
              </div>
              <div className="inputWrapper">
                <div className="inputField">
                  <input
                    type="text"
                    name="email"
                    onChange={(e) => handleInput(e)}
                  />
                  <label className="active">Email</label>
                </div>
              </div>
              <div className="inputWrapper">
                <div className="inputField">
                  <input
                    type="number"
                    name="phoneNumber"
                    onChange={(e) => handleInput(e)}
                  />
                  <label className="active">Phone Number</label>
                </div>
              </div>
              <div className="inputWrapper">
                <div className="inputField">

                  <textarea name="" id="" cols="30" rows="10"></textarea>
                  <label className="active">Phone Number</label>
                </div>
              </div>

              {error && <span className="message">{error}</span>}
              <button
                disabled={pending ? true : false}
              >
                {pending ? "Sending" : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
