// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/utils";

// export const LampContainer = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div
//       className={cn(
//         "relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden w-full rounded-md z-0",
//         className
//       )}
//     >
//       {/* Lamp Effects */}
//       <div className="relative flex w-full flex-1 items-center justify-center isolate z-0">
        
//         <motion.div
//           initial={{ opacity: 0.5, width: "1rem" }}
//           whileInView={{ opacity: 0.9, width: "26rem" }}
//           transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
//           style={{
//             backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
//           }}
//           className="absolute right-1/2 h-48 w-[26rem]
//             bg-gradient-conic from-purple-500 via-transparent to-transparent
//             [--conic-position:from_70deg_at_center_top]"
//         >
//           <div className="absolute inset-x-0 bottom-0 h-32 bg-background [mask-image:linear-gradient(to_top,white,transparent)]" />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0.4, width: "14rem" }}
//           whileInView={{ opacity: 0.9, width: "26rem" }}
//           transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
//           style={{
//             backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
//           }}
//           className="absolute left-1/2 h-48 w-[26rem]
//             bg-gradient-conic from-transparent via-transparent to-purple-500
//             [--conic-position:from_290deg_at_center_top]"
//         >
//           <div className="absolute inset-x-0 bottom-0 h-32 bg-background [mask-image:linear-gradient(to_top,white,transparent)]" />
//         </motion.div>

//         {/* Glow */}
//         <motion.div
//           initial={{ width: "10rem" }}
//           whileInView={{ width: "18rem" }}
//           transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
//           className="absolute z-30 h-28 -translate-y-16 rounded-full bg-purple-400 blur-2xl"
//         />

//         <motion.div
//           initial={{ width: "18rem" }}
//           whileInView={{ width: "28rem" }}
//           transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
//           className="absolute z-40 h-0.5 -translate-y-20 bg-purple-400"
//         />

//         <div className="absolute z-20 h-32 w-full -translate-y-24 bg-background" />
//       </div>

//       {/* CONTENT */}
//       <div className="relative z-50 flex -translate-y-40 flex-col items-center px-5">
//         {children}
//       </div>
//     </div>
//   );
// };

"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        // ⬇️ reduced vertical padding
        "relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        {/* LEFT LAMP */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 w-[30rem] bg-gradient-conic from-purple-500 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-full left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-full left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* RIGHT LAMP */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-purple-500 [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-full right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* GLOW & BLUR */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-background blur-[8rem]" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />

        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-purple-400 blur-2xl"
        />

        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-purple-400"
        />

        <div className="absolute z-40 h-44 w-full -translate-y-[12.5rem] bg-background" />
      </div>

      {/* ⬇️ content moved slightly down & padding reduced */}
      <div className="relative z-50 flex -translate-y-56 flex-col items-center px-4">
        {children}
      </div>
    </div>
  );
};


// "use client";

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/utils";

// export const LampContainer = ({
//     children,
//     className,
// }: {
//     children: React.ReactNode;
//     className?: string;
// }) => {
//     return (
//         <div
//             className={cn(
//                 "relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full rounded-md z-0",
//                 className
//             )}
//         >
//             <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
//                 <motion.div
//                     initial={{ opacity: 0.5, width: "15rem" }}
//                     whileInView={{ opacity: 1, width: "30rem" }}
//                     transition={{
//                         delay: 0.3,
//                         duration: 0.8,
//                         ease: "easeInOut",
//                     }}
//                     style={{
//                         backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
//                     }}
//                     className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-purple-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
//                 >
//                     <div className="absolute  w-[100%] left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
//                     <div className="absolute  w-40 h-[100%] left-0 bg-background  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
//                 </motion.div>
//                 <motion.div
//                     initial={{ opacity: 0.5, width: "15rem" }}
//                     whileInView={{ opacity: 1, width: "30rem" }}
//                     transition={{
//                         delay: 0.3,
//                         duration: 0.8,
//                         ease: "easeInOut",
//                     }}
//                     style={{
//                         backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
//                     }}
//                     className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-purple-500 text-white [--conic-position:from_290deg_at_center_top]"
//                 >
//                     <div className="absolute  w-40 h-[100%] right-0 bg-background  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
//                     <div className="absolute  w-[100%] right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
//                 </motion.div>
//                 <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-background blur-[8rem]"></div>
//                 <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
//                 <motion.div
//                     initial={{ width: "8rem" }}
//                     whileInView={{ width: "16rem" }}
//                     transition={{
//                         delay: 0.3,
//                         duration: 0.8,
//                         ease: "easeInOut",
//                     }}
//                     className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-purple-400 blur-2xl"
//                 ></motion.div>
//                 <motion.div
//                     initial={{ width: "15rem" }}
//                     whileInView={{ width: "30rem" }}
//                     transition={{
//                         delay: 0.3,
//                         duration: 0.8,
//                         ease: "easeInOut",
//                     }}
//                     className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-purple-400"
//                 ></motion.div>

//                 <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-background "></div>
//             </div>

//             <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
//                 {children}
//             </div>
//         </div>
//     );
// };