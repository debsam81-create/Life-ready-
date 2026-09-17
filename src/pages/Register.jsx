import React from 'react';
import { User, Mail, Calendar, CheckCircle, ShoppingCart, MessageCircle } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

const courseLinks = {
  "Cooking 101 Workshop": "https://buy.stripe.com/00w14n9Bm55e3Jg00r28806",
  "How to Budget Workshop": "https://buy.stripe.com/7sYeVdfZK55e3Jg9B128807",
  "Ready for College Bundle": "https://buy.stripe.com/cNi9ATeVGapy93A8wX2880a",
  "Private 1-on-1 Coaching": "https://buy.stripe.com/3cIbJ16pafJS4Nk9B12880b",
  "Basic Home Repair Workshop": "https://buy.stripe.com/8x2dR97tecxG4Nk14v28809",
  "Job Interview Prep Workshop": "https://buy.stripe.com/dRm6oHeVG9lucfMdRh28808"
};

const Register = () => {
  const [searchParams] = useSearchParams();
  const initialCourse = searchParams.get('course') || "Cooking 101 Workshop";
  
  const [submitted, setSubmitted] = React.useState(false);
  const [course, setCourse] = React.useState(initialCourse);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    notes: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInquire = (e) => {
    e.preventDefault();
    // Simulate sending email inquiry
    console.log("Inquiry sent for", course, formData);
    
    // In a real app with a backend, we'd POST to /api/inquire
    // For this lightweight version, we could use mailto:
    const subject = encodeURIComponent(`Inquiry: ${course}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCourse: ${course}\nNotes: ${formData.notes}`);
    window.location.href = `mailto:life-ready-academy-c184c209@ctomail.io?subject=${subject}&body=${body}`;
    
    setSubmitted(true);
  };

  const handleBuyNow = () => {
    const link = courseLinks[course] || Object.values(courseLinks)[0];
    window.open(link, '_blank');
  };

  if (submitted) {
    return (
      <div className="bg-warm-white min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full bg-white p-12 rounded-[3rem] shadow-2xl text-center border border-teal-light">
          <div className="bg-teal-light text-teal h-20 w-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm">
            <CheckCircle className="h-12 w-12" />
          </div>
          <h2 className="text-3xl font-bold text-navy mb-4">Registration Sent!</h2>
          <p className="text-lg text-slate mb-10 font-serif">
            Thank you for enrolling your teen in Life Ready Academy. We'll contact you within 24 hours with schedule details and payment instructions.
          </p>
          <Link to="/" className="inline-block bg-teal text-white px-10 py-4 rounded-full font-bold hover:opacity-90 transition shadow-lg">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-warm-white min-h-screen py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-xl overflow-hidden border border-teal-light/50">
        <div className="md:flex">
          <div className="md:w-2/5 bg-teal p-12 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <h2 className="text-3xl font-bold mb-8 relative z-10">Enroll Your Teen</h2>
            <p className="text-teal-light text-lg mb-10 font-serif leading-relaxed relative z-10">
              Start their journey to independence today. Fill out this form and we'll be in touch with the next steps.
            </p>
            <div className="space-y-6 relative z-10">
              {[
                { icon: Calendar, text: "Quick 2-minute registration" },
                { icon: User, text: "Personalized skill tracks" },
                { icon: CheckCircle, text: "Expert-led instruction" }
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <div className="h-10 w-10 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-semibold">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-coral/20 rounded-full -ml-12 -mb-12"></div>
          </div>
          <div className="md:w-3/5 p-12 lg:p-16">
            <form onSubmit={handleInquire} className="space-y-8">
              <div>
                <label className="block text-sm font-bold text-navy mb-2 uppercase tracking-wide">Parent's Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-teal" />
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    className="w-full pl-12 pr-4 py-4 border border-teal-light rounded-2xl focus:ring-2 focus:ring-teal focus:border-transparent outline-none transition" 
                    placeholder="John Doe" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-navy mb-2 uppercase tracking-wide">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-teal" />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    className="w-full pl-12 pr-4 py-4 border border-teal-light rounded-2xl focus:ring-2 focus:ring-teal focus:border-transparent outline-none transition" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-navy mb-2 uppercase tracking-wide">Select Course/Bundle</label>
                <select 
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full px-6 py-4 border border-teal-light rounded-2xl focus:ring-2 focus:ring-teal focus:border-transparent outline-none transition bg-white appearance-none cursor-pointer"
                >
                  {Object.keys(courseLinks).map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-navy mb-2 uppercase tracking-wide">Additional Notes</label>
                <textarea 
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border border-teal-light rounded-2xl focus:ring-2 focus:ring-teal focus:border-transparent outline-none transition h-32" 
                  placeholder="Any specific needs or questions?"
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <button 
                  type="submit" 
                  className="bg-white border-2 border-teal text-teal py-4 rounded-2xl font-bold text-lg hover:bg-teal-light transition flex items-center justify-center"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Inquire
                </button>
                <button 
                  type="button"
                  onClick={handleBuyNow}
                  className="bg-coral text-white py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition shadow-xl shadow-coral/20 flex items-center justify-center"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Buy Now
                </button>
              </div>
              <p className="text-center text-xs text-slate font-medium uppercase tracking-widest">
                Choose Inquire for questions or Buy Now to pay securely via Stripe
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
