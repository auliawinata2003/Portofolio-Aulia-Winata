document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. MOBILE HAMBURGER MENU ANIMATION
    // ==========================================
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    // Tutup menu saat salah satu link navigasi diklik
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });


    // ==========================================
    // 2. ACTIVE NAVBAR LINK ON SCROLL
    // ==========================================
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Toleransi scroll (150px)
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach(item => {
            item.classList.remove("active");
            if (item.getAttribute("href").includes(current)) {
                item.classList.add("active");
            }
        });
    });


    // ==========================================
    // 3. SCROLL REVEAL ANIMATION
    // ==========================================
    const revealElements = document.querySelectorAll(".section-reveal");

    const revealOnScroll = () => {
        const triggerBottom = (window.innerHeight / 5) * 4;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add("active");
            }
        });
    };

    // Jalankan saat pertama kali dibuka dan saat di-scroll
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); 


    // ==========================================
    // 4. CONTACT FORM VALIDATION
    // ==========================================
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMsg = document.getElementById("successMsg");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Mencegah form submit/refresh default
        
        let isValid = true;

        // Validasi Nama
        if (nameInput.value.trim() === "") {
            nameError.style.display = "block";
            isValid = false;
        } else {
            nameError.style.display = "none";
        }

        // Validasi Email (Regex sederhana)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.style.display = "block";
            isValid = false;
        } else {
            emailError.style.display = "none";
        }

        // Validasi Pesan
        if (messageInput.value.trim() === "") {
            messageError.style.display = "block";
            isValid = false;
        } else {
            messageError.style.display = "none";
        }

        // Jika semua valid, tampilkan pesan sukses
        if (isValid) {
            successMsg.style.display = "block";
            form.reset(); // Reset isi form

            // Sembunyikan pesan sukses setelah 4 detik
            setTimeout(() => {
                successMsg.style.display = "none";
            }, 4000);
        }
    });
});