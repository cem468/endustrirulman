// WhatsApp Button Click
function openWhatsApp() {
    const phoneNumber = '905323431207';
    const message = 'Merhaba! Satılık Alan Adı için teklif vermek istiyorum.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Form Submission
function submitForm(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const company = document.getElementById('company').value.trim();
    const bid = document.getElementById('bid').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate minimum bid
    if (parseInt(bid) < 150000) {
        alert('Lütfen minimum 150.000 ₺ veya daha fazla bir teklif verin.');
        return;
    }

    // Create WhatsApp message
    const whatsappMessage = createWhatsAppMessage(name, email, phone, company, bid, message);

    // Send to WhatsApp
    const phoneNumber = '905323431207';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Show confirmation
    showConfirmation();

    // Open WhatsApp after a brief delay
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
    }, 500);

    // Reset form
    document.getElementById('auctionForm').reset();
}

// Create formatted WhatsApp message
function createWhatsAppMessage(name, email, phone, company, bid, message) {
    let whatsappMsg = `🔔 *SATILIK ALAN ADI - AÇIK ARTTIRMA TEKLİFİ*\n\n`;
    whatsappMsg += `👤 *Ad-Soyad:* ${name}\n`;
    whatsappMsg += `📧 *E-posta:* ${email}\n`;
    whatsappMsg += `📱 *Telefon:* ${phone}\n`;

    if (company) {
        whatsappMsg += `🏢 *Şirket:* ${company}\n`;
    }

    whatsappMsg += `\n💰 *TEKLİF FİYATI: ${formatCurrency(bid)} ₺*\n\n`;

    if (message) {
        whatsappMsg += `💬 *Mesaj:*\n${message}\n\n`;
    }

    whatsappMsg += `⏰ *Tarih:* ${getCurrentDate()}\n`;
    whatsappMsg += `🌐 *Kaynak:* Satılık Alan Adı Web Sitesi`;

    return whatsappMsg;
}

// Format currency
function formatCurrency(amount) {
    return parseInt(amount).toLocaleString('tr-TR');
}

// Get current date
function getCurrentDate() {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };

    return new Date().toLocaleDateString('tr-TR', options);
}

// Show confirmation message
function showConfirmation() {
    const confirmation = document.createElement('div');
    confirmation.className = 'confirmation-message';
    confirmation.innerHTML = `
        <div class="confirmation-content">
            <div class="confirmation-icon">✅</div>
            <h3>Teklif Alındı!</h3>
            <p>Teklifiniz WhatsApp'a gönderilmek üzere hazırlanmıştır.</p>
            <p class="small-text">Lütfen açılan penceredeki "Gönder" butonuna tıklayın.</p>
        </div>
    `;

    document.body.appendChild(confirmation);

    // Auto remove after 4 seconds
    setTimeout(() => {
        confirmation.remove();
    }, 4000);
}

// Add confirmation message styles dynamically
const style = document.createElement('style');
style.textContent = `
    .confirmation-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #27ae60, #229954);
        color: white;
        padding: 2rem;
        border-radius: 15px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        animation: slideIn 0.4s ease-out;
        text-align: center;
        max-width: 400px;
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translate(-50%, -60%);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }

    .confirmation-content h3 {
        color: white;
        margin: 1rem 0 0.5rem 0;
        font-size: 1.5rem;
    }

    .confirmation-content p {
        margin: 0.5rem 0;
        color: rgba(255, 255, 255, 0.9);
    }

    .small-text {
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.8);
        font-style: italic;
    }

    .confirmation-icon {
        font-size: 3rem;
        margin-bottom: 0.5rem;
    }

    /* Smooth scroll behavior */
    html {
        scroll-behavior: smooth;
    }

    /* Input validation styles */
    .form-group input:invalid:not(:placeholder-shown),
    .form-group textarea:invalid:not(:placeholder-shown) {
        border-color: #e74c3c;
        background-color: rgba(231, 76, 60, 0.05);
    }

    /* Responsive confirmation */
    @media (max-width: 768px) {
        .confirmation-message {
            max-width: 90%;
            margin: 0 auto;
        }
    }
`;
document.head.appendChild(style);

// Add smooth scroll effect for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Input number formatting for bid
const bidInput = document.getElementById('bid');
if (bidInput) {
    bidInput.addEventListener('change', function () {
        if (this.value < 150000) {
            this.value = 150000;
        }
    });

    bidInput.addEventListener('blur', function () {
        if (this.value) {
            // Format display but keep raw value
            const formatted = formatCurrency(this.value);
        }
    });
}

// Phone number formatting
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function () {
        let value = this.value.replace(/\D/g, '');
        if (value.startsWith('0')) {
            value = value.substring(1);
        }
        if (value.length > 10) {
            value = value.substring(0, 10);
        }

        if (value.length > 0) {
            if (value.length <= 3) {
                this.value = value;
            } else if (value.length <= 6) {
                this.value = value.substring(0, 3) + ' ' + value.substring(3);
            } else if (value.length <= 8) {
                this.value = value.substring(0, 3) + ' ' + value.substring(3, 6) + ' ' + value.substring(6);
            } else {
                this.value = value.substring(0, 3) + ' ' + value.substring(3, 6) + ' ' + value.substring(6, 8) + ' ' + value.substring(8);
            }
        }
    });
}

// Add keyboard shortcut for quick offer
document.addEventListener('keydown', function (e) {
    // Alt + W for WhatsApp
    if (e.altKey && e.key.toLowerCase() === 'w') {
        openWhatsApp();
    }
});

// Page load animation
window.addEventListener('load', function () {
    document.body.style.opacity = '1';
    document.body.style.animation = 'fadeIn 0.5s ease-in';
});

// Add fade in animation
const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
    body {
        opacity: 0;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(fadeInStyle);

// Scroll animation for feature cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .info-item').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

console.log('ENDUSTRİ RULMAN - Satlık Alan Adı Web Sitesi Yüklendi ✅');
