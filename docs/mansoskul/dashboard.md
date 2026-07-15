---
outline: deep
---

# Dashboard Peserta

Dashboard adalah halaman utama yang Anda lihat setelah login. Dari sini Anda dapat mencari event MANSOSKUL menggunakan kode event yang dibagikan oleh panitia.

```mermaid
flowchart LR
    A[Login] --> B[Dashboard]
    B --> C[Ketik Kode Event di Pencarian]
    C --> D{Event Ditemukan?}
    D -->|Ya| E[Card Event Muncul]
    D -->|Tidak| F[Event Tidak Ditemukan]
    E --> G[Klik Daftar]
    G --> H[Form Biodata]
```

## Tampilan Dashboard

Setelah login, Anda akan langsung melihat halaman dashboard. Di dashboard terdapat **kolom pencarian** (search bar) untuk mencari event MANSOSKUL.

![Screenshot Dashboard](/images/ppdgs/dashboard-peserta.png)

## Mencari Event MANSOSKUL

1. Di dashboard, cari **kolom pencarian** (search bar) di bagian atas
2. Ketik **nama event** atau **kode event** MANSOSKUL yang dibagikan oleh panitia
3. Jika kode event cocok, akan muncul **card event** yang berisi informasi event tersebut

### Informasi di Card Event

| Informasi | Keterangan |
|-----------|-----------|
| Nama Event | MANSOSKUL |
| Tanggal Pelaksanaan | Tergantung jadwal |
| Lokasi | Tergantung jadwal |
| Deskripsi | Informasi singkat tentang event |
| Tombol **Daftar** | Klik untuk mendaftar |

<div class="info-card warning">
<div class="info-card-title"><img src="/images/icons/question-square-svgrepo-com.svg" alt=""> Penting</div>
<div class="info-card-content">
Kode event MANSOSKUL dibagikan secara eksklusif oleh panitia. Jika Anda belum memiliki kode event, hubungi panitia melalui [Hubungi Kami](/hubungi-admin).
</div>
</div>

## Notifikasi di Dashboard

<div class="grid-2">

<div class="info-card info">
<div class="info-card-title"><img src="/images/icons/email-9-svgrepo-com.svg" alt=""> Notifikasi</div>
<div class="info-card-content">
Update terbaru tentang pendaftaran Anda akan muncul di bagian atas dashboard. Periksa secara berkala.
</div>
</div>

<div class="info-card success">
<div class="info-card-title"><img src="/images/icons/receipt-alt-3-svgrepo-com.svg" alt=""> Status</div>
<div class="info-card-content">
Setiap perubahan status pendaftaran akan langsung terlihat di dashboard.
</div>
</div>

</div>

## Status Pendaftaran

| Status | Keterangan |
|--------|-----------|
| Draft | Pendaftaran belum lengkap |
| Belum Lengkap | Ada data yang masih harus diisi |
| Disetujui | Pendaftaran diterima |
| Ditolak | Ada data yang perlu diperbaiki |
| Selesai | Semua proses selesai |

## Langkah Selanjutnya

Dari dashboard Anda dapat:

- [Mencari dan mendaftar event](/mansoskul/mendaftar-event) dengan mengetik kode event
- [Melengkapi biodata](/mansoskul/form-biodata) setelah mendaftar

<div class="info-card tip">
<div class="info-card-title"><img src="/images/icons/book-and-person-winter-svgrepo-com.svg" alt=""> Tips</div>
<div class="info-card-content">
- Simpan kode event MANSOSKUL yang diberikan panitia
- Periksa dashboard setiap hari untuk melihat update terbaru
- Segera lengkapi data yang diminta
- Hubungi admin jika ada kendala
</div>
</div>
