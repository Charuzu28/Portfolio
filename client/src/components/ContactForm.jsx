import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';

// --- small helpers ---
const sanitize = (str, max = 500) =>
  (str || "")
    .replace(/[\u0000-\u001F\u007F]/g, "")   // control chars
    .replace(/<[^>]*>?/gm, "")               // strip HTML tags
    .trim()
    .slice(0, max);

const isValidEmail = (s) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

const ContactForm = () => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const fd = new FormData(formRef.current);

    // sanitize + validate
    const name = sanitize(fd.get("name"), 80);
    const email = sanitize(fd.get("email"), 120);
    const subject = sanitize(fd.get("subject"), 120);
    const message = sanitize(fd.get("message"), 1000);

    if (name.length < 2) return alert("Please enter your name.");
    if (!isValidEmail(email)) return alert("Invalid email address.");
    if (subject.length < 2) return alert("Please enter a subject.");
    if (message.length < 10) return alert("Message too short.");

    // replace cleaned values
    fd.set("name", name);
    fd.set("email", email);
    fd.set("subject", subject);
    fd.set("message", message);

    setSending(true);

    emailjs.sendForm(
      "service_f63miqc",
      "template_b0on3tj",
      formRef.current,
      "LMIsjHetTRDMYrPmf"
    )
    .then(() => {
      formRef.current.reset();
      alert("Message sent!");
    })
    .catch((err) => {
      console.error("Email send error", err);
      alert("Email error occurred!");
    })
    .finally(() => setSending(false));
  };

  return (
    <div className="flex-1 py-8 px-6 bg-white rounded-xl shadow-md mx-auto w-full max-w-2xl">
      <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-3">
        <div className="flex flex-row gap-3">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            maxLength={80}
            className="w-full placeholder:text-gray-400 border rounded px-3 py-2 border-gray-200 bg-white"
          />
          <input
            type="email"
            name="email"
            placeholder=" Enter your e-mail"
            required
            maxLength={120}
            className="w-full placeholder:text-gray-400 border rounded px-3 py-2 border-gray-200 bg-white"
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject / Reason"
          required
          maxLength={120}
          className="w-full placeholder:text-gray-400 px-3 border border-gray-200 rounded py-2 bg-white"
        />
        <textarea
          name="message"
          placeholder="Add your meessage here...."
          rows={5}
          required
          maxLength={1000}
          className="w-full resize-y placeholder:text-gray-400 border rounded px-3 py-2 border-gray-200 bg-white"
        ></textarea>

        <button
          type="submit"
          disabled={sending}
          className="bg-black rounded hover:bg-gray-600 inline-flex justify-center items-center gap-3 py-3 px-4 cursor-pointer text-sm font-medium text-white transition-colors active:scale-[0.99] disabled:opacity-60"
        >
          {sending ? "Sending..." : "Submit"}{" "}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
