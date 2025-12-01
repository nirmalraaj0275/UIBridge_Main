import React, { useRef, useState, useEffect } from "react";
import { career, whyus } from "@/assets/images/HomeHero";

const FORMSPREE_URL = "https://formspree.io/f/mdkwpgdw";

const Careers = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ message: "", type: "" });
  const [progress, setProgress] = useState(0);

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
    <main className="bg-gray-50 min-h-screen pt-16 md:pt-20">
      {/* HERO SECTION */}
      <section
        className="w-full h-[300px] sm:h-[380px] md:h-[460px] lg:h-[560px] xl:h-[640px] 
        relative bg-cover bg-center shadow-lg"
        style={{ backgroundImage: `url(${career})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-center px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32">
          <div className="text-white max-w-lg md:max-w-2xl space-y-4">
            <h1 className="font-bold drop-shadow-2xl 
              text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight">
              Careers at UI Bridge
            </h1>

            <div className="h-1 w-24 bg-blue-500 rounded-full"></div>

            <p className="text-xs sm:text-sm md:text-lg lg:text-xl opacity-95 leading-relaxed">
              We’re always looking for smart, passionate people
              who want to build great products.
            </p>
          </div>
        </div>
      </section>

      {/* FORM + RIGHT PANEL */}
      <section className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:gap-12 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px]">


          {/* FORM SECTION */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-5">Apply Now</h2>
            <p className="text-gray-500 mb-5 text-sm sm:text-base">
              Attach your resume and fill in your details. PDF / DOC / DOCX — Max 5MB.
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4 gap-6"
            >

              {/* Full Name */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  required
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="example@gmail.com"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Phone</label>
                <input
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Position */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                  Position Applying For <span className="text-red-500">*</span>
                </label>
                <input
                  name="position"
                  required
                  placeholder="e.g. Frontend Developer"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Resume */}
              <div className="col-span-2 flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                  Resume <span className="text-red-500">*</span>
                </label>
                <input
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-xs text-gray-500">
                  Max 5MB — Rename like: Firstname_Lastname_Position.pdf
                </p>
              </div>

              {/* Note */}
              <div className="col-span-2 flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                  Cover Note (Optional)
                </label>
                <textarea
                  name="note"
                  rows="3"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Status Messages */}
              <div className="col-span-2">
                {status.message && (
                  <div
                    className={`p-3 rounded-lg ${status.type === "success"
                        ? "bg-green-50 border border-green-300 text-green-700"
                        : "bg-red-50 border border-red-300 text-red-700"
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
              <div className="col-span-2 flex gap-4 mt-2">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition"
                >
                  Submit Application
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-gray-200 text-gray-800 px-5 py-2.5 rounded-lg hover:bg-gray-300 transition"
                >
                  Reset
                </button>
              </div>

            </form>

          </div>

          {/* RIGHT SIDE INFO */}
          <aside>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <img
                src={whyus}
                className="w-full h-40 sm:h-48 object-cover rounded-2xl"
                alt="Why Join"
              />

              <h5 className="text-xl font-semibold mt-5">Why Join UI Bridge?</h5>

              <ul className="mt-3 space-y-2 text-gray-700 text-sm sm:text-base">
                <li>• Build real-world products</li>
                <li>• Mentorship & learning culture</li>
                <li>• Flexible & friendly work environment</li>
                <li>• Modern tech stack & projects</li>
              </ul>

              {/* <p className="text-gray-500 mt-4 text-xs sm:text-sm">
                Questions? Email{" "}
                <a href="mailto:hr.cbe@uibridgesolutions.com" className="text-blue-600">
                  hr.cbe@uibridgesolutions.com
                </a>
              </p> */}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Careers;
