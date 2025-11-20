"use client";

interface FlipCardProps {
  frontText: string;
  backImage: string;
}

export default function FlipCard({ frontText, backImage }: FlipCardProps) {
  return (
    <div
      className="w-[57.5vw] h-[60vh] flex justify-center items-center"
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-full h-full transition-transform duration-[999ms] hover:rotate-y-180"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full flex items-center justify-center text-white text-3xl sm:text-4xl font-semibold rounded-[10px] border border-white/20 backdrop-blur-md bg-white/10 shadow-lg text-center px-4"
          style={{ backfaceVisibility: "hidden" }}
        >
          <p>{frontText}</p>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full rounded-[10px] border border-white/20 backdrop-blur-md bg-white/10 shadow-lg overflow-hidden"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <img
            src={backImage}
            alt="Back Side"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
