import React from "react";
import ContactForm from "../components/ContactForm";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

const Contact = () => {
  return (
    <section id="contact">
      {/* Hero + form */}
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
          <div className="space-y-3 md:max-w-md">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-semibold leading-tight">
              Get in touch
            </h1>
            <p className="text-black">
              If you want to contact me, fill out the form.
            </p>
          </div>
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
