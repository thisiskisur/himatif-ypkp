import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
       <!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="shorcut icon" href="{{ asset('assets/icons/ic-logo.ico') }}">
        <title>Himatif Usb</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
        {{-- AOS --}}
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
        {{-- AOS --}}
        <link rel="stylesheet" href="{{ asset('assets/css/styles.css') }}">
    </head>
    <body>
    {{-- navbar --}}
{{-- Navbar --}}
<nav class="navbar navbar-expand-lg navbar-dark py-3 fixed-top">
  <div class="container">
      <a class="navbar-brand" href="/layouts/navbar.blade.php">
          <img src="{{ asset('assets/icons/ic-logo.ico') }}" height="55" width="55" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Beranda</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link active" href="#">Tentang Kami</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link active" href="#">Berita</a>
              </li>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Divisi
                  </a>
                  <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="{{ url('/divisi/re') }}">RESEARCH AND EDUCATION</a></li>
                      <li><a class="dropdown-item" href="{{ url('/divisi/pr') }}">PUBLIC RELATIONS</a></li>
                      <li><a class="dropdown-item" href="{{ url('/divisi/hrdo') }}">HUMAN RESOURCE DEVELOPMENT AND ORGANIZATION</a></li>
                      <li><a class="dropdown-item" href="{{ url('/divisi/cnb') }}">CREATIVE AND BUSSINESS</a></li>
                  </ul>
              </li>
              <li class="nav-item">
                  <a class="nav-link active" href="#">Hubungi Kami</a>
              </li>
          </ul>
          <form class="d-flex">
              <button class="btn btn-outline-danger" type="submit">Register</button>
          </form>
      </div>
  </div>
</nav>
{{-- End Navbar --}}

@extends('layouts.layouts')

