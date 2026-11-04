-- CreateTable
CREATE TABLE "Dosen" (
    "id_dosen" TEXT NOT NULL,
    "nip_dosen" TEXT NOT NULL,
    "nama_dosen" TEXT NOT NULL,

    CONSTRAINT "Dosen_pkey" PRIMARY KEY ("id_dosen")
);

-- CreateTable
CREATE TABLE "MataKuliah" (
    "id_mk" TEXT NOT NULL,
    "kode_mk" TEXT NOT NULL,
    "nama_mk" TEXT NOT NULL,
    "sks" INTEGER NOT NULL,

    CONSTRAINT "MataKuliah_pkey" PRIMARY KEY ("id_mk")
);

-- CreateTable
CREATE TABLE "Mahasiswa" (
    "id_mahasiswa" TEXT NOT NULL,
    "nim" TEXT NOT NULL,
    "nama_mahasiswa" TEXT NOT NULL,
    "prodi" TEXT NOT NULL,

    CONSTRAINT "Mahasiswa_pkey" PRIMARY KEY ("id_mahasiswa")
);

-- CreateTable
CREATE TABLE "JadwalMataKuliah" (
    "id_jadwalMK" TEXT NOT NULL,
    "id_dosen" TEXT NOT NULL,
    "id_mk" TEXT NOT NULL,
    "hari" TEXT NOT NULL,
    "jam_mulai" TEXT NOT NULL,
    "jam_selesai" TEXT NOT NULL,
    "ruangan" TEXT NOT NULL,

    CONSTRAINT "JadwalMataKuliah_pkey" PRIMARY KEY ("id_jadwalMK")
);

-- CreateTable
CREATE TABLE "KRS_Mahasiswa" (
    "id_krs" TEXT NOT NULL,
    "id_mahasiswa" TEXT NOT NULL,
    "id_jadwalMK" TEXT NOT NULL,

    CONSTRAINT "KRS_Mahasiswa_pkey" PRIMARY KEY ("id_krs")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dosen_nip_dosen_key" ON "Dosen"("nip_dosen");

-- CreateIndex
CREATE UNIQUE INDEX "MataKuliah_kode_mk_key" ON "MataKuliah"("kode_mk");

-- CreateIndex
CREATE UNIQUE INDEX "Mahasiswa_nim_key" ON "Mahasiswa"("nim");

-- AddForeignKey
ALTER TABLE "JadwalMataKuliah" ADD CONSTRAINT "JadwalMataKuliah_id_dosen_fkey" FOREIGN KEY ("id_dosen") REFERENCES "Dosen"("id_dosen") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JadwalMataKuliah" ADD CONSTRAINT "JadwalMataKuliah_id_mk_fkey" FOREIGN KEY ("id_mk") REFERENCES "MataKuliah"("id_mk") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KRS_Mahasiswa" ADD CONSTRAINT "KRS_Mahasiswa_id_mahasiswa_fkey" FOREIGN KEY ("id_mahasiswa") REFERENCES "Mahasiswa"("id_mahasiswa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KRS_Mahasiswa" ADD CONSTRAINT "KRS_Mahasiswa_id_jadwalMK_fkey" FOREIGN KEY ("id_jadwalMK") REFERENCES "JadwalMataKuliah"("id_jadwalMK") ON DELETE RESTRICT ON UPDATE CASCADE;
