import React, { useRef, useState, useEffect } from "react";
import { career, whyus } from "@/assets/images/HomeHero";

const FORMSPREE_URL = "https://formspree.io/f/mdkwpgdw";

const Careers = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ message: "", type: "" });
  const [progress, setProgress] = useState(0);

  // ✅ Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleReset = () => {
    formRef.current.reset();
    setStatus({ message: "", type: "" });
    setProgress(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: "", type: "" });
    setProgress(0);

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const position = form.position.value.trim();
    const resume = form.resume.files[0];

    if (!name || !email || !position || !resume) {
      setStatus({
        message: "Please complete required fields and attach your resume.",
        type: "error",
      });
      return;
    }

    if (resume.size > 5 * 1024 * 1024) {
      setStatus({
        message: "Resume is too large. Maximum allowed size is 5MB.",
        type: "error",
      });
      return;
    }

    const fd = new FormData();
    fd.append("name", name);
    fd.append("email", email);
    fd.append("phone", form.phone.value.trim());
    fd.append("position", position);
    fd.append("note", form.note.value.trim());
    fd.append("resume", resume);
    fd.append("_subject", `New career application: ${position} - ${name}`);

    try {
      setProgress(10);

      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: fd,
      });

      setProgress(75);

      if (res.ok) {
        setStatus({
          message: "Thanks! Your application was submitted successfully.",
          type: "success",
        });
        form.reset();
        setProgress(100);
      } else {
        let msg = `Submission failed (${res.status})`;
        try {
          const json = await res.json();
          if (json?.error) msg = json.error;
        } catch { }
        setStatus({ message: msg, type: "error" });
      }
    } catch (err) {
      setStatus({
        message:
          "Network error while submitting. Please try again or email hr.cbe@uibridgesolutions.com",
        type: "error",
      });
    } finally {
      setTimeout(() => setProgress(0), 1800);
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen mt-20">
      {/* HERO SECTION */}
      <section
        className="w-full h-[400px] sm:h-[400px] md:h-[480px] lg:h-[600px] xl:h-[680px] relative bg-cover bg-center shadow-2xl"
        style={{ backgroundImage: `url(${career})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-transparent"></div>

        <div className="absolute inset-0 flex items-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
          <div className="text-white max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl space-y-4">
            <h1 className="font-bold drop-shadow-2xl text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight">
              Careers at UI Bridge
            </h1>
            <div className="h-1 w-24 bg-blue-500 rounded-full"></div>
            <p className="text-base sm:text-lg md:text-xl opacity-95 leading-relaxed font-light">
              We’re always looking for smart, passionate people who want to build great products.
            </p>
          </div>
        </div>
      </section>

      {/* FORM + RIGHT PANEL */}
      <section className="max-w-7xl mx-auto py-10 px-4">
        <div className="grid gap-10 md:grid-cols-[1fr_380px]">

          {/* FORM SECTION */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-black-900 mb-5">Apply Now</h2>
            <p className="text-gray-500 mb-5">
              Attach your resume and fill in your details. PDF / DOC / DOCX — Max 5MB.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Full Name */}
              <div>
                <label className="block text-base font-medium mb-2 text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  required
                  placeholder="Full Name"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-base font-medium mb-2 text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="@gmail.com"
                  required
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-base font-medium mb-2 text-gray-700">
                  Phone
                </label>
                <input
                  name="phone"
                  placeholder="Phone Number"
                  type="tel"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:outline-none"
                />
              </div>

              {/* Position */}
              <div>
                <label className="block text-base font-medium mb-2 text-gray-700">
                  Position Applying For <span className="text-red-500">*</span>
                </label>
                <input
                  name="position"
                  required
                  placeholder="e.g Frontend Developer"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:outline-none"
                />
              </div>

              {/* Resume */}
              <div className="col-span-2">
                <label className="block text-base font-medium mb-2 text-gray-700">
                  Resume <span className="text-red-500">*</span>
                </label>
                <input
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:outline-none"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Max 5MB — Rename file: Firstname_Lastname_Position.pdf
                </p>
              </div>

              {/* Note */}
              <div className="col-span-2">
                <label className="text-gray-700 font-medium">Cover Note (Optional)</label>
                <textarea
                  name="note"
                  rows="3"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:outline-none"
                />
              </div>

              {/* Status Messages */}
              <div className="col-span-2">
                {status.message && (
                  <div
                    className={`p-3 rounded-lg ${status.type === "success"
                        ? "bg-green-50 border border-green-200 text-green-700"
                        : "bg-red-50 border border-red-200 text-red-700"
                      }`}
                  >
                    {status.message}
                  </div>
                )}

                {progress > 0 && (
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="col-span-2 flex gap-3 mt-4">
                <button type="submit" className="bg-bg text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700">
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="border px-5 py-2 rounded-lg hover:bg-gray-100"
                >
                  Reset
                </button>
              </div>

            </form>
          </div>

          {/* RIGHT SIDE INFO */}
          <aside>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <img src={whyus} className="w-full h-48 object-cover rounded-2xl mx-auto" />

              <h5 className="text-xl font-semibold mt-5">Why Join UI Bridge?</h5>

              <ul className="mt-3 space-y-2 text-gray-700">
                <li>• Build real-world products</li>
                <li>• Mentorship & learning culture</li>
                <li>• Flexible & friendly work environment</li>
                <li>• Modern tech stack & projects</li>
              </ul>

              <p className="text-gray-500 mt-4 text-sm">
                Questions? Email{" "}
                <a href="mailto:hr.cbe@uibridgesolutions.com" className="text-blue-600">
                  hr.cbe@uibridgesolutions.com
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Careers;