@section('content')
<section id="hero" class="px-0">
    <div class="container text-center text-white">
        <div class="hero-title" data-aos="fade-up">
            <div class="hero-text"><strong>HIMATIF</strong> USB </div>
            <h4>Himpunan Mahasiswa Teknik Informatika Universitas Sangga Buana</h4>
            <P>
                Himpunan Mahasiwa Informatika adalah salah satu Lembaga <br>Mahasiswa yang berada di lingkungan Fakultas TEKNIK
            </P>
        </div>
    </div>
  </section>
  <section id="program" style="margin-top: -30px">
    <div class="container col-xxl-9">
        <div class="row">
            <div class="col-lg-3 col-md-6 col mb-2" data-aos="flip-left">
                <div class="bg-white rounded-3 shadow p-3 d-flex justify-content-between alig-items-center">
                    <div>
                        <h5>Pendidikan <br>Berkualitas</h5>
                    </div>
                    <img src="{{ asset('assets/icons/ic-book.png') }}" height="55" width="55" alt="">
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col mb-2" data-aos="flip-left">
                    <div class="bg-white rounded-3 shadow p-3 d-flex justify-content-between alig-items-center">
                        <div>
                            <h5>Pendidikan <br>Berakhlak</h5>
                        </div>
                        <img src="{{ asset('assets/icons/ic-komputer.png') }}" height="55" width="55" alt="">
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col mb-2" data-aos="flip-left">
                        <div class="bg-white rounded-3 shadow p-3 d-flex justify-content-between alig-items-center">
                            <div>
                                <h5>Pendidikan <br>Muamalah</h5>
                            </div>
                            <img src="{{ asset('assets/icons/ic-neraca.png') }}" height="55" width="55" alt="">
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col mb-2" data-aos="flip-left">
                            <div class="bg-white rounded-3 shadow p-3 d-flex justify-content-between alig-items-center">
                                <div>
                                    <h5>Pendidikan <br>Teknologi</h5>
                                </div>
                                <img src="{{ asset('assets/icons/ic-globe.png') }}" height="55" width="55" alt="">
                            </div>
                        </div>
        </div>
    </div>
  </section>
  {{-- Divisi Kami --}}
  <section id="divisi-kami" class="text-center mt-5">
    <h1>Divisi <span class="font-weight-bold">Kami</span></h1>
    <p>Divisi di Himpunan Mahasiswa Informatika Universitas Sangga Buana Ypkp Bandung</p>
    <div class="container">
        <div class="row mt-4" data-aos="flip-up">
            <div class="col-md-6 mb-4"> <!-- Mengubah menjadi col-md-6 untuk 2 kolom -->
                <a href="{{ url('/divisi/re') }}" class="card divisi-card">
                    <div class="card-body">
                        <img src="{{ asset('assets/icons/ic-book.png') }}" alt="re" class="icon">
                        <h5 class="card-title">RESEARCH AND EDUCATION</h5>
                        <p class="card-text">Bertanggung jawab untuk mengawasi dan mengarahkan seluruh aspek yang ada dalam Himpunan Mahasiswa Informatika.</p>
                    </div>
                </a>
            </div>
            <div class="col-md-6 mb-4"> <!-- Mengubah menjadi col-md-6 untuk 2 kolom -->
                <a href="{{ url('/divisi/pr') }}" class="card divisi-card">
                    <div class="card-body">
                        <img src="{{ asset('assets/icons/ic-globe.png') }}" alt="pr" class="icon">
                        <h5 class="card-title">PUBLIC RELATIONS</h5>
                        <p class="card-text">Bertanggung jawab untuk mengurus aspek yang berkaitan dengan akademis mahasiswa Informatika.</p>
                    </div>
                </a>
            </div>
            <div class="col-md-6 mb-4"> <!-- Mengubah menjadi col-md-6 untuk 2 kolom -->
                <a href="{{ url('/divisi/hrdo') }}" class="card divisi-card">
                    <div class="card-body">
                        <img src="{{ asset('assets/icons/ic-neraca.png') }}" alt="hrdo" class="icon">
                        <h5 class="card-title">HUMAN RESOURCE DEVELOPMENT AND ORGANIZATION</h5>
                        <p class="card-text">Bertanggung jawab untuk menjaga kesejahteraan mahasiswa dan lingkungan kampus.</p>
                    </div>
                </a>
            </div>
            <div class="col-md-6 mb-4"> <!-- Mengubah menjadi col-md-6 untuk 2 kolom -->
                <a href="{{ url('/divisi/cnb') }}" class="card divisi-card">
                    <div class="card-body">
                        <img src="{{ asset('assets/icons/ic-komputer.png') }}" alt="cnb" class="icon">
                        <h5 class="card-title">CREATIVE AND BUSINESS</h5>
                        <p class="card-text">Bertanggung jawab dalam mewadahi minat dan bakat dari mahasiswa program studi Informatika.</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>

  {{-- Divisi Kami --}}
  {{-- berita --}}
  <section id="berita" class="py-5">
    <div class="container py-5">
        <div class="header-berita text-center">
            <h2 class="fw-bold">Berita Kegiatan Himatif</h2>
        </div>
        <div class="row py-5" data-aos="flip-up">
            <div class="col-lg-4">
                <div class="card-border-0">
                    <img src="{{ asset('assets/images/7.jpg') }}" class="img-fluid mb-3 shadow rounded" alt="">
                    <div class="konten-berita">
                        <p class="mb-3 text-secondary">09/10/2024</p>
                        <h4 class="fw-bold mb-3 text-secondary">Seminar Teknologi</h4>
                        <p class="">#Himatif</p>
                        <a href="" class="text-decoration-none text-danger">Selengkapnya</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card-border-0">
                    <img src="{{ asset('assets/images/11.jpg') }}" class="img-fluid mb-3 shadow rounded" alt="">
                    <div class="konten-berita">
                        <p class="mb-3 text-secondary">09/10/2024</p>
                        <h4 class="fw-bold mb-3 text-secondary">Seminar Teknologi</h4>
                        <p class="">#Himatif</p>
                        <a href="" class="text-decoration-none text-danger">Selengkapnya</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card-border-0">
                    <img src="{{ asset('assets/images/12.jpg') }}" class="img-fluid mb-3 shadow rounded" alt="">
                    <div class="konten-berita">
                        <p class="mb-3 text-secondary">09/10/2024</p>
                        <h4 class="fw-bold mb-3 text-secondary">Seminar Teknologi</h4>
                        <p class="">#Himatif</p>
                        <a href="" class="text-decoration-none text-danger">Selengkapnya</a>
                    </div>
                </div>
            </div>
            <div class="row py-4">
            </div>
            <div class="footer-berita text-center">
                <a href="" class="btn btn-outline-danger">Berita Lainnya</a>
            </div>
        </div>
    </div>
</section>

{{-- berita--}}
  {{-- join --}}
<section id="join" class="py-5">
    <div class="container py-5">
        <div class="row d-flex align-items-center" data-aos="fade-down-left">
            <div class="col-lg-6">
                <div class="d-flex align-items-center">
                    <div class="stripe me-2"></div> <!-- Stripe berada di sebelah kiri -->
                    <h4>Daftar Himatif</h4> <!-- Teks berada di sebelah kanan stripe -->
                </div>
                <h1 class="fw-bold mb-2"> Jadilah bagian dari HIMATIF dan kembangkan potensimu bersama kami!</h1>
                <p class="mb-3">
                    HIMATIF adalah singkatan dari Himpunan Mahasiswa Teknik Informatika. 
                    HIMATIF merupakan organisasi mahasiswa yang berada di tingkat program studi Teknik Informatika. 
                </p>
                <button class="btn btn-outline-danger">Register</button>
            </div>
            <div class="col-lg-6">
                <img src="{{ asset('assets/images/11.jpg') }}" class="img-fluid rounded" alt=""> <!-- Tambahkan kelas rounded -->
                <!-- Konten lainnya -->
            </div>
        </div>
    </div>
