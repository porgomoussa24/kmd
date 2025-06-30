import React, { createContext, useContext, useState, useEffect } from 'react';

const BlogContext = createContext();

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};

export const BlogProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Articles par défaut
  const defaultArticles = [
    {
      id: 1,
      title: '10 Habitudes qui Transformeront Votre Vie en 2025',
      excerpt: 'Découvrez les habitudes simples mais puissantes qui peuvent révolutionner votre quotidien et vous mener vers le succès.',
      content: `# 10 Habitudes qui Transformeront Votre Vie en 2025

Le succès n'est pas le fruit du hasard, mais le résultat d'habitudes quotidiennes bien établies. Voici 10 habitudes transformatrices que vous pouvez adopter dès aujourd'hui.

## 1. Lever Matinal (5h-6h)
Se lever tôt vous donne une longueur d'avance sur la journée et vous permet de commencer dans le calme.

## 2. Méditation Quotidienne (10-20 min)
La méditation améliore votre concentration, réduit le stress et augmente votre bien-être général.

## 3. Exercice Physique Régulier
30 minutes d'activité physique par jour transformeront votre énergie et votre confiance en vous.

## 4. Lecture de Développement Personnel
Lisez au moins 15 minutes par jour des livres qui nourrissent votre croissance personnelle.

## 5. Planification de la Journée
Préparez votre journée la veille pour être plus productif et moins stressé.

Ces habitudes, pratiquées régulièrement, créeront un effet cumulé extraordinaire dans votre vie.`,
      category: 'Développement Personnel',
      author: 'Équipe Kamsolution',
      date: '2025-01-15',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1544731612-de7f96afe55f',
      featured: true,
      tags: ['habitudes', 'productivité', 'bien-être'],
      published: true,
      createdAt: '2025-01-15T10:00:00Z',
      updatedAt: '2025-01-15T10:00:00Z'
    },
    {
      id: 2,
      title: 'Comment Créer un Business Plan Gagnant',
      excerpt: 'Les étapes essentielles pour construire un business plan solide qui convaincra les investisseurs et guidera votre entreprise vers le succès.',
      content: `# Comment Créer un Business Plan Gagnant

Un business plan bien conçu est la feuille de route de votre succès entrepreneurial.

## Structure d'un Business Plan Efficace

### 1. Résumé Exécutif
- Vision et mission de l'entreprise
- Produits/services principaux
- Marché cible
- Projections financières clés

### 2. Analyse de Marché
- Étude de la concurrence
- Identification du public cible
- Tendances du secteur

### 3. Stratégie Marketing
- Positionnement de la marque
- Canaux de distribution
- Plan de communication

### 4. Projections Financières
- Prévisions de chiffre d'affaires
- Coûts d'exploitation
- Seuil de rentabilité

Un business plan solide augmente vos chances de succès de 50%.`,
      category: 'Entrepreneuriat',
      author: 'Équipe Kamsolution',
      date: '2025-01-12',
      readTime: '8 min',
      image: 'https://images.pexels.com/photos/5475749/pexels-photo-5475749.jpeg',
      featured: false,
      tags: ['business plan', 'startup', 'stratégie'],
      published: true,
      createdAt: '2025-01-12T14:00:00Z',
      updatedAt: '2025-01-12T14:00:00Z'
    },
    {
      id: 3,
      title: 'Éducation Financière : Les Bases de l\'Investissement',
      excerpt: 'Comprendre les principes fondamentaux de l\'investissement pour faire fructifier votre patrimoine de manière intelligente.',
      content: `# Éducation Financière : Les Bases de l'Investissement

Investir intelligemment est une compétence essentielle pour construire votre richesse.

## Principes Fondamentaux

### 1. Diversification
Ne mettez jamais tous vos œufs dans le même panier. Répartissez vos investissements.

### 2. Horizon Temporel
Plus votre horizon d'investissement est long, plus vous pouvez prendre de risques calculés.

### 3. Règle des 72
Pour doubler votre argent : 72 ÷ taux de rendement = nombre d'années

## Types d'Investissements

- **Actions** : Potentiel de croissance élevé, risque élevé
- **Obligations** : Revenus stables, risque modéré
- **Immobilier** : Protection contre l'inflation
- **Épargne** : Liquidité, sécurité, faible rendement

Commencez petit, apprenez constamment, et augmentez progressivement vos investissements.`,
      category: 'Finance',
      author: 'Expert Finance',
      date: '2025-01-10',
      readTime: '6 min',
      image: 'https://images.pexels.com/photos/9169180/pexels-photo-9169180.jpeg',
      featured: false,
      tags: ['investissement', 'épargne', 'finance personnelle'],
      published: true,
      createdAt: '2025-01-10T09:00:00Z',
      updatedAt: '2025-01-10T09:00:00Z'
    }
  ];

  // Charger les articles au démarrage
  useEffect(() => {
    const savedArticles = localStorage.getItem('blogArticles');
    if (savedArticles) {
      setArticles(JSON.parse(savedArticles));
    } else {
      // Si pas d'articles sauvegardés, utiliser les articles par défaut
      setArticles(defaultArticles);
      localStorage.setItem('blogArticles', JSON.stringify(defaultArticles));
    }
    setLoading(false);
  }, []);

  // Sauvegarder les articles dans localStorage à chaque modification
  const saveArticles = (newArticles) => {
    localStorage.setItem('blogArticles', JSON.stringify(newArticles));
    setArticles(newArticles);
  };

  const addArticle = (articleData) => {
    const newArticle = {
      ...articleData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      published: articleData.published || false
    };
    
    const updatedArticles = [newArticle, ...articles];
    saveArticles(updatedArticles);
    return newArticle;
  };

  const updateArticle = (id, articleData) => {
    const updatedArticles = articles.map(article => 
      article.id === parseInt(id) 
        ? { ...article, ...articleData, updatedAt: new Date().toISOString() }
        : article
    );
    saveArticles(updatedArticles);
  };

  const deleteArticle = (id) => {
    const updatedArticles = articles.filter(article => article.id !== parseInt(id));
    saveArticles(updatedArticles);
  };

  const getArticleById = (id) => {
    return articles.find(article => article.id === parseInt(id));
  };

  const getPublishedArticles = () => {
    return articles.filter(article => article.published);
  };

  const value = {
    articles,
    loading,
    addArticle,
    updateArticle,
    deleteArticle,
    getArticleById,
    getPublishedArticles
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};