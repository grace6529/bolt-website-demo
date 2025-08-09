import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Settings, Target, Users, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const ProjectManagementOutsideScopePage = () => {
  const coreExpertise = [
    {
      title: 'Automation Projects',
      description: 'Full project management for business process automation initiatives',
      icon: <Zap className="h-5 w-5" />,
      services: ['Timeline coordination', 'Resource planning', 'Stakeholder management', 'Integration with existing processes']
    },
    {
      title: 'Systems Integration',
      description: 'Complete project oversight for connecting multiple systems',
      icon: <Settings className="h-5 w-5" />,
      services: ['Technical coordination', 'Testing phases', 'Deployment planning', 'Change management for integrations']
    },
    {
      title: 'Low-Code Development',
      description: 'Project management for custom application development',
      icon: <Target className="h-5 w-5" />,
      services: ['Platform implementation', 'User training coordination', 'Deployment oversight', 'Performance optimization']
    }
  ];

  const limitedSupportAreas = [
    'Strategic planning initiatives without technical components',
    'Organizational change projects unrelated to automation',
    'Marketing, sales, or purely operational initiatives',
    'Projects outside automation, integration, or low-code development',
    'Initiatives requiring expertise in other domains',
    'General business consulting or non-technology projects'
  ];

  const collaborationApproaches = [
    {
      title: 'Working with Client Teams',
      description: 'Complementary support alongside client project managers',
      features: ['Specialized automation input', 'Technical stream leadership', 'Knowledge sharing and best practices']
    },
    {
      title: 'Multi-Vendor Coordination',
      description: 'Managing automation aspects within larger projects',
      features: ['Integration focus coordination', 'Technical component leadership', 'Specialized oversight provision']
    },
    {
      title: 'Strategic Alignment',
      description: 'Ensuring automation projects serve broader objectives',
      features: ['Business objective connection', 'Cross-functional coordination', 'Value delivery focus']
    }
  ];

  const serviceModelIntegration = [
    {
      service: 'Fractional Services',
      pmSupport: 'Project management included as part of automation and integration work',
      features: ['Strategic oversight for ongoing initiatives', 'Coordination with client teams', 'Long-term project planning']
    },
    {
      service: 'Project-Based Engagement',
      pmSupport: 'Full project management for automation and integration projects',
      features: ['Start-to-finish oversight', 'Delivery coordination', 'Stakeholder management']
    },
    {
      service: 'Collaborative Development',
      pmSupport: 'Project coordination for joint development efforts',
      features: ['Collaborative planning', 'Knowledge transfer coordination', 'Shared responsibility management']
    }
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
              <span>Service Scope</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Project Management Outside Scope
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              While our core expertise lies in automation and integration, we can provide project management 
              support as it relates to these areas to ensure seamless execution and alignment with broader objectives.
            </p>
            <Link to="/faq" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Core Expertise Areas */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where We Provide Full Project Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our project management expertise is focused on areas where we have deep technical knowledge 
              and proven implementation experience.
            </p>
          </div>

          <div className="space-y-8">
            {coreExpertise.map((area, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-primary-100 p-3 rounded-lg">
                        <div className="text-primary-600">
                          {area.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{area.title}</h3>
                        <p className="text-gray-600">{area.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Project Management Services:</h4>
                    <div className="space-y-2">
                      {area.services.map((service, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{service}</span>
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

      {/* Service Boundaries */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Service Boundaries & Focus
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our project management services are intentionally focused on areas where we can 
                provide the most value through our specialized expertise and experience.
              </p>
              
              <div className="bg-primary-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Philosophy</h3>
                <p className="text-gray-700">
                  We believe in delivering exceptional results within our areas of expertise rather than 
                  spreading thin across all project management domains. This focus ensures quality and value.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Limited Support Areas</h3>
              <div className="space-y-3">
                {limitedSupportAreas.map((area, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-gray-400 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Approaches */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Collaborative Project Management
            </h2>
            <p className="text-xl text-gray-600">
              How we work with client teams and other providers on broader projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collaborationApproaches.map((approach, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{approach.title}</h3>
                <p className="text-gray-600 mb-4">{approach.description}</p>
                
                <div className="space-y-2">
                  {approach.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="bg-primary-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Alignment */}
      <section className="section-padding bg-primary-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Strategic Alignment & Integration
            </h2>
            <p className="text-xl text-gray-600">
              Ensuring automation projects serve broader business objectives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-2">Business Connection</h3>
              <p className="text-gray-600 text-sm">Linking technical projects to business outcomes</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">🤝</div>
              <h3 className="font-semibold text-gray-900 mb-2">Stakeholder Management</h3>
              <p className="text-gray-600 text-sm">Coordinating between technical and business teams</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">📊</div>
              <h3 className="font-semibold text-gray-900 mb-2">Value Realization</h3>
              <p className="text-gray-600 text-sm">Ensuring automation delivers intended value</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">🔄</div>
              <h3 className="font-semibold text-gray-900 mb-2">Cross-Project Coordination</h3>
              <p className="text-gray-600 text-sm">Integrating with broader project initiatives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Model Integration */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Project Management Across Service Models
            </h2>
            <p className="text-xl text-gray-600">
              How project management is integrated into our different service offerings
            </p>
          </div>
          
          <div className="space-y-8">
            {serviceModelIntegration.map((model, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{model.service}</h3>
                    <p className="text-lg text-gray-600 mb-6">{model.pmSupport}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">PM Features:</h4>
                    <div className="space-y-3">
                      {model.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <Users className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
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

      {/* Value Proposition */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Specialized Project Management Value
            </h2>
            <p className="text-xl text-gray-600">
              The advantages of project management from automation and integration experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Expertise</h3>
              <p className="text-gray-600 mb-4">
                Project management backed by deep technical automation expertise and 
                extensive implementation experience.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Understanding of technical complexities</li>
                <li>• Realistic timeline and resource planning</li>
                <li>• Quality assurance through expertise</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Integration</h3>
              <p className="text-gray-600 mb-4">
                Strategic project oversight that connects technical implementation 
                to business objectives and value realization.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Business outcome focus</li>
                <li>• Stakeholder alignment</li>
                <li>• Value-driven project delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Project Management for Automation?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our specialized project management expertise can ensure 
            successful delivery of your automation and integration initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/discovery-call" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/services" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
              Explore Project Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectManagementOutsideScopePage;