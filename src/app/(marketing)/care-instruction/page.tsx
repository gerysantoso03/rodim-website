import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const CareInstructionPage = () => {
  return (
    <main className="faq">
      <section className="section-wrapper">
        <div className="px-[10rem] py-[6rem]">
          {/* Navigation Link */}
          <Link className="text-[1.4rem] flex items-center gap-2 mt-4" href="/">
            <span>
              {' '}
              <ArrowLeft size={18} />
            </span>
            Kembali{' '}
          </Link>

          <h1 className="text-[4.6rem] font-bold leading-[100%] mt-10">
            Paint Protection Film Care Instructions
          </h1>

          {/* Care Instruction Wrappers */}
          <div className="mt-20">
            <ol className="list-decimal flex flex-col gap-2 pl-6 text-white/80 text-[1.8rem] leading-[2.6rem]">
              <li>
                Jangan mencuci atau memoles kendaraan dalam waktu satu minggu
                setelah pemasangan film. Garansi akan dianggap tidak berlaku
                jika ketentuan ini tidak dipatuhi.
              </li>
              <li>
                Hindari paparan langsung sinar matahari selama minggu pertama
                setelah pemasangan, karena penguapan kelembapan yang terlalu
                cepat dapat menyebabkan munculnya gelembung pada permukaan film.
              </li>
              <li>
                Pemeriksaan lanjutan di bengkel pemasangan wajib dilakukan dalam
                waktu satu minggu setelah aplikasi film.
              </li>
              <li>
                Setelah melewati minggu pertama, kendaraan sudah dapat dicuci.
                Pencucian rutin diperlukan untuk menjaga kondisi film selama
                masa garansi. Keausan ringan pada permukaan dan penurunan kilau
                secara bertahap dianggap normal. Noda air, garis bekas air dan
                gelombang halus tidak termasuk dalam cakupan garansi.
              </li>
              <li>
                Disarankan untuk mencuci kendaraan setiap satu hingga dua minggu
                sekali. Jika kendaraan terlihat jelas kotor atau berdebu,
                sebaiknya dibersihkan di hari yang sama untuk mencegah kotoran
                menembus lapisan film dan mengurangi kejernihan tampilannya.
              </li>
              <li>
                Kotoran burung dan sisa serangga sebaiknya segera dibersihkan
                dari permukaan film.
              </li>
              <li>
                Untuk kendaraan yang digunakan dalam acara khusus, seperti mobil
                pernikahan, jangan menempelkan suction cup langsung ke permukaan
                film. Pita dekoratif dan petasan dapat menyebabkan noda. Jika
                ada residu yang mengenai film, bersihkan dalam waktu 12 jam
                untuk mencegah perubahan warna permanen.
              </li>
              <li>
                Gunakan hanya spons lembut yang tidak abrasif dan bebas partikel
                mineral saat membersihkan. Hindari penggunaan alat gosok keras
                atau tekanan berlebih yang dapat menggores atau mengikis
                permukaan film. Jangan gunakan bahan kimia yang bersifat asam
                kuat, alkali, atau korosif. Setelah dibersihkan, bilas secara
                menyeluruh dengan air bersih dan keringkan menggunakan kain
                lembut yang bersih untuk mencegah terbentuknya noda air.
              </li>
              <li>
                Perawatan menyeluruh pada film disarankan setiap enam bulan
                sekali. Pemolesan pada permukaan film tidak dianjurkan.
              </li>
              <li>
                Cuci manual sangat dianjurkan. Hindari penggunaan mesin cuci
                otomatis atau semprotan air bertekanan tinggi pada bagian tepi
                film, karena dapat menyebabkan film terangkat atau kemasukan
                air.
              </li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareInstructionPage;
