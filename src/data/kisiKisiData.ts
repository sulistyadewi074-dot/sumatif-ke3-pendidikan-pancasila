import { Question, LevelKognitif, Difficulty, QuestionType } from '../types';

export interface KisiKisiItem {
  id: number;
  elemen: string;
  cp: string;
  tp: string;
  indikator: string;
  levelKognitif: LevelKognitif;
  bobotSkor: number;
}

const ELEMEN_DEFAULT = 'Undang-Undang Dasar Negara Republik Indonesia Tahun 1945 (Norma & Kewajiban)';

const CP_DEFAULT =
  'Peserta didik mampu memahami nilai dan aturan dalam norma; mengidentifikasi hak dan kewajiban sebagai anggota keluarga, warga sekolah, dan warga negara secara seimbang; serta mempraktikkan aturan menjaga kerapian di rumah, membiasakan kewajiban berani jujur dalam perkataan dan perbuatan, serta melaksanakan kewajiban anak saat di sekolah secara tertib dan bertanggung jawab.';

const TP_1 =
  'Mengidentifikasi pengertian norma, tujuan norma, dan menganalisis macam-macam norma (agama, kesusilaan, kesopanan, hukum) beserta sanksinya dalam kehidupan bermasyarakat.';
const TP_2 =
  'Memahami pengertian hak dan kewajiban serta menganalisis hubungan timbal balik antara pelaksanaan hak dan kewajiban secara seimbang.';
const TP_3 =
  'Menerapkan aturan menjaga kerapian di rumah (merapikan tempat tidur, meletakkan sepatu/sandal pada tempatnya, merapikan meja belajar dan mainan) serta memahami manfaatnya bagi kenyamanan keluarga.';
const TP_4 =
  'Membiasakan kewajiban untuk berani jujur dalam perkataan dan perbuatan (mengakui kesalahan, kejujuran saat ujian/ulangan, mengembalikan barang/uang temuan, tidak berbohong) serta hikmahnya.';
const TP_5 =
  'Melaksanakan kewajiban anak saat berada di sekolah (mematuhi tata tertib, hadir tepat waktu, mengikuti upacara bendera, melaksanakan tugas piket, menghormati guru dan teman, serta menjaga sarana sekolah).';

