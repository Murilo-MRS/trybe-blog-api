module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
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
