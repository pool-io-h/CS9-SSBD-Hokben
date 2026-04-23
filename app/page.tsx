import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans scroll-smooth">
      {/* --- TOP BAR MERAH (Login, ID, EN) --- */}
      <div className="bg-[#da251d] text-white py-1.5 text-sm font-bold">
        <div className="max-w-[1400px] mx-auto px-4 flex justify-end items-center space-x-6">
          <button className="flex items-center hover:text-gray-200 transition">
            <span>Login</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </button>
          <div className="flex items-center space-x-2 border-l border-white/40 pl-6">
            <button className="hover:text-gray-200 transition">ID</button>
            <span className="text-white/60">|</span>
            <button className="hover:text-gray-200 transition">EN</button>
          </div>
        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <header className="bg-white border-b-[6px] border-yellow-400 sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 py-2 flex justify-between items-center">
          
          {/* Logo (Kiri) */}
          <div className="flex-shrink-0 mt-1">
            <Image 
              src="/logo_hokben_1.png" 
              alt="Logo Hokben" 
              width={100} 
              height={100} 
              className="w-20 h-20 md:w-[90px] md:h-[90px] object-contain drop-shadow-sm"
              priority 
            />
          </div>

          {/* Navigasi Tengah */}
          <nav className="hidden lg:flex flex-1 justify-between items-center mx-8 xl:mx-16 text-[15px] font-bold text-gray-500">
            <a href="#home" className="text-black font-extrabold hover:text-gray-900 transition">Home</a>
            <a href="#menu" className="hover:text-black transition">Menu</a>
            <a href="#outlet" className="hover:text-black transition">Outlet</a>
            <a href="#promotion" className="hover:text-black transition">Promotion</a>
            <a href="#corporate" className="hover:text-black transition">Corporate</a>
            <a href="#news" className="hover:text-black transition">News & Events</a>
            <a href="#contact" className="hover:text-black transition">Contact Us</a>
          </nav>

          {/* Tombol Aksi (Kanan) */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <button className="bg-[#da251d] text-white px-4 py-2.5 rounded-full flex items-center space-x-2 hover:bg-red-700 transition shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
              <span className="bg-white text-[#da251d] text-xs font-black w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </button>
            <button className="bg-[#da251d] text-white px-6 py-2.5 rounded-full font-bold hover:bg-red-700 transition shadow-sm">
              Order Now
            </button>
          </div>
        </div>
      </header>

      {/* --- HERO BANNER SECTION --- */}
      <section id="home" className="bg-white py-10 relative">
        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-center relative">
          {/* Teks Latar Belakang Kiri */}
          <div className="hidden lg:block absolute left-4 xl:left-8 top-1/2 transform -translate-y-1/2 text-gray-200 font-black text-4xl text-left leading-tight pointer-events-none">
            <span className="text-6xl text-pink-200">弁当</span><br/>
            Made Better.<br/>
            100% TASTY<br/><br/>
            Bento<br/>
            Made<br/>
            Better.
          </div>

          {/* Banner Utama - Menggunakan irodori_bento.jpeg */}
          <div className="w-full max-w-[1000px] h-[350px] md:h-[500px] bg-gray-900 rounded-3xl relative overflow-hidden shadow-2xl z-10 flex items-center justify-center border-4 border-gray-100 group">
             {/* Gambar Background Banner */}
             <Image 
                src="/irodori_bento.jpeg" 
                alt="Irodori Bento Promo" 
                layout="fill"
                objectFit="cover"
                className="opacity-60 group-hover:opacity-80 transition duration-700"
                priority
             />
             {/* Gradient Overlay agar teks tetap terbaca */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
             
             <div className="text-center text-white p-8 relative z-10 mt-auto mb-8">
                <span className="bg-red-600 text-white font-black px-6 py-2 rounded-full text-xl mb-4 inline-block transform -rotate-2 shadow-lg">NEW!</span>
                <h2 className="text-4xl md:text-6xl font-black text-yellow-400 mb-2 drop-shadow-lg">IRODORI BENTO</h2>
                <p className="text-lg md:text-2xl font-bold drop-shadow-md">Platter Series - A Symphony of 9 Compartment Bento</p>
             </div>
          </div>

          {/* Teks Latar Belakang Kanan */}
          <div className="hidden lg:block absolute right-4 xl:right-8 top-1/2 transform -translate-y-1/2 text-center pointer-events-none">
            <div className="w-32 h-32 border-4 border-pink-200 rounded-full flex items-center justify-center mb-8 mx-auto rotate-12">
                <span className="text-pink-200 font-black text-sm uppercase text-center leading-none">Made OF<br/>Japan</span>
            </div>
            <span className="text-gray-200 font-black text-6xl block">100%</span>
            <span className="text-gray-200 font-black text-5xl block">oishi</span>
          </div>
        </div>
      </section>

      {/* --- HERO VISION & MISSION SECTION --- */}
      <section className="bg-yellow-50 py-12 border-b border-yellow-200">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-center justify-center">
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-[#da251d] mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg font-medium mb-6 max-w-xl">
              Menjadi restoran cepat saji bergaya Jepang terbaik dan terbesar di Indonesia yang selalu menghadirkan keceriaan dan kelezatan di setiap sajian.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-yellow-500 mb-4">Our Mission</h2>
            <ul className="text-gray-700 text-lg font-medium space-y-3 max-w-xl list-disc list-inside">
              <li>Menyajikan makanan berkualitas, halal, dan bergizi dengan pelayanan terbaik.</li>
              <li>Mengutamakan kepuasan pelanggan dan inovasi produk secara berkelanjutan.</li>
              <li>Memberikan kontribusi positif bagi masyarakat dan lingkungan.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- RECOMMENDATION SECTION (judul & anchor) --- */}
      <section id="recommendation" className="bg-white pt-12 pb-4">
        <div className="text-center">
          <h2 className="text-2xl font-black text-[#da251d] uppercase tracking-wider">Recommendation</h2>
        </div>
      </section>

      {/* --- MENU SECTION (DIPERBESAR) --- */}
      {/* Tambahkan overflow-hidden agar gambar tidak menyebabkan scroll menyamping */}
      <section id="menu" className="py-12 bg-gray-50 relative border-t border-gray-200 overflow-hidden">
        
        {/* GAMBAR DEKORASI TARO & HANAKO DI SISI KANAN */}
        <div className="hidden xl:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-10 z-0 pointer-events-none opacity-90">
          <Image 
            src="/tarohanako2.png" 
            alt="Mascot Hokben" 
            width={200} 
            height={300} 
            className="object-contain drop-shadow-lg"
          />
        </div>

        {/* Tambahkan relative z-10 pada kontainer menu agar berada di atas gambar dekorasi */}
        <div className="container mx-auto px-4 max-w-[1300px] relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10"> 
            
            {/* Menu Item 1: Irodori Bento */}
            <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300 flex flex-col items-center text-center group border border-gray-100 relative overflow-hidden">
              {/* MODIFIKASI: Label tidak keluar batas */}
              <div className="absolute top-4 right-4 bg-[#da251d] text-white font-bold px-5 py-1.5 rounded-xl z-10 text-md shadow-sm">Premium</div>
              
              <div className="w-56 h-56 rounded-full mb-8 mt-4 relative overflow-hidden group-hover:scale-105 transition duration-500 shadow-md border-4 border-gray-50">
                <Image 
                  src="/irodori_bento.jpeg" 
                  alt="Irodori Bento" 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              
              <h3 className="text-3xl font-black text-gray-800 mb-3">Irodori Bento</h3>
              <p className="text-gray-500 mb-8 text-base">Menu bento dengan 9 kompartemen berisi 2 porsi nasi, mi ramen dengan saus pasta, ayam teriyaki, ekkado, ayam karaage, lumpia ayam telur, mayotamayaki, dan salad.</p>
              <div className="mt-auto w-full">
                <span className="block text-[#da251d] font-black text-3xl mb-5">Rp 52.728</span>
                <button className="w-full bg-white border-2 border-[#da251d] text-[#da251d] py-3.5 rounded-full font-bold text-lg hover:bg-[#da251d] hover:text-white transition">Tambah ke Pesanan</button>
              </div>
            </div>

            {/* Menu Item 2: Okayu Nitamago */}
            <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300 flex flex-col items-center text-center group border border-gray-100 relative overflow-hidden">
              
              <div className="w-56 h-56 rounded-full mb-8 mt-4 relative overflow-hidden group-hover:scale-105 transition duration-500 shadow-md border-4 border-gray-50">
                <Image 
                  src="/okayunitamago.jpeg" 
                  alt="Okayu Nitamago" 
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <h3 className="text-3xl font-black text-gray-800 mb-3">Okayu Ni Tamago</h3>
              <p className="text-gray-500 mb-8 text-base">Bubur khas HokBen disajikan dalam mangkuk dengan topping telur.</p>
              <div className="mt-auto w-full">
                <span className="block text-[#da251d] font-black text-3xl mb-5">Rp 10.000</span>
                <button className="w-full bg-white border-2 border-[#da251d] text-[#da251d] py-3.5 rounded-full font-bold text-lg hover:bg-[#da251d] hover:text-white transition">Tambah ke Pesanan</button>
              </div>
            </div>

            {/* Menu Item 3: Spicy Yakimeshi */}
            <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300 flex flex-col items-center text-center group border border-gray-100 relative overflow-hidden">
              {/* MODIFIKASI: Label tidak keluar batas */}
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 font-bold px-5 py-1.5 rounded-xl z-10 text-md shadow-sm">Spicy</div>
              
              <div className="w-56 h-56 rounded-full mb-8 mt-4 relative overflow-hidden group-hover:scale-105 transition duration-500 shadow-md border-4 border-gray-50">
                <Image 
                  src="/spicyyakimeshi.jpeg" 
                  alt="Spicy Yakimeshi" 
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <h3 className="text-3xl font-black text-gray-800 mb-3">Spicy Yakimeshi</h3>
              <p className="text-gray-500 mb-8 text-base">Nasi goreng khas HokBen disajikan dalam mangkuk dengan topping telur dalam varian pedas.</p>
              <div className="mt-auto w-full">
                <span className="block text-[#da251d] font-black text-3xl mb-5">Rp 10.000</span>
                <button className="w-full bg-white border-2 border-[#da251d] text-[#da251d] py-3.5 rounded-full font-bold text-lg hover:bg-[#da251d] hover:text-white transition">Tambah ke Pesanan</button>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* --- APP BANNER SECTION --- */}
      <section id="promotion" className="bg-yellow-400 py-16">
        <div className="container mx-auto max-w-[1200px] px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-4xl font-black text-[#da251d] mb-4">Lebih Untung Pakai Aplikasi!</h2>
                <p className="text-gray-900 font-medium mb-6 text-lg">Download aplikasi Hokben sekarang dan dapatkan gratis 1 porsi Egg Chicken Roll untuk pengguna baru.</p>
                <div className="flex space-x-4">
                    <button className="bg-black text-white px-6 py-3 rounded-lg font-bold flex items-center hover:bg-gray-800 transition">
                        <span>App Store</span>
                    </button>
                    <button className="bg-black text-white px-6 py-3 rounded-lg font-bold flex items-center hover:bg-gray-800 transition">
                        <span>Google Play</span>
                    </button>
                </div>
            </div>
            <div className="md:w-1/3 w-full bg-white/30 rounded-3xl h-64 border-4 border-dashed border-red-500 relative">
              <Image 
                src="/iklanhokbenaja.jpg"
                alt="Iklan HokBen di Aplikasi"
                layout="fill"
                objectFit="contain"
                className="p-4" 
              />
            </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 border-t-8 border-[#da251d]">
        <div className="container mx-auto max-w-[1200px] px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <div className="mb-6 bg-white inline-block rounded-2xl p-2">
                      <Image 
                        src="/logo_hokben_1.png" 
                        alt="Logo Hokben" 
                        width={120} 
                        height={50} 
                        className="w-20 h-auto object-contain hover:scale-105 transition-all duration-300" 
                      />
                    </div>
                    <p className="text-gray-400 text-sm max-w-sm mb-6">
                        Pelopor makanan bergaya Jepang di Indonesia. Hadirkan keceriaan di setiap gigitan sejak 1985.
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-4 text-yellow-400">Perusahaan</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#corporate" className="hover:text-white transition">Tentang Kami</a></li>
                        <li><a href="#" className="hover:text-white transition">Karir</a></li>
                        <li><a href="#contact" className="hover:text-white transition">Hubungi Kami</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-4 text-yellow-400">Bantuan</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white transition">Syarat & Ketentuan</a></li>
                        <li><a href="#" className="hover:text-white transition">Kebijakan Privasi</a></li>
                        <li><a href="#outlet" className="hover:text-white transition">Lokasi Outlet</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
                <p>&copy; {new Date().getFullYear()} HokBen Boongan, isi tidak merepresentasikan perusahaan asli</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-yellow-400 transition">IG</a>
                    <a href="#" className="hover:text-yellow-400 transition">TW</a>
                    <a href="#" className="hover:text-yellow-400 transition">FB</a>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}