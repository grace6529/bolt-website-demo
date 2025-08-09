import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, CheckCircle, ArrowRight, Users, Target, Lightbulb, TrendingUp } from 'lucide-react';

const DiscoveryCallPage = () => {
  const callBenefits = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Needs Assessment',
      description: 'Discuss your current business challenges and identify automation opportunities that can drive growth and efficiency.'
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Solution Exploration',
      description: 'Learn about our capabilities and explore potential automation solutions tailored to your specific requirements.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Service Matching',
      description: 'Determine the most appropriate service packages and engagement models that align with your goals and budget.'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Strategic Planning',
      description: 'Develop a clear roadmap for your automation journey with actionable next steps and implementation strategies.'
    }
  ];

  const whatToExpect = [
    'Comprehensive discussion of your business processes and pain points',
    'Assessment of current technology stack and integration opportunities',
    'Overview of our fractional services and engagement models',
    'Customized recommendations based on your specific needs',
    'Clear next steps and potential implementation timeline',
    'No-pressure consultation focused on your success'
  ];

  const preparationTips = [
    {
      title: 'Business Overview',
      description: 'Be ready to discuss your current business processes, team structure, and main operational challenges.'
    },
    {
      title: 'Technology Landscape',
      description: 'Have information about your existing tools, software, and systems that might need integration.'
    },
    {
      title: 'Goals & Objectives',
      description: 'Think about your automation goals, expected outcomes, and timeline for implementation.'
    },
    {
      title: 'Budget Considerations',
      description: 'Consider your budget range for automation services to help us recommend appropriate solutions.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Book Your Free Discovery Call
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                Start your automation journey with a personalized consultation. We'll discuss your 
                business needs, explore solutions, and create a roadmap for success.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-200" />
                  <span>Free 45-minute consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-200" />
                  <span>No commitment required</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-200" />
                  <span>Personalized recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-200" />
                  <span>Clear next steps provided</span>
                </div>
              </div>
              
              <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4">
                <Calendar className="mr-3 h-6 w-6" />
                Schedule Your Call Now
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Call Details</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-500 p-2 rounded-lg">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Duration</h4>
                    <p className="text-primary-100">45 minutes focused consultation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-500 p-2 rounded-lg">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Format</h4>
                    <p className="text-primary-100">One-on-one video call with automation expert</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-500 p-2 rounded-lg">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Outcome</h4>
                    <p className="text-primary-100">Customized automation strategy and recommendations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What to Expect During Your Call
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our discovery calls are structured to maximize value for your time while understanding 
              your unique automation needs and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {callBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-6 p-6 bg-gray-50 rounded-xl">
                <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                  <div className="text-primary-600">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Call Agenda Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">We'll Cover:</h4>
                <ul className="space-y-2">
                  {whatToExpected.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">You'll Receive:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Personalized automation recommendations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Service package recommendations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Implementation timeline estimates</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Clear next steps and action items</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Prepare for Your Call
            </h2>
            <p className="text-xl text-gray-600">
              A little preparation helps us make the most of our time together
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {preparationTips.map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join 300+ Successful Businesses
            </h2>
            <p className="text-xl text-gray-600">
              Companies that started with a discovery call and transformed their operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">300+</div>
              <p className="text-gray-600">Happy Clients & Partners</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">1,500+</div>
              <p className="text-gray-600">Applications Optimized</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">5.0/5</div>
              <p className="text-gray-600">Client Satisfaction Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Book your free discovery call today and take the first step toward streamlined, 
            automated business operations that scale with your growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Calendar className="mr-3 h-6 w-6" />
              Schedule Discovery Call
            </button>
            <Link to="/services" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4">
              Learn About Our Services
            </Link>
          </div>
          
          <p className="text-primary-200 text-sm">
            No commitment required • Free consultation • Immediate value
          </p>
        </div>
      </section>
    </div>
  );
};

export default DiscoveryCallPage;