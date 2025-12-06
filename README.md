# 📚 Erişimim – Engelli Bireyler İçin Dijital Eğitim Kaynakları Toplayıcısı

## 🎯 Proje Amacı ve Sosyal Sorumluluk
[cite_start]Bu proje, engelli bireylerin eğitimde fırsat eşitliğini sağlamaya doğrudan katkıda bulunmak amacıyla geliştirilmiştir[cite: 3]. [cite_start]Amacımız, dağınık durumdaki erişilebilir dijital eğitim materyallerini (sesli kitap, işaret dili videosu, uyarlanmış notlar) tek bir merkezi, modern ve **erişilebilirlik standartlarına tam uyumlu** (WCAG 2.1 AA) web platformunda bir araya getirmektir[cite: 4, 17]. [cite_start]Proje, Yazılım Mühendisliği bilgi ve becerilerini kullanarak **Kırılganlık Çözümüne Yönelik Uygulamalar** başlığı çerçevesinde yürütülmektedir[cite: 7].

## 💻 Teknik Yapı (Stack)
[cite_start]Proje, ölçeklenebilirliği ve modülerliği destekleyen API Tabanlı (RESTful) mimari ile tasarlanmıştır[cite: 15].

| Katman | Teknoloji | Amaç |
| :--- | :--- | :--- |
| **Backend (API)** | **Node.js/Express.js** | [cite_start]Kaynak verilerinin güvenli yönetimi ve sunumu[cite: 18]. |
| **Veritabanı** | **PostgreSQL** | [cite_start]İlişkisel veri saklama ve kaynak kategorizasyonu[cite: 19]. |
| **Frontend (UI)** | **React** | [cite_start]Yüksek performanslı, dinamik ve erişilebilir kullanıcı arayüzü[cite: 16]. |
| **Tasarım/Stil** | **Tailwind CSS** | [cite_start]Profesyonel ve WCAG uyumlu hızlı arayüz geliştirme[cite: 17]. |

## 🚀 Kurulum ve Çalıştırma Talimatları

### 1. Ön Gereksinimler
* Node.js (v18.x veya üstü) ve npm
* PostgreSQL Veritabanı Sunucusu
* Git

### 2. Projenin Klonlanması
```bash
git clone [https://github.com/KULLANICI_ADINIZ/erisimim-dijital-platform.git](https://github.com/KULLANICI_ADINIZ/erisimim-dijital-platform.git)
cd erisimim-dijital-platform