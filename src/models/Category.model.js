module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    displayName: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    tableName: 'categories',
    underscored: true,
    timestamps: false,
  });
  Category.associate = (models) => {
    Category.hasMany(models.PostCategory, 
    { foreignKey: 'categoryId', as: 'posts_categories'});
  };
  return Category;
};
