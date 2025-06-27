import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  DollarSign, 
  Briefcase, 
  GraduationCap, 
  Sparkles, 
  ShoppingBag,
  Target,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: User,
      title: 'Développement Personnel',
      description: 'Révélez votre potentiel intérieur et développez une confiance en soi inébranlable.',
      image: 'https://images.unsplash.com/photo-1607944622373-a7758235520a',
      features: [
        'Coaching en confiance en soi',
        'Gestion du stress et des émotions',
        'Définition et atteinte d\'objectifs',
        'Amélioration des relations interpersonnelles'
      ],
      price: 'À partir de 50€/séance'
    },
    {
      icon: DollarSign,
      title: 'Éducation Financière',
      description: 'Maîtrisez vos finances et créez une stratégie d\'investissement gagnante.',
      image: 'https://images.pexels.com/photos/9169180/pexels-photo-9169180.jpeg',
      features: [
        'Planification budgétaire personnalisée',
        'Stratégies d\'investissement',
        'Éducation sur les cryptomonnaies',
        'Préparation de la retraite'
      ],
      price: 'À partir de 75€/séance'
    },
    {
      icon: Briefcase,
      title: 'Entrepreneuriat',
      description: 'Transformez vos idées en business prospère avec notre accompagnement expert.',
      image: 'https://images.pexels.com/photos/5475749/pexels-photo-5475749.jpeg',
      features: [
        'Validation d\'idées business',
        'Business plan et stratégie',
        'Recherche de financement',
        'Développement commercial'
      ],
      price: 'À partir de 100€/séance'
    },
    {
      icon: GraduationCap,
      title: 'Formation & Coaching en Vente',
      description: 'Développez vos compétences en vente et boostez vos performances commerciales.',
      image: 'https://images.unsplash.com/photo-1659355894058-c02512c16533',
      features: [
        'Techniques de vente avancées',
        'Négociation commerciale',
        'Prospection et fidélisation',
        'Management d\'équipe commerciale'
      ],
      price: 'À partir de 80€/séance'
    },
    {
      icon: Sparkles,
      title: 'Beauté, Cosmétique & Soins',
      description: 'Lancez votre activité dans la beauté avec nos formations spécialisées.',
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b',
      features: [
        'Formation aux soins esthétiques',
        'Création de produits cosmétiques',
        'Marketing beauté et bien-être',
        'Certification professionnelle'
      ],
      price: 'À partir de 120€/formation'
    },
    {
      icon: ShoppingBag,
      title: 'Shopping et Vente au Détail',
      description: 'Optimisez votre commerce et maximisez vos ventes avec nos stratégies éprouvées.',
      image: 'https://images.unsplash.com/photo-1647887071649-5dbb0887dce6',
      features: [
        'Merchandising et agencement',
        'Gestion des stocks',
        'Expérience client premium',
        'E-commerce et digital'
      ],
      price: 'À partir de 90€/consultation'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation Gratuite',
      description: 'Évaluation de vos besoins et définition de vos objectifs'
    },
    {
      step: '02',
      title: 'Plan Personnalisé',
      description: 'Création d\'un programme sur mesure adapté à votre profil'
    },
    {
      step: '03',
      title: 'Accompagnement',
      description: 'Suivi régulier et ajustements pour garantir votre réussite'
    },
    {
      step: '04',
      title: 'Résultats',
      description: 'Atteinte de vos objectifs et transformation durable'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-400 to-pink-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nos{' '}
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Un accompagnement expert dans tous les domaines clés de votre développement personnel et professionnel
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-white/25 transition-all duration-300"
            >
              Consultation gratuite
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Domaines d'
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos services spécialisés, conçus pour répondre à vos besoins spécifiques et vous accompagner vers le succès
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-xl border border-blue-200 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div className="text-blue-600 font-semibold">{service.price}</div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <span>En savoir plus</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Notre{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Processus
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche structurée et personnalisée pour garantir votre succès
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Témoignages{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Clients
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez ce que nos clients disent de leur expérience avec Kamsolution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                service: 'Développement Personnel',
                content: 'Grâce au coaching de Kamsolution, j\'ai développé une confiance en moi qui a transformé ma carrière.',
                rating: 5
              },
              {
                name: 'Michel Kouadio',
                service: 'Entrepreneuriat',
                content: 'L\'accompagnement m\'a permis de lancer mon entreprise avec succès. Résultats exceptionnels !',
                rating: 5
              },
              {
                name: 'Aminata Traoré',
                service: 'Formation Beauté',
                content: 'Formation complète et professionnelle. Je recommande vivement leurs services.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-xl border border-blue-200"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-blue-600 text-sm">{testimonial.service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à commencer votre transformation ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons vous aider
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-white/25 transition-all duration-300"
              >
                Consultation gratuite
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Demander un devis
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;