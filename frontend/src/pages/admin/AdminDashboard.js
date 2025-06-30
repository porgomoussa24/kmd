import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  FileText, 
  Users, 
  TrendingUp, 
  Calendar,
  MessageSquare,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search
} from 'lucide-react';
import { useBlog } from '../../contexts/BlogContext';
import AdminLayout from '../../components/AdminLayout';

const AdminDashboard = () => {
  const { articles, deleteArticle } = useBlog();
  const [searchTerm, setSearchTerm] = useState('');

  const publishedArticles = articles.filter(article => article.published);
  const draftArticles = articles.filter(article => !article.published);
  
  const stats = [
    {
      title: 'Articles Publiés',
      value: publishedArticles.length,
      icon: FileText,
      color: 'blue',
      change: '+12%'
    },
    {
      title: 'Brouillons',
      value: draftArticles.length,
      icon: Edit,
      color: 'orange',
      change: '+5%'
    },
    {
      title: 'Vues Total',
      value: '2,847',
      icon: Eye,
      color: 'green',
      change: '+18%'
    },
    {
      title: 'Commentaires',
      value: '156',
      icon: MessageSquare,
      color: 'purple',
      change: '+23%'
    }
  ];

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      deleteArticle(id);
    }
  };

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    orange: 'from-orange-500 to-orange-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600'
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Tableau de Bord</h1>
            <p className="text-gray-600">Gérez votre contenu et suivez vos performances</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              to="/admin/articles/new"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Plus className="w-5 h-5" />
              <span>Nouvel Article</span>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses[stat.color]} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-green-500 text-sm font-semibold">{stat.change}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.title}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Articles Management */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Articles</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher des articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-80"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Titre</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Catégorie</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredArticles.map((article) => (
                  <motion.tr
                    key={article.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-12 h-12 rounded-lg object-cover mr-4"
                        />
                        <div>
                          <h3 className="text-sm font-medium text-gray-900 line-clamp-1">
                            {article.title}
                          </h3>
                          <p className="text-sm text-gray-500 line-clamp-1">{article.excerpt}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {article.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        article.published 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {article.published ? 'Publié' : 'Brouillon'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {formatDate(article.createdAt)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <Link
                          to={`/admin/articles/edit/${article.id}`}
                          className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors duration-200"
                          title="Modifier"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(article.id)}
                          className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors duration-200"
                          title="Supprimer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {searchTerm ? 'Aucun article trouvé' : 'Aucun article'}
              </h3>
              <p className="text-gray-500 mb-4">
                {searchTerm 
                  ? 'Essayez de modifier votre recherche' 
                  : 'Commencez par créer votre premier article'
                }
              </p>
              {!searchTerm && (
                <Link
                  to="/admin/articles/new"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Plus className="w-5 h-5" />
                  <span>Créer un article</span>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;