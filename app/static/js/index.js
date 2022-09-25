const result = document.getElementById("result");
const history = document.getElementById("history");
const clear = document.getElementById("clear");
const clearAll = document.getElementById("clear-all");
const data = document.getElementById("data");

// Fungsi enampilkan value di layar
function display(nilai) {
  result.value += nilai;
  data.value = result.value;
}

// Fungsi menghapus value di layar
if (clear.click) {
  function kosong() {
    result.value = "";
  }
}

// Fungsi menghapus semua value di layar
if (clearAll.click) {
  function kosongAll() {
    result.value = "";
    history.value = "";
  }
}
