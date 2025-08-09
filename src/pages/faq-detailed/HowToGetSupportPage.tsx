import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, MessageCircle, Phone, Clock, Users, Zap, ArrowRight } from 'lucide-react';

const HowToGetSupportPage = () => {
  const supportChannels = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Support',
      description: 'Comprehensive support through email communication',
      bestFor: ['Non-urgent questions', 'Detailed technical issues', 'Documentation requests', 'Complex problem descriptions'],
      benefits: ['Written record of communication', 'Detailed explanations possible', 'File attachments supported', 'Thorough documentation']
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Live Chat',
      description: 'Real-time chat communication with our team',
      bestFor: ['Quick questions', 'Immediate clarification', 'Status updates', 'Real-time collaboration'],
      benefits: ['Instant communication', 'Rapid problem resolution', 'Convenient access', 'Interactive troubleshooting']
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone Support',
      description: 'Direct phone communication for immediate assistance',
      bestFor: ['Complex issues', 'Urgent matters', 'Detailed discussions', 'Training sessions'],
      benefits: ['Personal interaction', 'Immediate feedback', 'Collaborative problem-solving', 'Voice communication clarity']
    }
  ];

  const supportObjectives = [
    {
      title: 'Solution Leverage',
      description: 'Help clients fully utilize implemented automation solutions',
      icon: <Zap className="h-5 w-5" />
    },
    {
      title: 'Operational Continuity',
      description: 'Maintain smooth business operations and system functionality',
      icon: <Users className="h-5 w-5" />
    },
    {
      title: 'Timely Assistance',
      description: 'Provide prompt support when clients need help',
      icon: <Clock className="h-5 w-5" />
    }
  ];

  const supportScope = [
    'Airtable configuration and troubleshooting',
    'Make automation workflow assistance',
    'Softr application support and guidance',
    'Smartsuite process management help',
    'Noloco database application support',
    'Systems integration troubleshooting',
    'Data synchronization issue resolution',
    'API connectivity problem solving',
    'Workflow optimization assistance',
    'Performance optimization guidance'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 text-primary-200 mb-4">
              <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
              <span>/</span>
              <span>Support Channels</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How to Get Support
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              prettysimpl offers comprehensive support through multiple channels including email, chat, 
              and phone to ensure you can fully leverage your automation solutions.
            </p>
            <Link to="/faq" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multiple Support Channels Available
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the communication method that works best for your specific needs and situation.
            </p>
          </div>

          <div className="space-y-12">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-primary-100 p-3 rounded-lg">
                        <div className="text-primary-600">
                          {channel.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{channel.title}</h3>
                        <p className="text-gray-600">{channel.description}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Best For:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {channel.bestFor.map((use, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="bg-primary-600 w-2 h-2 rounded-full"></div>
                            <span className="text-gray-700 text-sm">{use}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                    <div className="space-y-3">
                      {channel.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="bg-green-500 w-2 h-2 rounded-full mt-2"></div>
                          <span className="text-gray-700">{benefit}</span>
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

      {/* Support Objectives */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Support Objectives
            </h2>
            <p className="text-xl text-gray-600">
              The primary goals driving our comprehensive support approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportObjectives.map((objective, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">
                    {objective.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{objective.title}</h3>
                <p className="text-gray-600">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Scope */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Comprehensive Support Coverage
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our technical support covers all the platforms and services we specialize in, 
                ensuring you get expert assistance across your entire automation ecosystem.
              </p>
              
              <div className="bg-primary-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Support Philosophy</h3>
                <p className="text-gray-700">
                  We believe in proactive, solution-focused support that not only resolves immediate 
                  issues but also helps prevent future problems and optimizes your automation systems.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Support Areas</h3>
              <div className="space-y-3">
                {supportScope.map((area, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-primary-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Integration */}
      <section className="section-padding bg-primary-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Support Across All Service Types
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive support is included across all our service offerings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fractional Services</h3>
              <p className="text-gray-600 mb-4">
                Ongoing support included as part of your fractional service package with 
                regular check-ins and proactive assistance.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Embedded team member support</li>
                <li>• Regular system health checks</li>
                <li>• Proactive optimization</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project-Based Support</h3>
              <p className="text-gray-600 mb-4">
                Implementation support during project delivery with post-implementation 
                assistance and knowledge transfer.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Implementation guidance</li>
                <li>• Post-launch troubleshooting</li>
                <li>• Knowledge transfer sessions</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Support</h3>
              <p className="text-gray-600 mb-4">
                Priority support for urgent issues available outside regular service 
                hours when business-critical situations arise.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Rapid response commitment</li>
                <li>• Business continuity focus</li>
                <li>• Extended availability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Support?
            </h2>
            <p className="text-xl text-gray-600">
              Choose your preferred method and get the help you need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Support</h3>
              <p className="text-gray-600 mb-4">
                Send detailed questions and get comprehensive written responses.
              </p>
              <Link to="/contact" className="btn-primary">
                Send Email
              </Link>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Live Chat</h3>
              <p className="text-gray-600 mb-4">
                Get instant help through our real-time chat system.
              </p>
              <Link to="/contact" className="btn-primary">
                Start Chat
              </Link>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Phone Support</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our automation experts for complex issues.
              </p>
              <Link to="/contact" className="btn-primary">
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Right Now?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Don't wait - our support team is ready to help you resolve issues and 
            optimize your automation systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Contact Support Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/faq" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
              Browse All FAQs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToGetSupportPage;