<template>
  <div class="navbar bg-base-100">
      <h2 class="btn btn-ghost normal-case text-3xl">Movue</h2>
      <div class="navbar-end">
        <ul
        class="menu flex-none justify-between bg-base-100 w-4/12 menu-horizontal sm p-0 rounded-box">
          <li><a>Home</a></li>
          <li class="dropdown dropdown-hover">
            <a class="m-1 btn" tabindex="0">Genres</a>
              <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                <li><a>Action</a></li>
                <li><a>Adventures</a></li>
                <li><a>Comedy</a></li>
                <li><a>Drama</a></li>
                <li><a>Fantasy</a></li>
                <li><a>Horror</a></li>
                <li><a>Romance</a></li>
                <li><a>Sci-Fi</a></li>
                <li><a>Thriller</a></li>
              </ul>
          </li>
          <li><a>Movies</a></li>
          <li><a>Anime</a></li>
        </ul>

      </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
