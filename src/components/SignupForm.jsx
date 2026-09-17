import React from 'react';
import { Mail, User, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';

const SignupForm = ({ variant = 'full' }) => {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [honeypot, setHoneypot] = React.useState('');
  const [status, setStatus] = React.useState('idle'); // idle, loading, success, error
  const [message, setMessage] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, honeypot }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || "You're on the list — we'll be in touch");
        setEmail('');
        setName('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Network error. Please check your connection.');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex items-center space-x-3 text-teal font-bold animate-in fade-in slide-in-from-bottom-2">
        <CheckCircle className="h-6 w-6" />
        <span>{message}</span>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className="space-y-3">
        <div style={{ display: 'none' }}>
          <input 
            type="text" 
            name="website" 
            value={honeypot} 
            onChange={(e) => setHoneypot(e.target.value)} 
            tabIndex="-1" 
            autoComplete="off" 
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-teal" />
          <input 
            type="email" 
            placeholder="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-navy border border-teal/30 rounded-lg text-sm text-white focus:ring-2 focus:ring-teal focus:border-transparent outline-none transition"
          />
        </div>
        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="w-full bg-teal hover:bg-teal/90 text-white py-2.5 rounded-lg font-bold text-sm transition flex items-center justify-center disabled:opacity-50"
        >
          {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : 'Get Updates'}
        </button>
        {status === 'error' && <p className="text-coral text-xs font-bold">{message}</p>}
      </form>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-teal-light/50 max-w-xl mx-auto lg:mx-0">
      <h3 className="text-2xl font-bold text-navy mb-2">Hear about new classes first</h3>
      <p className="text-slate font-serif mb-8">Practical life-skills workshops for your teen. Join our community of prepared parents.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot field - hidden from users */}
        <div style={{ display: 'none' }}>
          <input 
            type="text" 
            name="full_name_field" 
            value={honeypot} 
            onChange={(e) => setHoneypot(e.target.value)} 
            tabIndex="-1" 
            autoComplete="off" 
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-teal" />
            <input 
              type="text" 
              placeholder="First Name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-teal-light rounded-2xl focus:ring-2 focus:ring-teal focus:border-transparent outline-none transition"
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-teal" />
            <input 
              type="email" 
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-teal-light rounded-2xl focus:ring-2 focus:ring-teal focus:border-transparent outline-none transition"
            />
          </div>
        </div>
        
        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="w-full bg-coral hover:scale-[1.02] text-white py-4 rounded-2xl font-bold text-lg transition shadow-xl shadow-coral/20 flex items-center justify-center disabled:opacity-50 disabled:scale-100"
        >
          {status === 'loading' ? (
            <Loader2 className="h-6 w-6 animate-spin mr-2" />
          ) : (
            <>
              Get Launch Updates <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </button>

        {status === 'error' && (
          <p className="text-coral text-sm font-bold text-center animate-bounce">{message}</p>
        )}
      </form>
    </div>
  );
};

export default SignupForm;
