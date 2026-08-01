/* ==========================================================================
   ENDUSTRİ RULMAN - alan adı açık arttırma sayfası
   Global fonksiyonlar (submitForm, openWhatsApp) HTML'den çağrılır, korunmalı.
   ========================================================================== */

const WHATSAPP_NUMBER = '905323431207';
const MIN_BID = 150000;

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* --------------------------------------------------------------- WhatsApp */

function openWhatsApp() {
    const message = 'Merhaba! Satılık Alan Adı için teklif vermek istiyorum.';
    window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
        '_blank',
        'noopener'
    );
}

/* ------------------------------------------------------------- form akışı */

function submitForm(event) {
    event.preventDefault();

    const form = document.getElementById('auctionForm');
    const fields = {
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        phone: document.getElementById('phone'),
        company: document.getElementById('company'),
        bid: document.getElementById('bid'),
        message: document.getElementById('message')
    };

    clearErrors(form);

    const errors = validate(fields);
    if (errors.length > 0) {
        errors.forEach(({ field, text }) => showError(field, text));
        errors[0].field.focus();
        return;
    }

    const whatsappMessage = createWhatsAppMessage(
        fields.name.value.trim(),
        fields.email.value.trim(),
        fields.phone.value.trim(),
        fields.company.value.trim(),
        fields.bid.value.trim(),
        fields.message.value.trim()
    );

    showConfirmation(form);

    window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`,
        '_blank',
        'noopener'
    );

    form.reset();
}

function validate(fields) {
    const errors = [];

    if (!fields.name.value.trim()) {
        errors.push({ field: fields.name, text: 'Adınızı girin.' });
    }

    const email = fields.email.value.trim();
    if (!email) {
        errors.push({ field: fields.email, text: 'E-posta adresinizi girin.' });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        errors.push({ field: fields.email, text: 'Geçerli bir e-posta adresi girin.' });
    }

    const phoneDigits = fields.phone.value.replace(/\D/g, '');
    if (!phoneDigits) {
        errors.push({ field: fields.phone, text: 'Telefon numaranızı girin.' });
    } else if (phoneDigits.length !== 10) {
        errors.push({ field: fields.phone, text: 'Telefon 10 haneli olmalı. Örnek: 532 343 12 07' });
    }

    const bid = parseInt(fields.bid.value, 10);
    if (!fields.bid.value.trim() || Number.isNaN(bid)) {
        errors.push({ field: fields.bid, text: 'Teklif tutarını girin.' });
    } else if (bid < MIN_BID) {
        errors.push({
            field: fields.bid,
            text: `Teklif en az ${formatCurrency(MIN_BID)} ₺ olmalı.`
        });
    }

    return errors;
}

function showError(field, text) {
    const group = field.closest('.form-group');
    if (!group) return;

    group.classList.add('has-error');
    field.setAttribute('aria-invalid', 'true');

    const note = document.createElement('span');
    note.className = 'field-error';
    note.setAttribute('role', 'alert');
    note.textContent = text;
    group.appendChild(note);
}

function clearErrors(form) {
    form.querySelectorAll('.field-error').forEach((el) => el.remove());
    form.querySelectorAll('.has-error').forEach((el) => el.classList.remove('has-error'));
    form.querySelectorAll('[aria-invalid]').forEach((el) => el.removeAttribute('aria-invalid'));
}

function createWhatsAppMessage(name, email, phone, company, bid, message) {
    let text = '*SATILIK ALAN ADI - AÇIK ARTTIRMA TEKLİFİ*\n\n';
    text += `*Ad-Soyad:* ${name}\n`;
    text += `*E-posta:* ${email}\n`;
    text += `*Telefon:* ${phone}\n`;

    if (company) {
        text += `*Şirket:* ${company}\n`;
    }

    text += `\n*TEKLİF FİYATI: ${formatCurrency(bid)} ₺*\n\n`;

    if (message) {
        text += `*Mesaj:*\n${message}\n\n`;
    }

    text += `*Tarih:* ${getCurrentDate()}\n`;
    text += '*Kaynak:* endustrirulman.com';

    return text;
}

function formatCurrency(amount) {
    return parseInt(amount, 10).toLocaleString('tr-TR');
}

function getCurrentDate() {
    return new Date().toLocaleDateString('tr-TR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

/* Onay mesajı: sayfa dilinde, marka aksanında, form içinde (bağlamsal) */
function showConfirmation(form) {
    form.querySelectorAll('.form-sent').forEach((el) => el.remove());

    const box = document.createElement('p');
    box.className = 'form-sent';
    box.setAttribute('role', 'status');
    box.textContent = 'Teklifiniz hazırlandı. Açılan WhatsApp penceresinden gönderin.';
    form.appendChild(box);

    window.setTimeout(() => box.remove(), 8000);
}

/* ------------------------------------------------- telefon biçimlendirme */

const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function () {
        let value = this.value.replace(/\D/g, '');

        if (value.startsWith('0')) {
            value = value.substring(1);
        }
        value = value.substring(0, 10);

        const parts = [];
        if (value.length > 0) parts.push(value.substring(0, 3));
        if (value.length > 3) parts.push(value.substring(3, 6));
        if (value.length > 6) parts.push(value.substring(6, 8));
        if (value.length > 8) parts.push(value.substring(8, 10));

        this.value = parts.join(' ');
    });
}

/* ------------------------------------------------------- kaydırma açılışı */

if (!prefersReducedMotion) {
    const revealTargets = document.querySelectorAll(
        '.section-title, .cell, .spec, .offer-text, .offer-sub, ' +
        '.auction-form, .form-brief, .editorial-body, .contact-shell > *'
    );

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, i) => {
                if (!entry.isIntersecting) return;
                // Aynı anda giren öğeler arasında küçük gecikme: sıralı okuma hissi
                entry.target.style.transitionDelay = `${Math.min(i, 5) * 60}ms`;
                entry.target.classList.add('is-in');
                revealObserver.unobserve(entry.target);
            });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealTargets.forEach((el) => revealObserver.observe(el));
} else {
    document.querySelectorAll(
        '.section-title, .cell, .spec, .offer-text, .offer-sub, ' +
        '.auction-form, .form-brief, .editorial-body, .contact-shell > *'
    ).forEach((el) => el.classList.add('is-in'));
}

/* --------------------------------------- navbar: kaydırıldığında katılaşır */

const navbar = document.getElementById('navbar');
if (navbar) {
    // Sentinel + IntersectionObserver; scroll dinleyicisi kullanılmaz
    const sentinel = document.createElement('div');
    sentinel.setAttribute('aria-hidden', 'true');
    sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:1px;';
    document.body.prepend(sentinel);

    new IntersectionObserver(
        ([entry]) => navbar.classList.toggle('is-stuck', !entry.isIntersecting),
        { threshold: 0 }
    ).observe(sentinel);
}

/* ------------------------------------------------- fiyat sayaç animasyonu */
/* Gerekçe: teklifin alt sınırı sayfanın en önemli sayısı; dikkati oraya çeker */

function animateCount(el) {
    const target = parseInt(el.dataset.countTo, 10);
    if (Number.isNaN(target)) return;

    const duration = 1100;
    const start = performance.now();

    function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        // easeOutExpo
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        el.textContent = Math.round(target * eased).toLocaleString('tr-TR');
        if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
}

const counters = document.querySelectorAll('[data-count-to]');
if (counters.length > 0) {
    if (prefersReducedMotion) {
        counters.forEach((el) => {
            el.textContent = parseInt(el.dataset.countTo, 10).toLocaleString('tr-TR');
        });
    } else {
        const countObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    animateCount(entry.target);
                    countObserver.unobserve(entry.target);
                });
            },
            { threshold: 0.5 }
        );

        counters.forEach((el) => countObserver.observe(el));
    }
}

/* ------------------------------------------------ yumuşak bölüm geçişleri */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const id = this.getAttribute('href');
        if (id === '#' || id.length < 2) return;

        const target = document.querySelector(id);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
            block: 'start'
        });
    });
});
