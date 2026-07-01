import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import studentsImage from '../assets/brand/hero-students.jpg';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* About Section */}
      <section className="py-24 bg-warm-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center gap-20">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-navy mb-8">Our Mission</h1>
              <div className="h-1.5 w-20 bg-teal mb-8 rounded-full"></div>
              <p className="text-xl text-navy font-bold mb-6 font-serif leading-relaxed">
                At Life Ready Academy, we believe that independence is the greatest gift you can give a young adult.
              </p>
              <p className="text-lg text-slate mb-10 font-serif leading-relaxed">
                The modern school curriculum is packed with academic requirements, often leaving little room for the "common sense" skills that are essential for daily life. From managing a first paycheck to fixing a balanced meal, we provide the hands-on instruction teens need to step into the world with confidence.
              </p>
              <div className="bg-teal-light p-8 rounded-3xl border-l-8 border-teal shadow-sm">
                <p className="italic text-navy text-lg font-serif">
                  "Our goal is to make sure every teen leaves home feeling capable, not calling home for every minor life question."
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-teal/10 rounded-[3rem] rotate-3 translate-x-4 translate-y-4"></div>
                <img 
                  src={studentsImage} 
                  alt="Students learning" 
                  className="rounded-[3rem] shadow-2xl relative z-10 w-full object-cover h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-navy mb-4">Get In Touch</h2>
            <div className="h-1.5 w-24 bg-coral mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-slate font-serif">Have questions? We're here to help.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Mail, title: "Email Us", detail: "life-ready-academy-c184c209@ctomail.io" },
              { icon: Phone, title: "Call Us", detail: "(555) 123-4567" },
              { icon: MapPin, title: "Location", detail: "123 Skill Street, Suite 100\nCommunityville, ST 12345" }
            ].map((contact, i) => (
              <div key={i} className="bg-warm-white p-10 rounded-[2.5rem] text-center border border-teal-light/50 shadow-sm hover:shadow-md transition">
                <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                  <contact.icon className="h-8 w-8 text-coral" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-navy">{contact.title}</h3>
                <p className="text-slate font-serif whitespace-pre-line leading-relaxed">{contact.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
