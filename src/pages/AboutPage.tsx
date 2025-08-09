import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Zap, Target, Shield, TrendingUp, ArrowRight, Award, Globe, Clock } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const AboutPage = () => {
  const metrics = [
    { icon: <Users className="h-8 w-8" />, value: '300+', label: 'Happy Clients & Partners' },
    { icon: <Zap className="h-8 w-8" />, value: '1,500+', label: 'Applications Optimized' },
    { icon: <Star className="h-8 w-8" />, value: '5.0/5', label: 'Client Rating' },
    { icon: <Clock className="h-8 w-8" />, value: '10+', label: 'Years Experience' }
  ];

  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Grow Bigger',
      description: 'We help businesses scale operations effectively through intelligent automation solutions that expand capacity without proportional resource increases.'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Grow Stronger',
      description: 'Building robust, reliable business processes that create sustainable competitive advantages and operational resilience.'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Grow More Agile',
      description: 'Increasing flexibility and responsiveness to market changes through adaptable automation frameworks and strategic technology partnerships.'
    }
  ];

  const platforms = [
    { name: 'Airtable', description: 'Database and workflow management expertise' },
    { name: 'Make', description: 'Advanced automation and integration capabilities' },
    { name: 'Softr', description: 'No-code application development mastery' },
    { name: 'Smartsuite', description: 'Comprehensive business process management' },
    { name: 'Noloco', description: 'Database-driven application development' }
  ];

  const achievements = [
    'Nearly a decade of continuous service in business automation',
    'Established reputation in the business automation space',
    'Strong client testimonial base with consistent 5-star ratings',
    'Recognized expertise in leading low-code platforms',
    'Proven track record with 300+ successful client partnerships',
    'Serving UK and global markets from South Africa base'
  ];

  return (
    <div>
      <SEOHead
        title="About Us - prettysimpl"
        description="Founded in 2015, prettysimpl has helped 300+ organizations with business automation. 5-star rated team with 10+ years of expertise in low-code platforms."
        keywords="about prettysimpl, business automation company, low-code experts, founded 2015, South Africa, UK services"
        canonical="/about"
        ogTitle="About prettysimpl - Business Automation Experts"
        ogDescription="Nearly a decade of helping businesses grow through automation. 300+ clients, 1,500+ applications optimized, 5-star rated team."
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 text-primary-200 mb-4">
                <Award className="h-5 w-5" />
                <span className="font-medium">Founded 2015 • South Africa</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Helping Businesses Grow Through Automation
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                We help your business grow bigger, stronger and more agile through low-code process automation and systems integration.
              </p>
              <Link to="/discovery-call" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Let's Talk About Your Business
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:bg-white/15">
                  <div className="text-primary-200 mb-3 flex justify-center">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2">{metric.value}</div>
                  <div className="text-primary-100 text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 2015, we've been dedicated to simplifying business operations through innovative automation solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-primary-600">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story & Expertise
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg">
                  Founded in 2015, prettysimpl has grown from a vision of simplifying business operations 
                  to a trusted partner for over 300 organizations worldwide.
                </p>
                <p>
                  Based in South Africa and serving primarily UK and global markets, we specialize in 
                  business process automation, low-code development consulting, and systems integration. 
                  Our approach focuses on creating sustainable, scalable solutions that grow with your business.
                </p>
                <p>
                  With over a decade of hands-on experience and expertise across leading automation platforms, 
                  we've optimized over 1,500 applications and maintained a consistent 5-star client rating.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Achievements</h3>
                <div className="space-y-3">
                  {achievements.slice(0, 3).map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Star className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Globe className="h-6 w-6 text-primary-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Global Reach</h3>
                </div>
                <p className="text-gray-600">
                  Serving UK and global markets with timezone-dependent support, 
                  bringing South African innovation to international businesses.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="h-6 w-6 text-primary-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Industry Recognition</h3>
                </div>
                <p className="text-gray-600">
                  Consistent 5-star ratings and proven expertise in leading low-code platforms 
                  with 300+ successful client partnerships.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="h-6 w-6 text-primary-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Proven Results</h3>
                </div>
                <p className="text-gray-600">
                  Over 1,500 applications optimized and integrated, demonstrating 
                  extensive hands-on implementation experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Expertise */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Platform Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Specialized knowledge in leading low-code and automation platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{platform.name}</h3>
                <p className="text-gray-600">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Philosophy */}
      <section className="section-padding bg-primary-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Service Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in building long-term partnerships through transparent communication, 
              proven results, and flexible engagement models.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Client-Centric</h3>
              <p className="text-gray-600 text-sm">Partnership-based relationships with measurable outcomes</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Technical Excellence</h3>
              <p className="text-gray-600 text-sm">Deep expertise in cutting-edge automation platforms</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Results-Oriented</h3>
              <p className="text-gray-600 text-sm">Focus on measurable business impact and growth</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Future-Focused</h3>
              <p className="text-gray-600 text-sm">Strategic technology partnerships for long-term success</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join 300+ businesses that have transformed their operations with our automation expertise. 
            Let's discuss how we can help your business grow.
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

export default AboutPage;