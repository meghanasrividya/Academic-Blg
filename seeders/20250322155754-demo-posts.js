'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [
      {
        title: 'The Future of Artificial Intelligence in Education',
        content: 'AI is transforming how students learn and how educators teach. Personalized learning paths, automated grading, and intelligent tutoring systems are just the beginning...',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'A Deep Dive into Quantum Computing',
        content: 'Quantum computing leverages quantum mechanics to solve problems classical computers cannot. This blog explores qubits, entanglement, and real-world applications...',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Why Every Student Should Learn Version Control',
        content: 'Git is more than just a tool for developers — it teaches discipline, collaboration, and problem-solving. This post covers the basics of Git and GitHub for beginners...',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Understanding Climate Change: Data & Impact',
        content: 'From global temperature rise to shrinking glaciers, the effects of climate change are backed by decades of scientific data. Learn how climate models work and why action matters...',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Top 5 Study Techniques Backed by Science',
        content: 'Spaced repetition, active recall, interleaving — these are not buzzwords. Discover what research shows about how the brain best retains complex academic material...',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Beginner’s Guide to Data Structures in JavaScript',
        content: 'Arrays, stacks, queues, linked lists — these structures are the building blocks of efficient algorithms. Here’s how and when to use them in modern JavaScript...',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'How Journaling Can Boost Research Productivity',
        content: 'Keeping a research log improves critical thinking, project tracking, and emotional resilience. Explore how academic journaling helps you become a better thinker...',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Exploring the Ethics of Machine Learning',
        content: 'From algorithmic bias to explainability, ML is not just technical — it’s ethical. Understand the questions scholars and industry leaders are asking today...',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: '10 Free Online Courses Every CS Student Should Take',
        content: 'From MIT OpenCourseWare to Harvard’s CS50, here are must-take free online courses that boost your knowledge and resume...',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Psychology of Motivation: Study Smarter, Not Harder',
        content: 'Understand how dopamine, goal-setting, and intrinsic motivation affect student success — and how you can hack your study habits using science...',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
