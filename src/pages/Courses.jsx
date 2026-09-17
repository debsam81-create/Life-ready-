import React from 'react';
import { ShoppingCart, Clock, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import cardBg from '../assets/brand/course-card-bg.png';

const courses = [
  {
    id: 1,
    title: "Cooking 101 Workshop",
    type: "Workshop",
    price: "$35",
    duration: "2 hours",
    ageRange: "13-18",
    description: "Learn basic kitchen safety and how to cook 3 simple, healthy meals.",
    category: "Cooking",
    featured: true,
    stripeLink: "https://buy.stripe.com/00w14n9Bm55e3Jg00r28806"
  },
  {
    id: 2,
    title: "How to Budget Workshop",
    type: "Workshop",
    price: "$40",
    duration: "1.5 hours",
    ageRange: "13-18",
    description: "Master the basics of personal finance, saving, and smart spending.",
    category: "Finance",
    featured: false,
    stripeLink: "https://buy.stripe.com/7sYeVdfZK55e3Jg9B128807"
  },
  {
    id: 3,
    title: "Ready for College Bundle",
    type: "Multi-session",
    price: "$250",
    duration: "8 classes",
    ageRange: "16-18",
    description: "Our most popular track covering laundry, basic cooking, budgeting, and time management.",
    category: "Life Prep",
    featured: true,
    stripeLink: "https://buy.stripe.com/cNi9ATeVGapy93A8wX2880a"
  },
  {
    id: 4,
    title: "Private 1-on-1 Coaching",
    type: "Personalized",
    price: "$85/hr",
    duration: "Flexible",
    ageRange: "13-18",
    description: "Focused instruction on specific skills tailored to your teen's needs.",
    category: "Coaching",
    featured: false,
    stripeLink: "https://buy.stripe.com/3cIbJ16pafJS4Nk9B12880b"
  },
  {
    id: 5,
    title: "Basic Home Repair Workshop",
    type: "Workshop",
    price: "$45",
    duration: "2.5 hours",
    ageRange: "13-18",
    description: "How to fix a leaky faucet, patch a wall, and use basic tools safely.",
    category: "Home",
    featured: false,
    stripeLink: "https://buy.stripe.com/8x2dR97tecxG4Nk14v28809"
  },
  {
    id: 6,
    title: "Job Interview Prep Workshop",
    type: "Workshop",
    price: "$30",
    duration: "1.5 hours",
    ageRange: "14-18",
    description: "Resume building, mock interviews, and professional communication skills.",
    category: "Career",
    featured: false,
    stripeLink: "https://buy.stripe.com/dRm6oHeVG9lucfMdRh28808"
  }
];

const Courses = () => {
  return (
    <div className="bg-warm-white py-24 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">Course Catalog</h1>
          <div className="h-1.5 w-24 bg-coral mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate font-serif">Choose the right track for your teen's independence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course) => (
            <div key={course.id} className={`group bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 border relative ${course.featured ? 'border-teal shadow-xl shadow-teal/5' : 'border-teal-light/50 shadow-sm'}`}>
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
                <img src={cardBg} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${course.featured ? 'bg-teal text-white' : 'bg-teal-light text-teal'}`}>
                    {course.type}
                  </span>
                  <span className="font-mono text-2xl font-bold text-navy">{course.price}</span>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-teal transition-colors leading-tight">{course.title}</h3>
                <p className="text-slate font-serif mb-8 leading-relaxed h-20 overflow-hidden">{course.description}</p>
                
                <div className="flex items-center text-slate mb-8 space-x-6 border-t border-teal-light pt-6">
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-teal" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <User className="h-4 w-4 mr-2 text-teal" />
                    <span>Ages {course.ageRange}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Tag className="h-4 w-4 mr-2 text-teal" />
                    <span>{course.category}</span>
                  </div>
                </div>
                
                <a 
                  href={course.stripeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-lg font-bold transition flex items-center justify-center ${course.featured ? 'bg-coral text-white hover:opacity-90 shadow-lg shadow-coral/20' : 'bg-teal-light text-teal hover:bg-teal hover:text-white'}`}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Register Now
                </a>
                
                <div className="mt-4 text-center">
                  <Link 
                    to={`/register?course=${encodeURIComponent(course.title)}`}
                    className="text-sm font-medium text-slate hover:text-teal transition"
                  >
                    Questions? Inquire here
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
