import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Code, 
  Smartphone, 
  Database, 
  Globe, 
  Mail, 
  Phone, 
  MessageCircle,
  ExternalLink,
  Github,
  Linkedin,
  Download,
  MapPin,
  Calendar,
  Award,
  Zap,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  Palette,
  Figma,
  Sun,
  Moon
} from 'lucide-react';
import mamadouPhoto from './mamadou_bassirou_diame.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = {
    bg: isDarkMode 
      ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
      : 'bg-gradient-to-br from-gray-50 via-white to-gray-100',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    textSecondary: isDarkMode ? 'text-white/80' : 'text-gray-700',
    textMuted: isDarkMode ? 'text-white/60' : 'text-gray-500',
    nav: isDarkMode ? 'bg-black/20' : 'bg-white/20',
    navBorder: isDarkMode ? 'border-white/10' : 'border-gray-200/30',
    card: isDarkMode ? 'bg-white/5' : 'bg-white/80',
    cardBorder: isDarkMode ? 'border-white/10' : 'border-gray-200/30',
    cardHover: isDarkMode ? 'hover:bg-white/10' : 'hover:bg-white/90',
    section: isDarkMode ? 'bg-black/20' : 'bg-gray-100/50'
  };

  const skills = [
    { category: 'Frontend', items: ['HTML5/CSS3', 'JavaScript', 'TypeScript', 'Angular', 'TailwindCSS'], icon: Code, color: 'from-blue-500 to-purple-600' },
    { category: 'Backend', items: ['PHP', 'Node.js', 'Java', 'Laravel', 'Spring'], icon: Database, color: 'from-green-500 to-teal-600' },
    { category: 'Mobile', items: ['React Native', 'Flutter', 'Ionic'], icon: Smartphone, color: 'from-orange-500 to-red-600' },
    { category: 'UI/UX Design', items: ['Figma', 'Prototypage', 'Design System', 'User Research', 'Wireframing'], icon: Palette, color: 'from-pink-500 to-rose-600' },
    { category: 'Database', items: ['MySQL', 'MongoDB', 'Firebase'], icon: Globe, color: 'from-purple-500 to-indigo-600' }
  ];

  const projects = [
    {
      name: 'JOTAAY',
      description: 'Réseau social pédagogique full-stack avec système d\'authentification sécurisé et fonctionnalités d\'interaction sociale complètes.',
      tech: ['HTML', 'Tailwindcss', 'JavaScript', 'VITE'],
      link: 'https://projet-javascript.vercel.app/login.html',
      image: 'https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=500',
      gradient: 'from-blue-600 to-purple-700'
    },
    {
      name: 'WhatsApp Clone',
      description: 'Application de messagerie en temps réel avec interface moderne, fonctionnalités de chat et design responsive.',
      tech: ['JavaScript', 'TailwindCSS', 'Vite', 'JSON Server'],
      link: 'https://whatsapp-original.vercel.app/',
      image: 'https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg?auto=compress&cs=tinysrgb&w=500',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Gestion des Apprenants',
      description: 'Système de gestion académique complet permettant l\'enregistrement, le suivi et la mise à jour des informations étudiantes.',
      tech: ['PHP', 'Fichier json', 'HTML', 'CSS'],
      link: 'http://bachirdiame.infinityfreeapp.com/?page=login',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=500',
      gradient: 'from-orange-500 to-yellow-600'
    }
  ];

  const education = [
    {
      period: 'En cours',
      institution: 'Sonatel Académie (Orange Digital Center)',
      degree: 'Formation Développement Web/Mobile',
      icon: Zap,
      color: 'from-orange-500 to-red-500'
    },
    {
      period: '2022-2024',
      institution: 'CFPT Sénégal/Japon',
      degree: 'BTS - Technicien Supérieur',
      icon: Award,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      period: '2020-2022',
      institution: 'UCAD - Université Cheikh Anta Diop',
      degree: 'Licence 1 Mathématiques-Physiques',
      icon: Star,
      color: 'from-purple-500 to-pink-600'
    },
    {
      period: '2020-2022',
      institution: 'Lycée de Keur Massar',
      degree: 'Baccalauréat Sciences Expérimentales',
      icon: CheckCircle,
      color: 'from-green-500 to-teal-600'
    }
  ];

  return (
    <div className={`min-h-screen ${themeClasses.bg} ${themeClasses.text} overflow-x-hidden transition-all duration-500`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 ${themeClasses.nav} backdrop-blur-lg border-b ${themeClasses.navBorder}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              DOCTOR DEV
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Accueil', 'À Propos', 'Compétences', 'Projets', 'Formation', 'Contact'].map((item, index) => (
                <a
                  key={item}
                  href={`#${['home', 'about', 'skills', 'projects', 'education', 'contact'][index]}`}
                  className="relative group"
                >
                  <span className={`${themeClasses.textSecondary} hover:${themeClasses.text} transition-colors duration-300`}>
                    {item}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${themeClasses.card} ${themeClasses.cardBorder} border backdrop-blur transition-all duration-300 hover:scale-110`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-blue-600" />
                )}
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${themeClasses.card} backdrop-blur`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-blue-600" />
                )}
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg ${themeClasses.card} backdrop-blur`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className={`${isDarkMode ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-lg h-full pt-20 px-6`}>
            {['Accueil', 'À Propos', 'Compétences', 'Projets', 'Formation', 'Contact'].map((item, index) => (
              <a
                key={item}
                href={`#${['home', 'about', 'skills', 'projects', 'education', 'contact'][index]}`}
                className={`block py-4 text-xl ${themeClasses.textSecondary} hover:${themeClasses.text} border-b ${themeClasses.navBorder}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: isDarkMode 
              ? `radial-gradient(circle at ${50 + scrollY * 0.01}% ${50 + scrollY * 0.01}%, #3b82f6 0%, #7c3aed 25%, #1e293b 70%)`
              : `radial-gradient(circle at ${50 + scrollY * 0.01}% ${50 + scrollY * 0.01}%, #60a5fa 0%, #a78bfa 25%, #f8fafc 70%)`,
          }}
        />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-orange-500 p-1">
              <div className={`w-full h-full rounded-full ${isDarkMode ? 'bg-slate-900' : 'bg-white'} flex items-center justify-center`}>
                <img
                  src={mamadouPhoto}
                  alt="Mamadou Bassirou DIAME"
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
              MAMADOU
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
              BASSIROU
            </span>
            <br />
            <span className={themeClasses.text}>DIAME</span>
          </h1>

          <p className={`text-2xl md:text-3xl ${themeClasses.textSecondary} mb-4 font-light`}>
            Développeur Web/Mobile 
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-semibold">
              {' '}Fullstack
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent font-semibold">
              & UI/UX Designer
            </span>
          </p>

          <p className={`text-lg ${themeClasses.textMuted} mb-12 max-w-2xl mx-auto leading-relaxed`}>
            Passionné par la création d'expériences web innovantes et l'innovation technologique. 
            Je transforme des idées en solutions digitales engageantes et performantes avec un design exceptionnel.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full font-semibold hover:from-blue-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl text-white"
            >
              Voir mes Projets
              <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#contact"
              className={`px-8 py-4 border ${isDarkMode ? 'border-white/30 hover:bg-white/10' : 'border-gray-300 hover:bg-gray-100'} rounded-full font-semibold transition-all duration-300 backdrop-blur`}
            >
              Me Contacter
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className={themeClasses.textMuted} size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                À Propos de Moi
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className={`p-8 ${themeClasses.card} backdrop-blur rounded-2xl border ${themeClasses.cardBorder}`}>
                <Heart className="text-red-500 mb-4" size={32} />
                <h3 className={`text-2xl font-semibold mb-4 ${themeClasses.text}`}>Ma Passion</h3>
                <p className={`${themeClasses.textSecondary} leading-relaxed`}>
                  Développeur web fullstack et UI/UX Designer animé par une forte passion pour la création et l'innovation. 
                  J'aime comprendre les besoins des utilisateurs et transformer des idées en interfaces 
                  simples, efficaces et engageantes avec Figma et les meilleures pratiques de design.
                </p>
              </div>

              <div className={`p-8 ${themeClasses.card} backdrop-blur rounded-2xl border ${themeClasses.cardBorder}`}>
                <Figma className="text-purple-500 mb-4" size={32} />
                <h3 className={`text-2xl font-semibold mb-4 ${themeClasses.text}`}>Design & Développement</h3>
                <p className={`${themeClasses.textSecondary} leading-relaxed`}>
                  Maîtrise complète du processus de création : de la conception UI/UX sur Figma jusqu'au développement 
                  full-stack. Je crée des prototypes interactifs, des design systems cohérents et les transforme 
                  en applications web performantes.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className={`p-8 bg-gradient-to-br ${isDarkMode ? 'from-blue-600/20 to-purple-600/20' : 'from-blue-100 to-purple-100'} backdrop-blur rounded-2xl border ${themeClasses.cardBorder}`}>
                <Star className="text-orange-500 mb-4" size={32} />
                <h3 className={`text-2xl font-semibold mb-4 ${themeClasses.text}`}>Mon Approche</h3>
                <p className={`${themeClasses.textSecondary} leading-relaxed mb-6`}>
                  Autonome, curieux et attentif aux détails, je progresse continuellement en relevant de nouveaux défis. 
                  J'accorde une grande importance à la clarté, à l'utilité et à l'impact de ce que je développe.
                  Mon objectif : construire des expériences web qui ont du sens et qui fonctionnent, tout simplement.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className={`text-center p-4 ${isDarkMode ? 'bg-white/10' : 'bg-white/50'} rounded-lg`}>
                    <div className="text-2xl font-bold text-blue-400">3+</div>
                    <div className={`text-sm ${themeClasses.textMuted}`}>Projets Déployés</div>
                  </div>
                  <div className={`text-center p-4 ${isDarkMode ? 'bg-white/10' : 'bg-white/50'} rounded-lg`}>
                    <div className="text-2xl font-bold text-purple-400">15+</div>
                    <div className={`text-sm ${themeClasses.textMuted}`}>Technologies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-6 ${themeClasses.section}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Compétences Techniques
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                className={`group p-8 ${themeClasses.card} backdrop-blur rounded-2xl border ${themeClasses.cardBorder} ${themeClasses.cardHover} transition-all duration-500 hover:scale-105`}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${skill.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className={`text-xl font-semibold mb-4 ${themeClasses.text}`}>{skill.category}</h3>
                
                <div className="space-y-2">
                  {skill.items.map((item, i) => (
                    <div key={item} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`}></div>
                      <span className={`${themeClasses.textSecondary} text-sm`}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className={`inline-flex items-center space-x-4 p-6 bg-gradient-to-r ${isDarkMode ? 'from-purple-600/20 to-blue-600/20' : 'from-purple-100 to-blue-100'} backdrop-blur rounded-2xl border ${themeClasses.cardBorder}`}>
              <Figma className={themeClasses.textSecondary} size={24} />
              <span className={themeClasses.textSecondary}>+</span>
              <Code className={themeClasses.textSecondary} size={24} />
              <span className={themeClasses.textSecondary}>+</span>
              <Globe className={themeClasses.textSecondary} size={24} />
              <span className={`${themeClasses.text} font-semibold`}>= Design & Développement Full-Stack Complet</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Mes Projets
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-6"></div>
            <p className={`text-xl ${themeClasses.textMuted} max-w-2xl mx-auto`}>
              Découvrez mes réalisations techniques déployées en production
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className={`group relative ${themeClasses.card} backdrop-blur rounded-2xl border ${themeClasses.cardBorder} overflow-hidden hover:scale-105 transition-all duration-500`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-60 transition-opacity duration-300`}></div>
                </div>

                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-3 ${themeClasses.text} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300`}>
                    {project.name}
                  </h3>
                  
                  <p className={`${themeClasses.textSecondary} text-sm leading-relaxed mb-4`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-gray-100 border-gray-200'} rounded-full text-xs ${themeClasses.textSecondary} border`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${project.gradient} rounded-full text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300`}
                  >
                    <span>Voir le Projet</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 px-6 ${themeClasses.section}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Formation & Éducation
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto"></div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 to-pink-600"></div>
            
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className={`p-6 ${themeClasses.card} backdrop-blur rounded-2xl border ${themeClasses.cardBorder} group ${themeClasses.cardHover} transition-all duration-300`}>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${edu.color} p-2`}>
                        <edu.icon className="w-full h-full text-white" />
                      </div>
                      <span className={`text-sm ${themeClasses.textMuted} font-medium`}>{edu.period}</span>
                    </div>
                    
                    <h3 className={`text-xl font-semibold ${themeClasses.text} mb-2`}>{edu.degree}</h3>
                    <p className={`${themeClasses.textSecondary} text-sm`}>{edu.institution}</p>
                  </div>
                </div>

                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full border-4 ${isDarkMode ? 'border-slate-900' : 'border-white'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Contactez-moi
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 mx-auto mb-6"></div>
            <p className={`text-xl ${themeClasses.textMuted}`}>
              Prêt à collaborer sur votre prochain projet ? Parlons-en !
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="tel:+221785052217"
              className={`group p-8 bg-gradient-to-br ${isDarkMode ? 'from-blue-600/20 to-purple-600/20' : 'from-blue-100 to-purple-100'} backdrop-blur rounded-2xl border ${themeClasses.cardBorder} hover:scale-105 transition-all duration-300 text-center`}
            >
              <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-2`}>Téléphone</h3>
              <p className={themeClasses.textMuted}>+221 78-505-22-17</p>
            </a>

            <a
              href="https://wa.me/221765936790"
              className={`group p-8 bg-gradient-to-br ${isDarkMode ? 'from-green-600/20 to-emerald-600/20' : 'from-green-100 to-emerald-100'} backdrop-blur rounded-2xl border ${themeClasses.cardBorder} hover:scale-105 transition-all duration-300 text-center`}
            >
              <MessageCircle className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-2`}>WhatsApp</h3>
              <p className={themeClasses.textMuted}>+221 76-593-67-90</p>
            </a>

            <a
              href="mailto:pabassdiame76@gmail.com"
              className={`group p-8 bg-gradient-to-br ${isDarkMode ? 'from-orange-600/20 to-red-600/20' : 'from-orange-100 to-red-100'} backdrop-blur rounded-2xl border ${themeClasses.cardBorder} hover:scale-105 transition-all duration-300 text-center`}
            >
              <Mail className="w-12 h-12 text-orange-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-2`}>Email</h3>
              <p className={`${themeClasses.textMuted} text-sm`}>pabassdiame76@gmail.com</p>
            </a>
          </div>

          <div className="mt-16 text-center">
            <div className={`inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 p-8 ${themeClasses.card} backdrop-blur rounded-2xl border ${themeClasses.cardBorder}`}>
              <div className={`flex items-center space-x-2 ${themeClasses.textSecondary}`}>
                <MapPin size={20} className="text-blue-400" />
                <span>Dakar, Sénégal</span>
              </div>
              <div className={`flex items-center space-x-2 ${themeClasses.textSecondary}`}>
                <Calendar size={20} className="text-green-400" />
                <span>Disponible pour projets</span>
              </div>
              <div className={`flex items-center space-x-2 ${themeClasses.textSecondary}`}>
                <Figma size={20} className="text-purple-400" />
                <span>Design & Développement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 ${isDarkMode ? 'bg-black/40' : 'bg-gray-100/50'} border-t ${themeClasses.navBorder}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              DOCTOR DEV
            </div>
            <p className={`${themeClasses.textMuted} mb-8`}>
              Développeur Web/Mobile Fullstack & UI/UX Designer passionné par l'innovation
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${themeClasses.textMuted} hover:${themeClasses.text} transition-colors duration-300`}
                >
                  <ExternalLink size={20} />
                </a>
              ))}
            </div>

            <div className={`pt-8 border-t ${themeClasses.navBorder} ${themeClasses.textMuted} text-sm`}>
              <p>&copy; 2024 Mamadou Bassirou DIAME. Tous droits réservés.</p>
              <p className="mt-2">Créé avec ❤️ et beaucoup de ☕ | Design & Code</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;