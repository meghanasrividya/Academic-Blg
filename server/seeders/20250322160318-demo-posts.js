export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Posts', [
    {
      title: 'The Future of Artificial Intelligence in Education',
      content: 'AI is transforming how students learn and how educators teach...',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Quantum Computing: A New Era of Processing',
      content: 'Quantum computers solve problems that classical computers struggle with...',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    // 👉 Add more posts here if needed
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Posts', null, {});
}
