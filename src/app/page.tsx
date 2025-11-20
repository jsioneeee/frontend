import * as React from "react";
import Header from "@/components/ui/header";
import TypewriterWrapper from "@/components/ui/TypewriterWrapper";

export default function Page() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg1.gif')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />
      <main className="flex-grow p-6">
        <section className="text-white px-6 py-12 h-full flex items-center bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-full pt-5 pl-6">
            {/* Left: Description */}
            <div
              className="text-center md:text-left self-start pt-0"
              style={{ minHeight: "100vh" }}
            >
              <TypewriterWrapper />
              <p className="text-lg leading-relaxed pt-0">
                I'm a 2nd Year BS Information Systems student passionate about
                building responsive, scalable UI components and solving
                real-world backend challenges. I love debugging, iterating on
                design, and making interfaces that feel intuitive and
                delightful.
              </p>

              {/* Logos */}
              <div className="flex justify-center md:justify-start gap-10 mt-6 pt-10">
                <a
                  href="https://web.facebook.com/ItsssJerrrrme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/fb-logo.jpg"
                    alt="FB LOGO"
                    className="w-15 h-15 rounded-full border-3 border-red-700 shadow-lg object-cover transition-transform duration-300 hover:scale-120 hover:shadow-xl cursor-pointer"
                  />
                </a>
                <a
                  href="https://www.instagram.com/notmeeeurrr?igsh=dW1zMTFpd2hwemMO"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/insta_logo.jpg"
                    alt="INSTA LOGO"
                    className="w-15 h-15 rounded-full border-3 border-red-700 shadow-lg object-cover transition-transform duration-300 hover:scale-120 hover:shadow-xl cursor-pointer"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/jeremy-siona-70556838a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/linkin-logo.jpg"
                    alt="LINKEDIN LOGO"
                    className="w-15 h-15 rounded-full border-3 border-red-700 shadow-lg object-cover transition-transform duration-300 hover:scale-120 hover:shadow-xl cursor-pointer"
                  />
                </a>
              </div>
            </div>

            {/* Right: Avatar */}
            <div className="flex justify-center md:justify-center self-start pt-10">
              <img
                src="/pic-1.png"
                alt="Jeremy's Avatar"
                className="w-50 h-50 rounded-full border-3 border-red-500 shadow-lg object-cover transition-transform duration-300 hover:scale-115 hover:shadow-xl"
                style={{ backgroundColor: "red" }}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
