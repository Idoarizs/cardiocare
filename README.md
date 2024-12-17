# **CardioCare ❤️ AI-Powered Landing Page**

## **⚠️ Peringatan Penting**
Proyek ini **berfokus pada integrasi AI ke dalam web** untuk memberikan gambaran awal terkait **risiko penyakit jantung**.  

**Hasil prediksi dari AI ini tidak dapat dijadikan acuan medis!**
- **CardioCare bukan alat diagnosis medis.**
- **Prediksi yang ditampilkan hanya berdasarkan model AI dan data yang dimasukkan pengguna.**
- **Silakan konsultasikan hasil prediksi Anda langsung kepada dokter atau tenaga medis profesional untuk diagnosis dan penanganan yang akurat.**
---

## **Tujuan Proyek 🎯**
Memberikan edukasi kesehatan dan gambaran awal risiko penyakit jantung dengan mengintegrasikan teknologi AI ke dalam platform web yang mudah digunakan.

## **Tentang Proyek 📋**
**CardioCare** adalah web landing page interaktif yang membantu pengguna:
- **Mempelajari edukasi penyakit jantung** melalui konten informatif.
- **Mengecek risiko kesehatan jantung** menggunakan **AI** yang sudah dilatih dengan **Scikit-Learn**.

Proyek ini menggabungkan **teknologi AI** dan **web modern** untuk menciptakan pengalaman yang interaktif dan mudah digunakan.

---

## **Fitur Utama ✨**
1. **Edukasi Penyakit Jantung**  
   Informasi lengkap dan mudah dipahami tentang risiko penyakit jantung.
2. **Cek Risiko Penyakit Jantung**  
   - Pengguna mengisi formulir sederhana (usia, tekanan darah, kolesterol, dll).
   - Backend Flask menjalankan model AI untuk memprediksi risiko kesehatan.
   - Hasil berupa **risiko awal** ditampilkan di frontend ReactJS.

---

## **Teknologi yang Digunakan 🛠️**
### **Frontend**
1. ReactJS: Membangun antarmuka pengguna interaktif.
2. Axios: Menghubungkan frontend React dengan backend Flask.
3. TailwindCSS: Styling modern dan responsif.
### **Backend**
1. Flask: Untuk membuat API yang menerima data dari pengguna dan memproses model AI.
2. Scikit-Learn: Melatih dan menjalankan model prediksi risiko jantung.
3. Pickle: Menyimpan model AI yang telah dilatih agar dapat digunakan kembali.

---

# Dokumentasi API
## Endpoint: `/predict`
**Method:** `POST`  
**Deskripsi:**  
Endpoint ini digunakan untuk mengirimkan data pengguna dan menerima prediksi mengenai risiko penyakit jantung berdasarkan input yang diberikan.

---

### Data yang Diperlukan (Request Body)
Berikut adalah data yang harus dikirimkan dalam format JSON:

| **Parameter**   | **Tipe Data** | **Deskripsi**                                           |
|-----------------|---------------|---------------------------------------------------------|
| `age`           | `float`       | Usia pengguna (misalnya `45.0`)                         |
| `sex`           | `int`         | Jenis kelamin (1 = Laki-laki, 0 = Perempuan)            |
| `cp`            | `int`         | Jenis nyeri dada (menggunakan angka kategori)           |
| `trestbps`      | `float`       | Tekanan darah saat istirahat (misalnya `130.0`)         |
| `chol`          | `float`       | Kadar kolesterol dalam darah (misalnya `250.0`)         |
| `fbs`           | `int`         | Gula darah puasa (1 = >120 mg/dL, 0 = ≤120 mg/dL)       |
| `restecg`       | `int`         | Hasil EKG saat istirahat (angka kategori)               |
| `thalach`       | `float`       | Detak jantung maksimum selama aktivitas fisik           |
| `exang`         | `int`         | Nyeri dada saat olahraga (1 = Ya, 0 = Tidak)            |
| `oldpeak`       | `float`       | Penurunan ST selama tes olahraga (misalnya `1.2`)       |
| `slope`         | `int`         | Kemiringan segmen ST (angka kategori)                   |
| `ca`            | `int`         | Kelainan pada arteri koroner (angka kategori)           |
| `thal`          | `int`         | Riwayat thalassemia (angka kategori)                    |

Setelah data dikirimkan, server akan memberikan respon dalam format JSON yang berisi hasil prediksi dan saran untuk langkah selanjutnya.

#### Struktur Response:
```json
{
  "prediction": "Heart Disease Detected",
  "suggestion": "We recommend consulting a doctor for further evaluation."
}
