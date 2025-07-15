import React, { useEffect, useState } from 'react';
import { Phone, Mail, Linkedin, ChevronRight, Target, BarChart3, BrainCircuit, GraduationCap, ShieldCheck, LineChart, PackageSearch, Users2, ArrowUp, Menu, X } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    comments: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('New Contact Form Submission');
    const body = encodeURIComponent(`
Full Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Comments: ${formData.comments}
    `);
    window.location.href = `mailto:hdelrservices@outlook.com?subject=${subject}&body=${body}`;
    setFormData({ fullName: '', phone: '', email: '', comments: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
        <nav className="relative container mx-auto px-6 py-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="w-full flex justify-center mb-6 md:mb-0">
              <img 
                src="https://i.imgur.com/95u45GB.png" 
                alt="LdelR Services LLC Logo" 
                className="h-144 w-144 object-contain animate-float"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="hover:text-blue-200 transition-colors">Services</a>
              <a href="#approach" className="hover:text-blue-200 transition-colors">Our Approach</a>
              <a href="#leadership" className="hover:text-blue-200 transition-colors">Leadership</a>
              <a href="#contact" className="glass px-4 py-2 rounded-lg hover:bg-blue-700 hover:bg-opacity-50 transition-all">
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 glass rounded-lg hover:bg-blue-700 hover:bg-opacity-50 transition-all absolute top-4 right-6"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`
            fixed inset-0 z-50 bg-blue-900 bg-opacity-95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            md:hidden
          `}>
            <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
              <a 
                href="#services" 
                onClick={handleNavClick}
                className="hover:text-blue-200 transition-colors transform hover:scale-110"
              >
                Services
              </a>
              <a 
                href="#approach" 
                onClick={handleNavClick}
                className="hover:text-blue-200 transition-colors transform hover:scale-110"
              >
                Our Approach
              </a>
              <a 
                href="#leadership" 
                onClick={handleNavClick}
                className="hover:text-blue-200 transition-colors transform hover:scale-110"
              >
                Leadership
              </a>
              <a 
                href="#contact" 
                onClick={handleNavClick}
                className="glass px-6 py-3 rounded-lg hover:bg-blue-700 hover:bg-opacity-50 transition-all transform hover:scale-110"
              >
                Contact Us
              </a>
            </div>
          </div>
        </nav>
        
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-3xl slide-in">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Helping Small & Medium Businesses <span className="text-blue-300">Thrive</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Through enhanced productivity and profitability, we empower businesses to reach their full potential.
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center group">
                Ready to Transform Your Business? 
                <ChevronRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Strip */}
      <div className="bg-blue-50 py-6 shadow-md">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-8 text-blue-900">
          <a href="mailto:ldelrservices@outlook.com" className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
            <Mail className="h-5 w-5" />
            <span>ldelrservices@outlook.com</span>
          </a>
          <a href="tel:+19048707993" className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
            <Phone className="h-5 w-5" />
            <span>+1 904 870 7993</span>
          </a>
          <a href="https://www.linkedin.com/company/ldelr-services-llc/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
            <Linkedin className="h-5 w-5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">What We Do</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We provide comprehensive solutions to optimize your business operations and drive growth
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="relative rounded-xl overflow-hidden shadow-xl group h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80" 
                alt="Manufacturing Excellence" 
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="p-6 bg-white h-[calc(100%-12rem)]">
                <h3 className="text-xl font-bold mb-2 text-blue-900">Operational Excellence</h3>
                <p className="text-gray-700">Enhance efficiency using lean manufacturing principles including TPM and 5S, optimizing your production processes with proven methodologies.</p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-xl group h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
                alt="Financial Analysis" 
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="p-6 bg-white h-[calc(100%-12rem)]">
                <h3 className="text-xl font-bold mb-2 text-blue-900">Financial Analysis</h3>
                <p className="text-gray-700">Unlock hidden potential in your financial data to improve margins and drive profitability through comprehensive analysis and strategic planning.</p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-xl group h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" 
                alt="Strategic Planning" 
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="p-6 bg-white h-[calc(100%-12rem)]">
                <h3 className="text-xl font-bold mb-2 text-blue-900">Strategic Planning</h3>
                <p className="text-gray-700">Aligning business goals with operational capabilities to ensure long-term growth through comprehensive strategy development and execution.</p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-xl group h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80" 
                alt="Training Development" 
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="p-6 bg-white h-[calc(100%-12rem)]">
                <h3 className="text-xl font-bold mb-2 text-blue-900">Training & Development</h3>
                <p className="text-gray-700">Implementing customized training programs to build accountability and a culture of continuous improvement throughout your organization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-fixed" />
        <div className="container mx-auto px-6 relative">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Our Approach</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We combine proven methodologies with innovative solutions to deliver exceptional results
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ApproachCard
              icon={<PackageSearch />}
              title="Lean Manufacturing"
              description="Apply proven methodologies to improve productivity while reducing costs."
            />
            <ApproachCard
              icon={<LineChart />}
              title="KPI Development"
              description="Establish measurable objectives to monitor progress and success."
            />
            <ApproachCard
              icon={<ShieldCheck />}
              title="Safety & Compliance"
              description="Build a safety-first culture compliant with industry standards."
            />
            <ApproachCard
              icon={<Users2 />}
              title="Customized Solutions"
              description="Deliver actionable insights for your unique business needs."
            />
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Leadership</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
                  alt="Leadership Background"
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="https://i.imgur.com/vrJkpkC.jpeg"
                    alt="Hector Lopez del Rivero"
                    className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-xl"
                  />
                </div>
              </div>
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Hector Lopez del Rivero</h3>
                  <p className="text-blue-600 mb-4">Founder & Principal Consultant</p>
                  <p className="text-gray-700 mb-4">
                    A Chemical Engineer with an MBA and certified Professional Coach, Hector brings over 22 years
                    of expertise in operations management across diverse industries.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Achievement text="Led lean practices, reducing inventory by over 25%" />
                  <Achievement text="Increased manufacturing profits by over 10% in the first year" />
                  <Achievement text="Lowered cost per unit by 20% through cost reduction strategy" />
                  <Achievement text="Established accident-free culture and safety strategy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">Get in Touch</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="+1 (123) 456-7890"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                  Comments *
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  required
                  value={formData.comments}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Please tell us how we can help you..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-blue-100">
            Contact us today to discuss how we can help your business thrive.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href="mailto:ldelrservices@outlook.com"
              className="glass text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all flex items-center justify-center group w-64"
            >
              <Mail className="mr-2 group-hover:scale-110 transition-transform" /> Email Us
            </a>
            <a
              href="tel:+19048707993"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center group w-64"
            >
              <Phone className="mr-2 group-hover:scale-110 transition-transform" /> Call Us
            </a>
            <a
              href="https://www.linkedin.com/company/ldelr-services-llc/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all flex items-center justify-center group w-64"
            >
              <Linkedin className="mr-2 group-hover:scale-110 transition-transform" /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <img 
                src="https://i.imgur.com/95u45GB.png" 
                alt="LdelR Services LLC Logo" 
                className="h-72 w-72 object-contain"
              />
              <span className="text-lg font-semibold">LdelR Services LLC</span>
            </div>
            <div className="text-sm">
              © {new Date().getFullYear()} LdelR Services LLC. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] border border-gray-100">
      <div className="text-blue-600 mb-4 text-3xl">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ApproachCard({ icon, title, description }) {
  return (
    <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] border border-gray-100">
      <div className="text-blue-600 mb-4 text-3xl">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Achievement({ text }) {
  return (
    <div className="flex items-start space-x-3 group">
      <ChevronRight className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0 transform group-hover:translate-x-1 transition-transform" />
      <span className="text-gray-700">{text}</span>
    </div>
  );
}

export default App;