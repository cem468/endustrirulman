# ENDUSTRİ RULMAN - Satlık Alan Adı Web Sitesi

## 📋 İçerik Özeti

Bu proje, **ENDUSTRİ RULMAN** firma adı altında, bir alan adı açık arttırması için hazırlanmış profesyonel bir web sitesidir.

## 🎯 Amaç

- **Alan Adı Satışı**: Premium alan adının açık arttırma yöntemiyle satılması
- **Ücretsiz Web Sitesi**: Alan adını satın alan kişiye tamamen ücretsiz profesyonel web sitesi tasarlanması
- **Teklif Toplama**: Potansiyel alıcıların fiyat tekliflerini WhatsApp üzerinden göndermeleri

## 📁 Dosya Yapısı

```
endustrirulman/
├── index.html          # Ana HTML dosyası
├── style.css           # CSS tasarım dosyası
├── script.js           # JavaScript işlevsellik
└── README.md           # Bu dosya
```

## 🌐 Sayfa İçeriği

### 1. **Başlık Bölümü (Header)**
- Logo ve navigasyon menüsü
- Hızlı bağlantılar (Ana Sayfa, Özellikler, Açık Arttırma, İletişim)

### 2. **Ana Bölüm (Hero Section)**
- Büyük **"SATILIK ALAN ADI"** başlığı
- Alan adı hakkında bilgi
- Açık arttırma detayları
- "Teklifini Ver" butonları

### 3. **Özellikler Bölümü (Features)**
- 6 ana özellik kartı
- Premium alan adı avantajları
- Ücretsiz web sitesi tasarlanması
- Kurumsal kimlik oluşturma

### 4. **Açık Arttırma Bölümü (Auction)**
- Başlangıç fiyatı: **150.000 ₺**
- İletişim yöntemi: WhatsApp
- WhatsApp linki

### 5. **Teklif Formu Bölümü (Form Section)**
- **Adınız** (Zorunlu)
- **E-posta Adresi** (Zorunlu)
- **Telefon Numarası** (Zorunlu, otomatik formatlı)
- **Şirket Adı** (Opsiyonel)
- **Teklif Edilen Fiyat** (Zorunlu, minimum 150.000 ₺)
- **Mesajınız** (Opsiyonel)

**Form Gönderimi:**
- Veriler WhatsApp mesajı olarak formatlanır
- Automatic olarak **+90 532 343 1207** numarasına iletilir
- Formatta tarih, saat ve tüm bilgiler yer alır

### 6. **İletişim Bölümü (Contact)**
- WhatsApp iletişim bilgileri
- Hızlı WhatsApp mesaj butonu
- İletişim detayları

### 7. **Altbilgi (Footer)**
- Telif hakkı bilgisi
- Web sitesi hakkında kısa bilgi

## 🎨 Tasarım Özellikleri

