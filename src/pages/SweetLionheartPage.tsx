import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Shield, Zap, Target, Users, CheckCircle } from 'lucide-react';

const SweetLionheartPage = () => {
  const projectHighlights = [
    'Business process automation implementation',
    'Low-code development solutions',
    'Systems integration work',
    'Custom automation solutions delivery'
  ];

  const potentialPlatforms = [
    { name: 'Airtable', use: 'Database management and workflow organization' },
    { name: 'Make', use: 'Automation workflows and system integrations' },
    { name: 'Softr', use: 'Custom application development' },
    { name: 'Smartsuite', use: 'Business process management' },
    { name: 'Noloco', use: 'Database-driven applications' }
  ];

  const serviceTypes = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Fractional Services',
      description: 'Embedded team member approach with ongoing support'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Project-Based Implementation',
      description: 'Fixed-scope automation project with defined deliverables'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Custom Development',
      description: 'Tailored automation solutions for specific business needs'
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
              Sweet Lionheart
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              A featured case study demonstrating our automation implementation expertise 
              and client success in business process optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/discovery-call" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Discuss Similar Project
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
                Project Overview
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Sweet Lionheart represents a successful automation implementation showcasing 
                prettysimpl's capabilities in business process optimization and custom solution development.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Project Highlights:</h3>
                {projectHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="text-center mb-6">
                <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Client Confidentiality</h3>
              </div>
              <p className="text-gray-600 text-center">
                Detailed project information is protected under client confidentiality agreements. 
                This case study demonstrates our capability while respecting client privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Approach */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Service Approach
            </h2>
            <p className="text-xl text-gray-600">
              Understanding the types of services that could be involved in similar projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceTypes.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="bg-primary-100 p-3 rounded-lg w-fit mb-4">
                  <div className="text-primary-600">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Platforms */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technology Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Platforms we specialize in for automation and integration projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {potentialPlatforms.map((platform, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{platform.name}</h3>
                <p className="text-gray-600">{platform.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="section-padding bg-primary-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Typical Project Outcomes
            </h2>
            <p className="text-xl text-gray-600">
              The types of results our automation implementations typically deliver
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">↑</div>
              <h3 className="font-semibold text-gray-900 mb-2">Efficiency Gains</h3>
              <p className="text-gray-600 text-sm">Streamlined processes and reduced manual work</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Faster Operations</h3>
              <p className="text-gray-600 text-sm">Automated workflows and improved response times</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-2">Better Accuracy</h3>
              <p className="text-gray-600 text-sm">Reduced errors through automation</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">📈</div>
              <h3 className="font-semibold text-gray-900 mb-2">Scalable Growth</h3>
              <p className="text-gray-600 text-sm">Systems that grow with business needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Related Case Studies
            </h2>
            <p className="text-xl text-gray-600">
              Explore other examples of our automation expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hoopoe Share</h3>
              <p className="text-gray-600 mb-4">
                Another featured case study demonstrating comprehensive automation capabilities 
                and successful client partnership.
              </p>
              <Link to="/hoopoe-share" className="btn-primary">
                View Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lapland</h3>
              <p className="text-gray-600 mb-4">
                Portfolio reference showcasing our range of implementation expertise 
                and client success stories.
              </p>
              <Link to="/media" className="btn-secondary">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Own Success Story?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business processes through 
            automation, just like we did for Sweet Lionheart.
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

export default SweetLionheartPage;