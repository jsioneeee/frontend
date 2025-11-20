import * as React from "react";
import Header from "@/components/ui/header";

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
        <section className="text-white px-6 py-20 h-full flex flex-col items-center bg-gray-900 rounded-lg shadow-lg  max-height-90 mt-1">
          {/* Top Center Title */}
          <h2 className="text-3xl font-bold text-center mb-20">𝑨𝒃𝒐𝒖𝒕 𝑴𝒆</h2>

          {/* Grid Content */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 items-start gap-8 w-full fonts- mathematical script italic max-height-100
"
          >
            {/* Left: About Me Details */}
            <div className="text-left space-y-4 ml-5">
              <p className="text-lg text-3xl font-bold font-serif text-xs">
                𝑨 𝒔𝒎𝒂𝒍𝒍 𝒓𝒊𝒗𝒆𝒓 𝒏𝒂𝒎𝒆𝒅 𝑫𝒖𝒅𝒆𝒏 𝒇𝒍𝒐𝒘𝒔 𝒃𝒚 𝒕𝒉𝒆𝒊𝒓 𝒑𝒍𝒂𝒄𝒆 𝒂𝒏𝒅 𝒔𝒖𝒑𝒑𝒍𝒊𝒆𝒔 𝒊𝒕
                𝒘𝒊𝒕𝒉 𝒕𝒉𝒆 𝒏𝒆𝒄𝒆𝒔𝒔𝒂𝒓𝒚 𝒓𝒆𝒈𝒆𝒍𝒊𝒂𝒍𝒊𝒂.
              </p>
              <ul className="space-y-1 text-base">
                <li>
                  <strong>Name:</strong> Jeremy Siana
                </li>
                <li>
                  <strong>Date of Birth:</strong> November 14, 2005
                </li>
                <li>
                  <strong>Address:</strong> Villaranagahan, Naga City, Camarines
                  Sur
                </li>
                <li>
                  <strong>Zip Code:</strong> 4405
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:jsiana@bcpund.edu.ph"
                    className="text-red-400 hover:underline"
                  >
                    jsiona@gbox.ncf.edu.ph
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong> +63-9070793673
                </li>
                <li>
                  <strong>Projects Completed:</strong> 120
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href="/jsione-resume.pdf"
                  download
                  className="inline-block bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-300 transition-transform duration-300 hover:scale-120 hover:shadow-xl cursor-pointer"
                >
                  DOWNLOAD CV
                </a>
              </div>
            </div>

            {/* Right: Avatar */}
            <div className="flex justify-center pt-10">
              <img
                src="/pic-1.png"
                alt="Jeremy's Avatar"
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full border-[3px] border-red-500 shadow-lg object-cover transition-transform duration-300 hover:scale-110 hover:shadow-xl"
                style={{ backgroundColor: "red" }}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
