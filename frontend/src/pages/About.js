import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Nous nous engageons à fournir des services de la plus haute qualité et à dépasser constamment les attentes de nos clients.'
    },
    {
      icon: Users,
      title: 'Proximité',
      description: 'Nous établissons des relations durables basées sur la confiance, l\'écoute et l\'accompagnement personnalisé.'
    },
    {
      icon: TrendingUp,
      title: 'Impact',
      description: 'Nous mesurons notre succès par l\'impact positif que nous créons dans la vie de nos clients et de la communauté.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Clients accompagnés', description: 'Des particuliers et entrepreneurs transformés' },
    { number: '15+', label: 'Années d\'expérience', description: 'Une expertise reconnue dans le développement' },
    { number: '98%', label: 'Taux de satisfaction', description: 'Des clients qui recommandent nos services' },
    { number: '50+', label: 'Formations dispensées', description: 'Dans tous nos domaines d\'expertise' }
  ];

  const team = [
    {
      name: 'Directeur Général',
      role: 'Fondateur & CEO',
      description: 'Expert en développement personnel et entrepreneuriat avec plus de 15 ans d\'expérience.'
    },
    {
      name: 'Équipe Formation',
      role: 'Formateurs experts',
      description: 'Une équipe de formateurs qualifiés dans chaque domaine d\'intervention.'
    },
    {
      name: 'Support Client',
      role: 'Accompagnement 24/7',
      description: 'Un service client dévoué pour vous accompagner à chaque étape de votre parcours.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7544430/pexels-photo-7544430.jpeg"
            alt="Team Collaboration"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              À Propos de{' '}
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Kamsolution
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Votre partenaire de confiance pour le développement personnel, l'entrepreneuriat et la réussite financière depuis plus de 15 ans.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-blue-600" />
                <h2 className="text-4xl font-bold text-gray-900">Notre Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Accompagner les particuliers et entrepreneurs dans leur développement personnel, 
                leur réussite financière et professionnelle en leur fournissant les outils, 
                les connaissances et le soutien nécessaires pour atteindre leurs objectifs les plus ambitieux.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nous croyons que chaque personne a un potentiel unique et nous nous engageons 
                à révéler ce potentiel à travers des approches personnalisées et des méthodes éprouvées.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl flex items-center justify-center">
                <Target className="w-24 h-24 text-blue-600" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative lg:order-2"
            >
              <div className="w-full h-96 bg-gradient-to-br from-purple-100 to-blue-200 rounded-2xl flex items-center justify-center">
                <Eye className="w-24 h-24 text-purple-600" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:order-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="w-8 h-8 text-purple-600" />
                <h2 className="text-4xl font-bold text-gray-900">Notre Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Être un acteur clé de la transformation individuelle et collective en Côte d'Ivoire 
                et en Afrique, en créant un écosystème où chaque personne peut s'épanouir pleinement 
                et contribuer positivement à sa communauté.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nous aspirons à être reconnus comme la référence en matière d'accompagnement 
                et de formation, en innovant constamment pour répondre aux défis de demain.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Heart className="w-8 h-8 text-red-500" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Nos Valeurs</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes fondamentaux qui guident chacune de nos actions et façonnent notre culture d'entreprise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-xl border border-blue-200 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nos Résultats en Chiffres
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Des résultats concrets qui témoignent de notre expertise et de notre engagement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-blue-200 mb-3">{stat.label}</div>
                <div className="text-blue-100 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
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
                Équipe
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des experts passionnés et dévoués à votre réussite
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-xl border border-blue-200 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Rejoignez l'aventure Kamsolution
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Découvrez comment nous pouvons vous accompagner dans votre développement personnel et professionnel
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              Découvrir nos services
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;