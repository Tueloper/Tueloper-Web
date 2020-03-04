<template>
  <div class="card  shadow mb-3" style="max-width: 20rem">
    <div class="card-header  head  bg-transparent ">
      <i class="fa fa-envelope fa-3x"></i>
      <div>
        <a href="#">
          <i class="fa fa-github fa-2x"></i>
        </a>
      </div>
    </div>
    <div class="card-body ">
      <h5 class="card-title">Success card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
    <div class="card-footer bg-transparent">
      <div class="p-badges">
        <span class="badge badge-dark">Vue</span>
        <span class="badge badge-dark">HTML</span>
        <span class="badge badge-dark">CSS</span>
        <span class="badge badge-dark">Firebase</span>
        <span class="badge badge-dark">Vuetify</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  font-family: 'Poppins';
  height: 23rem;
  border-radius: 0 !important;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header {
  border-bottom: 0 !important;
}

.card-footer {
  border-top: 0ch !important;
}
/*
.card {
}

.badg {
  margin: 20px 1px;
}

.p-row {
  margin: 0 50px;
}

.p-details {
  /* height: 400px;
  display: flex;
  align-items: center;
} */
</style>
