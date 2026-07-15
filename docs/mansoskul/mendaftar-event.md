---
outline: deep
---

# Mendaftar Event

Setelah login, Anda dapat mendaftar ke event MANSOSKUL dengan mencari kode event yang dibagikan panitia melalui dashboard.

```mermaid
flowchart TB
    A[Dashboard] --> B[Ketik Kode Event]
    B --> C{Card Event Muncul?}
    C -->|Ya| D[Klik Daftar]
    C -->|Tidak| E[Hubungi Panitia]
    D --> F[Form Biodata]
    F --> G[Isi Data Diri]
    G --> H[Isi Riwayat Pekerjaan]
    H --> I[Isi Riwayat Organisasi]
    I --> J[Isi Inventory]
    J --> K[Pendaftaran Terkirim]
```

## Mencari Event

1. Login ke akun Anda
2. Pada dashboard, ketik **kode event MANSOSKUL** yang dibagikan oleh panitia di kolom pencarian

<div class="info-card info">
<div class="info-card-title"><img src="/images/icons/question-square-svgrepo-com.svg" alt=""> Kode Event</div>
<div class="info-card-content">
Kode event MANSOSKUL hanya diketahui oleh peserta yang sudah mendapatkannya dari panitia. Jika belum memiliki kode, hubungi panitia terlebih dahulu.
</div>
</div>

## Card Event

Jika kode event cocok, akan muncul card dengan informasi berikut:

| Informasi | Keterangan |
|-----------|-----------|
| Nama Event | MANSOSKUL |
| Tanggal | Sesuai jadwal |
| Lokasi | Sesuai jadwal |
| Deskripsi | Informasi event |
| Tombol Daftar | Klik untuk mulai mendaftar |

![Screenshot Daftar Event](/images/ppdgs/placeholder-daftar-event.svg)

## Mendaftar ke Event

1. Pada card event, klik tombol **"Daftar"**
2. Form Biodata akan muncul dengan 5 tab yang perlu diisi:

   - **Data Diri** — Data pribadi peserta
   - **Riwayat Pekerjaan** — Pengalaman kerja (jika ada)
   - **Pengalaman Organisasi** — Riwayat organisasi
   - **Kursus dan Pelatihan** — Pelatihan yang pernah diikuti
   - **Inventory** — Inventori psikologis respons terhadap masalah

3. Setiap tab memiliki tombol **"Simpan"** masing-masing
4. Pastikan semua tab sudah diisi dan disimpan

## Setelah Mendaftar

Setelah pendaftaran terkirim, status pendaftaran Anda akan muncul di dashboard dengan status awal **Draft**.

Langkah selanjutnya:

1. Lengkapi data yang masih kurang di [Form Biodata](/mansoskul/form-biodata)
2. Pantau [Status Pendaftaran](/mansoskul/status-pendaftaran)

## Hal yang Perlu Diperhatikan

<div class="info-card warning">
<div class="info-card-title"><img src="/images/icons/document-scanner-svgrepo-com.svg" alt=""> Perhatian</div>
<div class="info-card-content">
- Pastikan semua data sudah diisi dan disimpan sebelum logout
- Data yang sudah disimpan akan tetap ada meskipun Anda logout
- Hubungi admin jika ada kendala teknis
</div>
</div>
