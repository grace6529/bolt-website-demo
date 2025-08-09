import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Users, CheckCircle, ArrowRight, Mail } from 'lucide-react';

const DiscountsForNonProfitPage = () => {
  const discountFeatures = [
    {
      title: 'Special Pricing',
      description: 'Reduced rates for qualified non-profit organizations',
      icon: <Heart className="h-5 w-5" />
    },
    {
      title: 'Mission Support',
      description: 'Acknowledging and supporting valuable community work',
      icon: <Users className="h-5 w-5" />
    },
    {
      title: 'Community Impact',
      description: 'Contributing to meaningful causes and social good',
      icon: <CheckCircle className="h-5 w-5" />
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: 'Contact Our Team',
      description: 'Reach out through any of our available contact channels',
      details: ['Email, chat, or phone contact', 'Mention non-profit status', 'Express interest in discount program']
    },
    {
      step: 2,
      title: 'Eligibility Discussion',
      description: 'Team will review qualification and specific discount terms',
      details: ['Non-profit status verification', 'Mission and impact assessment', 'Service needs evaluation']
    },
    {
      step: 3,
      title: 'Personalized Approach',
      description: 'Each non-profit situation is evaluated individually',
      details: ['Customized discount levels', 'Service package recommendations', 'Implementation planning']
    }
  ];

  const eligibilityConsiderations = [
    'Qualified non-profit organization status',
    'Mission alignment with community or social benefit',
    'Documentation of non-profit registration',
    'Clear demonstration of community impact',
    'Specific automation and integration needs',
    'Organizational capacity for implementation'
  ];

  const applicableServices = [
    {
      service: 'Fractional Services',
      description: 'All fractional service packages eligible for non-profit pricing',
      packages: ['Fractional CAO (£3,500/month)', 'Half Day Fractional (£4,500/month)', 'Full Day Fractional (£7,500/month)']
    },
    {
      service: 'Project Services',
      description: 'Project-based engagements with non-profit considerations',
      packages: ['Custom automation projects', 'Systems integration work', 'Process optimization initiatives']
    },
    {
      service: 'Support Services',
      description: 'Ongoing support packages with community pricing',
      packages: ['Support retainers', 'Emergency assistance', 'Maintenance services']
    }
  ];

  const programBenefits = [
    'Reduced financial burden for technology transformation',
    'Access to professional automation services at community rates',
    'Ability to focus resources on core mission work',
    'Same high-quality service delivery as standard clients',
    'Expert support for organizational efficiency improvements',
    'Long-term partnership potential with ongoing support'
  ];

  const missionAlignment = [
    {
      category: 'Community Organizations',
      description: 'Local community service and support organizations',
      examples: ['Community centers', 'Local charities', 'Volunteer organizations']
    },
    {
      category: 'Social Services',
      description: 'Organizations providing essential social services',
      examples: ['Food banks', 'Homeless shelters', 'Support services']
    },
    {
      category: 'Educational & Cultural',
      description: 'Educational institutions and cultural organizations',
      examples: ['Educational nonprofits', 'Cultural centers', 'Arts organizations']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 text-green-200 mb-4">
              <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
              <span>/</span>
              <span>Pricing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Non-Profit Organization Discounts
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Yes, prettysimpl supports non-profit organizations by offering special discounts 
              to acknowledge and assist with their valuable community work.
            </p>
            <Link to="/faq" className="btn-secondary border-white text-white hover:bg-white hover:text-green-600">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Discount Program Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Supporting Community Organizations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in giving back to organizations that make a positive impact in their communities. 
              Our non-profit discount program helps these organizations access professional automation services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {discountFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-green-600">
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
              <Heart className="h-8 w-8 text-green-600" />
              <h3 className="text-2xl font-bold text-green-900">Community Commitment</h3>
            </div>
            <p className="text-green-800 text-lg">
              Our non-profit discount program reflects our commitment to supporting organizations 
              that work tirelessly to improve their communities and serve those in need.
            </p>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Apply for Discounts
            </h2>
            <p className="text-xl text-gray-600">
              Simple process to discuss eligibility and access non-profit pricing
            </p>
          </div>
          
          <div className="space-y-8">
            {applicationProcess.map((process, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold text-lg">{process.step}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{process.title}</h3>
                        <p className="text-gray-600">{process.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="space-y-2">
                      {process.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
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

      {/* Eligibility Considerations */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Eligibility Considerations
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We evaluate each non-profit application individually, considering various factors 
                to ensure our discount program supports organizations making genuine community impact.
              </p>
              
              <div className="space-y-4">
                {eligibilityConsiderations.map((consideration, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{consideration}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Information Needed</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Organization Details</h4>
                  <p className="text-gray-600">Non-profit status, mission statement, and community impact description</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Service Requirements</h4>
                  <p className="text-gray-600">Specific automation needs, expected outcomes, and implementation timeline</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Documentation</h4>
                  <p className="text-gray-600">Proof of non-profit status and organizational registration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applicable Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Services Eligible for Discounts
            </h2>
            <p className="text-xl text-gray-600">
              Non-profit discounts apply across our full range of automation services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applicableServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.service}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-2">
                  {service.packages.map((pkg, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="bg-green-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{pkg}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits for Non-Profit Organizations
            </h2>
            <p className="text-xl text-gray-600">
              How our discount program helps non-profits achieve their mission more effectively
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programBenefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Alignment */}
      <section className="section-padding bg-green-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Organizations We Support
            </h2>
            <p className="text-xl text-gray-600">
              Types of non-profit organizations that align with our community support mission
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionAlignment.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Examples:</h4>
                  {category.examples.map((example, idx) => (
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

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Apply for Non-Profit Discounts?
            </h2>
            <p className="text-xl text-gray-600">
              Contact our team to discuss your organization's eligibility and service needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Application</h3>
              <p className="text-gray-600 mb-4">
                Send details about your organization and automation needs.
              </p>
              <Link to="/contact" className="btn-primary bg-green-600 hover:bg-green-700">
                Send Email
              </Link>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Discovery Call</h3>
              <p className="text-gray-600 mb-4">
                Schedule a consultation to discuss your needs and eligibility.
              </p>
              <Link to="/discovery-call" className="btn-primary bg-green-600 hover:bg-green-700">
                Book Call
              </Link>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mission Discussion</h3>
              <p className="text-gray-600 mb-4">
                Share your mission and learn how automation can help.
              </p>
              <Link to="/contact" className="btn-primary bg-green-600 hover:bg-green-700">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-green-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Support Your Mission Together
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us today to learn about non-profit discounts and how automation 
            can help your organization serve your community more effectively.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-green-600 hover:bg-gray-100">
              Apply for Non-Profit Discount
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/discovery-call" className="btn-secondary border-white text-white hover:bg-white hover:text-green-600">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiscountsForNonProfitPage;