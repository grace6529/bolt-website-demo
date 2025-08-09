import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Shield, Zap, Target, Users, CheckCircle, Settings } from 'lucide-react';

const HoopoeSharePage = () => {
  const projectHighlights = [
    'Comprehensive business assessment and opportunity identification',
    'Systems integration and workflow optimization',
    'Custom automation solution development',
    'Ongoing support and maintenance framework'
  ];

  const implementationPhases = [
    {
      phase: 'Discovery & Planning',
      description: 'Business assessment and automation opportunity identification',
      icon: <Target className="h-5 w-5" />
    },
    {
      phase: 'System Design',
      description: 'Architecture planning and integration strategy development',
      icon: <Settings className="h-5 w-5" />
    },
    {
      phase: 'Implementation',
      description: 'Automation deployment and system configuration',
      icon: <Zap className="h-5 w-5" />
    },
    {
      phase: 'Optimization',
      description: 'Performance tuning and process refinement',
      icon: <CheckCircle className="h-5 w-5" />
    }
  ];

  const serviceCapabilities = [
    {
      title: 'Business Process Automation',
      description: 'Streamlining operational workflows and eliminating manual bottlenecks',
      benefits: ['Reduced processing time', 'Improved accuracy', 'Enhanced scalability']
    },
    {
      title: 'Systems Integration',
      description: 'Connecting disparate systems for seamless data flow and operations',
      benefits: ['Unified data management', 'Improved visibility', 'Reduced duplication']
    },
    {
      title: 'Custom Solution Development',
      description: 'Tailored automation solutions designed for specific business requirements',
      benefits: ['Perfect fit for needs', 'Scalable architecture', 'Future-proof design']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 text-primary-200 mb-4">
              <Link to="/media" className="hover:text-white transition-colors">Media</Link>
              <span>/</span>
              <span>Case Study</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hoopoe Share
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              A comprehensive automation implementation showcasing our end-to-end capabilities 
              in business process optimization and systems integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/discovery-call" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/media" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Project Significance
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Hoopoe Share demonstrates our comprehensive approach to business automation, 
                from initial assessment through implementation and ongoing optimization. 
                This project showcases our ability to deliver transformative results.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Key Achievements:</h3>
                {projectHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl">
              <div className="text-center mb-6">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Professional Portfolio</h3>
              </div>
              <p className="text-gray-700 text-center">
                Featured as a significant project in our professional portfolio, 
                demonstrating successful automation transformation and client partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Implementation Methodology
            </h2>
            <p className="text-xl text-gray-600">
              Our structured approach to delivering successful automation projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationPhases.map((phase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="bg-primary-100 p-3 rounded-lg w-fit mb-4">
                  <div className="text-primary-600">
                    {phase.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{phase.phase}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Capabilities */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Capabilities Demonstrated
            </h2>
            <p className="text-xl text-gray-600">
              The range of expertise applied in this comprehensive automation project
            </p>
          </div>
          
          <div className="space-y-8">
            {serviceCapabilities.map((capability, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{capability.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{capability.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Project Benefits:</h4>
                    <div className="space-y-2">
                      {capability.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500" />
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

      {/* Technology Excellence */}
      <section className="section-padding bg-primary-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technology Excellence
            </h2>
            <p className="text-xl text-gray-600">
              Leveraging our platform expertise for optimal results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-2xl font-bold text-primary-600 mb-2">🔧</div>
              <h3 className="font-semibold text-gray-900 mb-2">Platform Mastery</h3>
              <p className="text-gray-600 text-sm">Expert knowledge of leading automation platforms</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-2xl font-bold text-primary-600 mb-2">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Rapid Implementation</h3>
              <p className="text-gray-600 text-sm">Efficient deployment with minimal disruption</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-2xl font-bold text-primary-600 mb-2">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-2">Tailored Solutions</h3>
              <p className="text-gray-600 text-sm">Custom-built to meet specific requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Metrics */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Indicators
            </h2>
            <p className="text-xl text-gray-600">
              Metrics that demonstrate the value of our automation implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">5.0★</div>
              <p className="text-gray-700">Client satisfaction rating</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">300+</div>
              <p className="text-gray-700">Successful client partnerships</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">1,500+</div>
              <p className="text-gray-700">Applications optimized</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
              <p className="text-gray-700">Years of expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Related Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Explore other examples of our automation expertise and client success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sweet Lionheart</h3>
              <p className="text-gray-600 mb-4">
                Featured case study demonstrating our low-code development expertise 
                and custom automation solution capabilities.
              </p>
              <Link to="/sweet-lionheart" className="btn-primary">
                View Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Portfolio</h3>
              <p className="text-gray-600 mb-4">
                Explore our full range of case studies, thought leadership content, 
                and client success stories in our media center.
              </p>
              <Link to="/media" className="btn-secondary">
                View All Projects
              </Link>
            </div>
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
            Let's discuss how we can deliver similar results for your organization 
            through comprehensive automation and systems integration.
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

export default HoopoeSharePage;