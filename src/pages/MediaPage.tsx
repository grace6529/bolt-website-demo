import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Users, Lightbulb, Award, MessageCircle } from 'lucide-react';

const MediaPage = () => {
  const caseStudies = [
    {
      name: 'Hoopoe Share',
      description: 'Business process automation implementation showcasing our comprehensive service capabilities',
      status: 'Featured Case Study',
      link: '/hoopoe-share',
      type: 'internal'
    },
    {
      name: 'Sweet Lionheart',
      description: 'Custom automation solution demonstrating our low-code development expertise',
      status: 'Featured Case Study', 
      link: '/sweet-lionheart',
      type: 'internal'
    },
    {
      name: 'Lapland',
      description: 'Client partnership highlighting successful systems integration work',
      status: 'Portfolio Reference',
      link: '#',
      type: 'reference'
    }
  ];

  const mediaTypes = [
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Case Studies',
      description: 'Detailed project examples showcasing our automation implementations',
      count: '3 Featured Projects'
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Thought Leadership',
      description: 'Internal perspectives on technology, business automation, and industry trends',
      count: '#internalthoughts'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Client Success Stories',
      description: 'Real examples of business transformation through automation',
      count: '300+ Success Stories'
    }
  ];

  const socialChannels = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/prettysim-pl/',
      description: 'Professional updates and industry insights',
      content: 'Business automation tips, client success stories, industry analysis'
    },
    {
      name: 'Facebook', 
      url: 'https://www.facebook.com/itsprettysimpl',
      description: 'Company news and community updates',
      content: 'Behind-the-scenes content, team updates, community engagement'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/prettysim.pl/',
      description: 'Behind-the-scenes and company culture',
      content: 'Visual storytelling, company culture, automation in action'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@itsprettysimpl',
      description: 'Tutorials and automation insights',
      content: 'How-to videos, platform tutorials, automation demonstrations'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Media & Portfolio
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Explore our case studies, thought leadership content, and client success stories. 
              See how we've helped businesses transform through automation.
            </p>
            <Link to="/discovery-call" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Media Types Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Media Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From detailed case studies to industry insights, explore the various ways 
              we share knowledge and showcase our expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mediaTypes.map((type, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-primary-600">
                    {type.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="text-primary-600 font-semibold">{type.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-600">
              Real projects demonstrating our automation capabilities and client success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{study.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      study.status === 'Featured Case Study' 
                        ? 'bg-primary-100 text-primary-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {study.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{study.description}</p>
                  
                  {study.type === 'internal' ? (
                    <Link 
                      to={study.link}
                      className="btn-primary w-full text-center"
                    >
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  ) : (
                    <div className="text-center">
                      <span className="text-gray-500 text-sm">Portfolio Reference</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                #internalthoughts
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team shares insights about life, technology, and everything else that 
                influences the world of business automation. A blend of personal perspectives, 
                technology discussions, and industry commentary.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MessageCircle className="h-5 w-5 text-primary-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Technology Insights</h4>
                    <p className="text-gray-600">Deep dives into automation platforms and emerging trends</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MessageCircle className="h-5 w-5 text-primary-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Perspectives</h4>
                    <p className="text-gray-600">Thoughts on business transformation and process optimization</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MessageCircle className="h-5 w-5 text-primary-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Industry Commentary</h4>
                    <p className="text-gray-600">Analysis of market trends and automation adoption</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Coming Soon</h3>
              <p className="text-gray-600 mb-6">
                We're developing our thought leadership content to share more insights 
                about automation, technology, and business transformation.
              </p>
              <Link to="/contact" className="btn-primary">
                Stay Updated
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Integration */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Follow Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Connect with us across social platforms for updates, insights, and behind-the-scenes content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {socialChannels.map((channel, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{channel.name}</h3>
                  <a 
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <div className="text-sm text-gray-500 mb-4">
                  <strong>Content:</strong> {channel.content}
                </div>
                <a 
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center"
                >
                  Follow on {channel.name}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join the businesses featured in our case studies. Let's discuss how automation 
            can transform your operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/discovery-call" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Book Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/services" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaPage;