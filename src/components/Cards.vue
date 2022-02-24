<template>
  <div class="flex align-center justify-center w-10/12 py-auto mx-auto">
    <div class="card w-96 bg-base-100 card-compact shadow-xl">
      <figure>
        <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes">
      </figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="justify-end card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    <div class="card w-96 bg-base-100 card-compact shadow-xl">
      <figure>
        <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes">
      </figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="justify-end card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Cards'
  }
</script>