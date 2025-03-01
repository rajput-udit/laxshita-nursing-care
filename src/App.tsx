import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ChevronDown, ChevronUp, Heart, Activity, Stethoscope, Syringe, Droplet, Ban as Bandage, Thermometer, User, Ambulance, UserPlus, Home, Pill, DollarSign, X } from 'lucide-react';

// Service categories with descriptions
const services = [
  {
    id: 1,
    category: "Clinical Procedures",
    icon: <Syringe size={24} />,
    items: [
      { name: "Injection Administration", description: "Safe and sterile administration of prescribed injections by qualified nurses." },
      { name: "Intravenous Cannulation", description: "Professional insertion and management of IV lines for medication delivery." },
      { name: "IV Fluid Administration", description: "Controlled administration of intravenous fluids for hydration and medication." },
      { name: "ECG", description: "Electrocardiogram monitoring and reporting at the comfort of your home." }
    ]
  },
  {
    id: 2,
    category: "Wound Management",
    icon: <Bandage size={24} />,
    items: [
      { name: "Wound Dressings", description: "Professional cleaning and dressing of wounds to promote healing." },
      { name: "Diabetic Wounds", description: "Specialized care for diabetic wounds with infection prevention protocols." },
      { name: "Bed Sores", description: "Prevention and treatment of pressure ulcers for bedridden patients." }
    ]
  },
  {
    id: 3,
    category: "Specialized Care",
    icon: <Activity size={24} />,
    items: [
      { name: "Urinary Catheterization", description: "Insertion and management of urinary catheters by trained professionals." },
      { name: "Nasogastric Intubation", description: "Insertion and management of nasogastric tubes for feeding or drainage." },
      { name: "Ryle's Tube Feeding", description: "Administration of nutrition through Ryle's tube by qualified nurses." },
      { name: "Tracheostomy Care", description: "Specialized care for patients with tracheostomy tubes." },
      { name: "Peritoneal Dialysis", description: "Home-based peritoneal dialysis support and monitoring." },
      { name: "PEG Feeding", description: "Percutaneous endoscopic gastrostomy feeding management by trained nurses." }
    ]
  },
  {
    id: 4,
    category: "Home Care Services",
    icon: <Home size={24} />,
    items: [
      { name: "Nursing Care at Home", description: "Comprehensive nursing care services delivered in the comfort of your home." },
      { name: "Senior Citizen Care", description: "Dedicated caregivers for elderly patients requiring assistance with daily activities." },
      { name: "Lab Tests at Home", description: "Collection of samples for laboratory tests without the need to visit a diagnostic center." },
      { name: "Acupressure Care", description: "Therapeutic acupressure treatments to relieve pain and promote wellness." }
    ]
  },
  {
    id: 5,
    category: "Additional Services",
    icon: <Stethoscope size={24} />,
    items: [
      { name: "Medical Equipment Rental/Sale", description: "Quality medical equipment available for rent or purchase." },
      { name: "Healthcare Professional Placement", description: "Placement services for doctors, nurses, and other healthcare professionals." },
      { name: "Ambulance Service", description: "24/7 ambulance service for emergency transportation." },
      { name: "Doctor Home Consultation", description: "Experienced doctors available for home visits and consultations." },
      { name: "Physiotherapy", description: "Professional physiotherapy sessions conducted at your home." }
    ]
  }
];

// Testimonials
const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    text: "The nursing care provided by Laxshita for my elderly father was exceptional. The staff was professional, caring, and attentive to all his needs.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Sharma",
    text: "I was worried about post-surgery wound care, but the nurses from Laxshita made the process smooth and painless. Highly recommended!",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Singh",
    text: "The senior care services for my mother have been a blessing. The caregivers are punctual, compassionate, and well-trained.",
    rating: 4
  }
];

