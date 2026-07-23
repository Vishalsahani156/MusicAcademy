'use client'
import Link from "next/dist/client/link";
import courseData from "../data/music_courses.json"

import React from 'react';
interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    isFeatured: boolean,
    price: number

}
function FeatureCourses() {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);
    return (
        <div className="py-12 bg-gray-900">
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured Courses</h2>
                <p className='text-gray-400 mt-2 text-white sm:text-4xl'>Learn with the best way</p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {featuredCourses.map((course: Course) => (
                    <div key={course.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-white">{course.title}</h3>
                        <p className="text-gray-400 mt-2">{course.description}</p>
                        <Link href={`/courses/${course.slug}`} className="mt-4 inline-block bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700">
                            Learn More
                        </Link>
                    </div>
                ))}
            </div>
            <div className="mt-20 text-center">
                <Link href="/courses" className="inline-block bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700">
                    View All Courses
                </Link>
            </div>
        </div>
    );
}

export default FeatureCourses;  