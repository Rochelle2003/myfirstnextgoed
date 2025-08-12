import React from 'react';
import Link from 'next/link';

export default function Enterprise() {
  const solutions = [
    {
      id: 1,
      name: 'Custom Web Applicaties',
      description: 'Op maat gemaakte web applicaties die perfect aansluiten bij jouw bedrijfsprocessen.',
      icon: '💼',
      features: ['Tailor-made oplossingen', 'Schaalbaarheid', 'Integratie met bestaande systemen', '24/7 support']
    },
    {
      id: 2,
      name: 'E-commerce Platforms',
      description: 'Volledig functionele webshops met geavanceerde features en betalingsintegraties.',
      icon: '🛒',
      features: ['Multi-channel verkoop', 'Inventory management', 'Analytics dashboard', 'Mobile-first design']
    },
    {
      id: 3,
      name: 'Enterprise Dashboards',
      description: 'Krachtige dashboards voor data visualisatie en bedrijfsintelligentie.',
      icon: '📊',
      features: ['Real-time data', 'Custom rapportages', 'API integraties', 'Role-based toegang']
    },
    {
      id: 4,
      name: 'API Development',
      description: 'Robuuste API\'s voor interne en externe integraties en microservices.',
      icon: '🔌',
      features: ['REST & GraphQL', 'Documentatie', 'Rate limiting', 'Monitoring & logging']
    },
    {
      id: 5,
      name: 'Cloud Migratie',
      description: 'Professionele begeleiding bij het migreren naar moderne cloud platforms.',
      icon: '☁️',
      features: ['AWS/Azure/GCP', 'Containerisatie', 'CI/CD pipelines', 'Performance optimalisatie']
    },
    {
      id: 6,
      name: 'DevOps Services',
      description: 'Complete DevOps implementatie voor snellere development en deployment.',
      icon: '🚀',
      features: ['Infrastructure as Code', 'Monitoring', 'Security scanning', 'Backup & recovery']
    }
  ];

  const benefits = [
    {
      title: 'Expertise',
      description: 'Meer dan 10 jaar ervaring in enterprise software development',
      icon: '🎯'
    },
    {
      title: 'Schaalbaarheid',
      description: 'Oplossingen die groeien met jouw bedrijf',
      icon: '📈'
    },
    {
      title: 'Support',
      description: '24/7 technische ondersteuning en onderhoud',
      icon: '🛠️'
    },
    {
      title: 'Security',
      description: 'Enterprise-grade beveiliging en compliance',
      icon: '🔒'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Enterprise Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Professionele software oplossingen voor bedrijven die willen groeien en innoveren. 
            Van custom applicaties tot complete digitale transformaties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Gratis Consultatie
            </Link>
            <Link 
              href="#solutions"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Bekijk Oplossingen
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Onze Enterprise Oplossingen
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <div key={solution.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {solution.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Waarom Kiezen voor Onze Enterprise Services?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Onze Aanpak
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">
                We analyseren jouw behoeften en bedrijfsprocessen om de beste oplossing te vinden.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">
                We maken een gedetailleerd plan met tijdlijnen, milestones en deliverables.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600">
                Onze experts bouwen je oplossing met moderne technologieën en best practices.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Launch & Support</h3>
              <p className="text-gray-600">
                We lanceren je oplossing en bieden continue ondersteuning en onderhoud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Technologieën die We Gebruiken
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'Next.js', 'React', 'Node.js', 'Python', 'Java', 'Go',
              'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Azure', 'Docker',
              'Kubernetes', 'GraphQL', 'TypeScript', 'Tailwind CSS'
            ].map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <span className="text-gray-700 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar om te Innoveren?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Neem contact op voor een gratis consultatie en ontdek hoe we jouw bedrijf kunnen helpen groeien.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Je Project
            </Link>
            <Link 
              href="/Showcase"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors"
            >
              Bekijk Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}