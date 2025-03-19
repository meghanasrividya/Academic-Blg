<template>
  <div id="app">
    <header>
      <h1>Welcome to Academic Blog</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <p>&copy; 2025 Academic Blog. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style src="./assets/styles.css"></style>