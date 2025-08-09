import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Eye, Lock, Users, Globe, FileText, ArrowRight } from 'lucide-react';

const PrivacyPage = () => {
  const dataTypes = [
    {
      icon: <Users className="h-5 w-5" />,
      title: 'Personal Information',
      description: 'Name, email address, phone number, and business contact details'
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: 'Usage Data',
      description: 'Website interactions, service usage patterns, and communication preferences'
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: 'Business Information',
      description: 'Company details, project requirements, and service-related communications'
    }
  ];

  const userRights = [
    'Access your personal data and understand how it\'s processed',
    'Request correction of inaccurate or incomplete information',
    'Request deletion of your personal data under certain circumstances',
    'Object to processing of your personal data for specific purposes',
    'Request restriction of processing in certain situations',
    'Data portability rights for information you\'ve provided to us'
  ];

  const securityMeasures = [
    {
      title: 'Data Encryption',
      description: 'All data transmissions are encrypted using industry-standard protocols'
    },
    {
      title: 'Access Controls',
      description: 'Strict access controls ensure only authorized personnel can access your data'
    },
    {
      title: 'Regular Audits',
      description: 'Regular security audits and assessments to maintain data protection standards'
    },
    {
      title: 'Secure Storage',
      description: 'Data stored in secure, compliant infrastructure with appropriate safeguards'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 text-primary-200 mb-4">
              <Shield className="h-6 w-6" />
              <span className="font-medium">Effective Date: January 23, 2023</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Your privacy is important to us. This policy explains how we collect, use, 
              and protect your personal information when you use our services.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Contact Us About Privacy
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Information We Collect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collect information to provide better services and improve your experience with our automation solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {dataTypes.map((type, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">
                    {type.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How We Collect Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Directly From You:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Contact forms and discovery call bookings</li>
                  <li>• Email communications and support requests</li>
                  <li>• Service agreements and project consultations</li>
                  <li>• Account registration and profile updates</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Automatically:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Website usage data and analytics</li>
                  <li>• Device information and browser details</li>
                  <li>• IP addresses and location data</li>
                  <li>• Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Usage */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How We Use Your Information
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We use your information to provide, maintain, and improve our services, 
                communicate with you, and ensure the security of our platform.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Service Delivery</h4>
                    <p className="text-gray-600">Providing automation services, support, and project management</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Communication</h4>
                    <p className="text-gray-600">Responding to inquiries, providing updates, and sending important notices</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Improvement</h4>
                    <p className="text-gray-600">Analyzing usage patterns to enhance our services and user experience</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Legal Compliance</h4>
                    <p className="text-gray-600">Meeting legal obligations and protecting our rights and interests</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Data Sharing Policy</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Lock className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">We do not sell your personal information</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lock className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Limited sharing with trusted service providers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lock className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Only when required by law or to protect rights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lock className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">With your explicit consent for specific purposes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Data Security & Protection
            </h2>
            <p className="text-xl text-gray-600">
              We implement comprehensive security measures to protect your information
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityMeasures.map((measure, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                <div className="bg-primary-100 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{measure.title}</h3>
                  <p className="text-gray-600">{measure.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Rights */}
      <section className="section-padding bg-primary-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Your Rights & Choices
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                You have important rights regarding your personal information. 
                We're committed to helping you exercise these rights.
              </p>
              
              <div className="space-y-3">
                {userRights.map((right, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Eye className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{right}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Exercise Your Rights</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Contact Us</h4>
                  <p className="text-gray-600 mb-3">
                    Send us an email or use our contact form to request access, 
                    correction, or deletion of your data.
                  </p>
                  <Link to="/contact" className="text-primary-600 hover:text-primary-700 font-medium">
                    Contact Support →
                  </Link>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                  <p className="text-gray-600">
                    We'll respond to your request within 30 days and provide 
                    updates if additional time is needed.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Verification</h4>
                  <p className="text-gray-600">
                    We may need to verify your identity before processing 
                    certain requests to protect your privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Transfers & GDPR */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              International Data Transfers & GDPR Compliance
            </h2>
            <p className="text-xl text-gray-600">
              We ensure appropriate safeguards for international data transfers and full GDPR compliance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">International Transfers</h3>
              <p className="text-gray-600 mb-4">
                As a South Africa-based company serving UK and global markets, we may transfer 
                your data internationally. We ensure appropriate safeguards are in place.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Adequate protection measures implemented</li>
                <li>• Standard contractual clauses where applicable</li>
                <li>• Regular assessment of transfer mechanisms</li>
              </ul>
            </div>
            
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">GDPR Compliance</h3>
              <p className="text-gray-600 mb-4">
                We comply with the General Data Protection Regulation (GDPR) for all 
                EU residents and maintain high privacy standards globally.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Lawful basis for all data processing</li>
                <li>• Data minimization and purpose limitation</li>
                <li>• Regular privacy impact assessments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Updates */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Questions About Privacy?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            We're committed to transparency and protecting your privacy. 
            Contact us if you have any questions about this policy or your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Contact Privacy Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/discovery-call" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
              Book Discovery Call
            </Link>
          </div>
          <p className="text-primary-200 text-sm">
            This policy was last updated on January 23, 2023. We'll notify you of any significant changes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;