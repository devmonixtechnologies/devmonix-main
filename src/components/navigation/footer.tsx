import Link from 'next/link';
import { AnimationContainer, Icons } from "@/components"
import { TextHoverEffect } from "@/components/ui/text-hover-effect"
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">

            <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">

                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                        <div className="flex items-start" style={{color:'#782faf'}}>
                            {/* <Icons.logo className="w-7 h-7" /> */}
                            <Image style={{borderRadius: 10, opacity: 0.8, height:50, width: "100%"}} src="/logo-main.png" alt="DEVMONIX" width={100} height={25} />™
                        </div>
                        <p className="text-muted-foreground mt-4 text-sm text-start">
                            DEVMONIX TECHNOLOGIES
                        </p>
                        <span className="mt-4 text-neutral-200 text-sm flex items-center">
                        GET ☕︎ WITH DEVMONIX
                        </span>
                    </div>
                </AnimationContainer>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.2}>
                            <div className="">
                                <h3 className="text-base font-medium text-white">
                                    Company
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="mt-2">
                                        <Link href="/about" className="hover:text-foreground transition-all duration-300">
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/services" className="hover:text-foreground transition-all duration-300">
                                            Services
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/portfolio" className="hover:text-foreground transition-all duration-300">
                                            Portfolio
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/contact" className="hover:text-foreground transition-all duration-300">
                                            Contact
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/careers" className="hover:text-foreground transition-all duration-300">
                                            Career
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={0.3}>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white">
                                    Legal
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="">
                                        <Link href="/privacy" className="hover:text-foreground transition-all duration-300">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/faq" className="hover:text-foreground transition-all duration-300">
                                            FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.4}>
                            <div className="">
                                <h3 className="text-base font-medium text-white">
                                    Connect With Us :
                                </h3>
                                <ul className="mt-4 text-sm ">
                                    <li className="mt-2 flex space-x-4">
                                        <Link href="https://www.instagram.com/devmonix_technologies/" target='_blank' className="hover:text-foreground transition-all duration-300">
                                            <Image style={{opacity: 0.8, height:40}} src="/icons/social/instagram_icon.svg" alt="devmonix instagram" width={100} height={25} />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/devmonix.io/?viewAsMember=true" target='_blank' className="hover:text-foreground transition-all duration-300">
                                            <Image style={{opacity: 0.8, height:40}} src="/icons/social/linkedin_icon.svg" alt="devmonix linkedin" width={100} height={25} />
                                        </Link>
                                        <Link href="https://x.com/devmonixtech" target='_blank' className="hover:text-foreground transition-all duration-300">
                                            <Image style={{opacity: 0.8, height:40}} src="/icons/social/twitter_x_icon.svg" alt="devmonix twitter x" width={100} height={25} />
                                        </Link>
                                        <Link href="https://www.linkedin.com/company/devmonix.io/?viewAsMember=true" target='_blank' className="hover:text-foreground transition-all duration-300">
                                            <Image style={{opacity: 0.8, height:40}} src="/icons/social/slack_icon.svg" alt="devmonix slack" width={100} height={25} />
                                        </Link>
                                        
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                </div>

            </div>

            <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
                <AnimationContainer delay={0.6}>
                    <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                        &copy; {new Date().getFullYear()} DEVMONIX TECHNOLOGIES. All rights reserved.
                    </p>
                </AnimationContainer>
            </div>

            <div className="h-[0rem] lg:h-[20rem] hidden md:flex items-center justify-center">
                <TextHoverEffect text="DEVMONIX" />
            </div>
        </footer>
    )
}

export default Footer
