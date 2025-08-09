import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Code, MessageCircle, ArrowRight, Linkedin, Star, TrendingUp } from 'lucide-react';

const JobOpportunitiesPage = () => {
  const skillsOfInterest = [
    { name: 'Airtable', category: 'Low-Code Platforms' },
    { name: 'Make', category: 'Automation Platforms' },
    { name: 'Softr', category: 'No-Code Development' },
    { name: 'Smartsuite', category: 'Business Process Management' },
    { name: 'Noloco', category: 'Database Applications' },
    { name: 'Business Process Automation', category: 'Core Services' },
    { name: 'Systems Integration', category: 'Core Services' },
    { name: 'Client Service & Support', category: 'Client Relations' },
    { name: 'Project Management', category: 'Service Delivery' },
    { name: 'Fractional Services Delivery', category: 'Service Models' }
  ];

  const companyHighlights = [
    { icon: <Star className="h-5 w-5" />, text: '5-star rated team with proven expertise' },
    { icon: <Users className="h-5 w-5" />, text: '300+ happy clients and partners served' },
    { icon: <TrendingUp className="h-5 w-5" />, text: '1,500+ applications optimized and integrated' },
    { icon: <Briefcase className="h-5 w-5" />, text: 'Nearly a decade of operations since 2015' }
  ];

  const potentialRoles = [
    {
      category: 'Technical Roles',
      positions: [
        'Low-Code Development Specialist',
        'Business Process Automation Expert',
        'Systems Integration Consultant',
        'Platform Specialist (Airtable, Make, Softr, etc.)'
      ]
    },
    {
      category: 'Service Delivery Roles',
      positions: [
        'Fractional Technology Services Consultant',
        'Client Success Manager',
        'Automation Project Manager'
      ]
    },
    {
      category: 'Client-Facing Roles',
      positions: [
        'Business Development Representative',
        'Customer Support Specialist',
        'Discovery Call Coordinator'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Growing Team
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Be part of a team that's transforming businesses through automation. 
              We're always looking for talented individuals who share our passion for innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Get In Touch About Opportunities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="https://www.linkedin.com/company/prettysim-pl/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Current Opportunities Status
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <MessageCircle className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-blue-900">No Current Openings Posted</h3>
              </div>
              <p className="text-blue-800 mb-6">
                While we don't have specific job listings at the moment, we're always interested 
                in connecting with talented professionals who align with our mission and expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Express Interest
                </Link>
                <Link to="/discovery-call" className="btn-secondary">
                  Schedule a Chat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture & Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Work With prettysimpl?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join a team that values innovation, client success, and flexible working arrangements. 
                We're building the future of business automation.
              </p>
              
              <div className="space-y-4">
                {companyHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-primary-600">
                      {highlight.icon}
                    </div>
                    <span className="text-gray-700">{highlight.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Client-Centric Excellence</h4>
                  <p className="text-gray-600">Focus on measurable business growth outcomes and partnership-based relationships</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technical Innovation</h4>
                  <p className="text-gray-600">Deep expertise in cutting-edge low-code platforms and continuous learning</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Flexible Engagement</h4>
                  <p className="text-gray-600">No minimum commitment philosophy and responsive, adaptable culture</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Community Support</h4>
                  <p className="text-gray-600">Supporting non-profit organizations and giving back to the community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Skills We Value
            </h2>
            <p className="text-xl text-gray-600">
              Based on our technology stack and service focus, these are areas of expertise we find valuable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsOfInterest.map((skill, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="text-sm text-primary-600 font-medium mb-2">{skill.category}</div>
                <h3 className="font-semibold text-gray-900">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Potential Roles */}
      <section className="section-padding bg-primary-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Types of Roles We Consider
            </h2>
            <p className="text-xl text-gray-600">
              While specific openings vary, these are the types of positions that align with our business model
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {potentialRoles.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.positions.map((position, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start space-x-2">
                      <div className="bg-primary-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{position}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Indicators */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Company Growth Indicators
            </h2>
            <p className="text-xl text-gray-600">
              Signs that suggest continued growth and opportunity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">300+</div>
              <p className="text-gray-700">Happy clients and partners served</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">1,500+</div>
              <p className="text-gray-700">Applications optimized and integrated</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
              <p className="text-gray-700">Years of hands-on experience</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">Multiple</div>
              <p className="text-gray-700">Expanding service offerings</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in Joining Our Mission?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Even without current openings, we'd love to hear from talented professionals 
            who share our passion for business automation and client success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Contact Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a 
              href="https://www.linkedin.com/company/prettysim-pl/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              Follow on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobOpportunitiesPage;