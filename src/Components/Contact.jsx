import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();
  const notify = () => toast("Sucssesfuly send email");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_suuowje", "template_69ufju4", form.current, {
        publicKey: "bvU2lgqaXDoKgzpdO",
      })
      .then(
        () => {
          notify()
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div id="contact">
      <div className="flex h-full border-t border-b py-20 items-center justify-start bg-white">
        <div className="mx-auto w-full max-w-lg">
          <div className="text-center">
            <h1 className="text-4xl font-medium">Contact us</h1>
            <p className="mt-3">
              Email us at rudrolipi@gamil.com or message us here:
            </p>
          </div>

          <form name="contact-form" className="mt-10 px-8" ref={form} onSubmit={sendEmail}>
            {/* This is a working contact form. 
   Get your free access key from: https://web3forms.com/  */}
            <input type="hidden" name="access_key" />
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative z-0">
                <input
                  type="text"
                  name="from_name"
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Your name
                </label>
              </div>
              <div className="relative z-0">
                <input
                  type="text"
                  name="from_email"
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Your email
                </label>
              </div>
              <div className="relative z-0 col-span-2">
                <textarea
                  name="message"
                  rows={5}
                  className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "                 
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                  Your message
                </label>
              </div>
            </div>
            <div className="flex justify-center items-center">
            <button
              type="submit"
               value="Send"
              className="mt-5 rounded-md bg-slate-700 border-slate-700 px-10 py-2 text-white"
            >
              Send Message
            </button>
            
            </div>
           
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
