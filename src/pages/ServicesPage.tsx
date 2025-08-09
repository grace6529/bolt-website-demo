import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Clock, Users, Zap, AlertTriangle, Code, Handshake } from 'lucide-react';

const ServicesPage = () => {
  const serviceCategories = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Fractional Services',
      description: 'Embedded team support with dedicated specialists',
      services: [
        { name: 'Full Day Fractional', price: '£7,500/month', description: 'Dedicated full day weekly as embedded team member' },
        { name: 'Half Day Fractional', price: '£4,500/month', description: 'Half day weekly support with regular engagement' },
        { name: 'Fractional CAO', price: '£3,500/month', description: 'Strategic automation leadership and guidance' }
      ]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Project-Based Services',
      description: 'Fixed-scope automation projects with defined deliverables',
      services: [
        { name: 'Project Engagements', price: 'From £7,500', description: 'Complete automation projects with clear timelines' }
      ]
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Support Services',
      description: 'Ongoing maintenance and troubleshooting coverage',
      services: [
        { name: '4 Hours Support', price: '£1,250', description: 'Pre-paid support hours for maintenance' },
        { name: '8 Hours Support', price: '£2,250', description: 'Extended support coverage' },
        { name: '16 Hours Support', price: '£4,000', description: 'Comprehensive support package' }
      ]
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: 'Emergency Support',
      description: 'Urgent issue resolution with rapid response',
      services: [
        { name: 'Emergency Response', price: '£1,250 + £375/hr', description: 'Minimum 4 hours, urgent assistance available' }
      ]
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: 'Collaborative Development',
      description: 'Joint development with knowledge transfer',
      services: [
        { name: 'Build-With Services', price: '£500/hour', description: 'Collaborative development with your team' }
      ]
    }
  ];

  const keyFeatures = [
    'No minimum commitment periods',
    'Multiple support channels (email, chat, phone)',
    'Emergency support outside business hours',
    'White-label services available',
    'Non-profit organization discounts',
    'Flexible engagement models'
  ];

  const platforms = [
    { name: 'Airtable', description: 'Database and workflow management' },
    { name: 'Make', description: 'Automation and integration platform' },
    { name: 'Softr', description: 'No-code application development' },
    { name: 'Smartsuite', description: 'Business process management' },
    { name: 'Noloco', description: 'Database-driven applications' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Comprehensive Business Automation Services
            </h1>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              From strategic leadership to hands-on implementation, we offer flexible engagement models 
              to meet your automation needs at every level.
            </p>
            <Link to="/discovery-call" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Discuss Your Needs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Six Service Categories to Meet Every Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you need strategic guidance or hands-on implementation, 
              we have the right engagement model for your business.
            </p>
          </div>

          <div className="space-y-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="card-subtle p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  <div className="bg-primary-100 p-4 rounded-xl">
                    <div className="text-primary-600">
                      {category.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{category.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                      {category.services.map((service, idx) => (
                        <div key={idx} className="bg-gray-50 p-5 rounded-lg border border-gray-100 transition-all duration-200 hover:bg-gray-100 hover:shadow-sm transform hover:scale-[1.01]">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-gray-900">{service.name}</h4>
                            <span className="text-primary-600 font-bold text-sm">{service.price}</span>
                          </div>
                          <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We've designed our services with maximum flexibility and client success in mind. 
                Here's what sets us apart:
              </p>
              
              <div className="space-y-4">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Highlights</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">No Minimum Commitments</h4>
                    <p className="text-gray-600">Start or stop services based on your needs</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Emergency Support</h4>
                    <p className="text-gray-600">Available outside regular business hours</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Proven Results</h4>
                    <p className="text-gray-600">300+ clients, 1,500+ apps optimized</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Expertise */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Platform Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Specialized knowledge in leading low-code and automation platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{platform.name}</h3>
                <p className="text-gray-600">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss which service model is the best fit for your business needs and automation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/discovery-call" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Book Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/fractional-services" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
              Learn About Fractional Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;