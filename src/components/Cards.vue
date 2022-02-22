<template>
  <div class="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/movie?w=200&h=280" alt="Movie"></figure>
  <div class="card-body">
    <h2 class="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'Cards'
  }
</script>