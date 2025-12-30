'use client';

import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { BentoCard, BentoGrid, CARDS } from "@/components/ui/bento-grid";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { COMPANIES, PROCESS } from "@/utils";
import { REVIEWS } from "@/utils/constants/misc";
import { ArrowRightIcon, ChevronRight, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Particles from "@/components/ui/particles";
import Technologies from './components/Technologies';
import Monitoring from './components/Monitoring';
// import Process from './components/process';




const HomePage = () => {
    return (
        <div className="overflow-x-hidden scrollbar-hide size-full">
            <Particles
                className="absolute inset-0 -z-10"
                quantity={typeof window !== 'undefined' && window.innerWidth < 768 ? 50 : 200}
                ease={80}
                size={0.5}
                staticity={30}
                color="#ffffff"
            />
            {/* Hero Section */}
            <MaxWidthWrapper className='mt-32 sm:mt-36 md:mt-44 lg:mt-56 xl:mt-60'>
                <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background">
                    <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
                        <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/20"></span>
                            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1">
                                ✨ We will create the best solution for you
                                
                            </span>
                        </button>
                        <h1 className="text-foreground text-center py-4 sm:py-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-medium tracking-normal text-balance !leading-[1.2] sm:!leading-[1.15] w-full font-heading">
                            Innovative Softwares with <span className="text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text inline-bloc">
                                Precision
                            </span>
                        </h1>
                        <p className="mb-8 sm:mb-12 text-base sm:text-lg md:text-xl text-muted-foreground text-balance">
                            Crafting cutting-edge software solutions tailored to your needs.
                            <br className="hidden md:block" />
                            <span className="hidden md:block">From concept to deployment, we build the future, today.</span>
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center whitespace-nowrap gap-3 sm:gap-4 z-50">
                            <Button asChild>
                                <Link href="/contact" className="flex items-center">
                                    Get a Free Consultation
                                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                        
                    </AnimationContainer>
                </div>
            </MaxWidthWrapper >

            {/* Process Section */}
            <MaxWidthWrapper className="py-10">
                {/* <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="The Process" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            Our Streamlined Development Process
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            We follow a clear and efficient process to deliver high-quality software solutions.
                        </p>
                       
                    </div>
                </AnimationContainer> */}

                {/* <MaxWidthWrapper className="mt-24 py-10"> */}
                <MaxWidthWrapper className='mt-38 md:mt-48 lg:mt-60'>
  <AnimationContainer delay={0.1}>
    <div className="flex flex-col items-center justify-center w-full py-8 max-w-xl mx-auto">
      <MagicBadge title="The Process" />

      <h2 className="text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
        Our Streamlined Development Process
      </h2>

      <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
        We follow a clear and efficient process to deliver high-quality software solutions.
      </p>
    </div>
  </AnimationContainer>
</MaxWidthWrapper>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 sm:gap-6 md:gap-8">
                    {PROCESS.map((process, id) => (
                        <AnimationContainer delay={0.2 * id} key={id}>
                            <MagicCard className="group md:py-8">
                                <div className="flex flex-col items-start justify-center w-full">
                                    <process.icon strokeWidth={1.5} className="w-10 h-10 text-foreground" />
                                    <div className="flex flex-col relative items-start">
                                        <span className="absolute -top-6 right-0 border-2 border-border text-foreground font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5">
                                            {id + 1}
                                        </span>
                                        <h3 className="text-base mt-6 font-medium text-foreground">
                                            {process.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            {process.description}
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                        </AnimationContainer>
                    ))}
                </div>
            </MaxWidthWrapper>

            <MaxWidthWrapper className="mt-20 max-w-[100vw] overflow-x-hidden scrollbar-hide">
                <AnimationContainer delay={0.1}>
                              {/* <Process/> */}
                              <Monitoring/>
                </AnimationContainer>
            </MaxWidthWrapper>
            
            <MaxWidthWrapper className="mt-5 max-w-[100vw] overflow-x-hidden scrollbar-hide">
                <AnimationContainer delay={0.1}>
                              {/* <Process/> */}
                              <Technologies/>
                </AnimationContainer>
            </MaxWidthWrapper>
            


            {/* Reviews Section */}
            {/* <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="Our Customers" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            What Our Clients Say About Our Solutions
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            Hear from businesses that have transformed with our software development expertise.
                        </p>
                       
                    </div>
                </AnimationContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 py-10">
                    {REVIEWS.map((review, index) => (
                        <AnimationContainer delay={0.15 + 0.05 * index} key={index}>
                            <MagicCard className="md:p-0 h-full">
                                <Card className="flex flex-col w-full border-none h-full">
                                    <CardHeader className="space-y-0">
                                        <CardTitle className="text-lg font-medium text-muted-foreground">
                                            {review.name}
                                        </CardTitle>
                                        <CardDescription>
                                            {review.username}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4 pb-4">
                                        <p className="text-muted-foreground">
                                            {review.review}
                                        </p>
                                    </CardContent>
                                    <CardFooter className="w-full space-x-1 mt-auto">
                                        {Array.from({ length: review.rating }, (_, i) => (
                                            <StarIcon key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                        ))}
                                    </CardFooter>
                                </Card>
                            </MagicCard>
                        </AnimationContainer>
                    ))}
                </div>
            </MaxWidthWrapper> */}


<MaxWidthWrapper className="py-10">
  <AnimationContainer delay={0.1}>
    <div className="flex flex-col items-center justify-center w-full py-8 max-w-xl mx-auto">
      <MagicBadge title="Our Customers" />
      <h2 className="text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
        What Our Clients Say About Our Solutions
      </h2>
      <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
        Hear from businesses that have transformed with our software development expertise.
      </p>
    </div>
  </AnimationContainer>

  <div className="relative">

    {/* Scroll Hint */}
    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 z-20 md:hidden">
      <div className="flex items-center gap-1 rounded-full bg-background/80 backdrop-blur px-2 py-1 shadow">
        <ChevronRight className="w-4 h-4 text-muted-foreground animate-pulse" />
      </div>
    </div>

    {/* Reviews */}
    <div
      className="
        -mx-4 px-4 sm:-mx-6 sm:px-6
        flex items-stretch gap-4 sm:gap-6 overflow-x-auto scrollbar-hide
        md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible md:px-0
        py-8 sm:py-10
      "
    >
      {REVIEWS.map((review, index) => (
        <div
          key={index}
          className="min-w-[105%] sm:min-w-[80%] md:min-w-0 flex"
        >
          <AnimationContainer
            delay={0.15 + 0.05 * index}
            className="h-full flex"
          >
            <MagicCard className="h-full flex">
              <Card
                className="
                  flex flex-col w-full border-none
                  min-h-[320px] sm:min-h-[300px] md:min-h-0
                "
              >
                <CardHeader className="space-y-0">
                  <CardTitle className="text-lg font-medium text-muted-foreground">
                    {review.name}
                  </CardTitle>
                  <CardDescription>
                    {review.username}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 pb-4 flex-grow">
                  <p className="text-muted-foreground">
                    {review.review}
                  </p>
                </CardContent>

                <CardFooter className="w-full space-x-1 mt-auto">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <StarIcon
                      key={i}
                      className="w-4 h-4 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </CardFooter>
              </Card>
            </MagicCard>
          </AnimationContainer>
        </div>
      ))}
    </div>
  </div>
</MaxWidthWrapper>



            {/* CTA Section */}
            <MaxWidthWrapper className=" max-w-[100vw] overflow-x-hidden scrollbar-hide">
                <AnimationContainer delay={0.1}>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="bg-gradient-to-b from-neutral-200 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent mt-8">
                                Ready to Transform Your Business with Software?
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                                Partner with us to build innovative, scalable, and efficient software solutions that drive growth and success.
                            </p>
                            <div className="mt-6">
                                <Button asChild>
                                    <Link href="/contact" className="flex items-center">
                                        Start Your Project Today
                                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </LampContainer>
                </AnimationContainer>
            </MaxWidthWrapper>
        </div>
    );
};

export default HomePage;