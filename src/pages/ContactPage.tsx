import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Clock, Globe, MessageCircle, Phone, ArrowRight, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Support',
      description: 'Get in touch via email for general inquiries and support',
      detail: 'hello@prettysimpl.com',
      action: 'Send Email'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Live Chat',
      description: 'Chat with our team during business hours',
      detail: 'Available Mon-Fri, 9:00-17:00',
      action: 'Start Chat'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone Support',
      description: 'Speak directly with our automation experts',
      detail: 'Business hours support',
      action: 'Call Now'
    }
  ];

  const supportFeatures = [
    'Maximum 1 business day response time',
    'Multi-channel support (email, chat, phone)',
    'Emergency support available outside business hours',
    'Bilingual support (English & Afrikaans)',
    'Technical support for all platforms',
    'Dedicated account management'
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/prettysim-pl/',
      icon: <Linkedin className="h-6 w-6" />,
      description: 'Professional updates and industry insights'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/itsprettysimpl',
      icon: <Facebook className="h-6 w-6" />,
      description: 'Company news and community updates'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/prettysim.pl/',
      icon: <Instagram className="h-6 w-6" />,
      description: 'Behind-the-scenes and company culture'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@itsprettysimpl',
      icon: <Youtube className="h-6 w-6" />,
      description: 'Tutorials and automation insights'
    }
  ];

  return (
    <div>
      <SEOHead
        title="Contact Us - prettysimpl"
        description="Get in touch with our automation experts. Multiple contact channels available with 1 business day response guarantee. Emergency support available."
        keywords="contact prettysimpl, automation support, business hours, emergency support, consultation"
        canonical="/contact"
        ogTitle="Contact prettysimpl - Get Automation Help"
        ogDescription="Ready to transform your business? Contact our team through email, chat, or phone. 1 business day response guarantee."
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch With Our Team
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Ready to transform your business with automation? We're here to help. 
              Reach out through your preferred channel and we'll respond within 1 business day.
            </p>
            <Link to="/discovery-call" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Book Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to Connect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the contact method that works best for you. Our team is ready to assist 
              with your automation needs and questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-primary-600">
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="text-primary-600 font-semibold mb-6">{method.detail}</p>
                <button className="btn-primary w-full">
                  {method.action}
                </button>
              </div>
            ))}
          </div>

          {/* Business Hours & Response Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Hours & Availability</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Regular Hours</p>
                    <p className="text-gray-600">Monday-Friday, 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-primary-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Service Area</p>
                    <p className="text-gray-600">United Kingdom (Primary), Global (Timezone dependent)</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-primary-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Languages</p>
                    <p className="text-gray-600">English, Afrikaans</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Support Features</h3>
              <div className="space-y-3">
                {supportFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-primary-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Connect on Social Media
            </h2>
            <p className="text-xl text-gray-600">
              Follow us for automation tips, industry insights, and company updates
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-primary-600 mb-4">
                  {social.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{social.name}</h3>
                <p className="text-gray-600 text-sm">{social.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl border border-red-200">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Need Emergency Support?
              </h2>
              <p className="text-gray-600 mb-6">
                We provide emergency support outside regular business hours for urgent technical issues. 
                Our team prioritizes client emergencies and ensures prompt attention and response.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary bg-red-600 hover:bg-red-700">
                  Contact Emergency Support
                </button>
                <Link to="/services" className="btn-secondary">
                  Learn About Support Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Automation Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            The best way to understand how we can help is through a personalized discovery call. 
            Let's discuss your specific needs and automation opportunities.
          </p>
          <Link to="/discovery-call" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Book Your Discovery Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;