function App() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [showCallDialog, setShowCallDialog] = useState(false);

  const toggleCategory = (id: number) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleCallDialog = () => {
    setShowCallDialog(!showCallDialog);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Heart className="text-red-500 mr-2" size={28} />
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Laxshita Nursing Care</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('home')}
              className={`font-medium ${activeSection === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`font-medium ${activeSection === 'services' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-medium ${activeSection === 'about' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className={`font-medium ${activeSection === 'testimonials' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`font-medium ${activeSection === 'contact' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              Contact
            </button>
          </nav>
          <button 
            onClick={toggleCallDialog}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 hidden md:block"
          >
            Call Now
          </button>
          {/* Mobile menu button would go here */}
        </div>
      </header>

      {/* Call Now Dialog */}
      {showCallDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Contact Numbers</h3>
              <button 
                onClick={toggleCallDialog}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <Phone className="text-blue-600 mr-3" size={24} />
                <div>
                  <p className="text-sm text-gray-500">Primary Contact</p>
                  <a href="tel:7275780093" className="text-lg font-medium text-gray-800 hover:text-blue-600">7275780093</a>
                </div>
              </div>
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <Phone className="text-blue-600 mr-3" size={24} />
                <div>
                  <p className="text-sm text-gray-500">Secondary Contact</p>
                  <a href="tel:8851506199" className="text-lg font-medium text-gray-800 hover:text-blue-600">8851506199</a>
                </div>
              </div>
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <Phone className="text-blue-600 mr-3" size={24} />
                <div>
                  <p className="text-sm text-gray-500">Alternative Contact</p>
                  <a href="tel:8808331751" className="text-lg font-medium text-gray-800 hover:text-blue-600">8808331751</a>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-4">Our healthcare professionals are available 24/7 to assist you with your healthcare needs.</p>
              <button 
                onClick={toggleCallDialog}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Professional Healthcare Services at Your Doorstep</h2>
              <p className="text-lg md:text-xl mb-8">Providing quality nursing and healthcare services in the comfort of your home.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-300"
                >
                  Contact Us
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition duration-300"
                >
                  Our Services
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Healthcare professional" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        {/* Quick contact info */}
        <div className="bg-white shadow-lg rounded-lg mx-4 md:mx-auto -mt-8 md:-mt-12 relative z-10 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Phone className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Call Us</p>
                <p className="font-medium">7275780093</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Mail className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Email Us</p>
                <p className="font-medium">info@laxshitacare.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Clock className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Working Hours</p>
                <p className="font-medium">24/7 Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a comprehensive range of healthcare services delivered by qualified professionals in the comfort of your home.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {services.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button 
                  className="w-full px-6 py-4 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleCategory(category.id)}
                >
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{category.category}</h3>
                  </div>
                  {expandedCategory === category.id ? 
                    <ChevronUp className="text-blue-600" size={24} /> : 
                    <ChevronDown className="text-gray-400" size={24} />
                  }
                </button>
                
                {expandedCategory === category.id && (
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {category.items.map((service, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-300">
                          <h4 className="font-medium text-gray-800 mb-2">{service.name}</h4>
                          <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Healthcare team" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About Laxshita Nursing Care</h2>
              <p className="text-gray-600 mb-6">
                Laxshita Nursing Care is a premier provider of home healthcare services, dedicated to delivering professional medical care in the comfort of your home. Our team consists of highly qualified nurses, caregivers, and healthcare professionals committed to improving the quality of life for our patients.
              </p>
              <p className="text-gray-600 mb-6">
                We understand that each patient has unique needs, which is why we offer personalized care plans tailored to individual requirements. Our services range from basic nursing care to specialized medical procedures, all delivered with compassion and expertise.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <User className="text-blue-600" size={20} />
                  </div>
                  <span className="text-gray-700">Qualified Professionals</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Clock className="text-blue-600" size={20} />
                  </div>
                  <span className="text-gray-700">24/7 Availability</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Heart className="text-blue-600" size={20} />
                  </div>
                  <span className="text-gray-700">Compassionate Care</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Home className="text-blue-600" size={20} />
                  </div>
                  <span className="text-gray-700">Home-based Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read testimonials from our satisfied clients who have experienced our quality healthcare services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-medium text-gray-800">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Reach out to us for any inquiries or to schedule a service. Our team is available 24/7 to assist you.
            </p>
          </div>

          <div className="flex flex-col md:flex-row max-w-5xl mx-auto">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="bg-blue-600 text-white rounded-lg p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="mr-4 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-medium mb-1">Phone Numbers</p>
                      <p>7275780093</p>
                      <p>8851506199</p>
                      <p>8808331751</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="mr-4 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <p>info@laxshitacare.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="mr-4 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-medium mb-1">Address</p>
                      <p>Laxshita Nursing Care, Delhi NCR</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="mr-4 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-medium mb-1">Working Hours</p>
                      <p>24 hours a day, 7 days a week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <form className="bg-gray-50 rounded-lg p-8">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Required</label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="nursing">Nursing Care</option>
                    <option value="injection">Injection Administration</option>
                    <option value="wound">Wound Dressing</option>
                    <option value="senior">Senior Citizen Care</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your requirements"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Our healthcare professionals are available 24/7 to provide the care you need.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:7275780093" className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-300 flex items-center justify-center">
              <Phone className="mr-2" size={20} />
              Call Now: 7275780093
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Request Service
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="text-red-500 mr-2" size={24} />
                <h3 className="text-xl font-bold">Laxshita Nursing Care</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Professional healthcare services delivered in the comfort of your home.
              </p>
              <div className="flex space-x-4">
                {/* Social media icons would go here */}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('testimonials')}
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li className="text-gray-400 hover:text-white transition duration-300">Nursing Care</li>
                <li className="text-gray-400 hover:text-white transition duration-300">Injection Administration</li>
                <li className="text-gray-400 hover:text-white transition duration-300">Wound Dressings</li>
                <li className="text-gray-400 hover:text-white transition duration-300">Senior Citizen Care</li>
                <li className="text-gray-400 hover:text-white transition duration-300">Lab Tests at Home</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone className="text-blue-400 mr-3 flex-shrink-0 mt-1" size={18} />
                  <div>
                    <p>7275780093</p>
                    <p>8851506199</p>
                    <p>8808331751</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="text-blue-400 mr-3 flex-shrink-0 mt-1" size={18} />
                  <span>info@laxshitacare.com</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="text-blue-400 mr-3 flex-shrink-0 mt-1" size={18} />
                  <span>Delhi NCR, India</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Laxshita Nursing Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;