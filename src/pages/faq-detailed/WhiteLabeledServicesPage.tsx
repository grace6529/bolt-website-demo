import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Handshake, Target, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const WhiteLabeledServicesPage = () => {
  const whiteLabelBenefits = [
    {
      title: 'Brand Integration',
      description: 'Services delivered completely under your brand identity',
      icon: <Target className="h-5 w-5" />,
      features: ['Complete brand consistency', 'Client-facing representation', 'Seamless brand experience']
    },
    {
      title: 'Team Extension',
      description: 'prettysimpl professionals become part of your service delivery team',
      icon: <Users className="h-5 w-5" />,
      features: ['Embedded team approach', 'Collaborative service model', 'Integrated operations']
    },
    {
      title: 'Partnership Approach',
      description: 'Joint service delivery while maintaining your brand identity',
      icon: <Handshake className="h-5 w-5" />,
      features: ['Value-added services', 'Partner brand maintenance', 'Collaborative delivery']
    }
  ];

  const servicePackageOptions = [
    {
      package: 'Full Day Fractional Services',
      whiteLabelFeatures: [
        'Partner-branded full-day automation support',
        'Complete technical implementation under partner identity',
        'Client-facing delivery through partner relationship'
      ]
    },
    {
      package: 'Half Day Fractional Services',
      whiteLabelFeatures: [
        'Partner-branded part-time automation support',
        'Targeted technical assistance under partner brand',
        'Flexible engagement through partner client management'
      ]
    },
    {
      package: 'Fractional Chief Automation Officer',
      whiteLabelFeatures: [
        'Partner-branded executive automation leadership',
        'Strategic guidance delivered under partner identity',
        'C-level expertise extension for partner clients'
      ]
    }
  ];

  const partnerBenefits = [
    'Add automation services without internal hiring',
    'Leverage specialized knowledge and experience',
    'Expand service portfolio with automation capabilities',
    'Maintain complete brand control and consistency',
    'Preserve direct client relationships and management',
    'Generate new revenue streams through expanded offerings'
  ];

  const clientExperience = [
    'Single brand experience across all services',
    'Consistent communication through partner channels',
    'Integrated support appearing from partner directly',
    'Expert implementation with partner relationship',
    'Quality delivery standards under trusted brand',
    'Seamless service integration with existing offerings'
  ];

  const idealPartnerProfile = [
    {
      category: 'Service Providers',
      description: 'Organizations serving clients needing automation solutions',
      examples: ['Consulting firms expanding into automation', 'Digital agencies adding technical depth', 'Business service providers enhancing offerings']
    },
    {
      category: 'Technology Partners',
      description: 'Companies seeking specialized automation capabilities',
      examples: ['Technology consultancies', 'System integrators', 'Software implementation specialists']
    },
    {
      category: 'Business Consultants',
      description: 'Advisors wanting to offer technical automation services',
      examples: ['Management consultants', 'Business process consultants', 'Operational efficiency specialists']
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
              <span>Partnership</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              White-Labeled Services
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Yes, we can seamlessly integrate with your team and deliver services under your brand. 
              Our team becomes an extension of your organization through fractional agreements.
            </p>
            <Link to="/faq" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* White-Label Model */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless Brand Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our white-label approach allows us to work as an extension of your organization, 
              providing automation expertise while maintaining your brand identity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {whiteLabelBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-primary-600">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                
                <div className="space-y-2">
                  {benefit.features.map((feature, idx) => (
                    <div key={idx} className="text-sm text-gray-700">
                      • {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary-50 border border-primary-200 rounded-xl p-8 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Handshake className="h-8 w-8 text-primary-600" />
              <h3 className="text-2xl font-bold text-primary-900">Partnership Philosophy</h3>
            </div>
            <p className="text-primary-800 text-lg">
              We believe in true partnerships where our expertise enhances your service offerings 
              while you maintain complete control over client relationships and brand experience.
            </p>
          </div>
        </div>
      </section>

      {/* Service Package Integration */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              White-Label Service Options
            </h2>
            <p className="text-xl text-gray-600">
              All our fractional service packages can be delivered under your brand
            </p>
          </div>
          
          <div className="space-y-8">
            {servicePackageOptions.map((option, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{option.package}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {option.whiteLabelFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Benefits for Partners
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                White-label partnerships enable you to expand your service capabilities 
                while maintaining complete brand control and client relationships.
              </p>
              
              <div className="space-y-4">
                {partnerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Zap className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-primary-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Client Experience</h3>
              <p className="text-gray-600 mb-6">
                Your clients receive expert automation services while experiencing 
                complete brand consistency and unified service delivery.
              </p>
              
              <div className="space-y-3">
                {clientExperience.map((experience, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-primary-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{experience}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Partner Profile */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ideal Partner Profile
            </h2>
            <p className="text-xl text-gray-600">
              Organizations that benefit most from white-label automation partnerships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {idealPartnerProfile.map((profile, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{profile.category}</h3>
                <p className="text-gray-600 mb-4">{profile.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Examples:</h4>
                  {profile.examples.map((example, idx) => (
                    <div key={idx} className="text-sm text-gray-700">
                      • {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Partnership Implementation
            </h2>
            <p className="text-xl text-gray-600">
              How we establish and manage white-label partnerships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Initial Discussion</h3>
              <p className="text-gray-600 text-sm">Explore partnership fit and service alignment</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Service Planning</h3>
              <p className="text-gray-600 text-sm">Determine services that fit partner client needs</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Brand Integration</h3>
              <p className="text-gray-600 text-sm">Establish white-label delivery procedures</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">4</div>
              <h3 className="font-semibold text-gray-900 mb-2">Service Delivery</h3>
              <p className="text-gray-600 text-sm">Begin service delivery under partner brand</p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="section-padding bg-primary-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Partnership Advantages
            </h2>
            <p className="text-xl text-gray-600">
              Why white-label partnerships with prettysimpl deliver exceptional value
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Partners</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Immediate automation capability access</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Cost-efficient fractional model vs full-time hires</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Proven expertise and implementation track record</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Scalable partnership that grows with needs</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Partner's Clients</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Unified brand experience across all services</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Expert automation implementation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Consistent support through trusted partner</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Professional service delivery standards</span>
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
            Ready to Explore Partnership?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how white-label automation services can expand your capabilities 
            while maintaining complete brand control and client relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/discovery-call" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Discuss Partnership
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/services" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
              Explore Service Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhiteLabeledServicesPage;