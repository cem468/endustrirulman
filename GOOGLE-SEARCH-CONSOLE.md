# Google Search Console Kaydı - ENDUSTRİ RULMAN

## 📋 Hızlı Başlangıç

Google Search Console'a sitenizi kaydetmek için aşağıdaki adımları izleyin.

---

## 🔧 ADIM 1: Google Search Console Açın

1. **Tarayıcınızda açın:**
   - https://search.google.com/search-console

2. **Google Hesabınızla giriş yapın**
   - Eğer hesabınız yoksa https://accounts.google.com/signup adresinde oluşturun

---

## 🌐 ADIM 2: Property Ekleyin (Domain/URL)

### **SEÇENEK A: URL Prefix (GitHub Pages için ÖNERİLİ)**

1. **"Property ekle" / "Add property" tıkla**

2. **URL-prefix'i seç:**
   - Radio button: "URL Prefix" seçin
   - URL girin: `https://cem468.github.io/endustrirulman/`

3. **Devam'a tıkla**

### **SEÇENEK B: Domain (Gelecekte etkinizin.com için)**

1. **Domain seç:**
   - Radio button: "Domain" seçin
   - Domain girin: `endustrirulman.com` (www olmadan)

2. **Devam'a tıkla**
   - DNS TXT record eklemeniz istenecek

---

## ✅ ADIM 3: Domain/URL Doğrulama

### **URL Prefix Doğrulama (ADIM 2A seçtiyseniz):**

Birkaç doğrulama yöntemi sunulacak:

#### **Seçenek 1: HTML File (En Kolay)** ✅ ÖNERİLİ

1. **"HTML file" yöntemini seç**
2. `google9bb1f5c4e0e2d7c3.html` dosyasını indir
3. **Dosya zaten proje root'unda hazır!**
   - Klasör: `/.well-known/`
   - Tam URL: `https://cem468.github.io/endustrirulman/.well-known/google9bb1f5c4e0e2d7c3.html`
4. **Verify (Doğrula)** butonuna tıkla

#### **Seçenek 2: HTML Tag**

1. Verilen meta tag'ı kopyala
2. HTML `<head>` bölümüne ekle
3. **Verify** tıkla

#### **Seçenek 3: Google Analytics**

1. Site'ye Google Analytics code ekle
2. **Verify** tıkla

---

## 🗺️ ADIM 4: Sitemap Submit Et

Domain/URL doğrulandıktan sonra:

1. **Sol menüde "Sitemaps" seç**
2. **Sitemap URL'sini gir:**
   ```
   https://cem468.github.io/endustrirulman/sitemap.xml
   ```
3. **"Submit" (Gönder) tıkla**
4. Yeşil ✅ işareti görüntülenecek

---

## 🔍 ADIM 5: Robots.txt Doğrula

1. **Sol menüde "Coverage" (Kapsam) seç**
2. **Robots.txt test et:**
   - URL girin: `https://cem468.github.io/endustrirulman/robots.txt`
   - Test sonucu gösterilecek

---

## 📊 ADIM 6: Performans Verilerini Kontrol Et

Doğrulama tamamlandıktan ~24 saat sonra:

1. **"Performance" (Performans) sekmesine git**
2. **Görüntülenen arama sonuçları:**
   - Toplam tıklamalar
   - Gösterimler
   - Ortalama CTR
   - Ortalama pozisyon

3. **"Keywords" sekmesi:**
   - Hangi keywords'ün ranking'ini göster

---

## 🎯 ADIM 7: Tahmini Crawl'ı Saklayın

1. **Sol menüde "URL Inspection" (URL Kontrolü) seç**
2. **Sitenizin URL'sini girin:**
   ```
   https://cem468.github.io/endustrirulman/
   ```
3. **"Test live URL" (Canlı URL'yi test et) tıkla**
4. **"Request indexing" (İndeksleme iste) tıkla**

---

## 📈 ADIM 8: Index Durumu İzle

Birkaç gün sonra kontrol edin:

1. **"Coverage" sekmesine git**
2. Aşağıdaki kategorileri gözlemleyin:
   - **Submitted and indexed** (Gönderilen ve indekslenmiş) ✅
   - **Submitted, not indexed** (Gönderilen, indekslenmeyen) ⚠️
   - **Not submitted in sitemap** (Sitemap'te değil) ⚠️

---

## 🚨 Sık Sorulan Sorunlar (FAQ)

### **"Doğrulama başarısız oldu"**
- ✅ HTML file yöntemi kullan (en güvenilir)
- ✅ Dosyanın tam URL'de erişilebildiğini kontrol et
- ✅ GitHub Pages'in dosyayı serve etmesini bekle (2-3 dakika)

### **"Sitemap submit edemiyorum"**
- ✅ Domain/URL'yi önce doğrula
- ✅ Sitemap URL'sinin erişilebildiğini test et: 
  ```
  https://cem468.github.io/endustrirulman/sitemap.xml
  ```

### **"Sayfalar indekslenmiyor"**
- ✅ robots.txt'in "Allow: /" içerdiğini kontrol et ✓
- ✅ Sayfanın public olduğunu kontrol et
- ✅ URL Inspection ile test et
- ✅ "Request indexing" tıkla

### **"SEO metrics görüntülenmiyor"**
- ℹ️ 24-48 saat bekleyin (ilk indeksleme süresince)
- ℹ️ Minimum 16 tıklama gerekli (spamden koruma)

---

## 📱 Diğer Arama Motorları

### **Bing Webmaster Tools**

1. https://www.bing.com/webmasters adresine git
2. "Add your site" tıkla
3. URL girin: `https://cem468.github.io/endustrirulman/`
4. Sitemap ekle: `/sitemap.xml`

### **Yandex Webmaster (Türkçe trafik için)**

1. https://webmaster.yandex.com adresine git
2. "Siteyi ekle" tıkla
3. URL: `https://cem468.github.io/endustrirulman/`
4. Doğrulama yapıp sitemap ekle

---

## ✨ Domain Satın Aldıktan Sonra

Eğer `endustrirulman.com` domain'i satın alırsanız:

1. **Yeni property ekle:** `endustrirulman.com`
2. **DNS'e TXT record ekle:**
   - Sağlayıcı: GoDaddy, Namecheap, Cloudflare, vb.
   - Record: Google verdiği TXT verification code
3. **Eski GitHub Pages property'yi tutun** (redirect için)
4. **301 Redirect kur:**
   ```
   cem468.github.io/endustrirulman/ → endustrirulman.com/
   ```

---

## 🎯 Kontrol Listesi

- [ ] Google Search Console açtım
- [ ] Property ekledim (URL Prefix)
- [ ] Domain/URL doğruladım (HTML file ile)
- [ ] Sitemap submit ettim
- [ ] Robots.txt doğruladım
- [ ] URL Inspection yapıp indexing istim
- [ ] Coverage raporunu kontrol ettim
- [ ] Bing Webmaster Tools'a kaydettim
- [ ] Yandex Webmaster'a kaydettim

---

## 📞 Sorunlar İçin

Sorun yaşarsanız:
- Google Search Console Help: https://support.google.com/webmasters
- Search Central Blog: https://developers.google.com/search/blog

---

**Son Güncelleme:** 27 Temmuz 2026
**Durum:** Hazır
