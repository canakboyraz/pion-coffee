# 🚀 Pion Coffee Web Sitesi — Deploy Öncesi Checklist

## ✅ Yapılan Düzeltmeler (Sorunlar Çözüldü)

| # | Sorun | Durum | Notlar |
|---|-------|--------|-------|
| 1 | `_app.js` `@/` import hatası | ✅ Düzeltildi | Göreli yola çevrildi |
| 2 | `menu.js` `@/data/menu.json` import | ✅ Düzeltildi | Göreli yola çevrildi |
| 3 | Font ailesi — Playfair Display | ✅ Düzeltildi | tailwind.config.js'e eklendi |
| 4 | `cream-300` rengi tanımsız | ✅ Düzeltildi | tailwind.config.js'e eklendi |
| 5 | `btn-gold` text rengi (white → walnut-900) | ✅ Düzeltildi | Daha iyi kontrast |
| 6 | Privacy sayfası eksik | ✅ Oluşturuldu | `/privacy` hazır |
| 7 | Terms sayfası eksik | ✅ Oluşturuldu | `/terms` hazır |
| 8 | OG Image placeholder | ✅ Oluşturuldu | `/public/images/og-image.svg` |
| 9 | `index.js` yazım hatası | ✅ Düzeltildi | "Erten sabahdan" → "Erken sabahtan" |
| 10 | `hakkimizda.js` story overflow | ✅ Düzeltildi | Quote box responsive hale getirildi |
| 11 | `next-seo` paketi kullanılmıyor | ✅ Kaldırıldı | package.json temizlendi |
| 12 | `next-sitemap.config.js` | ✅ Kaldırıldı | Kullanılmıyordu |
| 13 | postbuild script | ✅ Kaldırıldı | Gereksizdi |

---

## 📋 Deploy Öncesi Yapılacaklar

### 1. Gerçek Bilgileri Güncelle

**Zorunlu — Aşağıdaki dosyalarda değişiklik yapın:**

| Dosya | Değiştirilecek Bilgi | Şu Anda | Olması Gereken |
|------|-------------------|----------|-----------------|
| [`src/components/Header.js:79`](C:/Users/CANAKBOYRAZ/Desktop/pion-coffee/src/components/Header.js:79) | `href="tel:+905001234567"` | `+905001234567` | Gerçek telefon numaranız |
| [`src/components/Footer.js:121`](C:/Users/CANAKBOYRAZ/Desktop/pion-coffee/src/components/Footer.js:121) | `+90 500 123 45 67` | Gerçek telefon |
| [`src/components/Footer.js:129`](C:/Users/CANAKBOYRAZ/Desktop/pion-coffee/src/components/Footer.js:129) | `info@pioncoffee.com` | Gerçek e-posta adresiniz |
| [`src/pages/iletisim.js:24`](C:/Users/CANAKBOYRAZ/Desktop/pion-coffee/src/pages/iletisim.js:24) | `+90 500 123 45 67` | Gerçek telefon |
| [`src/pages/iletisim.js:34`](C:/Users/CANAKBOYRAZ/Desktop/pion-coffee/src/pages/iletisim.js:34) | `info@pioncoffee.com` | Gerçek e-posta |
| [`src/pages/iletisim.js:135`](C:/Users/CANAKBOYRAZ/Desktop/pion-coffee/src/pages/iletisim.js:135) | Google Maps iframe src | Gerçek koordinatınız (Google Maps'ten alın) |

### 2. Kahve Fotoğraflarınızı Ekleyin (Opsiyonel ama tavsiye edilir)

- Kendi ürün fotoğraflarınızı `/public/images/` klasörüne koyun
- [`src/data/menu.json`](C:/Users/CANAKBOYRAZ/Desktop/pion-coffee/src/data/menu.json) içindeki Unsplash URL'lerini kendi fotoğraflarınızla değiştirin

### 3. Test Edin

```bash
cd C:\Users\CANAKBOYRAZ\Desktop\pion-coffee

# Development server hala çalışıyor
# Tarayıcıda test edin:
# - http://localhost:3000

# Production build test:
npm run build
npm run start
```

---

## 🚀 Vercel'e Deploy

### Adım 1: GitHub'a Push

```bash
cd C:\Users\CANAKBOYRAZ\Desktop\pion-coffee
git init
git add .
git commit -m "Initial commit - Pion Coffee website"
git branch -M main
```

### Adım 2: GitHub Repo Oluştur

1. GitHub.com'a gidin
2. New repository oluşturun
3. İsim: `pion-coffee` (public)
4. Instructions:
   ```bash
   git remote add origin https://github.com/KULLANICI_ADI/pion-coffee.git
   git push -u origin main
   ```

### Adım 3: Vercel Deploy

1. [vercel.com](https://vercel.com) gidin
2. GitHub ile bağlanın
3. `pion-coffee` reposunu import edin
4. Build komutu otomatik: `npm run build`
5. **Deploy** butonuna tıklayın
6. 2 dakika içinde yayında: `https://pion-coffee.vercel.app`

### Adım 4: Domain Bağlama

- Vercel projenizde **Settings → Domains**
- `pioncoffee.com` domain'ini ekleyin
- Domain'inizden DNS ayarlarını Vercel'e yönlendirin
- SSL otomatik kurulur

---

## 📊 Google Search Console & My Business

### Google Search Console
1. [search.google.com/search-console](https://search.google.com/search-console)
2. `pioncoffee.com` özelliği ekleyin
3. [`sitemap.xml`](C:/Users/CANAKBOYRAZ/Desktop/pion-coffee/public/sitemap.xml) dosyası (manuel oluşturun)
4. robots.txt doğrulayın

### Google My Business (Yerel SEO için kritik)
1. [business.google.com](https://business.google.com) gidin
2. "Şimdi Başla" → "Kahve Dükkanı"
3. **Adres**: Dumlupınar Mahallesi, Kartepe, Kocaeli
4. **Çalışma Saatleri**: Her gün 07:00–22:00
5. Fotoğraflar ekleyin (en az 3, en fazla 10)
6. Açıklama: "Modern self-servis kahve dükkanı"

---

## 🎯 Başarılı Deploy Sonrası

### Kontrol Listesi:
- [ ] Site açılıyor (`https://pioncoffee.com`)
- [ ] Tüm sayfalar çalışıyor
- [ ] Mobil responsive
- [ ] Form test edildi
- [ ] Google My Business oluşturuldu
- [ ] Analytics kuruluşu (Google Analytics 4)
- [ ] Sitemap Google'a submit edildi

---

## 📝 Sonraki Aşamalar (Faz 2 & 3)

### Faz 2 (6 ay sonra):
- Blog ekle
- Instagram Feed entegrasyonu
- WhatsApp sipariş butonu

### Faz 3 (1 yıl sonra):
- E-ticaret sistemi
- Müşteri hesapları
- Online sipariş ve ödeme

---

**🎉 Hazırlık Tamamlandı!** Deploy zamanı geldi.