document.addEventListener("DOMContentLoaded", function () {
  // Menambahkan event listener untuk setiap tautan
  var tokoLinks = document.querySelectorAll(".SMA-link");
  tokoLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Menghentikan perilaku bawaan dari tautan

      // Mengambil ID toko dari atribut data
      var tokoId = this.getAttribute("data-SMA");

      // Menampilkan deskripsi yang sesuai dan menyembunyikan yang lain
      var deskripsiTokos = document.querySelectorAll(".deskripsi-SMA");
      deskripsiTokos.forEach(function (deskripsi) {
        if (deskripsi.id === tokoId) {
          deskripsi.style.display = "block";
        } else {
          deskripsi.style.display = "none";
        }
      });
    });
  });

  // Menampilkan deskripsi default jika tidak ada yang diklik
  var defaultDeskripsi = document.getElementById("default-description");
  if (defaultDeskripsi) {
    defaultDeskripsi.style.display = "block";
  }
});
