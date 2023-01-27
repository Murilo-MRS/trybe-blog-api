module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    displayName: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    tableName: 'users',
    underscored: true,
    timestamps: false,
  });
  User.associate = (models) => {
    User.hasMany(models.BlogPost, 
    { foreignKey: 'userId', as: 'blog_posts'});
  };
  return User;
};