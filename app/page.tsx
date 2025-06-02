"use client";

import React, { useState, useEffect } from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 900); // 500ms delay before showing the content

    return () => clearTimeout(timer);
  }, []);

  return (
    <AuroraBackground>
      <div className="flex items-center justify-center min-h-screen w-full px-3">
        <div 
          className={`relative bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden w-full max-w-xl h-auto md:h-[400px] flex transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Sign In Form */}
          <div className="w-1/2 h-full">
  <div className="flex flex-col items-center justify-center h-full px-6 pt-6 pb-8 bg-gradient-to-br from-white via-gray-50 to-green-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-green-900/10 relative overflow-hidden">
    <div className="relative z-10 w-full max-w-[280px] mx-auto">
      {/* Header Section */}
      <div className="text-center mb-4">
        <div className="relative h-12 w-38 mx-auto drop-shadow-lg mb-1">
          <Image
            src="/logo1.png"
            alt="NeoStats Logo"
            fill
            className="object-contain filter drop-shadow-sm"
            priority
          />
        </div>
        <div className="space-y-0.5 mt-1">
          <h2 className="text-xl font-bold bg-gradient-to-r from-[#00412E] to-[#2d5a3d] dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Welcome Back
          </h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 font-medium mb-1">
            Enter your credentials to access your account
          </p>
        </div>
      </div>

      {/* Form Section */}
      <form className="space-y-4 w-full">
        <div className="space-y-3">
          {/* Email Field */}
          <div className="group">
            <label className="block text-xs font-semibold text-[#00412E] dark:text-gray-200 mb-1 transition-colors group-focus-within:text-[#96BF8A] dark:group-focus-within:text-green-400">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-xs bg-white/80 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#96BF8A]/50 focus:border-[#96BF8A] dark:focus:ring-green-400/50 dark:focus:border-green-400 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 backdrop-blur-sm shadow-sm hover:shadow-md focus:shadow-lg"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#96BF8A]/5 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
            </div>
          </div>

          {/* Password Field */}
          <div className="group">
            <label className="block text-xs font-semibold text-[#00412E] dark:text-gray-200 mb-1 transition-colors group-focus-within:text-[#96BF8A] dark:group-focus-within:text-green-400">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 text-xs bg-white/80 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#96BF8A]/50 focus:border-[#96BF8A] dark:focus:ring-green-400/50 dark:focus:border-green-400 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 backdrop-blur-sm shadow-sm hover:shadow-md focus:shadow-lg"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#96BF8A]/5 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Remember me & Forgot password */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center group">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-3 w-3 text-[#96BF8A] focus:ring-[#96BF8A] focus:ring-1 border-gray-300 dark:border-gray-500 rounded bg-white dark:bg-gray-700 transition-colors"
            />
            <label
              htmlFor="remember-me"
              className="ml-1.5 block text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-[#00412E] dark:group-hover:text-white transition-colors cursor-pointer"
            >
              Remember me
            </label>
          </div>
          <a
            href="#"
            className="text-xs font-semibold text-[#00412E] hover:text-[#96BF8A] dark:text-gray-300 dark:hover:text-green-400 transition-colors duration-200 hover:underline underline-offset-2"
          >
            Forgot password?
          </a>
        </div>

        {/* Sign In Button */}
        <button
          type="button"
          onClick={() => router.push("/Chat")}
          className="group relative w-full bg-gradient-to-r from-[#3b9320] via-[#2d7a17] to-[#1f5c0f] text-white font-semibold py-2 px-3 text-sm rounded-lg mt-4 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3b9320]/50 focus:ring-offset-1 dark:focus:ring-offset-gray-800 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#4aa332] via-[#3b8a20] to-[#2d6f18] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative flex items-center justify-center">
            Sign In
            <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>
      </form>
    </div>
  </div>
</div>


          {/* Right Side Intro */}
          <div className="w-1/2 h-full text-white relative bg-[url('/bg.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-opacity-80 flex flex-col items-center justify-center px-4 text-center">
              <h1 className="text-xl font-bold mb-2">Welcome to FELCIX!</h1>
              <p className="text-xs mb-3">
                Discover the power of data analytics and insights with our cutting-edge platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}