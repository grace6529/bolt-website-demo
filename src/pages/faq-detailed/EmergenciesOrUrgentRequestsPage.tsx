import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, Clock, Shield, Zap, ArrowRight, Phone } from 'lucide-react';

const EmergenciesOrUrgentRequestsPage = () => {
  const emergencyFeatures = [
    {
      title: 'Priority Handling',
      description: 'Urgent requests receive immediate prioritization over routine work',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      title: 'Prompt Response',
      description: 'Commitment to rapid attention for critical business issues',
      icon: <Clock className="h-5 w-5" />
    },
    {
      title: 'Extended Availability',
      description: 'Support available beyond standard package hours when needed',
      icon: <Shield className="h-5 w-5" />
    }
  ];

  const emergencyScenarios = [
    {
      category: 'System Failures',
      scenarios: [
        'Automation workflow breakdowns affecting business operations',
        'Integration system outages disrupting data flow',
        'Low-code platform issues preventing access to critical applications',
        'Critical process interruptions impacting client service'
      ]
    },
    {
      category: 'Urgent Business Needs',
      scenarios: [
        'Time-sensitive automation requirements for business opportunities',
        'Critical system modifications needed for compliance',
        'Emergency integrations required for new partnerships',
        'Rapid deployment needs for competitive advantage'
      ]
    },
    {
      category: 'Operational Disruptions',
      scenarios: [
        'Process automation failures affecting daily operations',
        'Data synchronization issues causing information gaps',
        'Client-facing system problems impacting customer experience',
        'Business-critical functionality losses requiring immediate attention'
      ]
    }
  ];

  const responseCharacteristics = [
    'Immediate focus on emergency situations over routine tasks',
    'Priority queue placement for urgent requests',
    'Extended support beyond standard package hours',
    'Business continuity focus to maintain operations',
    'Critical issue resolution with rapid deployment',
    'Operational support during emergency situations'
  ];

  const serviceIntegration = [
    {
      service: 'Fractional Services',
      description: 'Emergency support extends beyond regular fractional service hours',
      features: ['Beyond allocated time support', 'All packages include emergency capability', 'Supplements regular scheduled delivery']
    },
    {
      service: 'Project Services',
      description: 'Emergency assistance during critical project phases',
      features: ['Implementation emergency support', 'Deployment issue resolution', 'Critical milestone assistance']
    },
    {
      service: 'Support Packages',
      description: 'Emergency escalation for support retainer clients',
      features: ['Priority escalation available', 'Extended hour assistance', 'Critical issue prioritization']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 text-red-200 mb-4">
              <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
              <span>/</span>
              <span>Emergency Support</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Emergency & Urgent Request Handling
            </h1>
            <p className="text-xl text-red-100 mb-8">
              We prioritize client emergencies and urgent needs, ensuring prompt attention and response, 
              even if they fall outside of the regular scheduled time for your package.
            </p>
            <Link to="/faq" className="btn-secondary border-white text-white hover:bg-white hover:text-red-600">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Response Features */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Emergency Response Commitment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When urgent situations arise, we're ready to respond with priority support 
              that goes beyond your regular service allocation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {emergencyFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-red-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <AlertTriangle className="h-8 w-8 text-red-600" />
              <h3 className="text-2xl font-bold text-red-900">Business Continuity Focus</h3>
            </div>
            <p className="text-red-800 text-lg">
              We understand that business-critical issues don't follow schedules. Our emergency support 
              ensures your operations continue running smoothly when urgent situations arise.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Scenarios */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Types of Emergency Situations
            </h2>
            <p className="text-xl text-gray-600">
              Common scenarios where our emergency support provides critical assistance
            </p>
          </div>
          
          <div className="space-y-8">
            {emergencyScenarios.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.scenarios.map((scenario, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{scenario}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Characteristics */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How We Handle Emergencies
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our emergency response is designed to minimize business disruption and 
                restore normal operations as quickly as possible.
              </p>
              
              <div className="space-y-4">
                {responseCharacteristics.map((characteristic, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Zap className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{characteristic}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-red-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Emergency vs. Regular Support</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Regular Support</h4>
                  <p className="text-gray-600">Scheduled within fractional service hours during business operations</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Emergency Support</h4>
                  <p className="text-gray-600">Outside normal allocation with prioritized response for critical issues</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Hybrid Approach</h4>
                  <p className="text-gray-600">Combination of planned support with responsive emergency assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Integration */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Emergency Support Across All Services
            </h2>
            <p className="text-xl text-gray-600">
              Emergency response capability is integrated into all our service offerings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceIntegration.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.service}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="bg-red-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Benefits */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Emergency Support Benefits
            </h2>
            <p className="text-xl text-gray-600">
              The advantages of having dedicated emergency support for your automation systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">🛡️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Business Protection</h3>
              <p className="text-gray-600 text-sm">Minimized disruption to operations</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Rapid Response</h3>
              <p className="text-gray-600 text-sm">Quick resolution reduces impact</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-2">Peace of Mind</h3>
              <p className="text-gray-600 text-sm">Know help is available when needed</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">🤝</div>
              <h3 className="font-semibold text-gray-900 mb-2">Partnership Focus</h3>
              <p className="text-gray-600 text-sm">Commitment to client success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Emergencies */}
      <section className="section-padding bg-red-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Request Emergency Support
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to reach us when urgent situations arise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Phone</h3>
              <p className="text-gray-600 mb-4">
                Direct phone line for immediate emergency assistance and rapid response.
              </p>
              <Link to="/contact" className="btn-primary bg-red-600 hover:bg-red-700">
                Get Emergency Number
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Priority Email</h3>
              <p className="text-gray-600 mb-4">
                Mark emails as urgent for priority handling and rapid response.
              </p>
              <Link to="/contact" className="btn-primary bg-red-600 hover:bg-red-700">
                Send Urgent Email
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Escalation</h3>
              <p className="text-gray-600 mb-4">
                Emergency escalation procedures for critical business situations.
              </p>
              <Link to="/contact" className="btn-primary bg-red-600 hover:bg-red-700">
                Learn Escalation Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-red-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Emergency Support Right Now?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Don't wait when critical issues arise. Our emergency support team is ready 
            to provide immediate assistance to restore your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-red-600 hover:bg-gray-100">
              Contact Emergency Support
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/services" className="btn-secondary border-white text-white hover:bg-white hover:text-red-600">
              Learn About Support Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergenciesOrUrgentRequestsPage;