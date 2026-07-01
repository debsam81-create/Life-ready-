import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, BookOpen, Users, ArrowRight } from 'lucide-react';
import heroImage from '../assets/brand/hero-learning.jpg';
import studentsImage from '../assets/brand/hero-students.jpg';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-navy overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Teen learning practical skills" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
              Prepare Your Teen for the <span className="text-coral">Real World</span>
            </h1>
            <p className="text-xl text-teal-light opacity-90 mb-10 font-serif leading-relaxed">
              Practical life skills they don't learn in school. Cooking, budgeting, laundry, and more. Confident and capable starts here.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/courses" className="bg-coral text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition shadow-xl shadow-coral/20 flex items-center justify-center">
                View Courses <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/about" className="bg-teal text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal/80 transition flex items-center justify-center">
                Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Life Ready Academy? */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-navy mb-4">Why Life Ready Academy?</h2>
            <div className="h-1.5 w-24 bg-coral mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-slate font-serif">Bridging the gap between school and adulthood.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: BookOpen, title: "Practical Skills", desc: "Cooking, budgeting, home repair, and more." },
              { icon: Clock, title: "Flexible Learning", desc: "Single workshops or comprehensive bundles." },
              { icon: Users, title: "Small Groups", desc: "Personalized attention for every student." },
              { icon: CheckCircle, title: "Real Confidence", desc: "Teens leave ready to handle life independently." }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition border border-teal-light/30">
                <div className="h-14 w-14 bg-teal-light rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-navy">{feature.title}</h3>
                <p className="text-slate font-serif leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Customer Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-coral/10 rounded-full z-0"></div>
              <img 
                src={studentsImage} 
                alt="Confident students" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal/10 rounded-full z-0"></div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-navy mb-8 leading-tight">Designed for Parents of Teens (13-18)</h2>
              <p className="text-lg text-slate mb-8 font-serif leading-relaxed">
                Are you worried about your teen heading to college or the workforce without knowing the basics? We help parents ensure their kids are independent and capable.
              </p>
              <div className="space-y-6">
                {[
                  "No more \"Mom, how do I do laundry?\"",
                  "Confident budgeting and money management.",
                  "Basic home and car maintenance knowledge."
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-navy font-semibold">
                    <div className="h-6 w-6 bg-coral/20 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-4 w-4 text-coral" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Link to="/register" className="inline-flex items-center text-teal font-bold text-lg group">
                  Enroll Your Teen Today <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to give them the head start they deserve?</h2>
          <Link to="/courses" className="bg-white text-teal px-10 py-4 rounded-lg font-bold text-lg hover:bg-teal-light transition shadow-lg">
            Explore All Courses
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
