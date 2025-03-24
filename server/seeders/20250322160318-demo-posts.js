


// server/seeders/xxxxxx-demo-posts.js
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [
      {
        title: '🚀 Exploring the Future of AI in Academia',
        content: 'Artificial Intelligence is transforming research and education in profound ways...',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '📚 The Importance of Open Access Journals',
        content: 'Open Access publishing democratizes knowledge, allowing wider dissemination of research...',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '🧠 Neuroscience Meets Computer Science',
        content: 'Interdisciplinary research is opening doors to breakthroughs in understanding cognition...',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '🌍 Climate Change and Data Modeling',
        content: 'Data science plays a key role in predicting climate scenarios and influencing policy...',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '🔬 Genomics and Machine Learning',
        content: 'The fusion of genomics and AI is accelerating disease detection and personalized medicine...',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
