import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, ArrowRight, HelpCircle, Clock, Users, Shield, Heart, Handshake, Settings } from 'lucide-react';

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      icon: <HelpCircle className="h-5 w-5" />,
      question: "How do we get support if we need it?",
      answer: "prettysimpl offers comprehensive support through multiple channels including email, chat, and phone. Our team is available during business hours (Monday-Friday, 9:00-17:00) with a guaranteed maximum response time of 1 business day. We also provide emergency support outside regular hours for urgent technical issues.",
      category: "Support"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      question: "Is there a minimum commitment period for the fractional service packages?",
      answer: "No, there is no minimum commitment period for our fractional services. We provide maximum flexibility to start or end services based on your evolving business needs. This client-friendly approach allows you to scale our services up or down as your requirements change.",
      category: "Service Terms"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      question: "How are emergencies or urgent requests handled outside of the allocated time?",
      answer: "We prioritize client emergencies and urgent needs, ensuring prompt attention and response. Our emergency support is available outside regular business hours for critical issues. We're committed to providing support beyond allocated time when urgent situations arise, maintaining business continuity for our clients.",
      category: "Emergency Support"
    },
    {
      icon: <Settings className="h-5 w-5" />,
      question: "Can prettysimpl assist in project management outside of the scope of automation and integration?",
      answer: "While our core expertise lies in automation and integration, we can provide project management support as it relates to these areas. Our project management services are focused on ensuring seamless execution within our automation and integration specializations, maintaining alignment with broader project objectives.",
      category: "Service Scope"
    },
    {
      icon: <Heart className="h-5 w-5" />,
      question: "Do you offer any discounts for non-profit organizations?",
      answer: "Yes, we offer special discounts to qualified non-profit organizations. We believe in supporting community-focused organizations and their missions. To discuss eligibility and specific discount information, please contact our team directly through any of our available channels.",
      category: "Pricing"
    },
    {
      icon: <Handshake className="h-5 w-5" />,
      question: "Do you offer white-labeled services?",
      answer: "Yes, we can seamlessly integrate with your team and deliver services under your brand. Our white-label approach allows us to work as an extension of your organization, providing automation expertise while maintaining your brand identity and client relationships. This partnership model is ideal for agencies and consultancies.",
      category: "Partnership"
    }
  ];

  const categories = [
    { name: 'Support', count: 2, color: 'bg-blue-100 text-blue-800' },
    { name: 'Service Terms', count: 1, color: 'bg-green-100 text-green-800' },
    { name: 'Emergency Support', count: 1, color: 'bg-red-100 text-red-800' },
    { name: 'Service Scope', count: 1, color: 'bg-purple-100 text-purple-800' },
    { name: 'Pricing', count: 1, color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Partnership', count: 1, color: 'bg-indigo-100 text-indigo-800' }
  ];

  const keyPolicies = [
    {
      title: 'No Minimum Commitments',
      description: 'Maximum flexibility for all fractional services'
    },
    {
      title: 'Emergency Support Available',
      description: 'Urgent assistance beyond allocated time'
    },
    {
      title: 'Multiple Support Channels',
      description: 'Email, chat, and phone support options'
    },
    {
      title: 'Non-Profit Discounts',
      description: 'Special pricing for qualified organizations'
    },
    {
      title: 'White-Label Services',
      description: 'Seamless brand integration available'
    },
    {
      title: '1 Business Day Response',
      description: 'Guaranteed maximum response time'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Find answers to common questions about our services, support, and policies. 
              Can't find what you're looking for? We're here to help.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Contact Support
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              FAQ Categories
            </h2>
            <p className="text-xl text-gray-600">
              Browse questions by category to find the information you need
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${category.color}`}>
                  {category.count} FAQ{category.count > 1 ? 's' : ''}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="card overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-primary-600">
                        {faq.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                          categories.find(cat => cat.name === faq.category)?.color || 'bg-gray-100 text-gray-800'
                        }`}>
                          {faq.category}
                        </span>
                      </div>
                    </div>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  
                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <div className="pl-9">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Policies Summary */}
      <section className="section-padding bg-primary-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Service Policies
            </h2>
            <p className="text-xl text-gray-600">
              Quick overview of our client-friendly policies and service features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyPolicies.map((policy, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">{policy.title}</h3>
                <p className="text-gray-600 text-sm">{policy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need More Information?
            </h2>
            <p className="text-xl text-gray-600">
              Explore additional resources or get in touch with our team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Discovery Call</h3>
              <p className="text-gray-600 mb-4">
                Book a personalized consultation to discuss your specific needs and questions.
              </p>
              <Link to="/discovery-call" className="btn-primary">
                Book Call
              </Link>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Support</h3>
              <p className="text-gray-600 mb-4">
                Get in touch through email, chat, or phone for immediate assistance.
              </p>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Details</h3>
              <p className="text-gray-600 mb-4">
                Learn more about our comprehensive automation and integration services.
              </p>
              <Link to="/services" className="btn-secondary">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our team is ready to provide personalized answers and discuss how our 
            automation services can benefit your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/discovery-call" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Book Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;