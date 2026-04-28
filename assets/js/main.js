document.addEventListener('alpine:init', () => {
    Alpine.data('shop', () => ({
        page: 'home',
        filter: 'all',
        cartOpen: false,
        showPopup: false,
        cart: [],
        sizes: ['S', 'M', 'L', 'XL'],
        shipping: 5.90,
        orderStep: 1,
        formData: { prenom: '', nom: '', adresse: '', ville: '', cp: '' },

        universes: {
            all: { bg: 'bg-white', text: 'text-black', accent: 'border-red-600', title: 'COLLECTIONS' },
            tokyo: { bg: 'bg-indigo-950', text: 'text-fuchsia-500', accent: 'border-fuchsia-500', title: 'TOKYO' },
            cyber: { bg: 'bg-zinc-900', text: 'text-yellow-400', accent: 'border-yellow-400', title: 'CYBER' },
            zen: { bg: 'bg-stone-100', text: 'text-emerald-900', accent: 'border-emerald-800', title: 'ZEN' }
        },

        products: [
            {
                id: 1,
                name: "Hoodie 'Neo-Tokyo'",
                price: 85,
                category: 'tokyo',
                images: { 'Noir': 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600' },
                colors: [{name: 'Noir', hex: '#000'}],
                selectedSize: 'M',
                selectedColor: 'Noir'
            }
        ],

        addToCart(p) {
            this.cart.push({...p, cartId: Date.now(), finalImage: p.images[p.selectedColor]});
            this.cartOpen = true;
        },

        removeFromCart(i) { this.cart.splice(i, 1); },
        
        totalPrice() { return this.cart.reduce((s, item) => s + item.price, 0); },
        
        toggleCart(s) { this.cartOpen = s; },

        goToCheckout() {
            this.page = 'checkout';
            this.cartOpen = false;
        },

        processOrder() {
            this.orderStep = 2;
            setTimeout(() => { this.orderStep = 3; this.cart = []; }, 2000);
        },

        submitDropForm() { this.showPopup = true; }
    }));
});
