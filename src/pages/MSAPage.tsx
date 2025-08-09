import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, Users, Clock, ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';

const MSAPage = () => {
  const expectedMSAElements = [
    {
      category: 'Service Terms & Scope',
      items: [
        'Business Process Automation services definition',
        'Low-Code Development consulting parameters',
        'Systems Integration work specifications',
        'Fractional Technology Services framework',
        'Project-based engagement structures'
      ]
    },
    {
      category: 'Commercial Terms',
      items: [
        'Service package pricing (£3,500-£7,500/month fractional)',
        'Project-based pricing structures and payment terms',
        'No minimum commitment period policy',
        'Flexible start and end date procedures',
        'Service modification and scaling protocols'
      ]
    },
    {
      category: 'Legal & Compliance',
      items: [
        'Service liability limitations and professional coverage',
        'GDPR compliance and data protection standards',
        'Client data handling and confidentiality obligations',
        'Intellectual property ownership frameworks',
        'Risk allocation and force majeure provisions'
      ]
    }
  ];

  const serviceSpecificTerms = [
    {
      title: 'Fractional Services',
      description: 'Embedded team member approach with regular service delivery',
      terms: ['Client team integration procedures', 'Knowledge transfer requirements', 'Performance standards']
    },
    {
      title: 'Project Services',
      description: 'Fixed-scope deliverables with defined timelines',
      terms: ['Scope definition and change management', 'Milestone and acceptance procedures', 'Post-implementation support']
    },
    {
      title: 'White-Label Services',
      description: 'Partnership terms for brand integration',
      terms: ['Brand usage and representation rights', 'Quality and performance standards', 'Client relationship management']
    }
  ];

  const businessPrinciples = [
    'No minimum commitment periods for maximum flexibility',
    'Emergency support available beyond regular hours',
    'Multiple support channels for client convenience',
    'Non-profit organization discount eligibility',
    'White-label service options for partners',
    'Transparent pricing and service delivery standards'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 text-primary-200 mb-4">
              <FileText className="h-6 w-6" />
              <span className="font-medium">Legal Framework</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Master Service Agreement
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Our comprehensive legal framework governing service delivery, client relationships, 
              and business partnerships for automation and integration services.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Request MSA Information
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Document Status */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              MSA Access & Information
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <AlertCircle className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-blue-900">Protected Legal Document</h3>
              </div>
              <p className="text-blue-800 mb-6">
                Our Master Service Agreement contains detailed legal terms and is provided during 
                the service planning and engagement process. Contact us to discuss MSA terms 
                as part of your project consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/discovery-call" className="btn-primary">
                  Schedule Consultation
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Legal Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expected MSA Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              MSA Framework Overview
            </h2>
            <p className="text-xl text-gray-600">
              Key areas typically covered in our Master Service Agreement
            </p>
          </div>
          
          <div className="space-y-8">
            {expectedMSAElements.map((section, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{section.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service-Specific Terms */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service-Specific Agreements
            </h2>
            <p className="text-xl text-gray-600">
              Tailored terms for different service engagement models
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceSpecificTerms.map((service, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.terms.map((term, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="bg-primary-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{term}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Principles */}
      <section className="section-padding bg-primary-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Business Principles
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                The core principles that guide our service agreements and client relationships, 
                reflecting our commitment to flexibility and client success.
              </p>
              
              <div className="space-y-4">
                {businessPrinciples.map((principle, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Partnership Philosophy</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Client-Centric Approach</h4>
                    <p className="text-gray-600">Flexible engagement terms designed around client needs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <Clock className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Responsive Service</h4>
                    <p className="text-gray-600">Emergency support and adaptable service delivery</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <Shield className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Trust-Based Relationships</h4>
                    <p className="text-gray-600">Long-term partnerships built on mutual value and trust</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Compliance */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Legal Compliance & Standards
            </h2>
            <p className="text-xl text-gray-600">
              Our commitment to legal compliance and professional service standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-primary-600 mb-2">🛡️</div>
              <h3 className="font-semibold text-gray-900 mb-2">GDPR Compliant</h3>
              <p className="text-gray-600 text-sm">Full data protection compliance</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-primary-600 mb-2">⚖️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Professional Standards</h3>
              <p className="text-gray-600 text-sm">Industry best practices adherence</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-primary-600 mb-2">🔒</div>
              <h3 className="font-semibold text-gray-900 mb-2">Data Security</h3>
              <p className="text-gray-600 text-sm">Comprehensive security measures</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-primary-600 mb-2">📋</div>
              <h3 className="font-semibold text-gray-900 mb-2">Service Standards</h3>
              <p className="text-gray-600 text-sm">Quality assurance frameworks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for MSA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Review Our MSA?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us to discuss our Master Service Agreement terms as part of your 
            service planning and engagement process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/discovery-call" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Schedule Legal Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MSAPage;