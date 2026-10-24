import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN I: PILIHAN GANDA (10 BUTIR SOAL: NO. 1 - 10)
  // Setiap butir bernilai skor 1 (Total skor PG = 10)
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Pengertian dan Tujuan Norma',
    difficulty: 'Mudah',
    text: 'Dalam kehidupan bermasyarakat, manusia tidak dapat hidup sendiri tanpa adanya aturan yang mengatur tingkah laku sehari-hari. Aturan atau pedoman tingkah laku yang berlaku dan mengikat anggota masyarakat agar tercipta ketertiban, keamanan, dan keharmonisan disebut...',
    options: [
      { id: 'A', text: 'Adat istiadat keluarga' },
      { id: 'B', text: 'Kebebasan individu' },
      { id: 'C', text: 'Norma' },
      { id: 'D', text: 'Keinginan pribadi' },
    ],
    correctAnswer: 'C',
    explanation:
      'Norma adalah kaidah, aturan, atau pedoman hidup yang berlaku dan mengikat anggota masyarakat untuk mewujudkan ketertiban, keadilan, dan ketenteraman bersama.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Macam-Macam Norma dan Sanksinya',
    difficulty: 'Mudah',
    text: 'Perhatikan diagram empat macam norma yang berlaku dalam kehidupan bermasyarakat berikut ini!\n\nManakah jenis norma yang bersumber langsung dari hati nurani (sanubari) manusia, yang apabila dilanggar akan menimbulkan sanksi berupa rasa penyesalan, gelisah, dan perasaan bersalah mendalam?',
    imageSvg: `<svg viewBox="0 0 520 180" class="w-full max-w-lg h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradAgama" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3b82f6" />
          <stop offset="100%" stop-color="#1d4ed8" />
        </linearGradient>
        <linearGradient id="gradSusila" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ec4899" />
          <stop offset="100%" stop-color="#be185d" />
        </linearGradient>
        <linearGradient id="gradSopan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f59e0b" />
          <stop offset="100%" stop-color="#b45309" />
        </linearGradient>
        <linearGradient id="gradHukum" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10b981" />
          <stop offset="100%" stop-color="#047857" />
        </linearGradient>
      </defs>
      <rect width="520" height="180" fill="#f8fafc" rx="14" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="260" y="24" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">EMPAT MACAM NORMA DALAM MASYARAKAT</text>
      
      <!-- Kartu 1: Norma Agama -->
      <g transform="translate(15, 36)">
        <rect width="115" height="128" rx="8" fill="url(#gradAgama)" />
        <circle cx="57.5" cy="32" r="16" fill="rgba(255,255,255,0.2)"/>
        <text x="57.5" y="38" font-size="15" fill="#ffffff" text-anchor="middle">📖</text>
        <text x="57.5" y="64" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">Norma Agama</text>
        <text x="57.5" y="82" font-size="8.5" fill="#e0e7ff" text-anchor="middle">Sumber: Wahyu Tuhan</text>
        <rect x="8" y="96" width="99" height="22" rx="4" fill="rgba(0,0,0,0.2)"/>
        <text x="57.5" y="110" font-size="8" fill="#ffffff" text-anchor="middle">Sanksi: Dosa &amp; Pahala</text>
      </g>

      <!-- Kartu 2: Norma Kesusilaan -->
      <g transform="translate(140, 36)">
        <rect width="115" height="128" rx="8" fill="url(#gradSusila)" stroke="#f43f5e" stroke-width="2"/>
        <circle cx="57.5" cy="32" r="16" fill="rgba(255,255,255,0.25)"/>
        <text x="57.5" y="38" font-size="15" fill="#ffffff" text-anchor="middle">❤️</text>
        <text x="57.5" y="64" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">Norma Kesusilaan</text>
        <text x="57.5" y="82" font-size="8.5" fill="#fce7f3" text-anchor="middle">Sumber: Hati Nurani</text>
        <rect x="8" y="96" width="99" height="22" rx="4" fill="rgba(0,0,0,0.2)"/>
        <text x="57.5" y="110" font-size="8" fill="#ffffff" text-anchor="middle">Sanksi: Rasa Bersalah</text>
      </g>

      <!-- Kartu 3: Norma Kesopanan -->
      <g transform="translate(265, 36)">
        <rect width="115" height="128" rx="8" fill="url(#gradSopan)" />
        <circle cx="57.5" cy="32" r="16" fill="rgba(255,255,255,0.2)"/>
        <text x="57.5" y="38" font-size="15" fill="#ffffff" text-anchor="middle">🤝</text>
        <text x="57.5" y="64" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">Norma Kesopanan</text>
        <text x="57.5" y="82" font-size="8.5" fill="#fef3c7" text-anchor="middle">Sumber: Adat &amp; Gaulan</text>
        <rect x="8" y="96" width="99" height="22" rx="4" fill="rgba(0,0,0,0.2)"/>
        <text x="57.5" y="110" font-size="8" fill="#ffffff" text-anchor="middle">Sanksi: Teguran/Dicela</text>
      </g>

      <!-- Kartu 4: Norma Hukum -->
      <g transform="translate(390, 36)">
        <rect width="115" height="128" rx="8" fill="url(#gradHukum)" />
        <circle cx="57.5" cy="32" r="16" fill="rgba(255,255,255,0.2)"/>
        <text x="57.5" y="38" font-size="15" fill="#ffffff" text-anchor="middle">⚖️</text>
        <text x="57.5" y="64" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">Norma Hukum</text>
        <text x="57.5" y="82" font-size="8.5" fill="#d1fae5" text-anchor="middle">Sumber: Negara/UU</text>
        <rect x="8" y="96" width="99" height="22" rx="4" fill="rgba(0,0,0,0.2)"/>
        <text x="57.5" y="110" font-size="8" fill="#ffffff" text-anchor="middle">Sanksi: Tegas &amp; Pidana</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Norma Hukum' },
      { id: 'B', text: 'Norma Kesusilaan' },
      { id: 'C', text: 'Norma Kesopanan' },
      { id: 'D', text: 'Norma Agama' },
    ],
    correctAnswer: 'B',
    explanation:
      'Norma kesusilaan bersumber dari hati nurani (suara batin manusia) mengenai hal yang baik dan buruk. Pelanggaran terhadap norma kesusilaan menyebabkan penyesalan, rasa malu, dan kegelisahan batin.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Keseimbangan Hak dan Kewajiban',
    difficulty: 'Sedang',
    text: 'Perhatikan ilustrasi timbangan keadilan berikut!\n\nHak adalah segala sesuatu yang mutlak menjadi milik seseorang, sedangkan kewajiban adalah sesuatu yang harus dikerjakan dengan penuh rasa tanggung jawab.\n\nPrinsip yang paling tepat mengenai pelaksanaan hak dan kewajiban dalam kehidupan sehari-hari seorang anak adalah...',
    imageSvg: `<svg viewBox="0 0 500 160" class="w-full max-w-lg h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="160" fill="#f1f5f9" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="250" y="24" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">TIMBANGAN KESEIMBANGAN HAK &amp; KEWAJIBAN</text>
      
      <!-- Tiang Utama -->
      <rect x="245" y="38" width="10" height="90" fill="#475569" rx="3"/>
      <path d="M220 135 L280 135 L270 128 L230 128 Z" fill="#334155"/>
      <circle cx="250" cy="45" r="7" fill="#0f172a"/>

      <!-- Palang Timbangan Seimbang -->
      <line x1="80" y1="45" x2="420" y2="45" stroke="#334155" stroke-width="5" stroke-linecap="round"/>

      <!-- Piringan Kiri: Kewajiban -->
      <line x1="120" y1="45" x2="90" y2="85" stroke="#64748b" stroke-width="1.5"/>
      <line x1="120" y1="45" x2="150" y2="85" stroke="#64748b" stroke-width="1.5"/>
      <path d="M80 85 Q120 105 160 85 Z" fill="#3b82f6"/>
      <rect x="90" y="65" width="60" height="20" rx="4" fill="#1d4ed8"/>
      <text x="120" y="79" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">KEWAJIBAN</text>
      <text x="120" y="118" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">Ditunaikan Dahulu</text>

      <!-- Piringan Kanan: Hak -->
      <line x1="380" y1="45" x2="350" y2="85" stroke="#64748b" stroke-width="1.5"/>
      <line x1="380" y1="45" x2="410" y2="85" stroke="#64748b" stroke-width="1.5"/>
      <path d="M340 85 Q380 105 420 85 Z" fill="#10b981"/>
      <rect x="350" y="65" width="60" height="20" rx="4" fill="#047857"/>
      <text x="380" y="79" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">HAK</text>
      <text x="380" y="118" font-size="10" font-weight="bold" fill="#065f46" text-anchor="middle">Diterima Setelahnya</text>

      <rect x="155" y="138" width="190" height="16" rx="4" fill="#e2e8f0"/>
      <text x="250" y="150" font-size="9" fill="#475569" text-anchor="middle">Seimbang, Selaras, dan Bertanggung Jawab</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Menuntut hak sebanyak-banyaknya tanpa perlu melaksanakan kewajiban' },
      { id: 'B', text: 'Mendahulukan pelaksanaan kewajiban dengan ikhlas sebelum menuntut hak' },
      { id: 'C', text: 'Hanya melaksanakan kewajiban jika sudah diberi hadiah oleh orang tua' },
      { id: 'D', text: 'Mengabaikan hak orang lain demi terpenuhinya hak pribadi kita sendiri' },
    ],
    correctAnswer: 'B',
    explanation:
      'Hak dan kewajiban harus dilaksanakan secara seimbang dan selaras. Sebagai warga negara dan anak yang berkarakter Pancasila, kita wajib menunaikan kewajiban terlebih dahulu dengan penuh tanggung jawab sebelum menuntut hak.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Aturan Menjaga Kerapian di Rumah',
    difficulty: 'Sedang',
    text: 'Setiap pagi setelah bangun tidur pukul 05.30 WITA, Made segera membuka jendela kamar, melipat selimut, merapikan seprei, serta menyusun bantal dan guling dengan rapi sebelum mandi pagi.\n\nTindakan yang dilakukan oleh Made tersebut mencerminkan penerapan aturan...',
    options: [
      { id: 'A', text: 'Kewajiban menjaga kerapian dan kebersihan di lingkungan rumah' },
      { id: 'B', text: 'Hak untuk mendapatkan kamar tidur yang mewah dan megah' },
      { id: 'C', text: 'Kewajiban mematuhi tata tertib piket kebersihan di sekolah' },
      { id: 'D', text: 'Norma kesopanan saat bergaul dengan teman sebaya' },
    ],
    correctAnswer: 'A',
    explanation:
      'Merapikan tempat tidur, melipat selimut, dan mengatur bantal setelah bangun adalah contoh nyata kewajiban anak dalam menjaga kerapian dan kebersihan di lingkungan rumah sendiri.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Aturan Menjaga Kerapian di Rumah',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar perbandingan dua kondisi sudut ruangan di rumah berikut ini!\n\nDi rumah Siti, terdapat aturan bahwa setiap anggota keluarga wajib meletakkan sepatu/sandal pada rak sepatu dan mengembalikan buku atau alat tulis ke tempat semula setelah selesai belajar.\n\nManfaat utama yang diperoleh keluarga Siti dari membiasakan aturan menjaga kerapian tersebut adalah...',
    imageSvg: `<svg viewBox="0 0 500 170" class="w-full max-w-lg h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="170" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="250" y="22" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">PERBANDINGAN KONDISI SUDUT RUANGAN DI RUMAH</text>

      <!-- Panel Kiri: Berantakan -->
      <g transform="translate(20, 34)">
        <rect width="215" height="120" rx="8" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5"/>
        <text x="107.5" y="18" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">❌ Kondisi Berantakan</text>
        <line x1="20" y1="26" x2="195" y2="26" stroke="#fecaca"/>
        
        <!-- Ilustrasi sepatu berserakan & meja acak-acakan -->
        <rect x="30" y="38" width="60" height="45" rx="3" fill="#cbd5e1" stroke="#94a3b8"/>
        <ellipse cx="120" cy="85" rx="16" ry="6" fill="#ef4444" transform="rotate(-25 120 85)"/>
        <ellipse cx="160" cy="75" rx="16" ry="6" fill="#ef4444" transform="rotate(35 160 75)"/>
        <line x1="40" y1="50" x2="80" y2="70" stroke="#64748b" stroke-width="3"/>
        <line x1="70" y1="40" x2="45" y2="75" stroke="#f59e0b" stroke-width="2"/>
        <text x="107.5" y="108" font-size="9" fill="#7f1d1d" text-anchor="middle">Sepatu berserakan, barang mudah hilang &amp; kotor</text>
      </g>

      <!-- Panel Kanan: Rapi & Teratur -->
      <g transform="translate(265, 34)">
        <rect width="215" height="120" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
        <text x="107.5" y="18" font-size="10" font-weight="bold" fill="#166534" text-anchor="middle">✅ Tertata Rapi di Tempatnya</text>
        <line x1="20" y1="26" x2="195" y2="26" stroke="#bbf7d0"/>

        <!-- Ilustrasi rak teratur -->
        <rect x="35" y="38" width="145" height="48" rx="4" fill="#e2e8f0" stroke="#64748b"/>
        <line x1="35" y1="62" x2="180" y2="62" stroke="#64748b" stroke-width="1.5"/>
        <ellipse cx="65" cy="52" rx="14" ry="5" fill="#2563eb"/>
        <ellipse cx="105" cy="52" rx="14" ry="5" fill="#0d9488"/>
        <ellipse cx="145" cy="52" rx="14" ry="5" fill="#d97706"/>
        <ellipse cx="65" cy="74" rx="14" ry="5" fill="#475569"/>
        <ellipse cx="105" cy="74" rx="14" ry="5" fill="#7c3aed"/>
        <ellipse cx="145" cy="74" rx="14" ry="5" fill="#16a34a"/>
        <text x="107.5" y="108" font-size="9" fill="#14532d" text-anchor="middle">Rumah bersih, asri, nyaman, &amp; barang mudah dicari</text>
      </g>
    </svg>`,
    options: [
      { id: 'A', text: 'Rumah menjadi terlihat sempit dan sulit bergerak' },
      { id: 'B', text: 'Rumah terasa nyaman, bersih, sehat, dan barang mudah ditemukan saat dibutuhkan' },
      { id: 'C', text: 'Anak mendapatkan pujian dan uang saku tambahan dari tetangga sekitar' },
      { id: 'D', text: 'Semua pekerjaan rumah tangga menjadi sepenuhnya tanggung jawab orang tua' },
    ],
    correctAnswer: 'B',
    explanation:
      'Menjaga kerapian di rumah dengan mengembalikan barang ke tempatnya menciptakan suasana rumah yang nyaman, indah, bersih, serta menghindarkan barang dari risiko hilang atau rusak.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Kewajiban untuk Berani Jujur',
    difficulty: 'Sedang',
    text: 'Saat membantu ibu merapikan meja makan, Budi tidak sengaja menyenggol piring keramik hingga jatuh dan pecah. Tidak ada orang lain di dapur saat peristiwa itu terjadi.\n\nBerdasarkan kewajiban anak untuk berani bersikap jujur dan bertanggung jawab, tindakan terpuji yang seharusnya dilakukan oleh Budi adalah...',
    options: [
      { id: 'A', text: 'Menyembunyikan pecahan piring ke bawah lemari agar tidak ketahuan ibu' },
      { id: 'B', text: 'Segera menemui ibu, menceritakan kejadian yang sebenarnya dengan jujur, dan meminta maaf' },
      { id: 'C', text: 'Menyalahkan adik yang sedang bermain di ruang tengah atas pecahnya piring tersebut' },
      { id: 'D', text: 'Pura-pura tidak tahu dan segera pergi bermain ke luar rumah bersama teman' },
    ],
    correctAnswer: 'B',
    explanation:
      'Berani jujur berarti berani berkata apa adanya sesuai kenyataan dan berani mengakui kesalahan yang telah diperbuat serta meminta maaf dengan tulus.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Kewajiban untuk Berani Jujur di Sekolah',
    difficulty: 'Sukar',
    text: 'Ketika ulangan sumatif Pendidikan Pancasila sedang berlangsung, Wayan duduk di samping temannya yang kesulitan menjawab soal nomor 15. Teman tersebut berbisik meminta Wayan memperlihatkan lembar jawabannya.\n\nSikap berani jujur dan berintegritas yang wajib ditunjukkan oleh Wayan adalah...',
    options: [
      { id: 'A', text: 'Memberikan contekan jawaban karena merasa kasihan kepada temannya' },
      { id: 'B', text: 'Menolak memberikan contekan dengan sopan dan fokus mengerjakan soal sendiri dengan percaya diri' },
      { id: 'C', text: 'Meminta imbalan uang jajan terlebih dahulu sebelum memberikan jawaban ulangan' },
      { id: 'D', text: 'Berteriak keras di ruang kelas agar semua teman tahu temannya ingin menyontek' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kejujuran akademik saat ulangan merupakan kewajiban utama siswa di sekolah. Menolak memberikan contekan dengan sopan membiasakan teman untuk mandiri, percaya diri, dan menjunjung tinggi nilai kejujuran.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Kewajiban untuk Berani Jujur dalam Kehidupan Sehari-hari',
    difficulty: 'Sedang',
    text: 'Komang membeli buku tulis dan bolpoin di kantin sekolah seharga Rp8.000. Komang membayar dengan uang pecahan Rp10.000. Ibu penjual kantin yang sedang sibuk keliru memberikan uang kembalian sebesar Rp7.000 (kelebihan Rp5.000).\n\nTindakan yang wajib dilakukan oleh Komang sesuai dengan kewajiban berani jujur adalah...',
    options: [
      { id: 'A', text: 'Segera menyimpan uang kembalian berlebih tersebut untuk jajan es krim di waktu pulang' },
      { id: 'B', text: 'Mengembalikan kelebihan uang Rp5.000 kepada ibu penjual kantin sambil menjelaskan kekeliruannya' },
      { id: 'C', text: 'Membagikan kelebihan uang tersebut kepada teman-teman sekelasnya' },
      { id: 'D', text: 'Diam saja karena menganggap kelebihan uang kembalian adalah rezeki yang tidak terduga' },
    ],
    correctAnswer: 'B',
    explanation:
      'Mengembalikan kelebihan uang kembalian merupakan wujud nyata kewajiban bersikap jujur dan menghargai hak milik orang lain.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Kewajiban Anak Saat di Sekolah',
    difficulty: 'Mudah',
    text: 'Perhatikan beberapa tata tertib sekolah berikut ini!\n1. Hadir di sekolah paling lambat 15 menit sebelum bel masuk berbunyi.\n2. Mengikuti upacara bendera hari Senin dengan khidmat dan tertib.\n3. Mengenakan seragam sekolah lengkap beserta atribut topi dan dasi.\n\nTata tertib di atas merupakan contoh nyata dari...',
    options: [
      { id: 'A', text: 'Hak istimewa anak saat di lingkungan keluarga' },
      { id: 'B', text: 'Kewajiban pokok anak sebagai siswa saat berada di sekolah' },
      { id: 'C', text: 'Bentuk hukuman dari pengurus komite sekolah' },
      { id: 'D', text: 'Norma hukum formal yang dibuat oleh pengadilan negeri' },
    ],
    correctAnswer: 'B',
    explanation:
      'Mematuhi jam masuk, memakai seragam lengkap, dan mengikuti upacara bendera dengan khidmat adalah kewajiban yang wajib dipatuhi oleh setiap siswa saat di sekolah.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Kewajiban Anak Saat di Sekolah (Piket Kelas)',
    difficulty: 'Sedang',
    text: 'Di kelas VI SD Negeri 3 Loloan Timur, setiap siswa telah dibagi ke dalam regu piket harian. Hari ini adalah giliran regu Dewi untuk bertugas piket.\n\nSikap yang menunjukkan pelaksanaan kewajiban piket sekolah dengan penuh tanggung jawab adalah...',
    options: [
      { id: 'A', text: 'Datang lebih awal untuk menyapu lantai, merapikan meja guru, dan membersihkan papan tulis bersama regu' },
      { id: 'B', text: 'Datang terlambat dan langsung duduk di bangku menunggu bel pelajaran dimulai' },
      { id: 'C', text: 'Menyuruh teman satu regu membersihkan kelas sendirian sementara dirinya bermain di luar' },
      { id: 'D', text: 'Hanya mau membersihkan kelas jika diawasi langsung oleh kepala sekolah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kewajiban piket kelas harus dilaksanakan dengan datang lebih awal dan bergotong royong bersama anggota regu demi kenyamanan ruang belajar bersama.',
  },

  // =========================================================================
  // BAGIAN II: PILIHAN GANDA KOMPLEKS (5 BUTIR SOAL: NO. 11 - 15)
  // Peserta didik dapat memilih lebih dari satu jawaban benar
  // Setiap butir bernilai skor 1 (Total skor PGK = 5)
  // =========================================================================
  {
    id: 11,
    type: 'pgk',
    topic: 'Aturan Menjaga Kerapian di Rumah',
    difficulty: 'Sedang',
    text: 'Manakah di antara pernyataan-pernyataan berikut yang merupakan wujud nyata aturan dan kewajiban anak dalam menjaga kerapian dan kebersihan di lingkungan rumah? (Pilihlah 3 jawaban yang benar!)',
    options: [
      { id: 'A', text: 'Merapikan kembali buku pelajaran dan alat tulis ke dalam tas atau rak setelah selesai belajar' },
      { id: 'B', text: 'Meletakkan sepatu dan sandal sekolah dengan tertata rapi di rak sepatu setelah pulang' },
      { id: 'C', text: 'Membiarkan pakaian kotor berserakan di atas kasur agar dicuci oleh ibu' },
      { id: 'D', text: 'Menyimpan mainan kembali ke dalam kotak wadah mainan setelah selesai bermain' },
      { id: 'E', text: 'Membuang sampah bekas bungkus makanan di kolong meja ruang tamu' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      'Merapikan alat belajar (A), menaruh sepatu di rak (B), dan membereskan mainan ke dalam wadah (D) adalah aturan menjaga kerapian di rumah. Membiarkan baju berserakan dan membuang sampah di kolong meja melanggar aturan kebersihan.',
  },
  {
    id: 12,
    type: 'pgk',
    topic: 'Kewajiban untuk Berani Jujur',
    difficulty: 'Sedang',
    text: 'Sikap jujur harus dibiasakan sejak dini di rumah, sekolah, maupun masyarakat. Manakah di antara tindakan berikut yang mencerminkan keberanian anak untuk bersikap jujur? (Pilihlah 3 jawaban yang benar!)',
    options: [
      { id: 'A', text: 'Mengakui secara terus terang kepada guru bahwa belum mengerjakan PR karena lupa dan berjanji segera menyelesaikannya' },
      { id: 'B', text: 'Menyembunyikan lembar ulangan yang mendapat nilai kurang baik di bawah kasur kamar' },
      { id: 'C', text: 'Menyerahkan dompet atau uang yang ditemukan di jalan kepada orang tua atau pihak sekolah' },
      { id: 'D', text: 'Mengatakan hal yang sebenarnya kepada orang tua saat tidak sengaja merusakkan mainan adik' },
      { id: 'E', text: 'Membuat alasan palsu saat terlambat datang ke sekolah agar tidak ditegur guru piket' },
    ],
    correctAnswer: ['A', 'C', 'D'],
    explanation:
      'Mengakui belum mengerjakan tugas secara terus terang (A), mengembalikan barang temuan (C), dan mengakui kesalahan saat merusakkan mainan (D) adalah wujud berani jujur.',
  },
  {
    id: 13,
    type: 'pgk',
    topic: 'Kewajiban Anak Saat di Sekolah',
    difficulty: 'Sedang',
    text: 'Sebagai warga sekolah yang baik, setiap siswa memiliki sejumlah kewajiban yang harus ditaati. Manakah perilaku berikut yang merupakan kewajiban pokok anak saat berada di sekolah? (Pilihlah 3 jawaban yang benar!)',
    options: [
      { id: 'A', text: 'Mendengarkan dan memperhatikan penjelasan guru dengan tertib selama pembelajaran berlangsung' },
      { id: 'B', text: 'Menghormati bapak/ibu guru serta saling menghargai antarteman tanpa membeda-bedakan' },
      { id: 'C', text: 'Mencoret-coret meja belajar dan dinding kelas menggunakan spidol atau tipe-x' },
      { id: 'D', text: 'Menjaga dan merawat fasilitas sarana dan prasarana yang ada di sekolah' },
      { id: 'E', text: 'Meninggalkan ruang kelas tanpa izin saat jam pelajaran masih berlangsung' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      'Kewajiban siswa di sekolah meliputi memperhatikan penjelasan guru (A), menghormati guru dan menghargai teman (B), serta menjaga sarana sekolah (D). Mencoret meja dan bolos kelas adalah pelanggaran tata tertib.',
  },
  {
    id: 14,
    type: 'pgk',
    topic: 'Karakteristik Norma Hukum',
    difficulty: 'Sukar',
    text: 'Norma hukum memiliki perbedaan mendasar dengan norma agama, kesusilaan, maupun kesopanan. Manakah pernyataan berikut yang merupakan ciri-ciri khusus dari norma hukum? (Pilihlah 2 jawaban yang benar!)',
    options: [
      { id: 'A', text: 'Dibuat dan disahkan oleh lembaga resmi negara atau pemerintah' },
      { id: 'B', text: 'Hanya berlaku bagi anggota kelompok keluarga tertentu saja' },
      { id: 'C', text: 'Sifatnya tegas dan memaksa dengan sanksi nyata dari aparat penegak hukum' },
      { id: 'D', text: 'Sumber aturannya semata-mata berasal dari kebiasaan pergaulan sehari-hari' },
    ],
    correctAnswer: ['A', 'C'],
    explanation:
      'Norma hukum memiliki karakteristik khas: dibentuk oleh lembaga resmi negara yang berwenang (A) serta memiliki sanksi yang bersifat tegas, nyata, dan memaksa yang ditegakkan oleh aparat hukum (C).',
  },
  {
    id: 15,
    type: 'pgk',
    topic: 'Manfaat Pelaksanaan Kewajiban Anak Secara Tertib',
    difficulty: 'Sukar',
    text: 'Jika seorang anak senantiasa tertib melaksanakan kewajibannya—seperti menjaga kerapian di rumah, berani jujur, dan taat aturan sekolah—manakah dampak positif yang akan dirasakannya? (Pilihlah 3 jawaban yang benar!)',
    options: [
      { id: 'A', text: 'Tumbuh menjadi pribadi yang mandiri, disiplin, dan bertanggung jawab' },
      { id: 'B', text: 'Mendapatkan kepercayaan tinggi dan kasih sayang dari orang tua, guru, dan teman' },
      { id: 'C', text: 'Dapat bersikap semena-mena dan memerintah teman-teman sekelas' },
      { id: 'D', text: 'Memiliki hati yang tenang, damai, dan terhindar dari rasa bersalah atau gelisah' },
      { id: 'E', text: 'Bebas dari kewajiban belajar selama menempuh pendidikan di sekolah' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      'Melaksanakan kewajiban dengan baik membentuk karakter mandiri dan disiplin (A), menumbuhkan rasa percaya dan kasih sayang (B), serta memberikan ketenangan batin tanpa rasa bersalah (D).',
  },

  // =========================================================================
  // BAGIAN III: PGK KATEGORI / BENAR - SALAH (5 BUTIR SOAL: NO. 16 - 20)
  // Menentukan Benar atau Salah pada setiap butir pernyataan
  // Setiap butir bernilai skor 1 (Total skor Kategori = 5)
  // =========================================================================
  {
    id: 16,
    type: 'pgk_kategori',
    topic: 'Konsep Dasar Norma',
    difficulty: 'Sedang',
    categoryType: 'benar_salah',
    text: 'Tentukan apakah masing-masing pernyataan tentang pengertian dan macam-macam norma berikut ini "Benar" atau "Salah"!',
    statements: [
      {
        id: 's1',
        text: 'Norma dibuat agar kehidupan bersama dalam masyarakat berjalan tertib, damai, dan aman.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's2',
        text: 'Norma agama bersumber dari wahyu Tuhan Yang Maha Esa yang termuat dalam kitab suci.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's3',
        text: 'Sanksi bagi pelanggar norma kesopanan adalah hukuman kurungan penjara oleh polisi.',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's4',
        text: 'Manusia tidak memerlukan norma sosial karena setiap orang berhak berbuat sesuka hati.',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
    ],
    explanation:
      'Pernyataan 1 dan 2 Benar. Pernyataan 3 Salah karena penjara adalah sanksi norma hukum, sedangkan norma kesopanan sanksinya teguran atau dicemooh. Pernyataan 4 Salah karena manusia adalah makhluk sosial yang butuh norma untuk hidup rukun.',
  },
  {
    id: 17,
    type: 'pgk_kategori',
    topic: 'Aturan Menjaga Kerapian di Rumah',
    difficulty: 'Sedang',
    categoryType: 'benar_salah',
    text: 'Tentukan apakah masing-masing pernyataan mengenai aturan menjaga kerapian di rumah berikut ini "Benar" atau "Salah"!',
    statements: [
      {
        id: 's1',
        text: 'Merapikan tempat tidur sendiri setelah bangun tidur melatih kemandirian dan rasa tanggung jawab anak.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's2',
        text: 'Menaruh sepatu dan sandal sembarangan di depan pintu rumah membuat rumah terlihat rapi dan indah.',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's3',
        text: 'Mengembalikan buku dan pensil ke meja belajar setelah belajar mempermudah pencarian saat hendak belajar lagi.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's4',
        text: 'Menjaga kerapian rumah sepenuhnya adalah tugas ibu, sehingga anak tidak perlu ikut merapikan barangnya.',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
    ],
    explanation:
      'Pernyataan 1 dan 3 Benar. Pernyataan 2 Salah karena menaruh sepatu sembarangan membuat rumah berantakan. Pernyataan 4 Salah karena semua anggota keluarga, termasuk anak, berkewajiban menjaga kerapian rumah.',
  },
  {
    id: 18,
    type: 'pgk_kategori',
    topic: 'Kewajiban untuk Berani Jujur',
    difficulty: 'Sedang',
    categoryType: 'benar_salah',
    text: 'Tentukan apakah masing-masing pernyataan mengenai sikap dan kewajiban berani jujur berikut ini "Benar" atau "Salah"!',
    statements: [
      {
        id: 's1',
        text: 'Jujur artinya kesesuaian antara perkataan di lisan dengan kenyataan yang sebenarnya.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's2',
        text: 'Menyontek jawaban teman saat ulangan diperbolehkan jika soal ulangannya dianggap terlalu sulit.',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's3',
        text: 'Berani mengakui kesalahan yang telah diperbuat membutuhkan keberanian moral yang patut dihargai.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's4',
        text: 'Orang yang suka berbohong akan selalu dipercaya dan disenangi oleh banyak orang di lingkungannya.',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
    ],
    explanation:
      'Pernyataan 1 dan 3 Benar. Pernyataan 2 Salah karena menyontek adalah perbuatan curang yang dilarang. Pernyataan 4 Salah karena pembohong akan kehilangan kepercayaan dari orang lain.',
  },
  {
    id: 19,
    type: 'pgk_kategori',
    topic: 'Kewajiban Anak Saat di Sekolah',
    difficulty: 'Sedang',
    categoryType: 'benar_salah',
    text: 'Tentukan apakah masing-masing pernyataan tentang kewajiban anak saat berada di sekolah berikut ini "Benar" atau "Salah"!',
    statements: [
      {
        id: 's1',
        text: 'Siswa wajib datang ke sekolah tepat waktu sebelum bel tanda masuk kelas dibunyikan.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's2',
        text: 'Saat upacara bendera hari Senin berlangsung, siswa boleh mengobrol dan bercanda dengan teman di barisan.',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's3',
        text: 'Menjaga kebersihan dan tidak merusak buku-buku di perpustakaan sekolah adalah kewajiban seluruh siswa.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's4',
        text: 'Jika tidak dapat masuk sekolah karena sakit, siswa atau orang tua wajib memberikan surat izin kepada pihak sekolah.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
    ],
    explanation:
      'Pernyataan 1, 3, dan 4 Benar. Pernyataan 2 Salah karena upacara bendera harus diikuti dengan khidmat, tertib, dan tenang sebagai penghormatan kepada pahlawan dan bendera merah putih.',
  },
  {
    id: 20,
    type: 'pgk_kategori',
    topic: 'Keseimbangan Hak dan Kewajiban Anak',
    difficulty: 'Sukar',
    categoryType: 'benar_salah',
    text: 'Tentukan apakah masing-masing pernyataan mengenai perbandingan hak dan kewajiban anak berikut ini "Benar" atau "Salah"!',
    statements: [
      {
        id: 's1',
        text: 'Mendapatkan kasih sayang, perlindungan, dan tempat tinggal yang layak dari orang tua adalah hak seorang anak.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's2',
        text: 'Seorang siswa berhak memperoleh nilai ujian yang bagus meskipun tidak pernah belajar dan tidak mengerjakan tugas.',
        correctAnswer: false,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's3',
        text: 'Mendengarkan bimbingan guru dan mematuhi tata tertib kelas adalah kewajiban siswa saat di sekolah.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
      {
        id: 's4',
        text: 'Hak dan kewajiban anak harus seimbang agar tercipta kehidupan keluarga dan sekolah yang harmonis.',
        correctAnswer: true,
        trueLabel: 'Benar',
        falseLabel: 'Salah',
      },
    ],
    explanation:
      'Pernyataan 1, 3, dan 4 Benar. Pernyataan 2 Salah karena nilai bagus didapatkan setelah siswa memenuhi kewajiban belajar dan mengerjakan tugas dengan sungguh-sungguh.',
  },

  // =========================================================================
  // BAGIAN IV: MENJODOHKAN (5 BUTIR SOAL: NO. 21 - 25)
  // Menjodohkan premis di kolom kiri dengan pasangan tepat di kolom kanan
  // Setiap butir bernilai skor 1 (Total skor Menjodohkan = 5)
  // =========================================================================
  {
    id: 21,
    type: 'menjodohkan',
    topic: 'Menjodohkan Macam-Macam Norma dan Sumbernya',
    difficulty: 'Sedang',
    text: 'Jodohkanlah jenis norma di kolom sebelah kiri dengan sumber atau bentuk aturan yang tepat di kolom sebelah kanan!',
    matchingPairs: [
      {
        id: 'm1',
        premise: 'Norma Agama',
        match: 'Wahyu Tuhan Yang Maha Esa yang tertuang dalam kitab suci',
      },
      {
        id: 'm2',
        premise: 'Norma Kesusilaan',
        match: 'Bisikan hati nurani sanubari manusia tentang kebaikan dan kebenaran',
      },
      {
        id: 'm3',
        premise: 'Norma Kesopanan',
        match: 'Tata krama, adat istiadat, dan kebiasaan pergaulan masyarakat',
      },
      {
        id: 'm4',
        premise: 'Norma Hukum',
        match: 'Peraturan perundang-undangan tertulis yang dibuat lembaga negara',
      },
    ],
    explanation:
      'Norma agama bersumber dari wahyu Tuhan; Norma kesusilaan dari hati nurani; Norma kesopanan dari tata krama/adat pergaulan; dan Norma hukum dari undang-undang buatan lembaga negara.',
  },
  {
    id: 22,
    type: 'menjodohkan',
    topic: 'Menjodohkan Tempat dan Aturan Kerapian di Rumah',
    difficulty: 'Sedang',
    text: 'Jodohkanlah benda atau area di rumah pada kolom kiri dengan tindakan menjaga kerapian yang tepat pada kolom kanan!',
    matchingPairs: [
      {
        id: 'm1',
        premise: 'Tempat Tidur',
        match: 'Melipat selimut, merapikan seprei, dan menyusun bantal setelah bangun tidur',
      },
      {
        id: 'm2',
        premise: 'Rak Sepatu',
        match: 'Menata sepatu dan sandal sekolah secara rapi berjejer setelah tiba di rumah',
      },
      {
        id: 'm3',
        premise: 'Meja Belajar',
        match: 'Menyusun buku pelajaran dan memasukkan pensil ke wadah setelah selesai belajar',
      },
      {
        id: 'm4',
        premise: 'Kotak Mainan',
        match: 'Memasukkan kembali balok susun dan boneka setelah selesai bermain',
      },
    ],
    explanation:
      'Setiap benda di rumah memiliki tempat dan cara perapian tersendiri: tempat tidur dirapikan seprai/selimutnya, sepatu diletakkan di rak, alat tulis dirapikan di meja belajar, dan mainan disimpan di kotaknya.',
  },
  {
    id: 23,
    type: 'menjodohkan',
    topic: 'Menjodohkan Situasi dengan Tindakan Berani Jujur',
    difficulty: 'Sedang',
    text: 'Jodohkanlah situasi peristiwa pada kolom sebelah kiri dengan wujud tindakan berani jujur yang tepat pada kolom sebelah kanan!',
    matchingPairs: [
      {
        id: 'm1',
        premise: 'Saat Ulangan di Kelas',
        match: 'Mengerjakan sendiri dengan percaya diri tanpa menyontek atau membuka buku',
      },
      {
        id: 'm2',
        premise: 'Tidak Sengaja Merusak Vas Bunga Ibu',
        match: 'Mengaku terus terang kepada ibu, meminta maaf, dan membantu membersihkan',
      },
      {
        id: 'm3',
        premise: 'Menerima Kembalian Berlebih di Warung',
        match: 'Segera mengembalikan uang kelebihan kepada penjual warung',
      },
      {
        id: 'm4',
        premise: 'Menemukan Jam Tangan di Lapangan Sekolah',
        match: 'Menyerahkannya kepada guru piket agar diumumkan kepada pemiliknya',
      },
    ],
    explanation:
      'Tindakan berani jujur terwujud dalam: tidak menyontek saat ulangan, mengakui kesalahan saat merusak barang, mengembalikan uang kembalian berlebih, dan menyerahkan barang temuan ke pihak sekolah.',
  },
  {
    id: 24,
    type: 'menjodohkan',
    topic: 'Menjodohkan Kewajiban di Sekolah dengan Tujuannya',
    difficulty: 'Sedang',
    text: 'Jodohkanlah kewajiban anak saat di sekolah pada kolom kiri dengan tujuan atau nilai karakter mulia yang ditanamkan pada kolom kanan!',
    matchingPairs: [
      {
        id: 'm1',
        premise: 'Mengikuti Upacara Bendera Hari Senin',
        match: 'Menumbuhkan rasa cinta tanah air, patriotisme, dan kedisiplinan',
      },
      {
        id: 'm2',
        premise: 'Melaksanakan Piket Kebersihan Kelas',
        match: 'Menciptakan ruang belajar yang sehat, bersih, dan memupuk gotong royong',
      },
      {
        id: 'm3',
        premise: 'Mendengarkan Guru Menjelaskan Pelajaran',
        match: 'Memperoleh ilmu pengetahuan secara optimal dan menghormati pendidik',
      },
      {
        id: 'm4',
        premise: 'Memakai Seragam Sesuai Jadwal Tata Tertib',
        match: 'Mencerminkan kerapian, kesetaraan antarsiswa, dan kepatuhan aturan',
      },
    ],
    explanation:
      'Upacara bendera menumbuhkan patriotisme; piket menciptakan kebersihan dan gotong royong; mendengarkan guru mengoptimalkan ilmu; dan memakai seragam rapi mencerminkan kedisiplinan serta kesetaraan.',
  },
  {
    id: 25,
    type: 'menjodohkan',
    topic: 'Menjodohkan Penggolongan Hak dan Kewajiban Anak',
    difficulty: 'Sedang',
    text: 'Jodohkanlah pernyataan peran anak pada kolom sebelah kiri dengan klasifikasi status yang tepat pada kolom sebelah kanan!',
    matchingPairs: [
      {
        id: 'm1',
        premise: 'Mendapatkan Kasih Sayang dan Uang Saku Cukup',
        match: 'Hak Anak di Lingkungan Rumah',
      },
      {
        id: 'm2',
        premise: 'Membantu Merapikan Tempat Tidur dan Kamar',
        match: 'Kewajiban Anak di Lingkungan Rumah',
      },
      {
        id: 'm3',
        premise: 'Mendapatkan Pembelajaran dan Bimbingan Guru',
        match: 'Hak Siswa di Lingkungan Sekolah',
      },
      {
        id: 'm4',
        premise: 'Mematuhi Jam Masuk dan Tata Tertib Sekolah',
        match: 'Kewajiban Siswa di Lingkungan Sekolah',
      },
    ],
    explanation:
      'Kasih sayang orang tua adalah hak anak di rumah; merapikan kamar adalah kewajiban anak di rumah; mendapat bimbingan guru adalah hak anak di sekolah; dan mematuhi tata tertib adalah kewajiban anak di sekolah.',
  },

  // =========================================================================
  // BAGIAN V: ISIAN SINGKAT (5 BUTIR SOAL: NO. 26 - 30)
  // Menjawab dengan satu kata atau frasa singkat yang tepat
  // Setiap butir bernilai skor 1 (Total skor Isian = 5)
  // =========================================================================
  {
    id: 26,
    type: 'isian',
    topic: 'Konsep Dasar Kewajiban',
    difficulty: 'Mudah',
    text: 'Segala sesuatu yang harus dilakukan atau dikerjakan oleh seseorang dengan penuh rasa tanggung jawab disebut...',
    correctAnswer: 'kewajiban',
    acceptedAnswers: ['kewajiban', 'kewajiban diri', 'kewajiban anak'],
    explanation:
      'Kewajiban adalah segala sesuatu yang wajib dilaksanakan oleh seseorang dengan penuh rasa tanggung jawab.',
  },
  {
    id: 27,
    type: 'isian',
    topic: 'Konsep Dasar Norma',
    difficulty: 'Mudah',
    text: 'Aturan, pedoman, atau kaidah hidup yang berlaku dalam masyarakat untuk mewujudkan ketertiban dan ketenteraman bersama dinamakan...',
    correctAnswer: 'norma',
    acceptedAnswers: ['norma', 'aturan', 'norma sosial'],
    explanation:
      'Norma merupakan kaidah atau ketentuan yang dijadikan pedoman bagi manusia dalam bertingkah laku di lingkungan masyarakat.',
  },
  {
    id: 28,
    type: 'isian',
    topic: 'Aturan Menjaga Kerapian di Rumah',
    difficulty: 'Mudah',
    text: 'Merapikan selimut setelah bangun tidur dan meletakkan sepatu di rak sepatu merupakan contoh pelaksanaan aturan menjaga kerapian anak di lingkungan...',
    correctAnswer: 'rumah',
    acceptedAnswers: ['rumah', 'keluarga', 'lingkungan rumah'],
    explanation:
      'Merapikan kasur dan menaruh sepatu di rak adalah kewajiban menjaga kerapian yang dilakukan di lingkungan rumah.',
  },
  {
    id: 29,
    type: 'isian',
    topic: 'Kewajiban untuk Berani Jujur',
    difficulty: 'Mudah',
    text: 'Sikap lurus hati, berkata apa adanya sesuai kenyataan, serta tidak berbohong atau berbuat curang disebut sikap...',
    correctAnswer: 'jujur',
    acceptedAnswers: ['jujur', 'kejujuran'],
    explanation:
      'Jujur adalah sikap yang menunjukkan kesesuaian antara perkataan dan perbuatan dengan kenyataan yang sebenarnya.',
  },
  {
    id: 30,
    type: 'isian',
    topic: 'Kewajiban Anak Saat di Sekolah',
    difficulty: 'Mudah',
    text: 'Tugas bersama regu siswa untuk menyapu lantai, membersihkan papan tulis, dan menjaga kerapian kelas sebelum pembelajaran dimulai dinamakan...',
    correctAnswer: 'piket kelas',
    acceptedAnswers: ['piket', 'piket kelas', 'tugas piket'],
    explanation:
      'Piket kelas adalah kegiatan gotong royong membersihkan ruang kelas yang dilaksanakan oleh siswa secara bergiliran sesuai jadwal.',
  },

  // =========================================================================
  // BAGIAN VI: URAIAN / ESSAY TERBUKA (5 BUTIR SOAL: NO. 31 - 35)
  // Menjawab uraian dengan penalaran mendalam dan terstruktur
  // Setiap butir bernilai skor 2 (Total skor Uraian = 10)
  // Total Skor Keseluruhan = 10 + 5 + 5 + 5 + 5 + 10 = 40 Skor (Nilai Akhir: Skor/40 * 100)
  // =========================================================================
  {
    id: 31,
    type: 'uraian',
    topic: 'Perbedaan Hak dan Kewajiban serta Keseimbangannya',
    difficulty: 'Sedang',
    maxScore: 2,
    text: 'Jelaskan perbedaan mendasar antara Hak dan Kewajiban, serta uraikan mengapa kita harus mendahulukan pelaksanaan kewajiban sebelum menuntut hak kita dalam kehidupan sehari-hari!',
    keyPoints: [
      'hak adalah sesuatu yang mutlak kita miliki atau terima',
      'kewajiban adalah sesuatu yang harus dikerjakan dengan penuh tanggung jawab',
      'mendahulukan kewajiban agar tercipta keharmonisan dan ketertiban',
      'jika hanya menuntut hak tanpa kewajiban akan terjadi ketimpangan dan perselisihan',
    ],
    rubric:
      'Skor 2: Menjelaskan pengertian hak dan kewajiban secara tepat dan memberikan alasan logis mendahulukan kewajiban. Skor 1: Menjelaskan salah satu konsep saja atau penjelasan kurang lengkap. Skor 0: Tidak menjawab atau jawaban tidak sesuai konteks.',
    explanation:
      'Hak adalah segala sesuatu yang mutlak menjadi milik kita dan penggunaannya bergantung kepada kita. Kewajiban adalah segala sesuatu yang harus dilaksanakan dengan penuh tanggung jawab. Kewajiban harus didahulukan agar terjadi keseimbangan sosial; jika setiap orang menunaikan kewajibannya, maka hak semua orang akan terpenuhi secara damai dan adil.',
  },
  {
    id: 32,
    type: 'uraian',
    topic: 'Aturan Menjaga Kerapian di Rumah dan Manfaatnya',
    difficulty: 'Sedang',
    maxScore: 2,
    text: 'Sebutkan 3 (tiga) contoh aturan atau kewajiban anak dalam menjaga kerapian di lingkungan rumah, dan jelaskan apa manfaat yang dirasakan oleh anggota keluarga jika rumah selalu rapi!',
    keyPoints: [
      'merapikan tempat tidur setelah bangun',
      'meletakkan sepatu dan sandal di rak sepatu',
      'merapikan meja belajar dan mengembalikan buku ke tempatnya',
      'menyimpan mainan ke dalam wadah kotak mainan',
      'manfaat rumah menjadi nyaman, bersih, sehat, dan barang tidak mudah hilang',
    ],
    rubric:
      'Skor 2: Menyebutkan 3 contoh aturan kerapian rumah dengan jelas dan menjelaskan manfaatnya bagi keluarga. Skor 1: Hanya menyebutkan 1-2 contoh aturan atau manfaat tidak dijelaskan. Skor 0: Jawaban tidak relevan.',
    explanation:
      'Tiga contoh aturan menjaga kerapian di rumah: (1) Merapikan tempat tidur setelah bangun; (2) Meletakkan sepatu di rak sepatu; (3) Merapikan kembali buku dan alat tulis setelah belajar. Manfaatnya: rumah menjadi rapi, bersih, indah, sehat, anggota keluarga merasa nyaman dan tenang, serta barang-barang mudah dicari saat dibutuhkan.',
  },
  {
    id: 33,
    type: 'uraian',
    topic: 'Kewajiban untuk Berani Jujur dan Dampak Kebohongan',
    difficulty: 'Sukar',
    maxScore: 2,
    text: 'Mengapa seorang anak harus berani bersikap jujur meskipun sedang melakukan kesalahan? Jelaskan pula dampak negatif apa yang akan terjadi jika seseorang memilih menutupi kesalahan dengan kebohongan!',
    keyPoints: [
      'berani jujur menunjukkan jiwa ksatria, integritas, dan tanggung jawab',
      'jujur membuat hati tenang dan dipercaya orang lain',
      'kebohongan akan melahirkan kebohongan baru yang terus menumpuk',
      'kebohongan merusak kepercayaan orang lain dan menimbulkan rasa gelisah/takut',
    ],
    rubric:
      'Skor 2: Menganalisis pentingnya jujur saat salah dan menjelaskan dampak buruk kebohongan secara komprehensif. Skor 1: Memberikan penjelasan singkat/sebagian. Skor 0: Tidak menjawab.',
    explanation:
      'Anak harus berani jujur saat bersalah karena jujur mencerminkan tanggung jawab dan kematangan moral. Mengakui kesalahan membuka jalan perbaikan diri dan dimaafkan. Sebaliknya, menutupi kesalahan dengan kebohongan akan merusak rasa percaya orang lain, menimbulkan kebohongan lanjutan, serta membuat hati selalu diliputi rasa cemas, was-was, dan gelisah.',
  },
  {
    id: 34,
    type: 'uraian',
    topic: 'Kewajiban Anak Saat di Sekolah dan Konsekuensi Pelanggaran',
    difficulty: 'Sedang',
    maxScore: 2,
    text: 'Tuliskan 3 (tiga) kewajiban penting yang harus ditaati oleh siswa saat berada di sekolah, serta jelaskan apa akibatnya jika ada siswa yang sering melanggar tata tertib sekolah tersebut!',
    keyPoints: [
      'datang ke sekolah tepat waktu sebelum bel masuk',
      'mengikuti upacara bendera hari Senin dengan khidmat',
      'melaksanakan piket kelas sesuai regu jadwal',
      'memakai seragam lengkap dan rapi',
      'akibat melanggar: suasana belajar terganggu, mendapat teguran/sanksi, tertinggal pelajaran, dan kelas menjadi tidak tertib',
    ],
    rubric:
      'Skor 2: Menyebutkan 3 kewajiban siswa di sekolah secara benar dan menjelaskan akibat dari pelanggaran tata tertib. Skor 1: Menyebutkan 1-2 kewajiban atau penjelasan akibat kurang memadai. Skor 0: Tidak relevan.',
    explanation:
      'Tiga kewajiban siswa di sekolah: (1) Datang tepat waktu dan mengikuti upacara bendera; (2) Memperhatikan penjelasan guru serta mematuhi aturan kelas; (3) Melaksanakan tugas piket kebersihan kelas. Akibat jika melanggar: proses belajar-mengajar menjadi terganggu, siswa mendapatkan sanksi atau teguran dari pihak sekolah, serta merugikan diri sendiri dan teman lain.',
  },
  {
    id: 35,
    type: 'uraian',
    topic: 'Studi Kasus Kejujuran dan Nilai Moral Anak',
    difficulty: 'Sukar',
    maxScore: 2,
    text: 'Perhatikan studi kasus berikut!\n"Ketika jam istirahat, Edo menemukan selembar uang Rp20.000 tergeletak di lantai lorong dekat kantin sekolah. Teman sebangkunya membujuk Edo agar uang itu langsung dibelikan bakso dan es teh bersama-sama tanpa perlu melapor kepada siapa pun."\n\nBerdasarkan norma dan kewajiban anak untuk berani jujur, tindakan apa yang seharusnya diambil oleh Edo? Jelaskan alasan moral dan aturan di balik tindakan tersebut!',
    keyPoints: [
      'tidak mengambil uang tersebut untuk kesenangan pribadi',
      'menolak ajakan temannya untuk membelanjakan uang temuan',
      'segera menyerahkan uang temuan kepada guru piket atau pihak sekolah',
      'alasan moral: uang itu bukan hak milik Edo dan pemiliknya sedang kebingungan mencarinya',
      'menjunjung tinggi norma kesusilaan, kejujuran, dan aturan tata tertib sekolah',
    ],
    rubric:
      'Skor 2: Memberikan solusi tindakan yang tepat (menolak ajakan teman & menyerahkan uang ke guru piket) disertai argumentasi moral norma kejujuran yang utuh. Skor 1: Memberikan solusi tindakan tetapi tanpa alasan yang memadai. Skor 0: Membenarkan tindakan mengambil uang.',
    explanation:
      'Tindakan yang seharusnya diambil Edo: Menolak bujukan temannya dengan sopan, lalu segera menyerahkan uang Rp20.000 tersebut kepada guru piket atau wali kelas untuk diumumkan kepada pemilik aslinya. Alasan moralnya: Uang tersebut bukanlah hak milik Edo; ada warga sekolah yang kehilangan dan membutuhkan uang tersebut. Dengan mengembalikannya, Edo telah menjunjung tinggi norma kesusilaan (hati nurani), norma agama, dan tata tertib kejujuran di sekolah.',
  },
];