</section>
{{-- join --}}
  {{-- video --}}
  <section id="video" class="video py-5"> <!-- tambahkan class video di sini -->
    <div class="container py-5">
        <div class="text-center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/UC0bEkEYH8A?si=lmLDFIUNSuhfzr5P" title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
</section>        
  {{-- video --}}

  <section id="video_youtube" class="py-5">
    <div class="container py-5">
        <div class="header-berita text-center">
            <h2 class="fw-bold">Video Kegiatan Himatif</h2>
        </div>
        <div class="row py-5"> <!-- Semua col-lg-4 harus berada di dalam satu div row -->
            <div class="col-lg-4">
                <iframe width="100%" height="215" src="https://www.youtube.com/embed/UC0bEkEYH8A?si=lmLDFIUNSuhfzr5P" title="YouTube video player"
                 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                 referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="col-lg-4">
                <iframe width="100%" height="215" src="https://www.youtube.com/embed/UC0bEkEYH8A?si=lmLDFIUNSuhfzr5P" title="YouTube video player"
                 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                 referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="col-lg-4">
                <iframe width="100%" height="215" src="https://www.youtube.com/embed/UC0bEkEYH8A?si=lmLDFIUNSuhfzr5P" title="YouTube video player"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <div class="footer-berita text-center">
            <a href="" class="btn btn-outline-danger">Video Lainnya</a>
        </div>
    </div>
</section>
{{-- foto --}}
<section id="foto" class="section-foto parallax">
    <div class="container">
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                <div class="stripe-putih me-2"></div> <!-- Stripe berada di sebelah kiri -->
                <h4 class="fw-bold text-white">Foto Kegiatan</h4> <!-- Teks berada di sebelah kanan stripe -->
            </div>
            <div class="footer-berita text-center">
                <a href="https://drive.google.com/drive/folders/10IRmfuFrk377Hfqx5rX8757yVHlHqRxP?usp=sharing" class="btn btn-outline-danger">Foto Lainnya</a>
            </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6 col-6">
                    <img src="{{ asset('assets/images/1.jpg') }}" class="img-fluid rounded" alt="">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <img src="{{ asset('assets/images/1.jpg') }}" class="img-fluid rounded"  alt="">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <img src="{{ asset('assets/images/1.jpg') }}" class="img-fluid rounded"  alt="">
                </div>
                <div class="col-lg-3 col-md-6 col-6">
                    <img src="{{ asset('assets/images/1.jpg') }}"  class="img-fluid rounded" alt="">
                </div>
            </div>
        </div>
    </div>
</section>
{{-- foto --}}
{{-- program kerja --}}
<section id="program" class="mt-5 pt-5" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
<div class="container">
<h2 class="text-center">Program <span class="text-success">Kerja Kami</span></h2> <!-- Mengganti 'text-primary' menjadi 'text-success' -->
<p class="text-center">Program Kerja di Himpunan Mahasiswa Informatika</p>
<div class="row">
    <!-- Card 1 -->
    <div class="col-md-4">
        <div class="card">
            <img src="{{ asset('assets/images/7.jpg') }}" class="card-img-top" alt="Invention 2023">
            <div class="card-body">
                <h5 class="card-title">INVENTION 2023</h5>
                <p class="card-text">INVENTION merupakan perlombaan di bidang teknologi dan informasi tingkat nasional.</p>
            </div>
        </div>
    </div>
    <!-- Card 2 -->
    <div class="col-md-4">
        <div class="card">
            <img src="{{ asset('assets/images/11.jpg') }}" class="card-img-top" alt="Optimus 2023">
            <div class="card-body">
                <h5 class="card-title">OPTIMUS 2023</h5>
                <p class="card-text">OPTIMUS merupakan pengenalan kehidupan kampus dan pelatihan untuk mahasiswa baru IF.</p>
            </div>
        </div>
    </div>
    <!-- Card 3 -->
    <div class="col-md-4">
        <div class="card">
            <img src="{{ asset('assets/images/2.jpg') }}" class="card-img-top" alt="Supremasi XVI">
            <div class="card-body">
                <h5 class="card-title">SUPREMASI XVI</h5>
                <p class="card-text">SUPREMASI merupakan kegiatan untuk memperingati hari jadi prodi Informatika.</p>
            </div>
        </div>
    </div>
</div>
<div class="footer-berita text-center">
    <a href="" class="btn btn-outline-danger">Program Kerja Lainnya</a>
