import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMail } from "../../redux/slices/mailSlice";
import SuccessPopup from "./SuccessPopup.jsx";

const Contactus = () => {
  const dispatch = useDispatch();
  const { loading, success } = useSelector((state) => state.mail);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [done, setDone] = useState(false);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        sendMail({
          to: form.email,
          name: form.name,
          message: form.message,
        })
      );

      // Reset form and show popup
      setForm({ name: "", email: "", message: "" });
      setDone(true);
    } catch (error) {
      console.error("Error sending mail:", error);
    }
  };

  // Auto close the popup after 4 seconds
  useEffect(() => {
    if (done) {
      const timer = setTimeout(() => {
        setDone(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [done]);

  return (
    <div className="w-full px-6 py-12 flex justify-center">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-3">Contact Us</h2>

          {/* Success Popup */}
          <SuccessPopup
            success={done}
            message="Mail Sent Successfully!"
            onClose={() => setDone(false)}
          />

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Tell us about your project"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`bg-bg text-white px-6 py-3 rounded-lg font-semibold transition ${
                loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"
              }`}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>

        {/* Address Section */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Engineering Delivery Centre</h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              UI Bridge Solutions Pvt Ltd,<br />
              SPARK INCUBATION CENTRE, SREC Campus, Vattamalaipalayam,<br />
              N.G.G.O Colony P.O, Coimbatore – 641022,<br />
              Tamilnadu, India
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Registered Address</h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              No 3D, 6th Block, Sai Amirtha Apartment,<br />
              Sathya Narayan Nagar, Podanur Post,<br />
              Coimbatore – 641023,<br />
              Tamilnadu, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
