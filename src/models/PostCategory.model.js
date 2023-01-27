module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {},
    {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories',
    });
    
  PostCategory.associate = (models) => {
    models.Book.belongsToMany(models.BlogPost, {
      as: 'blog_posts',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.User.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

return PostCategory;
};