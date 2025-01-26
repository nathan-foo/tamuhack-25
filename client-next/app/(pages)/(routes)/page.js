"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navbar from "../_components/Navbar";
import MobileNavbar from "../_components/MobileNavbar";
import { Hero } from "../_components/Hero";
import { Footer } from "../_components/Footer";
import LandingInfo from "../_components/LandingInfo";


export default function Home() {
  
  return (
    <div>

      {/* <Navbar />
      <MobileNavbar /> */}
      <Hero />
      <LandingInfo />
      <Footer/>

    </div>
    
  );
}