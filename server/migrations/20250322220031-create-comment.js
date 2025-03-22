export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Comments', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    postId: {
      type: Sequelize.INTEGER,
      references: { model: 'Posts', key: 'id' },
      onDelete: 'CASCADE'
    },
    userId: {
      type: Sequelize.INTEGER,
      references: { model: 'Users', key: 'id' }
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('Comments');
}
