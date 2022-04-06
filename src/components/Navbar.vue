<template>
<nav class="flex items-center justify-around p-5 sm:justify-between sm:p-0">
  <div class="">
      <h2 class="text-4xl text-center">Movue</h2>
  </div>
  <ul class="flex items-center justify-around w-2/5 sm:flex-col sm:h-[50vh] absolute sm:right-5 sm:top-0">
        <li>
          <a href="">Home</a>
        </li>
        <li class="">
          <a href="">Genres</a>
            <ul class="hidden">
              <li><a href="">Action</a></li>
              <li><a href="">Adventures</a></li>
              <li><a href="">Comedy</a></li>
              <li><a href="">Drama</a></li>
              <li><a href="">Fantasy</a></li>
              <li><a href="">Horror</a></li>
              <li><a href="">Romance</a></li>
              <li><a href="">Sci-Fi</a></li>
              <li><a href="">Thriller</a></li>
            </ul>
        </li>
        <li>
          <a href="">Movies</a>
          </li>
        <li>
          <a href="">Anime</a>
          </li>
  </ul>
</nav>

</template>

<script>
export default {
  name: "Navbar",
};
</script>
