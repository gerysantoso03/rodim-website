import { Accordion } from '@/shared/components/accordion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const FAQPage = () => {
  const faqInformations = [
    {
      title: 'Mengapa memilih RODIM® TPU PPF?',
      content: (
        <>
          <p>
            Kualitas TPU sangat menentukan performa dan daya tahan dari paint
            protection film (PPF). RODIM PPF adalah TPU premium BASF, manufaktur
            TPU terbesar di dunia yang telah diakui. Seluruh proses produksinya,
            mulai dari bahan baku hingga menjadi film, dapat dilacak secara
            menyeluruh.
          </p>
          <p>
            RODIM TPU PPF menghadirkan performa unggul dalam hal ketebalan, daya
            tahan terhadap noda, kilau, perlindungan dari kotoran, goresan,
            kemampuan self-healing, serta ketahanan terhadap menguning dan
            penuaan. Produk ini efektif melindungi cat bawaan kendaraan dari
            hujan asam, residu serangga, getah pohon dan berbagai kontaminan
            lainnya—membantu kendaraan Anda tetap tampil seperti baru lebih
            lama.
          </p>
        </>
      ),
    },
    {
      title:
        'Apakah saya bisa menggunakan produk pencuci mobil setelah menggunakan RODIM TPU PPF?',
      content: (
        <p>
          Bisa. Setelah dua minggu, kendaraan dapat dicuci seperti biasa
          menggunakan car shampoo dengan pH netral atau produk pembersih mobil
          yang aman. Hindari penggunaan{' '}
          <span className="font-bold">solvent-based cleaner</span> karena dapat
          merusak permukaan film.
        </p>
      ),
    },
    {
      title:
        'Apakah saya bisa mencuci mobil dengan high-pressure washer setelah menggunakan RODIM TPU PPF?',
      content: (
        <p>
          Bisa. Namun hindari menyemprot langsung ke bagian tepi film dengan
          tekanan tinggi.
        </p>
      ),
    },
    {
      title:
        'Apakah saya bisa menggunakan automatic car wash setelah menggunakan RODIM TPU PPF?',
      content: (
        <p>
          Disarankan mencuci secara manual. Jika memilih{' '}
          <span className="font-bold">automatic car wash</span>, gunakan sistem
          tanpa sentuhan <span className="font-bold">(touchless system)</span>,
          hindari mesin cuci mobil yang menggunakan sikat karena dapat
          menyebabkan tepi film terangkat.
        </p>
      ),
    },
    {
      title: 'Apakah cat OEM kendaraan akan rusak saat RODIM TPU PPF dilepas?',
      content: (
        <p>
          Kemungkinan rusaknya cat OEM saat film dilepas sangat kecil. Namun,
          pelepasan sebaiknya dilakukan oleh teknisi bersertifikat{' '}
          <span className="font-bold">RODIM</span> untuk meminimalisir risiko.
        </p>
      ),
    },
    {
      title: 'Apa itu self-healing?',
      content: (
        <>
          <p>
            <span className="font-bold">RODIM TPU PPF</span> memiliki lapisan
            atas transparan berbahan{' '}
            <span className="font-bold">thermoplastic polyurethane</span> dengan
            kemampuan <span className="font-bold">self-healing</span>. Goresan
            ringan dapat hilang saat terkena panas seperti sinar matahari atau
            hembusan udara hangat.
          </p>
          <p>
            Namun kemampuan ini ada batasnya. Jika goresan terlalu dalam dan
            menembus lapisan self-healing, maka kemungkinan besar tidak akan
            pulih sepenuhnya. Meskipun demikian, fungsi perlindungannya terhadap
            cat OEM tetap berjalan dengan baik.
          </p>
        </>
      ),
    },
    {
      title: 'Apa saja perbedaan antar model RODIM TPU PPF?',
      content: (
        <ul className="list-disc pl-6 flex flex-col gap-6">
          <li>
            <span className="font-bold">RODIM R1.</span> Dilengkapi fitur
            self-healing dan perlindungan tinggi terhadap kotoran. Cocok bagi
            pengguna yang menginginkan proteksi harian dengan nilai ekonomis
            yang baik.
          </li>
          <li>
            <span className="font-bold">RODIM R2 Matte.</span> Memberikan
            proteksi dan ketebalan yang setara dengan RODIM R2, namun dengan
            permukaan satin low-gloss yang memberikan tampilan mewah dan
            berkelas.
          </li>
          <li>
            <span className="font-bold">RODIM R2 PRO.</span> Menghadirkan
            seluruh keunggulan dari RODIM R2, dengan tambahan ketahanan terhadap
            bahan pembersih kimia seperti carburetor wash, menjadikannya pilihan
            unggul untuk perlindungan anti-korosi.
          </li>
          <li>
            <span className="font-bold">RODIM R3 PRO.</span> Merupakan
            pengembangan dari RODIM R2 PRO dengan ketebalan yang lebih tinggi.
            Ini adalah produk kelas lebih tinggi dari lini RODIM R2 PRO,
            menawarkan perlindungan dan performa maksimal.
          </li>
          <li>
            <span className="font-bold">RODIM R4 PRO.</span> Merupakan varian
            tertinggi dari lini RODIM PPF, dengan ketebalan maksimal, kemampuan
            self-healing yang ditingkatkan, serta ketahanan luar biasa terhadap
            bahan kimia tertentu dan goresan. Dirancang untuk penggunaan yang
            menuntut performa tinggi, RODIM R4 PRO memberikan daya tahan optimal
            dan tampilan akhir yang tahan lama—solusi terbaik untuk perlindungan
            cat kendaraan Anda.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <main className="faq">
      <section className="section-wrapper">
        <div className="md:px-[10rem] md:py-[6rem]">
          {/* Navigation Link */}
          <Link className="text-[1.8rem] flex items-center gap-2 mt-4" href="/">
            <span>
              {' '}
              <ArrowLeft size={18} />
            </span>
            Kembali{' '}
          </Link>

          <h1 className="text-[4.6rem] font-bold leading-[100%] mt-10">
            Frequently Asked Questions
          </h1>

          {/* FAQ Wrappers */}
          <div className="flex flex-col gap-20 mt-20">
            {faqInformations.map((faq, idx) => (
              <Accordion key={idx} title={faq.title} content={faq.content} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
export default FAQPage;
