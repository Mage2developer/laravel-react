"use client";
import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

function Index() {
    const [activeTab, setActiveTab] = useState('about');

    // Sample profile data
    const profile = {
        name: "Priya Sharma",
        age: 28,
        location: "Mumbai, India",
        profession: "Software Engineer",
        education: "M.Tech in Computer Science",
        height: "5'6\"",
        religion: "Hindu",
        about: "I'm an optimistic and ambitious person who values family and traditions. I enjoy traveling, reading, and exploring new cuisines. Looking for someone who is kind, ambitious, and has a good sense of humor.",
        familyDetails: "I come from a close-knit family with traditional values. My father is a retired professor and my mother is a homemaker. I have one elder brother who is married and settled in Bangalore.",
        preferences: "Looking for someone who is educated, family-oriented, and shares similar values. Age between 28-33, preferably working in tech or finance.",
        photos: [
            "/api/placeholder/400/500",
            "/api/placeholder/400/500",
            "/api/placeholder/400/500"
        ],
        interests: ["Reading", "Cooking", "Traveling", "Photography", "Music"],
        career: {
            company: "TechSolutions India",
            experience: "5 years",
            income: "Confidential"
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title={profile.name} />
            <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
                        <div className="flex flex-col md:flex-row items-center md:justify-between">
                            <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 md:mb-0 md:mr-6">
                                    <img src="/api/placeholder/128/128" alt="Profile" className="w-full h-full object-cover" />
                                </div>
                                <div className="text-center md:text-left">
                                    <h1 className="text-2xl font-bold">{profile.name}, {profile.age}</h1>
                                    <div className="flex items-center justify-center md:justify-start mt-1">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                        <span className="text-sm">{profile.profession}</span>
                                    </div>
                                    <div className="flex items-center justify-center md:justify-start mt-1">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                        </svg>
                                        <span className="text-sm">{profile.education}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="border-b">
                        <nav className="flex">
                            <button
                                onClick={() => setActiveTab('about')}
                                className={`px-4 py-3 font-medium text-sm ${activeTab === 'about' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                Personal Details
                            </button>
                            <button
                                onClick={() => setActiveTab('photos')}
                                className={`px-4 py-3 font-medium text-sm ${activeTab === 'photos' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                Photos
                            </button>
                            <button
                                onClick={() => setActiveTab('family')}
                                className={`px-4 py-3 font-medium text-sm ${activeTab === 'family' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                Family Details
                            </button>
                            <button
                                onClick={() => setActiveTab('preferences')}
                                className={`px-4 py-3 font-medium text-sm ${activeTab === 'preferences' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                Contact Details
                            </button>
                        </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="p-6">
                        {activeTab === 'about' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800 mb-2">About Me</h2>
                                    <p className="text-gray-600">{profile.about}</p>
                                </div>

                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Basic Details</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <div className="flex items-center text-gray-700">
                                                <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                                </svg>
                                                <span className="font-medium">Height:</span>
                                                <span className="ml-2">{profile.height}</span>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <div className="flex items-center text-gray-700">
                                                <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path>
                                                </svg>
                                                <span className="font-medium">Religion:</span>
                                                <span className="ml-2">{profile.religion}</span>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <div className="flex items-center text-gray-700">
                                                <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                                </svg>
                                                <span className="font-medium">Age:</span>
                                                <span className="ml-2">{profile.age} years</span>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <div className="flex items-center text-gray-700">
                                                <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                </svg>
                                                <span className="font-medium">Location:</span>
                                                <span className="ml-2">{profile.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Career</h2>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="flex items-center text-gray-700">
                                                <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                </svg>
                                                <span className="font-medium">Company:</span>
                                                <span className="ml-2">{profile.career.company}</span>
                                            </div>
                                            <div className="flex items-center text-gray-700">
                                                <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                                </svg>
                                                <span className="font-medium">Education:</span>
                                                <span className="ml-2">{profile.education}</span>
                                            </div>
                                            <div className="flex items-center text-gray-700">
                                                <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                                </svg>
                                                <span className="font-medium">Experience:</span>
                                                <span className="ml-2">{profile.career.experience}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Interests</h2>
                                    <div className="flex flex-wrap gap-2">
                                        {profile.interests.map((interest, index) => (
                                            <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                        {interest}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'photos' && (
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">Photo Gallery</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {profile.photos.map((photo, index) => (
                                        <div key={index} className="bg-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                                            <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-64 object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'family' && (
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">Family Details</h2>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <p className="text-gray-600">{profile.familyDetails}</p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'preferences' && (
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">Partner Preferences</h2>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <p className="text-gray-600">{profile.preferences}</p>
                                </div>

                                <h3 className="text-md font-semibold text-gray-800 mt-6 mb-3">Lifestyle Preferences</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-white border border-gray-200 p-4 rounded-lg flex items-center">
                                        <svg className="w-5 h-5 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                        <div>
                                            <p className="text-sm font-medium text-gray-800">Diet</p>
                                            <p className="text-xs text-gray-500">Vegetarian</p>
                                        </div>
                                    </div>
                                    <div className="bg-white border border-gray-200 p-4 rounded-lg flex items-center">
                                        <svg className="w-5 h-5 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                                        </svg>
                                        <div>
                                            <p className="text-sm font-medium text-gray-800">Music</p>
                                            <p className="text-xs text-gray-500">Classical, Pop</p>
                                        </div>
                                    </div>
                                    <div className="bg-white border border-gray-200 p-4 rounded-lg flex items-center">
                                        <svg className="w-5 h-5 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                        </svg>
                                        <div>
                                            <p className="text-sm font-medium text-gray-800">Reading</p>
                                            <p className="text-xs text-gray-500">Fiction, Self-help</p>
                                        </div>
                                    </div>
                                    <div className="bg-white border border-gray-200 p-4 rounded-lg flex items-center">
                                        <svg className="w-5 h-5 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
                                        </svg>
                                        <div>
                                            <p className="text-sm font-medium text-gray-800">Movies</p>
                                            <p className="text-xs text-gray-500">Drama, Comedy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </AuthenticatedLayout>
    );
}

export default Index;
