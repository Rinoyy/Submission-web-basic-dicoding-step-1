# Penjelasan Submission Tugas Akhir Membuat Website

Pada kesempatan ini, saya sebagai Murid belajar dari dicoding ingin memberikan sedikit penjelasan mengenai penggunaan Javascript pada project saya.

## DOM

saya menggunakan 2 tipe yaitu:
let buttonToggle = document.getElementById("toggle");
let modalToggle = document.querySelector(".modal");

yang berfungsi untuk mencari tag, id atau class pada html untuk diberikan kode javascript.

## Navbar toggle

```
buttonToggle.addEventListener("click", function () {
  modalToggle.classList.toggle("open");
});
```

Button kita berikan event klik, ketika dia di klik akan jalankan sebuah fungsi yang berisi classList toggle yang berfungsi untuk memberikan style css.

## close navbar ketika di scroll

```
document.addEventListener("scroll", function () {
  modalToggle.classList.remove("open");
});
```

ketika users melakukan scroll pada saat membuka navbar di hp maka akan otmatis di tutup.

## navbar

```
window.addEventListener("scroll", function () {
  let scrollY = window.scrollY;
  console.log(scrollY);

  if (scrollY > 20) {
    nav.style.position = "fixed";
    nav.style.top = "0";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.width = "100%";
    nav.style.backgroundColor = "white";
  } else {
    nav.style.position = "absolute";
    nav.style.top = "0";
    nav.style.backgroundColor = "white";
  }
});
```

ketika saya ingin melakukan sebuah interaktivitas pada js untuk navbar ketika di scroll diakan akan fixed, saya harus mengetahu height window ketika di scroll dengan cara

```
 let scrollY = window.scrollY;
  console.log(scrollY);
```

Lalu, saya buat kondisi ketika height lebih dari 20 maka akan menjaalankan blok kode if,  kalau kurang maka akan kembali ke awal atau masuk ke else.


## Terima kasih
