---
outline: deep
---

# Registrasi Akun

Sebelum dapat mendaftar event PPDS, Anda harus memiliki akun terlebih dahulu. Ikuti langkah-langkah berikut untuk membuat akun.

```mermaid
flowchart TD
    A[Buka Halaman Aplikasi] --> B{Punya Akun?}
    B -->|Tidak| C[Klik Daftar]
    B -->|Ya| D[Login]
    C --> E[Pilih Metode Registrasi]
    E --> F[Via Email]
    E --> G[Via Google]
    F --> H[Isi Form Data Diri]
    H --> K[Akun Aktif]
    G --> L[Pilih Akun Google]
    L --> K
    K --> D
```

## Kapan Harus Registrasi?

Registrasi akun dilakukan **sebelum** mendaftar event. Anda hanya perlu registrasi **satu kali**. Setelah memiliki akun, Anda bisa mendaftar di event PPDS kapan saja.

## Metode Registrasi

<TabGroup titles="Via Email,Via Google">

<template #tab-0>

### Registrasi Menggunakan Email

1. Buka halaman [https://lentera.puspenkomusu.com/](https://lentera.puspenkomusu.com/)
2. Klik tombol **"Daftar"** atau tab **"Daftar"**
3. Isi form pendaftaran dengan data berikut:

   | Field | Contoh Pengisian |
   |-------|-----------------|
   | Nama Lengkap | Andi Pratama |
   | Email | andi.pratama@gmail.com |
   | No. Whatsapp | 081234567890 |
   | Password | ******** |

4. Klik **"Daftar"**
5. Akun Anda langsung aktif dan siap digunakan (tanpa verifikasi email)

![Screenshot Form Registrasi Email](/images/ppds/registrasi.png)

</template>

<template #tab-1>

### Registrasi Menggunakan Google

1. Buka halaman [https://lentera.puspenkomusu.com/](https://lentera.puspenkomusu.com/)
2. Klik tombol **"Daftar"**
3. Klik tombol **"Daftar dengan Google"**
4. Pilih akun Google yang akan digunakan
5. Berikan izin yang diminta
6. Akun Anda langsung aktif (tanpa verifikasi email)

![Screenshot Registrasi Google](/images/ppds/placeholder-registrasi-google.svg)

<div class="info-card tip">
<div class="info-card-title"><img src="/images/icons/id-card-svgrepo-com.svg" alt=""> Keuntungan Registrasi Google</div>
<div class="info-card-content">
- Tidak perlu mengingat password tambahan
- Proses lebih cepat
</div>
</div>

</template>

</TabGroup>

## Tips Membuat Password

<div class="info-card warning">
<div class="info-card-title"><img src="/images/icons/password-key-svgrepo-com.svg" alt=""> Tips Password Aman</div>
<div class="info-card-content">
- Minimal 8 karakter
- Kombinasi huruf besar, huruf kecil, angka, dan simbol
- Jangan gunakan password yang sama dengan akun lain
- Jangan gunakan tanggal lahir atau nama hewan peliharaan
</div>
</div>

## Kesalahan yang Sering Terjadi

<div class="info-card danger">
<div class="info-card-title"><img src="/images/icons/question-square-svgrepo-com.svg" alt=""> Kesalahan Umum</div>
<div class="info-card-content">

| Kesalahan | Solusi |
|-----------|--------|
| Email sudah terdaftar | Gunakan email lain atau login |
| Password terlalu lemah | Gunakan kombinasi yang lebih kuat |
| Nomor HP tidak valid | Periksa kode negara (62 untuk Indonesia) |

</div>
</div>

## Setelah Registrasi Berhasil

Setelah akun aktif, Anda bisa:

- [Login ke aplikasi](/ppds/login)
- [Melengkapi biodata](/ppds/form-biodata)
- [Mendaftar event](/ppds/mendaftar-event)

![Screenshot Berhasil Registrasi](/images/ppds/registrasi-berhasil.png)
