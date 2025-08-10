import React from "react";
import ContactForm from "../components/ContactForm";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

const Contact = () => {
  return (
    <main className="min-h-screen">
      {/* Hero + form */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
          <div className="space-y-3 md:max-w-md">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-semibold leading-tight">
              Get in touch
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              If you want to contact me, fill out the form.
            </p>
          </div>
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Social / contact cards */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="flex flex-wrap justify-center gap-6">
          {/* Email */}
          <div className="w-full sm:w-[48%] lg:w-[31%] rounded-xl bg-black p-5">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gray-800">
                <MdOutlineAlternateEmail className="text-white" size={20} />
              </div>
              <div className="text-white font-medium text-lg">Email me</div>
            </div>
            <a
              href="mailto:charlesmarfil.alamares@gmail.com"
              className="mt-3 block text-white/90 text-sm break-all hover:underline focus:outline-none focus:ring-2 focus:ring-white/40 rounded"
            >
              charlesmarfil.alamares@gmail.com
            </a>
          </div>

          {/* Instagram */}
          <div className="w-full sm:w-[48%] lg:w-[31%] rounded-xl bg-black p-5">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gray-800">
                <FaInstagram className="text-white" size={20} />
              </div>
              <div className="text-white font-medium text-lg">Instagram</div>
            </div>
            <a
              href="https://instagram.com/itssssmeechs28"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-white/90 text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-white/40 rounded"
            >
              itssssmeechs28
            </a>
          </div>

          {/* Facebook */}
          <div className="w-full sm:w-[48%] lg:w-[31%] rounded-xl bg-black p-5">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gray-800">
                <RiFacebookFill className="text-white" size={20} />
              </div>
              <div className="text-white font-medium text-lg">Facebook</div>
            </div>
            <a
              href="https://facebook.com/itsmecharuzu028"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-white/90 text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-white/40 rounded"
            >
              itsmecharuzu028
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