export const KISI_KISI_MAP: Record<number, KisiKisiItem> = {
  // --- BAGIAN I: PILIHAN GANDA (10 BUTIR: NO. 1 - 10) ---
  1: {
    id: 1,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan pernyataan mengenai aturan yang berlaku di masyarakat, peserta didik dapat mengidentifikasi pengertian norma sebagai kaidah atau pedoman hidup yang mengikat masyarakat agar tercipta keteraturan dan ketertiban.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    id: 2,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan diagram visual 4 jenis norma (agama, kesusilaan, kesopanan, hukum), peserta didik dapat menentukan jenis norma yang bersumber dari hati nurani manusia yang jika dilanggar menimbulkan rasa bersalah dan penyesalan mendalam.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    id: 3,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan ilustrasi timbangan hubungan hak dan kewajiban, peserta didik dapat menganalisis prinsip keseimbangan di mana kewajiban harus ditunaikan terlebih dahulu dengan penuh tanggung jawab sebelum menuntut hak.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  4: {
    id: 4,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan cerita naratif kegiatan pagi hari seorang anak setelah bangun tidur, peserta didik dapat menentukan tindakan yang mencerminkan aturan menjaga kerapian di kamar tidur sendiri.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    id: 5,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan gambar ilustrasi kondisi meja belajar dan rak sepatu yang tertata rapi versus berantakan, peserta didik dapat menyimpulkan manfaat utama dari kebiasaan meletakkan barang kembali pada tempatnya di rumah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    id: 6,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan studi kasus seorang anak yang tidak sengaja memecahkan piring kesayangan ibunya saat mencuci piring, peserta didik dapat menentukan tindakan terpuji yang mencerminkan kewajiban berani jujur dan bertanggung jawab.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    id: 7,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan skenario situasi saat ulangan di kelas di mana seorang teman membujuk untuk memberikan contekan jawaban, peserta didik dapat menelaah sikap integritas dan kejujuran yang paling tepat untuk dilakukan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  8: {
    id: 8,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan cerita singkat saat anak berbelanja di warung kejujuran / kantin sekolah dan menerima uang kembalian berlebih dari penjual, peserta didik dapat menentukan perilaku jujur yang wajib dilaksanakan sesuai norma moral.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  9: {
    id: 9,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_5,
    indikator:
      'Disajikan teks tata tertib sekolah mengenai jam masuk dan upacara bendera hari Senin, peserta didik dapat menentukan kewajiban utama siswa sebagai warga sekolah demi menjaga kedisiplinan dan rasa nasionalisme.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  10: {
    id: 10,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_5,
    indikator:
      'Disajikan tabel daftar regu kerja kebersihan ruang kelas, peserta didik dapat menganalisis kewajiban melaksanakan piket kelas bersama kelompok sebagai wujud tanggung jawab dan gotong royong di sekolah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },

  // --- BAGIAN II: PILIHAN GANDA KOMPLEKS (5 BUTIR: NO. 11 - 15) ---
  11: {
    id: 11,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan daftar berbagai kegiatan anak sehari-hari di rumah, peserta didik dapat memilih beberapa contoh kegiatan yang merupakan wujud aturan dan kewajiban menjaga kerapian di lingkungan rumah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    id: 12,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan situasi kehidupan bermasyarakat, peserta didik dapat memilih beberapa tindakan nyata yang mencerminkan kewajiban bersikap berani jujur dalam perkataan maupun perbuatan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    id: 13,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_5,
    indikator:
      'Disajikan ragam perilaku siswa di lingkungan pendidikan, peserta didik dapat memilih beberapa tindakan yang merupakan kewajiban pokok seorang anak saat berada di sekolah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    id: 14,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan tabel karakteristik macam-macam norma sosial, peserta didik dapat menganalisis dan memilih karakteristik spesifik norma hukum yang membedakannya secara tegas dari norma agama, kesusilaan, dan kesopanan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  15: {
    id: 15,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan paparan tentang pentingnya kedisiplinan dan tanggung jawab, peserta didik dapat memilih beberapa dampak positif yang terwujud apabila hak dan kewajiban anak ditunaikan secara selaras dan seimbang.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },

  // --- BAGIAN III: PGK KATEGORI / BENAR-SALAH (5 BUTIR: NO. 16 - 20) ---
  16: {
    id: 16,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan 4 pernyataan mengenai pengertian norma, sumber norma, tujuan pembentukan norma, dan sanksi pelanggaran norma, peserta didik dapat menilai kebenaran masing-masing pernyataan (Benar/Salah).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    id: 17,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan 4 pernyataan terkait kebiasaan menjaga kerapian rumah (tempat tidur, alat belajar, rak sepatu, pakaian kotor), peserta didik dapat mengkategorikan pernyataan tersebut secara tepat (Benar/Salah).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    id: 18,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan 4 situasi perilaku sehari-hari mengenai kejujuran (mengakui ketidaktahuan, mengembalikan barang temuan, menceritakan kebenaran, menyembunyikan kesalahan), peserta didik dapat memvalidasi kebenaran prinsip kejujuran (Benar/Salah).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  19: {
    id: 19,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_5,
    indikator:
      'Disajikan 4 pernyataan mengenai tata tertib dan kewajiban anak saat berada di sekolah (menghormati guru, piket kelas, merawat fasilitas, izin saat tidak hadir), peserta didik dapat menentukan kategori kebenaran (Benar/Salah).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    id: 20,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan 4 analisis komparasi antara hak anak dan kewajiban anak dalam keluarga dan lingkungan sekolah, peserta didik dapat mengevaluasi kebenaran penerapan hak dan kewajiban (Benar/Salah).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },

  // --- BAGIAN IV: MENJODOHKAN (5 BUTIR: NO. 21 - 25) ---
  21: {
    id: 21,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Peserta didik dapat menjodohkan jenis norma (Agama, Kesusilaan, Kesopanan, Hukum) dengan sumber atau bentuk sanksi yang paling tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  22: {
    id: 22,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Peserta didik dapat menjodohkan benda atau area di rumah (Tempat tidur, Rak sepatu, Meja belajar, Kotak mainan) dengan tindakan kerapian yang tepat sesuai aturan rumah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  23: {
    id: 23,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Peserta didik dapat menjodohkan situasi konkret (Saat ulangan, Memecahkan barang ibu, Menerima uang lebih di kantin, Menemukan jam tangan di kelas) dengan wujud sikap berani jujur yang harus diambil.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    id: 24,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_5,
    indikator:
      'Peserta didik dapat menjodohkan kegiatan kewajiban anak di sekolah (Mengikuti upacara bendera, Melaksanakan piket kelas, Memperhatikan penjelasan guru, Memakai seragam lengkap dan rapi) dengan tujuan atau nilai karakter yang ditanamkan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    id: 25,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Peserta didik dapat menjodohkan pernyataan peran anak dengan klasifikasi status yang tepat (Hak Anak di Rumah, Kewajiban Anak di Rumah, Hak Anak di Sekolah, Kewajiban Anak di Sekolah).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },

  // --- BAGIAN V: ISIAN SINGKAT (5 BUTIR: NO. 26 - 30) ---
  26: {
    id: 26,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan definisi konseptual sesuatu yang wajib dikerjakan seseorang dengan penuh rasa tanggung jawab, peserta didik dapat menuliskan istilah konsep tersebut (kewajiban).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  27: {
    id: 27,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan batasan aturan yang mengikat dan membatasi tingkah laku anggota masyarakat agar kehidupan berlangsung tertib dan harmonis, peserta didik dapat menuliskan istilah yang dimaksud (norma).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  28: {
    id: 28,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan contoh perilaku merapikan selimut, menyusun bantal, dan meletakkan pakaian kotor pada keranjang cuci, peserta didik dapat melengkapi nama lingkungan tempat pelaksanaan kewajiban tersebut (rumah / keluarga).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  29: {
    id: 29,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan definisi sikap kesesuaian antara perkataan, hati nurani, dan perbuatan serta tidak berbohong atau mencurangi orang lain, peserta didik dapat menuliskan nilai karakter mulia tersebut (jujur / kejujuran).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  30: {
    id: 30,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_5,
    indikator:
      'Disajikan ilustrasi regu siswa yang bertugas menyapu lantai, membersihkan papan tulis, dan mengelap jendela ruang kelas sebelum bel masuk berbunyi, peserta didik dapat menuliskan istilah kegiatan kewajiban tersebut (piket / piket kelas).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },

  // --- BAGIAN VI: URAIAN / ESSAY TERBUKA (5 BUTIR: NO. 31 - 35) ---
  31: {
    id: 31,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Peserta didik dapat menguraikan perbedaan mendasar antara hak dan kewajiban serta memberikan penjelasan alasan pentingnya mendahulukan kewajiban sebelum menuntut hak agar tercipta keharmonisan hidup bermasyarakat.',
    levelKognitif: 'L2',
    bobotSkor: 2,
  },
  32: {
    id: 32,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Peserta didik dapat menyebutkan 3 (tiga) aturan menjaga kerapian dan kebersihan di lingkungan rumah serta menguraikan manfaat positifnya bagi keharmonisan dan kenyamanan seluruh anggota keluarga.',
    levelKognitif: 'L2',
    bobotSkor: 2,
  },
  33: {
    id: 33,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Peserta didik dapat menganalisis pentingnya memiliki keberanian untuk bersikap jujur saat melakukan kesalahan dan menjelaskan dampak negatif yang timbul apabila memilih menutupi kesalahan dengan kebohongan.',
    levelKognitif: 'L3',
    bobotSkor: 2,
  },
  34: {
    id: 34,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_5,
    indikator:
      'Peserta didik dapat memerinci 3 (tiga) kewajiban utama siswa saat berada di sekolah dan menjelaskan konsekuensi atau dampak buruk yang terjadi jika ada siswa yang melanggar tata tertib sekolah tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 2,
  },
  35: {
    id: 35,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan studi kasus kontekstual tentang seorang siswa yang menemukan uang Rp20.000 di koridor sekolah dan diajak temannya untuk membelanjakannya di kantin, peserta didik dapat menganalisis tindakan jujur yang wajib diambil beserta pertimbangan norma agama, moral, dan aturan sekolah.',
    levelKognitif: 'L3',
    bobotSkor: 2,
  },
};

/**
 * Memperkaya objek pertanyaan dengan metadata kisi-kisi Kurikulum Merdeka
 */
export function enrichQuestion(question: Question): Question {
  const item = KISI_KISI_MAP[question.id];
  if (!item) {
    return {
      ...question,
      elemen: question.elemen || ELEMEN_DEFAULT,
      cp: question.cp || CP_DEFAULT,
      tp: question.tp || TP_1,
      indikator: question.indikator || `Indikator soal nomor ${question.id}`,
      levelKognitif: question.levelKognitif || 'L2',
      bobotSkor: question.bobotSkor || (question.type === 'uraian' ? 2 : 1),
    };
  }

  return {
    ...question,
    elemen: question.elemen || item.elemen,
    cp: question.cp || item.cp,
    tp: question.tp || item.tp,
    indikator: question.indikator || item.indikator,
    levelKognitif: question.levelKognitif || item.levelKognitif,
    bobotSkor: question.bobotSkor || item.bobotSkor,
  };
}

export interface KisiKisiSummaryStats {
  totalSoal: number;
  totalSkor: number;
  elemenCounts: Record<string, number>;
  levelCounts: {
    L1: { count: number; percent: number; label: string };
    L2: { count: number; percent: number; label: string };
    L3: { count: number; percent: number; label: string };
  };
  difficultyCounts: {
    Mudah: { count: number; percent: number };
    Sedang: { count: number; percent: number };
    Sukar: { count: number; percent: number };
  };
  typeCounts: Record<QuestionType, number>;
}

/**
 * Menghitung rekapitulasi statistik kisi-kisi secara otomatis
 */
export function calculateKisiKisiStats(questions: Question[]): KisiKisiSummaryStats {
  const total = questions.length || 1;
  let totalScore = 0;

  const elemenCounts: Record<string, number> = {};
  const levelRaw = { L1: 0, L2: 0, L3: 0 };
  const diffRaw = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCounts: Record<QuestionType, number> = {
    pg: 0,
    pgk: 0,
    pgk_kategori: 0,
    menjodohkan: 0,
    isian: 0,
    uraian: 0,
  };

  questions.forEach((q) => {
    const enriched = enrichQuestion(q);
    const score = enriched.bobotSkor || (q.type === 'uraian' ? 2 : 1);
    totalScore += score;

    const el = enriched.elemen || ELEMEN_DEFAULT;
    elemenCounts[el] = (elemenCounts[el] || 0) + 1;

    const lvl =
      enriched.levelKognitif ||
      (enriched.difficulty === 'Mudah' ? 'L1' : enriched.difficulty === 'Sedang' ? 'L2' : 'L3');
    if (lvl in levelRaw) {
      levelRaw[lvl as keyof typeof levelRaw] += 1;
    }

    const diff = enriched.difficulty || 'Sedang';
    if (diff in diffRaw) {
      diffRaw[diff as keyof typeof diffRaw] += 1;
    }

    if (q.type in typeCounts) {
      typeCounts[q.type as keyof typeof typeCounts] += 1;
    }
  });

  return {
    totalSoal: questions.length,
    totalSkor: totalScore,
    elemenCounts,
    levelCounts: {
      L1: {
        count: levelRaw.L1,
        percent: Math.round((levelRaw.L1 / total) * 100),
        label: 'L1 - Pemahaman & Pengetahuan',
      },
      L2: {
        count: levelRaw.L2,
        percent: Math.round((levelRaw.L2 / total) * 100),
        label: 'L2 - Aplikasi & Penerapan',
      },
      L3: {
        count: levelRaw.L3,
        percent: Math.round((levelRaw.L3 / total) * 100),
        label: 'L3 - Penalaran & Analisis HOTS',
      },
    },
    difficultyCounts: {
      Mudah: { count: diffRaw.Mudah, percent: Math.round((diffRaw.Mudah / total) * 100) },
      Sedang: { count: diffRaw.Sedang, percent: Math.round((diffRaw.Sedang / total) * 100) },
      Sukar: { count: diffRaw.Sukar, percent: Math.round((diffRaw.Sukar / total) * 100) },
    },
    typeCounts,
  };
}
