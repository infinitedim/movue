<template>
  <div class="navbar bg-base-100s">
      <h2 class="btn btn-ghost normal-case text-4xl">Movue</h2>
      <div class="navbar-end w-10/12">
        <ul
        class="flex sm:hidden w-8/12 md:w-10/12 flex-none items-center justify-around bg-base-100 p-6 rounded-box">
          <li><a href="">Home</a></li>
          <li class="dropdown dropdown-hover">
            <a href="">Genres</a>
              <ul class="shadow menu dropdown-content bg-base-100 rounded-box w-56">
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
          <li><a href="">Movies</a></li>
          <li><a href="">Anime</a></li>
        </ul>
        <div class="hamburger cursor-pointer hidden sm:flex mx-5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
