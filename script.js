document.addEventListener('alpine:init', () => {
    Alpine.data('shop', () => ({
        page: 'home',
        cartOpen: false,
        notification: '',
        cart: [],
        
        // --- DATE DU DROP ---
        dropDate: new Date(2026, 9, 1, 20, 0, 0).getTime(), 
        countdown: { d: "00", h: "00", m: "00", s: "00" },

        init() {
            this.updateCounter();
            setInterval(() => this.updateCounter(), 1000);
        },

        // Mouvement du curseur Katana
        moveCursor(e) {
            const cursor = document.getElementById('custom-cursor');
            if(cursor) {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            }
        },

        updateCounter() {
            const now = new Date().getTime();
            const diff = this.dropDate - now;
            if (diff > 0) {
                this.countdown.d = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
                this.countdown.h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
                this.countdown.m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
                this.countdown.s = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, '0');
            }
        },

        products: [
            { id: 1, name: "Hoodie Shinigami V1", price: 65, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800" },
            { id: 2, name: "Cargo 'Tech-Kyoto'", price: 85, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800" },
            { id: 3, name: "Kimono Black Mesh", price: 120, image: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=800" },
            { id: 4, name: "Tee Oversize 'Akira'", price: 35, image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800" },
            { id: 5, name: "Veste Sukajan Tiger", price: 145, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800" },
            { id: 6, name: "Cap Kanji Red", price: 30, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800" },
            { id: 7, name: "Chemise Sumi-e", price: 45, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800" },
            { id: 8, name: "Pantalon Dark Zen", price: 70, image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800" }
        ],

        addToCart(product) {
            this.cart.push(product);
        },

        removeFromCart(index) {
            this.cart.splice(index, 1);
        },

        totalPrice() {
            return this.cart.reduce((total, item) => total + item.price, 0);
        }
    }))
});
