import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid(
  defineConfig({
    lang: "id-ID",
    title: "PUSPENKOM USU",
    description:
      "Pusat dokumentasi panduan pendaftaran event dan layanan konseling",

    head: [
      [
        "link",
        { rel: "icon", type: "image/svg+xml", href: "/images/favicon.svg" },
      ],
      ["meta", { name: "theme-color", content: "#0f62fe" }],
      ["meta", { property: "og:title", content: "PUSPENKOM USU" }],
      [
        "meta",
        {
          property: "og:description",
          content: "Pusat dokumentasi panduan pendaftaran event",
        },
      ],
      ["meta", { property: "og:type", content: "website" }],
      ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ],

    srcDir: ".",
    cleanUrls: true,
    lastUpdated: true,
    ignoreDeadLinks: true,

    vite: {
      server: {
        port: 5123,
      },
    },

    mermaid: {
      theme: "neutral",
    },

    themeConfig: {
      logo: "/images/logo-full.png",
      siteTitle: "Lentera",

      nav: [
        { text: "Beranda", link: "/" },
        {
          text: "Panduan",
          items: [
            { text: "PPDGS USU", link: "/ppdgs/" },
            { text: "PPDS USU", link: "/ppds/" },
            { text: "Instalasi SEB (Windows)", link: "/instalasi-seb/" },
          ],
        },
        { text: "FAQ", link: "/ppdgs/faq" },
        { text: "Hubungi Kami", link: "/hubungi-admin" },
        { text: "Tiket Bantuan", link: "/lentera/tiket-bantuan" },
        {
          text: "Lainnya",
          items: [
            {
              text: "Tips Agar Cepat Selesai",
              link: "/ppdgs/extra/tips-cepat",
            },
            { text: "Kesalahan Umum", link: "/ppdgs/extra/kesalahan-umum" },
            { text: "Dokumen Wajib", link: "/ppdgs/extra/dokumen-wajib" },
            { text: "Istilah-Istilah", link: "/ppdgs/extra/istilah" },
          ],
        },
      ],

      sidebar: {
        "/instalasi-seb/": [
          {
            text: "Panduan Instalasi SEB",
            collapsed: false,
            items: [
              { text: "Panduan & Persyaratan", link: "/instalasi-seb/" },
              { text: "Instalasi Windows", link: "/instalasi-seb/instalasi-windows" },
              { text: "Instalasi macOS", link: "/instalasi-seb/instalasi-macos" },
              { text: "Penggunaan & Troubleshooting", link: "/instalasi-seb/penggunaan" },
            ],
          },
        ],
        "/ppds/": [
          {
            text: "Pendahuluan",
            collapsed: false,
            items: [
              { text: "Beranda Event", link: "/ppds/" },
              { text: "Persiapan", link: "/ppds/persiapan" },
            ],
          },
          {
            text: "Akun & Login",
            collapsed: false,
            items: [
              { text: "Registrasi Akun", link: "/ppds/registrasi-akun" },
              { text: "Login", link: "/ppds/login" },
            ],
          },
          {
            text: "Pendaftaran Event",
            collapsed: false,
            items: [
              { text: "Dashboard Peserta", link: "/ppds/dashboard" },
              { text: "Form Biodata", link: "/ppds/form-biodata" },
              { text: "Upload Dokumen", link: "/ppds/upload-dokumen" },
              { text: "Status Pendaftaran", link: "/ppds/status-pendaftaran" },
            ],
          },
          {
            text: "Bantuan",
            collapsed: false,
            items: [
              { text: "FAQ", link: "/ppds/faq" },
              { text: "Hubungi Kami", link: "/hubungi-admin" },
              { text: "Tiket Bantuan", link: "/lentera/tiket-bantuan" },
            ],
          },
          {
            text: "Referensi",
            collapsed: false,
            items: [
              {
                text: "Tips Agar Cepat Selesai",
                link: "/ppds/extra/tips-cepat",
              },
              { text: "Kesalahan Umum", link: "/ppds/extra/kesalahan-umum" },
              { text: "Dokumen Wajib", link: "/ppds/extra/dokumen-wajib" },
              { text: "Istilah-Istilah", link: "/ppds/extra/istilah" },
            ],
          },
        ],
        "/ppdgs/": [
          {
            text: "Pendahuluan",
            collapsed: false,
            items: [
              { text: "Beranda Event", link: "/ppdgs/" },
              { text: "Persiapan", link: "/ppdgs/persiapan" },
            ],
          },
          {
            text: "Akun & Login",
            collapsed: false,
            items: [
              { text: "Registrasi Akun", link: "/ppdgs/registrasi-akun" },
              { text: "Login", link: "/ppdgs/login" },
              { text: "Lupa Password", link: "/ppdgs/lupa-password" },
            ],
          },
          {
            text: "Pendaftaran Event",
            collapsed: false,
            items: [
              { text: "Dashboard Peserta", link: "/ppdgs/dashboard" },
              { text: "Form Biodata", link: "/ppdgs/form-biodata" },
              { text: "Upload Dokumen", link: "/ppdgs/upload-dokumen" },
              { text: "Status Pendaftaran", link: "/ppdgs/status-pendaftaran" },
            ],
          },
          {
            text: "Bantuan",
            collapsed: false,
            items: [
              { text: "FAQ", link: "/ppdgs/faq" },
              { text: "Hubungi Kami", link: "/hubungi-admin" },
              { text: "Tiket Bantuan", link: "/lentera/tiket-bantuan" },
            ],
          },
          {
            text: "Referensi",
            collapsed: false,
            items: [
              {
                text: "Tips Agar Cepat Selesai",
                link: "/ppdgs/extra/tips-cepat",
              },
              { text: "Kesalahan Umum", link: "/ppdgs/extra/kesalahan-umum" },
              { text: "Dokumen Wajib", link: "/ppdgs/extra/dokumen-wajib" },
              { text: "Istilah-Istilah", link: "/ppdgs/extra/istilah" },
            ],
          },
        ],
        "/lentera/": [
          {
            text: "Aplikasi Lentera",
            collapsed: false,
            items: [
              { text: "Tiket Bantuan", link: "/lentera/tiket-bantuan" },
            ],
          },
        ],
      },

      socialLinks: [{ icon: "github", link: "#" }],

      footer: {
        message: "Dokumentasi Panduan Peserta",
        copyright: "Copyright ©2026 Universitas Sumatera Utara",
      },

      lastUpdated: {
        text: "Terakhir diperbarui",
      },

      search: {
        provider: "local",
        options: {
          locales: {
            root: {
              translations: {
                button: {
                  buttonText: "Cari panduan...",
                  buttonAriaLabel: "Cari panduan",
                },
                modal: {
                  noResultsText: "Tidak ditemukan hasil",
                  resetButtonTitle: "Hapus pencarian",
                  footer: {
                    selectText: "Pilih",
                    navigateText: "Navigasi",
                    closeText: "Tutup",
                  },
                },
              },
            },
          },
        },
      },

      docFooter: {
        prev: "Sebelumnya",
        next: "Selanjutnya",
      },

      outline: {
        label: "Di halaman ini",
        level: "deep",
      },

      returnToTopLabel: "Kembali ke atas",
      sidebarMenuLabel: "Menu",
      darkModeSwitchLabel: "Tema",
      lightModeSwitchTitle: "Mode Terang",
      darkModeSwitchTitle: "Mode Gelap",
      skipToContentLabel: "Langsung ke konten",
    },
  }),
);
