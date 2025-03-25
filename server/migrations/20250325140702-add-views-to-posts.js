export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Posts', 'views', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Posts', 'views');
  },
};