</div>
<!-- Tambahkan baris lain untuk item lainnya sesuai kebutuhan -->
</div>
</section>        
{{-- program kerja --}}


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kritik dan Saran</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        .kritik-saran-container {
            background-color: #008000; /* Hijau Sangga Buana */
            color: white;
            padding: 30px;
            border-radius: 20px; /* Sudut lebih membulat */
            max-width: 600px; /* Mengatur lebar maksimal */
            margin: 0 auto; /* Agar berada di tengah */
        }

        .form-control {
            border-radius: 10px; /* Membulatkan sudut input */
        }

        .btn-danger {
            border-radius: 10px; /* Membulatkan sudut tombol */
        }

        .alert {
            border-radius: 10px; /* Membulatkan sudut alert */
        }
    </style>
</head>
<body>
<div class="container mt-5" data-aos="fade-up"
data-aos-anchor-placement="center-center">
    <div class="kritik-saran-container text-center">
        <h2>Kritik dan Saran</h2>
        <p>Punya kritik dan saran? Yuk langsung diisi ya...</p>
        <p class="mb-4">Saran yang Anda kirimkan akan diteruskan ke email kami.</p>

        @if ($errors->any())
            <div class="alert alert-danger">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        @if(session('success'))
            <div class="alert alert-success">{{ session('success') }}</div>
        @endif

        <form action="{{ route('kritik-saran.store') }}" method="POST">
            @csrf
            <div class="form-group">
                <input type="text" name="saran" class="form-control" placeholder="Masukan Saranmu" required>
            </div>
            <button type="submit" class="btn btn-danger">Kirim</button>
        </form>
    </div>
</div>
</body>
</html>

        
{{-- footer --}}
<footer class="footer bg-light">
    <div class="container mt-5 pt-5" data-aos="zoom-out-down">
        <div class="row">
            <div class="col-md-3 footer-section">
                <h3>HIMATIF USB</h3>
                <p>Himpunan Mahasiswa Teknik Informatika Universitas Sangga Buana
                    Himpunan Mahasiwa Informatika adalah salah satu Lembaga
                    Mahasiswa yang berada di lingkungan Fakultas TEKNIK.
                </p>
            </div>

            <div class="col-md-3 footer-section">
                <h3>Divisi Kami</h3>
                <ul class="list-unstyled">
                    <li><a href="{{ url('/divisi/pr') }}" class="text-decoration-none text-dark">Public Relations (PR)</a></li>
                    <li><a href="{{ url('/divisi/cnb') }}" class="text-decoration-none text-dark">Creative and Bussines (CNB)</a></li>
                    <li><a href="{{ url('/divisi/re') }}" class="text-decoration-none text-dark">Research and Education (RE)</a></li>
                    <li><a href="{{ url('/divisi/hrdo') }}" class="text-decoration-none text-dark">Human Resource Development Organization (HRDO)</a></li>
                </ul>
            </div>

            <div class="col-md-3 footer-section">
                <h5 class="fw-bold mb-3">Follow Kami</h5>
                <!-- Ikon media sosial dengan Bootstrap dan warna hijau -->
                <div class="d-flex">
                    <a href="https://facebook.com" target="_blank" class="text-decoration-none text-success me-3">
                        <i class="bi bi-facebook" style="font-size: 30px;"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" class="text-decoration-none text-success me-3">
                        <i class="bi bi-twitter" style="font-size: 30px;"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" class="text-decoration-none text-success">
                        <i class="bi bi-instagram" style="font-size: 30px;"></i>
                    </a>
                </div>
            </div>

            <div class="col-md-3 footer-section">
                <h3>Lainnya</h3>
                <ul class="list-unstyled">
                    <li><a href="{{ url('/faq') }}" class="text-decoration-none text-dark">FAQ</a></li>
                    <li><a href="{{ url('/hubungi-kami') }}" class="text-decoration-none text-dark">Hubungi Kami</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
{{-- footer --}}

    </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" 
                crossorigin="anonymous">
        </script>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js">
        </script>
        <script>
            const navbar = document.querySelector(".fixed-top");
            window.onscroll = () => {
                if (window.scrollY > 100) {
                    navbar.classList.add("scroll-nav-active");
                    navbar.classList.add("text-nav-active");
                } else{
                    navbar.classList.remove("scroll-nav-active");
                }
                    
                };
                AOS.init();
        </script>
        <script>
            const navbar = document.querySelector(".fixed-top");
            window.onscroll = () => {
                if (window.scrollY > 100) {
                    navbar.classList.add("scroll-nav-active");
                    navbar.classList.add("text-nav-active");
                } else {
                    navbar.classList.remove("scroll-nav-active");
                }
            };
            AOS.init();
        </script>
        
    </body>
</html>

  );
}