### Renkler
- **Birincil Renk**: Kırmızı (#e74c3c)
- **İkincil Renk**: Gri-Mavi (#2c3e50)
- **Vurgulama Rengi**: Turuncu (#f39c12)
- **Başarı Rengi**: Yeşil (#27ae60)

### Yazı Tipleri
- `Segoe UI`, Tahoma, Geneva, Verdana
- Profesyonel ve okunabilir

### Responsive Tasarım
- Mobil, tablet ve masaüstü cihazlara uyumlu
- Media queries ile otomatik düzen ayarlaması

## ⚙️ Fonksiyonlar

### 1. **WhatsApp Entegrasyonu**
```javascript
openWhatsApp()
```
- Doğrudan WhatsApp sohbetini açar
- Önceden yazılı mesaj gönderer

### 2. **Form İşleme**
```javascript
submitForm(event)
```
- Form verilerini toplar
- WhatsApp mesajı olarak formatlar
- Minimum fiyat kontrolü (150.000 ₺)
- Başarı animasyonu gösterir

### 3. **Otomatik Formatlama**
- Telefon numarası: Otomatik olarak `5XX XXX XXXX` formatında düzenlenir
- Fiyat: Türkçe formatta (bin ayırıcı olarak nokta)
- Tarih: Türkçe yerelleştirme

### 4. **Animasyonlar**
- Sayfaya girişte fade-in efekti
- Kartlara hover sırasında kaldırma efekti
- Smooth scroll bağlantıları

## 🚀 Kullanım

### 1. **Web Sitesini Açma**
- `index.html` dosyasını web tarayıcısında açın
- Veya bir web sunucusunda yayınlayın

### 2. **Teklif Verme Süreci**
1. "Teklifini Ver" butonuna tıklayın
2. Formu doldurun (ad, e-posta, telefon, fiyat vb.)
3. "Teklifi WhatsApp'a Gönder" butonuna tıklayın
4. Açılan WhatsApp penceresinde mesajı gönderin

### 3. **Doğrudan WhatsApp İletişim**
- "WhatsApp'ta Mesaj Gönder" butonuna tıklayın
- Veya sabit linki kullanın: `https://wa.me/905323431207`

## 📱 WhatsApp Linki

**Statik WhatsApp Numarası:** `+90 532 343 1207`

Form gönderimi otomatik olarak bu numaraya yapılır.

## 📞 İletişim Bilgileri

- **Firma Adı**: ENDUSTRİ RULMAN
- **WhatsApp**: +90 532 343 1207
- **Açık Arttırma**: 150.000 ₺'den başlayan teklifler kabul edilir

## 🔧 Teknik Bilgiler

- **HTML5**: Semantik ve modern yapı
- **CSS3**: Flexbox, Grid, Gradients, Animations
- **JavaScript (ES6+)**: Form işleme, WhatsApp entegrasyonu, animasyonlar
- **Responsive**: Mobile-first tasarım yaklaşımı

## 📈 SEO ve Meta Bilgiler

- **Title**: ENDUSTRİ RULMAN - Satlık Alan Adı
- **Meta Charset**: UTF-8
- **Viewport**: Responsive tasarım için ayarlanmış

## 🎁 Bonuslar

### Ekstra Özellikler
1. **Smooth Scrolling**: Sayfada yumuşak kaydırma
2. **Form Validasyonu**: Minimum fiyat kontrolü
3. **Otomatik Mesaj Formatı**: Profesyonel WhatsApp mesajı
4. **Keyboard Shortcut**: Alt + W = WhatsApp'ı aç
5. **Animasyonlar**: Sayfaya giriş ve kartlara hover efektleri
6. **Intersection Observer**: Kartların sayfa scroll sırasında görülmesi

## 📝 Düzenleme ve Özelleştirme

### İletişim Numarasını Değiştirme
Tüm dosyalarda `905323431207` araması yapın ve değiştirin:
- `index.html` - WhatsApp linklerinde
- `script.js` - WhatsApp fonksiyonunda

### Firma Adını Değiştirme
- `index.html` içindeki tüm "ENDUSTRİ RULMAN" yazılarını değiştirin
- `style.css` renkleri isteğe göre ayarlayın

### Minimum Fiyatı Değiştirme
- `index.html` form input öğesindeki `min="100000"` değerini değiştirin
- `script.js` içindeki fiyat kontrolünü güncelleyin

## 📚 Kaynaklar

- [WhatsApp Business API](https://www.whatsapp.com/business/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Can I Use - Browser Support](https://caniuse.com/)

## ✅ Kontrol Listesi

- ✅ HTML5 Yapısı Hazır
- ✅ Responsive CSS Tasarım
- ✅ WhatsApp Entegrasyonu
- ✅ Form İşleme Fonksiyonları
- ✅ Animasyonlar ve Efektler
- ✅ Mobil Uyumluluğu
- ✅ SEO Optimizasyonu

## 📄 Lisans

Bu proje ENDUSTRİ RULMAN firması için hazırlanmıştır.

---

**Son Güncelleme**: 27.07.2026
**Sürüm**: 1.0.0
