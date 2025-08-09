import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, CheckCircle, Users, Zap, ArrowRight, Shield } from 'lucide-react';

const MinimumCommitmentPeriodPage = () => {
  const flexibilityFeatures = [
    {
      title: 'Start When Ready',
      description: 'Begin services when your business needs arise, not based on arbitrary timelines',
      icon: <Calendar className="h-5 w-5" />
    },
    {
      title: 'End When Appropriate',
      description: 'Discontinue services when needs change or objectives are fulfilled',
      icon: <CheckCircle className="h-5 w-5" />
    },
    {
      title: 'Business-Driven Timing',
      description: 'Service engagement aligned with actual business requirements and priorities',
      icon: <Users className="h-5 w-5" />
    }
  ];

  const servicePackages = [
    {
      name: 'Full Day Fractional Services',
      price: '£7,500/month',
      commitment: 'No minimum term required',
      features: ['Month-to-month engagement possible', 'Flexible start and end dates', 'Embedded team member approach']
    },
    {
      name: 'Half Day Fractional Services',
      price: '£4,500/month',
      commitment: 'No minimum commitment period',
      features: ['Adaptable engagement schedule', 'Business need-driven timing', 'Regular part-time support']
    },
    {
      name: 'Fractional Chief Automation Officer',
      price: '£3,500/month',
      commitment: 'No minimum term obligation',
      features: ['Strategic engagement flexibility', 'Executive support when needed', 'High-level automation guidance']
    }
  ];

  const businessBenefits = [
    'Risk-free trial opportunity to evaluate service fit',
    'Easier budget planning without locked-in contracts',
    'Accommodation for seasonal or cyclical business needs',
    'Services can scale up or down with business growth',
    'Strategic flexibility to adapt technology support',
    'Low-risk engagement reduces business financial exposure'
  ];

  const transitionElements = [
    'Reasonable advance notice for service conclusion',
    'Proper handover and knowledge transfer time',
    'Coordination of final deliverables and documentation',
    'Complete system documentation transfer',
    'Knowledge transfer sessions with your team',
    'Ongoing support options during transition period'
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
              <span>Service Terms</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Minimum Commitment Period
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              No, there is no minimum commitment period for our fractional service packages. 
              We provide maximum flexibility to start or end services based on your evolving business needs.
            </p>
            <Link to="/faq" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* No Minimum Commitment */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Zero Minimum Commitment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our fractional service packages require no minimum commitment period, 
              giving you complete flexibility to engage services based on actual needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {flexibilityFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-primary-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Shield className="h-8 w-8 text-green-600" />
              <h3 className="text-2xl font-bold text-green-900">Risk-Free Engagement</h3>
            </div>
            <p className="text-green-800 text-lg">
              With no minimum commitment, you can test our services, evaluate the fit, 
              and continue only if we're delivering the value you expect.
            </p>
          </div>
        </div>
      </section>

      {/* Service Package Details */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Flexible Service Packages
            </h2>
            <p className="text-xl text-gray-600">
              All fractional services operate without minimum commitment requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-2xl font-bold text-primary-600 mb-2">{pkg.price}</div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {pkg.commitment}
                  </div>
                </div>
                
                <div className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Business Benefits of No Commitment
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our no minimum commitment policy provides significant advantages for businesses 
                looking for flexible, adaptable technology partnerships.
              </p>
              
              <div className="space-y-4">
                {businessBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Zap className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-primary-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Client-Centric Philosophy</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Business-First Approach</h4>
                  <p className="text-gray-600">Service terms designed around client business requirements rather than provider convenience</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Relationship Over Contracts</h4>
                  <p className="text-gray-600">Emphasis on partnership and value delivery rather than contractual obligations</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Value-Based Engagement</h4>
                  <p className="text-gray-600">Continued service based on delivered value and mutual benefit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smooth Transition Management */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Considerate Cancellation Policy
            </h2>
            <p className="text-xl text-gray-600">
              While there's no minimum commitment, we ensure smooth transitions that respect both parties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transition Planning</h3>
              <div className="space-y-3">
                {transitionElements.slice(0, 3).map((element, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-primary-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{element}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Knowledge Transfer</h3>
              <div className="space-y-3">
                {transitionElements.slice(3).map((element, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-primary-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{element}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="section-padding bg-primary-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why This Matters
            </h2>
            <p className="text-xl text-gray-600">
              Our no minimum commitment policy reflects confidence in our service quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">🤝</div>
              <h3 className="font-semibold text-gray-900 mb-2">Trust-Based Model</h3>
              <p className="text-gray-600 text-sm">Relationships continue based on trust and results</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">🎯</div>
              <h3 className="font-semibold text-gray-900 mb-2">Service Confidence</h3>
              <p className="text-gray-600 text-sm">No commitment needed - we're confident in our value</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">🚀</div>
              <h3 className="font-semibold text-gray-900 mb-2">Lower Barriers</h3>
              <p className="text-gray-600 text-sm">Easier to start and trial our services</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">💪</div>
              <h3 className="font-semibold text-gray-900 mb-2">Mutual Benefit</h3>
              <p className="text-gray-600 text-sm">Focus on delivering value that naturally extends partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Risk-Free?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            With no minimum commitment, you can begin your automation journey today 
            and continue only if we're delivering the value you expect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/discovery-call" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Start Your Risk-Free Trial
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

export default MinimumCommitmentPeriodPage;