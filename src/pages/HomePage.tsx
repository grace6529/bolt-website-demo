import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Zap, Target, Shield, Clock, CheckCircle } from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      title: 'Fractional CAO',
      price: '£3,500/month',
      description: 'Strategic automation leadership',
      features: ['Executive-level guidance', 'Automation strategy', 'Technology roadmap']
    },
    {
      title: 'Half Day Fractional',
      price: '£4,500/month',
      description: 'Part-time embedded support',
      features: ['Regular engagement', 'Targeted support', 'Flexible scheduling']
    },
    {
      title: 'Full Day Fractional',
      price: '£7,500/month',
      description: 'Dedicated team member',
      features: ['Full integration', 'Complete lifecycle', 'Strategic partnership']
    }
  ];

  const platforms = [
    'Airtable', 'Make', 'Softr', 'Smartsuite', 'Noloco'
  ];

  const benefits = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Grow Bigger',
      description: 'Scale operations effectively through intelligent automation'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Grow Stronger',
      description: 'Build robust, reliable business processes that last'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Grow More Agile',
      description: 'Increase flexibility and responsiveness to market changes'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-primary-200">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="font-medium">5.0/5 Rating • 300+ Happy Clients</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Business Automation That Actually Works
                </h1>
                <p className="text-xl text-primary-100 leading-relaxed">
                  We help your business grow bigger, stronger and more agile through low-code process automation and systems integration.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/discovery-call" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                  Book Discovery Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/services" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                  View Services
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-primary-200">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>300+ Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>1,500+ Apps</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Since 2015</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Why Choose prettysimpl?</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-primary-500 p-2 rounded-lg">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{benefit.title}</h4>
                        <p className="text-primary-100">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fractional Services That Scale With You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No minimum commitments. Maximum flexibility. Get embedded automation expertise that grows with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <div className="text-3xl font-bold text-primary-600 mb-4">{service.price}</div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/fractional-services" className="btn-primary w-full">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Expert in Leading Platforms
            </h2>
            <p className="text-xl text-gray-600">
              Specialized expertise in the tools that power modern business automation
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <span className="text-lg font-semibold text-gray-800">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join 300+ businesses that have streamlined their operations with our automation expertise. 
            No minimum commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/discovery-call" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Book Free Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;