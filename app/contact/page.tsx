import ContactFormTab from "@/Components/ContactFormTab";
import React from "react";

export default function ContactPage() {
  return (
    <div className="container">
      <div className="contentContainer">
        <h1 className="heading">Contact</h1>
        <h1 className="description">
          Get in touch before I hit `npm start` again!
        </h1>
        <div className="w-full flex items-start">
          <ContactFormTab/>
        </div>
      </div>
    </div>
  );
}
