---
outline: deep
---

# Dashboard Peserta

Dashboard adalah halaman utama yang Anda lihat setelah login. Dari sini Anda dapat melihat event yang tersedia dan mendaftar.

```mermaid
flowchart LR
    A[Login] --> B[Dashboard]
    B --> C[Lihat Tabel Event]
    C --> D[Klik Daftar]
    D --> E[Form Biodata]
```

## Tampilan Dashboard

Setelah login, Anda akan langsung melihat halaman dashboard yang menampilkan tabel daftar event PPDGS yang sedang berlangsung. Setiap baris event dilengkapi dengan tombol **"Daftar"** untuk memulai pendaftaran.

![Screenshot Dashboard](/images/ppdgs/dashboard-peserta.png)

## Informasi di Dashboard

<div class="grid-2">

<div class="info-card info">
<div class="info-card-title">Notifikasi</div>
<div class="info-card-content">
Update terbaru tentang pendaftaran Anda akan muncul di bagian atas dashboard. Periksa secara berkala.
</div>
</div>

<div class="info-card success">
<div class="info-card-title">Status</div>
<div class="info-card-content">
Setiap perubahan status pendaftaran akan langsung terlihat di dashboard.
</div>
</div>

</div>

## Status Pendaftaran

| Status | Keterangan |
|--------|-----------|
| Draft | Pendaftaran belum lengkap |
| Menunggu Pembayaran | Belum melakukan pembayaran |
| Menunggu Verifikasi | Dokumen sedang diperiksa |
| Disetujui | Pendaftaran diterima |
| Ditolak | Ada dokumen yang perlu diperbaiki |
| Selesai | Semua proses selesai |

## Langkah Selanjutnya

Dari dashboard Anda dapat:

- [Mendaftar event](/ppdgs/mendaftar-event) dengan mengklik tombol **"Daftar"** pada event yang tersedia
- [Melengkapi biodata](/ppdgs/form-biodata)
- [Melakukan pembayaran](/ppdgs/pembayaran)

<div class="info-card tip">
<div class="info-card-title">Tips</div>
<div class="info-card-content">
- Periksa dashboard setiap hari untuk melihat update terbaru
- Segera lengkapi data yang diminta
- Hubungi admin jika ada status yang tidak berubah dalam 3 hari
</div>
</div>
