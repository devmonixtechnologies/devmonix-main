
'use client';

import Image from "next/image";

const firstRowLogos = [
  { name: "CacheFly", src: "/logos/CacheFly.png", width: 160, height: 50 },
  { name: "Inet global", src: "/logos/inet_global.png", width: 120, height: 50 },
  { name: "Parrot Security", src: "/logos/parrot_security.png", width: 100, height: 40 },
  { name: "EBSM", src: "/logos/EBSM.png", width: 100, height: 30 },
  { name: "Cybridge", src: "/logos/cybridge.png", width: 130, height: 45 },
  { name: "Dcworld", src: "/logos/dcworld.png", width: 160, height: 45 },
  { name: "Shenzen jincheng", src: "/logos/shenzenjincheng.png", width: 140, height: 50 },
];

// const secondRowLogos = [
//   { name: "Paytm", src: "/logos/google-logo.png", width: 130, height: 45 },
//   { name: "Paytm", src: "/logos/google-logo.png", width: 130, height: 45 },
//   { name: "Phonepe", src: "/logos/google-logo.png", width: 140, height: 45 },
//   { name: "Phonepe", src: "/logos/google-logo.png", width: 140, height: 45 },
//   { name: "Uber", src: "/logos/google-logo.png", width: 110, height: 45 },
//   { name: "Unacademy", src: "/logos/google-logo.png", width: 160, height: 45 },
//   { name: "Walmart", src: "/logos/google-logo.png", width: 150, height: 45 },
//   { name: "Wipro", src: "/logos/google-logo.png", width: 130, height: 45 },
// ];

export default function TrustedCompanies() {
  return (
     <section className="relative py-24 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Trusted Leading
          </span>{" "}
          Companies
        </h2>
        <p className="text-muted-foreground">
          Powering innovation across industries worldwide
        </p>
      </div>

      {/* FIRST ROW → LEFT */}
      <div
        className="
          mx-auto max-w-6xl px-6 mb-8 overflow-hidden
          [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]
        "
      >
        <ul className="flex w-max items-center gap-16 animate-scroll-left-fast pause-on-hover">
          {[...firstRowLogos, ...firstRowLogos].map((logo, i) => (
            <li key={i} className="flex-shrink-0 flex items-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="opacity-80 hover:opacity-100 transition object-contain"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* SECOND ROW → RIGHT */}
      <div
        className="
          mx-auto max-w-[70%] px-6 overflow-hidden
          [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]
        "
      >
        {/* <ul className="flex w-max items-center gap-16 animate-scroll-right-fast pause-on-hover">
  {[...secondRowLogos, ...secondRowLogos].map((logo, i) => (
    <li
      key={i}
      className="flex-shrink-0 flex flex-col items-center text-center"
    >
      <Image
        src={logo.src}
        alt={logo.name}
        width={logo.width}
        height={logo.height}
        className="opacity-80 hover:opacity-100 transition object-contain"
      />


    </li>
  ))}
</ul> */}

      </div>
    </section>
  );
}
