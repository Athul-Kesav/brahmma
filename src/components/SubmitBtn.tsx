// ✅ SubmitBtn.tsx with status message handling

import React, { useState } from "react";
import "./SubmitBtn.css";
import emailjs from "@emailjs/browser";

const TEMPLATE_ID = "template_1c3tiyj";
const SERVICE_ID = "service_tmg73lb";
const PUBLIC_ID = "30SkRgHbCNkoFbXAA";

type detailsProp = {
  name: string;
  email: string;
  eventType: string;
  phone: string;
};

type Props = {
  details: detailsProp;
  resetFuncs: () => void;
  setStatusMessage: (msg: string, isError?: boolean) => void;
};

const SubmitBtn = ({ details, resetFuncs, setStatusMessage }: Props) => {
    
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone: string) => /^[0-9]{10}$/.test(phone);
  const isAlpha = (text: string) => /^[a-zA-Z\s]+$/.test(text);

  const sendEmail = (e: any) => {

    e.preventDefault();
    resetFuncs();

    if (
      !details.name ||
      !details.email ||
      !details.eventType ||
      !details.phone
    ) {
      setStatusMessage("Please fill in all fields.", true);
      return;
    }

    if (!isAlpha(details.name)) {
      setStatusMessage("Name should only contain letters.", true);
      return;
    }

    if (!isValidEmail(details.email)) {
      setStatusMessage("Invalid email address.", true);
      return;
    }

    if (!isValidPhone(details.phone)) {
      setStatusMessage("Invalid phone number. It should be 10 digits.", true);
      return;
    }

    if (!isAlpha(details.eventType)) {
      setStatusMessage("Event type should only contain letters.", true);
      return;
    }

    const templateParams = {
      name: details.name,
      email: details.email,
      message: `Name: ${details.name},\nEmail: ${details.email},\nPhone: ${details.phone},\nEvent Type: ${details.eventType}`,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_ID)
      .then(() => {
        setStatusMessage("Email sent successfully!");
        
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        setStatusMessage("Failed to send message.", true);
      });
  };

  return (
    <div>
      <button
        className="bg-darkBlue rounded-xl font-montserrat text-cream submitBtn"
        onClick={sendEmail}
      >
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              ></path>
            </svg>
          </div>
        </div>
        <span>Submit</span>
      </button>
    </div>
  );
};

export default SubmitBtn;
