<p align="center">
  <img src="https://it.telkomuniversity.ac.id/wp-content/uploads/2021/04/PuTI-Rounded-Square-ID-2048x2048.png.webp" width="120" alt="PUTI Logo" />
</p>
<h1 align="center">Mini Project Backend Developer - Direktorat PUTI</h1>
<p align="center">
  <strong>Kandidat:</strong> Andre Putra Pratama<br>
</p>

---

## Deskripsi Proyek

Repositori ini berisi solusi komprehensif untuk Mini Project rekrutmen Backend Developer di Direktorat Perencanaan dan Pengembangan Teknologi Informasi (PUTI) Telkom University. Proyek ini terbagi menjadi dua bagian utama:

1. **REST API Penjadwalan Mata Kuliah:** Sistem *backend* relasional yang mengelola data Dosen, Mata Kuliah, Mahasiswa, Jadwal, dan KRS dengan menerapkan prinsip *clean architecture*.
2. **Penyelesaian Algoritma ICPC:** Implementasi *Greedy Constructive Algorithm* dalam Node.js untuk menyelesaikan masalah "Stacking Cups" (ICPC 2025).

## Tech Stack

Proyek ini dibangun menggunakan teknologi modern untuk memastikan skalabilitas, keamanan, dan performa tinggi:

<p>
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma ORM" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" alt="Swagger UI" />
</p>

## Arsitektur, Keamanan & Performa

Proyek ini telah dikonfigurasi dengan standar industri (OWASP) untuk keamanan, performa, dan keandalan sistem:

- **Global Validation Pipe:** Menggunakan `class-validator` untuk memvalidasi DTO dan menolak *Bad Request* secara otomatis.
- **Global Exception Filter:** Mencegah kebocoran data sensitif (struktur tabel) akibat *internal server error* (Standar OWASP).
- **Helmet Security:** Melindungi aplikasi dari celah kerentanan web umum (XSS, Clickjacking) via penyesuaian HTTP headers otomatis.
- **Rate Limiting:** Menggunakan `@nestjs/throttler` untuk mencegah serangan DDoS atau *spam request*.
- **CORS Enabled:** Mengizinkan integrasi lintas asal untuk persiapan arsitektur *decoupled* dengan *frontend*.
- **API Versioning:** Rute API diisolasi dengan prefix `/api/v1/`.
- **In-Memory Caching:** Integrasi `@nestjs/cache-manager` pada *endpoint GET* untuk memangkas waktu respons hingga hitungan milidetik.
- **Pagination:** Pembatasan jumlah pengambilan data (contoh: `?page=1&limit=5`) pada rute pencarian massal guna menjaga stabilitas RAM *server*.
- **Logger Middleware:** Sistem observabilitas yang secara otomatis mencatat seluruh rute akses, alamat IP, waktu respons, dan status API ke terminal *server* untuk kebutuhan audit DevOps.

## Riwayat Instalasi & Perintah Terminal

Sebagai bentuk transparansi proses *development*, berikut adalah seluruh perintah terminal yang digunakan untuk membangun proyek ini dari awal hingga selesai:

### 1. Inisialisasi Proyek & Infrastruktur
- `nest new backend-puti` *(Membuat kerangka proyek NestJS)*
- `docker compose up -d` *(Menjalankan PostgreSQL di dalam kontainer Docker)*

### 2. Konfigurasi Prisma ORM
- `npm install prisma --save-dev` *(Menginstal Prisma CLI)*
- `npm install @prisma/client` *(Menginstal Prisma Client untuk ORM)*
- `npx prisma init --datasource-provider postgresql` *(Menginisialisasi skema Prisma)*
- `npx prisma migrate dev` *(Melakukan migrasi skema ERD ke dalam basis data)*

### 3. Integrasi Modul Bonus, Keamanan & Performa
- `npm install @nestjs/swagger` *(Membangun dokumentasi antarmuka)*
- `npm install class-validator class-transformer` *(Memasang lapisan validasi DTO)*
- `npm install @nestjs/throttler` *(Memasang modul pembatasan akses/Rate Limit)*
- `npm install helmet` *(Memasang pengaman HTTP header)*
- `npm install @nestjs/cache-manager cache-manager` *(Memasang modul In-Memory Caching)*

### 4. Eksekusi & Pengujian
- `npm run start:dev` *(Menyalakan server lokal untuk REST API)*
- `npx prisma studio` *(Membuka GUI interaktif untuk mengelola isi basis data)*
- `node icpc_solution.js` *(Menjalankan dan menguji algoritma Stacking Cups)*

## Panduan Menjalankan Sistem

Pastikan Docker, Node.js, dan npm sudah terinstal. Jalankan perintah berikut secara berurutan di terminal:

```bash
docker compose up -d
npm install
npx prisma migrate dev
npm run start:dev
```

Server API akan berjalan pada http://localhost:3000 dan dokumentasi Swagger dapat diakses di http://localhost:3000/docs.