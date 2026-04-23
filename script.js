document.addEventListener('alpine:init', () => {
    Alpine.data('shop', () => ({
        page: 'home',
        cartOpen: false,
        cart: [],
        products: [
            { id: 1, name: "Hoodie Shinigami V1", price: 65, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800" },
            { id: 2, name: "Cargo 'Tech-Kyoto'", price: 85, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800" },
            { id: 3, name: "Kimono Black Mesh", price: 120, image: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=800" },
            { id: 4, name: "Tee Oversize 'Akira'", price: 35, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800" }
        ],
        countdown: { d: "00", h: "00", m: "00" },

        init() {
            this.updateCounter();
            setInterval(() => this.updateCounter(), 1000);
            
            // Intersection Observer pour les animations au scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) entry.target.classList.add('aos-animate');
                });
            }, { threshold: 0.2 });

            document.querySelectorAll('.aos-init').forEach(el => observer.observe(el));
        },

        updateCounter() {
            const dropDate = new Date(2026, 11, 25).getTime();
            const now = new Date().getTime();
            const diff = dropDate - now;
            this.countdown.d = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
            this.countdown.h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
            this.countdown.m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        },

        addToCart(product) {
            // Création d'une copie pour éviter les problèmes de référence
            this.cart.push({...product});
            this.cartOpen = true;
        },

        removeFromCart(index) {
            this.cart.splice(index, 1);
        },

        totalPrice() {
            return this.cart.reduce((total, item) => total + item.price, 0);
        }
    }));
});
