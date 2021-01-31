import React from 'react';
import Home from './pages/Home';
import DetailNews from './pages/DetailNews';
import NewsPic from './assets/image/news.jpeg';
import NewsPic2 from './assets/image/news2.jpeg';
import NewsPic3 from './assets/image/news3.jpeg';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const [news] = React.useState([
  {
    id: 1,
    image: NewsPic,
    date: new Date(),
    title: "Komisaris Taspen Raih Bintang Tanda Jasa Dan Kehormatan Dari Presiden Jokowi",
    type: "National",
    desc: [
      `Dalam rangka menyambut HUT Kemerdekaan ke-75 Republik Indonesia, Presiden Joko Widodo menganugerahkan tanda jasa dan tanda kehormatan kepada 53 tokoh yang dinilai sangat berjasa untuk Indonesia. Penganugerahan ini dilaksanakan di Istana Negara Jakarta pada Kamis (13/08) dengan menerapkan protokol kesehatan secara ketat. Adapun pemberian Bintang Mahaputera Nararya dianugerahkan kepada 7 orang penerima yang salah satunya ialah Suhardi Alius (Kepala BNPT tahun 2016-2020) yang saat ini menjabat sebagai Komisaris Utama PT TASPEN (Persero) sebagaimana tertuang melalui Surat Keputusan Menteri BUMN Nomor : SK-203/MBU/06/2020 tentang Pemberhentian dan Pengangkatan Anggota-Anggota Dewan Komisaris PT TASPEN (Persero) pada Juni lalu.`,
      `Lebih lanjut, Tanda Kehormatan Bintang Jasa dianugerahkan kepada 41 orang penerima yang terdiri atas Bintang Jasa Utama, Bintang Jasa Pratama dan Bintang Jasa Nararya. Sejumlah 9 orang para penerima tanda kehormatan Bintang Jasa Utama salah satunya dianugerahkan kepada Bima Haria Wibisana (Kepala Badan Kepegawaian Negara tahun 2015 – sekarang) sebagaimana diketahui merupakan Anggota Dewan Komisaris PT TASPEN (Persero) yang menjabat sejak tahun 2016 sebagaimana tertuang melalui Surat Keputusan Menteri BUMN Nomor : SK-226/MBU/09/2016.`,
      `Dalam pertimbangan dan usulan penganugerahan tanda kehormatan tersebut, terdapat kriteria yang diantaranya adalah berjasa dan berprestasi luar biasa dalam merintis dan mengembangkan pendidikan, perekonomian, sosial, seni, budaya, agama, hukum, kesehatan, pertanian, kelauatan, lingkungan, dan/atau bidang lain serta berjasa luar biasa di berbagai bidang yang bermanfaat bagi kemajuan, kesejahteraan, dan lemakmuran Bangsa dan Negara Kesatuan Republik Indonesia sebagaimana berpedoman kepada Undang-Undang No. 20 tahun 2009 yang mengatur kriteria pemberian tanda jasa dan tanda kehormatan.`
    ] 
  },
  {
    id: 2,
    image: NewsPic2,
    date: new Date(),
    title: "Menpan-RB & Dirut Taspen Serahkan Santunan ke Ahli Waris Tenaga Medis Penanganan COVID-19",
    type: "National",
    desc: [
      `Sebagai BUMN yang mengelola program jaminan sosial bagi ASN dan Pejabat Negara, PT TASPEN (Persero) berkomitmen kepada pesertanya untuk memberikan layanan terbaik dengan 4 Program Perlindungan yang terdiri dari program Tabungan Hari Tua (THT), Pensiun, Jaminan Kecelakaan Kerja (JKK), dan Jaminan Kematian (JKM). Bertempat di Kementerian PAN-RB Rabu, (24/06/2020) lalu, TASPEN berikan layanan proaktif yang diserahkan langsung atas nama Presiden RI oleh Menteri Pendayagunaan Aparatur Negara dan Reformasi Birokrasi, Tjahjo Kumolo serta Direktur Utama TASPEN, A.N.S Kosasih, kepada ahli waris tenaga medis Aparatur Sipil Negara (ASN) di lingkungan Kementerian Kesehatan yang gugur dalam tugas penanganan COVID-19.`,
      `Dalam kesempatan tersebut, Tjahjo Kumolo, menyampaikan apresiasi dan penghargaan yang tinggi kepada TASPEN karena memberikan layanan yang luar biasa serta proaktif, sehingga peserta TASPEN tidak perlu repot dalam pengurusan klaim, khususnya dalam masa pandemi ini. “Penyerahan santunan duka dengan jumlah yang telah ditetapkan merupakan komitmen dan perhatian penuh dari pemerintah guna membantu setiap komponen tenaga medis. Semoga santunan ini bermanfaat serta dapat membantu meringankan beban keluarga yang ditinggalkan.” pungkasnya.`,
      `Menurut Kosasih, sejak disahkannya PP 70 Tahun 2015 tentang JKK dan JKM bagi Pegawai ASN dan PP 66 Tahun 2017 tentang Perubahan atas Peraturan Pemerintah Nomor 70 Tahun 2015 tentang JKK dan JKM bagi Pegawai ASN, sebagai operator pihaknya diberi amanah untuk mengelola JKK dan JKM bagi para Aparatur Sipil Negara. “Yang kita berikan adalah santunan dengan komponen THT, Asuransi Kematian, dan Jaminan Kecelakaan Kerja (JKK) kepada 3 orang ahli waris yang berasal dari Kementerian Kesehatan yakni ahli waris Almh. Ninuk Dwi Pusponingsih sebesar Rp 337.745.200, Alm. Tonni Daniel Silitonga sebesar Rp 341.453.900, dan Alm. Yuniarto Budi Santosa Rp 341.738.000. Dengan total keseluruhan sebesar Rp 1.020.937.100.`,
      `JKK yang diterima oleh para ahli waris merupakan jaminan yang diberikan akibat kecelakaan kerja saat penanganan COVID-19.”, sambungnya. Kosasih juga menambahkan karena 3 tenaga medis tersebut merupakan ASN Kementerian Kesehatan, maka ahli waris berhak mendapatkan manfaat Tabungan Hari Tua (THT) yang terdiri atas Asuransi Dwiguna dan Asuransi Kematian serta manfaat JKK, yakni santunan kematian, uang duka wafat, biaya pemakaman, dan beasiswa bagi anak korban.`,
      `Menghadapi pandemi ini, TASPEN siap memberikan pelayanan dan melaksanakan operasional berbasis digital di kantor layanan TASPEN yang tersebar di seluruh wilayah dan pelosok Indonesia. TASPEN memiliki protokol kesehatan dalam memberikan layanan kepada pesertanya. Melalui program “TASPEN PESONA” (Tanggap Andal Selamatkan Pensiunan dengan Pelayanan Bebas Corona), TASPEN selalu siap dalam memberikan layanan kepada para peserta khususnya para peserta pensiun diantaranya dengan layanan e-Klim, T-Care serta Otentikasi Digital tanpa harus bertatap muka.`,
    ]
  },
  {
    id: 3,
    image: NewsPic3,
    date: new Date(),
    title: "Jakarta Targetkan Vaksinasi Covid Tahap I Tuntas 10 Hari",
    type: "Health",
    desc: [
      `Wakil Gubernur DKI Jakarta Ahmad Riza Patria berharap program vaksinasi Covid-19 tahap pertama yang diprioritaskan untuk para tenaga kesehatan di wilayahnya bisa selesai paling lambat 10 hari lagi. Diketahui, vaksinasi tahap pertama bagi tenaga medis untuk dosis pertama sudah dilakukan pada Jumat (15/1). Sementara, dosis kedua diberikan hari ini, Jumat (29/1), atau 14 hari pasca-penyuntikan dosis pertama.`,
      `"Mudah-mudahan dalam waktu seminggu, paling lambat 10 hari selesai. Jadi semua bergantung data," kata Riza di Balaikota, Jakarta Pusat, Jumat (29/1/2021)`,
      `Dalam kesempatan itu, Riza memaparkan untuk periode pertama ini pihaknya menargetkan 131 ribu orang yang terdiri dari tenaga kesehatan bisa menerima vaksin. Dari jumlah itu, sebanyak 53.210 orang telah mendapat dosis pertama dan 2.449 orang di dalamnya telah mendapat dosis kedua.`,
      `Untuk memudahkan vaksinasi terhadap para masyarakat, Riza mengaku Pemprov DKI telah menyediakan 508 fasilitas kesehatan pelayanan vaksinasi Covid-19. Jumlah tersebut tersebar di enam wilayah kota dan kabupaten di seluruh Jakarta.`
    ]
  }
  ])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home news={news}/>
        </Route>
        <Route path="/detail/:id">
          <DetailNews news={news} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
