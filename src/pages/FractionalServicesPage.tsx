import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Users, Target, Cog, TrendingUp, Shield, BarChart } from 'lucide-react';

const FractionalServicesPage = () => {
  const phases = [
    {
      number: 1,
      title: 'Foundation & Discovery',
      description: 'Comprehensive business assessment and strategic planning foundation',
      activities: ['Business assessment', 'Current state analysis', 'Opportunity identification', 'Strategic planning']
    },
    {
      number: 2,
      title: 'Infrastructure Setup',
      description: 'Core system implementations and technical foundation establishment',
      activities: ['System implementations', 'Platform configuration', 'Integration planning', 'Technical foundation']
    },
    {
      number: 3,
      title: 'Core Implementation',
      description: 'Deploy automation solutions and establish operational improvements',
      activities: ['Automation deployment', 'Process optimization', 'System rollout', 'Operational improvements']
    },
    {
      number: 4,
      title: 'System Enhancement',
      description: 'Optimize risk management and enhance compliance frameworks',
      activities: ['Risk optimization', 'Compliance enhancement', 'Performance tuning', 'System refinement']
    },
    {
      number: 5,
      title: 'Sustainable Framework',
      description: 'Develop comprehensive reporting and strategic planning systems',
      activities: ['Reporting systems', 'Strategic planning', 'Knowledge transfer', 'Sustainability planning']
    },
    {
      number: 6,
      title: 'Strategic Partnership',
      description: 'Ongoing innovation, scalability, and continuous improvement',
      activities: ['Innovation planning', 'Scalability optimization', 'Future-proofing', 'Strategic guidance']
    }
  ];

  const packages = [
    {
      title: 'Fractional Chief Automation Officer',
      price: '£3,500',
      period: 'per month',
      description: 'Strategic automation leadership and executive guidance',
      features: [
        'Executive-level strategic guidance',
        'Automation strategy development',
        'Technology roadmap planning',
        'High-level decision support',
        'Strategic technology partnerships'
      ],
      ideal: 'Organizations needing strategic automation leadership'
    },
    {
      title: 'Half Day Fractional Services',
      price: '£4,500',
      period: 'per month',
      description: 'Regular part-time engagement with targeted support',
      features: [
        'Half day weekly commitment',
        'Regular part-time engagement',
        'Targeted support and guidance',
        'Flexible scheduling',
        'Focused implementation'
      ],
      ideal: 'Businesses wanting consistent automation support'
    },
    {
      title: 'Full Day Fractional Services',
      price: '£7,500',
      period: 'per month',
      description: 'Dedicated team member with comprehensive support',
      features: [
        'Full day weekly commitment',
        'Embedded team member approach',
        'Complete lifecycle management',
        'Strategic partnership focus',
        'Comprehensive implementation'
      ],
      ideal: 'Companies seeking full integration and transformation',
      popular: true
    }
  ];

  const benefits = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Embedded Team Approach',
      description: 'Fractional specialists integrate as actual team members, not external consultants'
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: 'Complete Lifecycle Management',
      description: 'End-to-end responsibility from strategy to maintenance and ongoing support'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Flexible Engagement Models',
      description: 'Multiple service tiers to match different needs, budgets, and commitment levels'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Strategic Long-Term Partnership',
      description: 'Ongoing innovation, scalability planning, and future-proofing technology investments'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fractional Business Automation Services
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Dedicated automation specialists embedded as team members who manage your complete 
              tech stack lifecycle from design to maintenance and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/discovery-call" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Book Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/services" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Phase Methodology */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our 6-Phase Transformation Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach to business transformation through strategic automation 
              and systems integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <div key={index} className="card p-6 relative">
                <div className="absolute -top-4 -left-4 bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  {phase.number}
                </div>
                
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-gray-600 mb-4">{phase.description}</p>
                  
                  <ul className="space-y-2">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Fractional Service Level
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible engagement models designed to meet your specific automation needs and budget requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`card p-8 relative ${pkg.popular ? 'ring-2 ring-primary-500' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary-600">{pkg.price}</span>
                    <span className="text-gray-600 ml-2">{pkg.period}</span>
                  </div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <p className="text-sm text-gray-600 font-medium">Ideal for:</p>
                  <p className="text-sm text-gray-700">{pkg.ideal}</p>
                </div>
                
                <Link 
                  to="/discovery-call" 
                  className={`w-full text-center ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Fractional Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique approach delivers transformative results through embedded expertise 
              and strategic partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
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
        </div>
      </section>

      {/* Target Clients */}
      <section className="section-padding bg-primary-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Perfect for Growing Businesses
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our fractional services are designed for businesses ready to make transformative 
                operational improvements through strategic automation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Embedded Technology Support</h4>
                    <p className="text-gray-600">Organizations wanting integrated team members rather than external consultants</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 p-2 rounded-lg">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Strategic Automation Guidance</h4>
                    <p className="text-gray-600">Companies needing executive-level automation leadership and strategic direction</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 p-2 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Scalable Tech Solutions</h4>
                    <p className="text-gray-600">Businesses requiring adaptable technology partnerships that grow with their needs</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Transformative operational improvements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Collaborative, adaptive approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Long-term strategic technology partnership</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Flexible engagement models</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">No minimum commitment required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our fractional services can provide the embedded expertise 
            your business needs to thrive.
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

export default FractionalServicesPage;