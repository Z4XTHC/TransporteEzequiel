class TransporteEzequielApp {
    constructor() {
        this.currentImageIndex = 0;
        this.images = [
            'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg',
            'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg',
            'https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg',
            'https://images.pexels.com/photos/1118449/pexels-photo-1118449.jpeg',
            'https://images.pexels.com/photos/1166461/pexels-photo-1166461.jpeg'
        ];
        this.fontSize = 'text-base';
        this.isDarkMode = false;
        this.isSpeechEnabled = false;
        this.speech = null;
        
        this.init();
    }

    init() {
        this.render();
        this.setupEventListeners();
        this.startCarousel();
        this.setupScrollAnimations();
    }

    render() {
        const app = document.getElementById('app');
        app.innerHTML = `
            ${this.renderNavbar()}
            ${this.renderHeroSection()}
            ${this.renderServicesSection()}
            ${this.renderContactSection()}
            ${this.renderGallerySection()}
            ${this.renderFooter()}
        `;
    }

    renderNavbar() {
        return `
            <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
                <div class="container mx-auto px-4 py-3">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-truck text-2xl text-blue-600"></i>
                            <h1 class="text-xl font-bold text-gray-800">Transporte Ezequiel</h1>
                        </div>
                        
                        <div class="hidden md:flex space-x-6">
                            <a href="#inicio" class="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center">
                                <i class="fas fa-home mr-2"></i>Inicio
                            </a>
                            <a href="#servicios" class="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center">
                                <i class="fas fa-truck mr-2"></i>Servicios
                            </a>
                            <a href="#cotizar" class="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center">
                                <i class="fas fa-calculator mr-2"></i>Cotizar
                            </a>
                            <a href="#galeria" class="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center">
                                <i class="fas fa-images mr-2"></i>Galería
                            </a>
                            <a href="#contacto" class="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center">
                                <i class="fas fa-phone mr-2"></i>Contacto
                            </a>
                        </div>

                        <div class="flex items-center space-x-2">
                            <div class="relative">
                                <button id="accessibility-btn" class="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
                                    <i class="fas fa-universal-access text-gray-700"></i>
                                </button>
                                <div id="accessibility-menu" class="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border hidden z-50">
                                    <div class="p-4 space-y-3">
                                        <div class="flex items-center justify-between">
                                            <span class="text-sm text-gray-700">Tamaño de fuente</span>
                                            <div class="flex space-x-1">
                                                <button id="font-decrease" class="px-2 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300">A-</button>
                                                <button id="font-increase" class="px-2 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300">A+</button>
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-sm text-gray-700">Contraste alto</span>
                                            <button id="contrast-toggle" class="px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300">Alternar</button>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-sm text-gray-700">Lectura por voz</span>
                                            <button id="speech-toggle" class="px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300">Activar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        `;
    }

    renderHeroSection() {
        return `
            <section id="inicio" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 pt-20">
                <div class="container mx-auto px-4">
                    <div class="text-center mb-12">
                        <h1 class="text-5xl md:text-6xl font-bold text-gray-800 mb-6 fade-in">
                            Transporte <span class="text-blue-600">Ezequiel</span>
                        </h1>
                        <p class="text-xl text-gray-600 mb-8 fade-in">
                            Fletes seguros y confiables desde 2017 en Barranqueras, Chaco
                        </p>
                    </div>
                    
                    <div class="flex justify-center items-center space-x-8 mb-12">
                        <div id="hero-animation" class="relative">
                            <!-- Camioneta SVG -->
                            <svg id="truck" class="hero-animation w-40 h-24" viewBox="0 0 200 100" fill="none">
                                <!-- Cabina -->
                                <rect x="20" y="40" width="50" height="30" fill="#2563eb" rx="5"/>
                                <!-- Caja de carga -->
                                <rect x="70" y="35" width="90" height="35" fill="#60a5fa" rx="3"/>
                                <!-- Líneas de la caja de carga -->
                                <line x1="75" y1="40" x2="155" y2="40" stroke="#3b82f6" stroke-width="1"/>
                                <line x1="75" y1="50" x2="155" y2="50" stroke="#3b82f6" stroke-width="1"/>
                                <line x1="75" y1="60" x2="155" y2="60" stroke="#3b82f6" stroke-width="1"/>
                                <!-- Ruedas -->
                                <circle cx="35" cy="75" r="8" fill="#374151"/>
                                <circle cx="140" cy="75" r="8" fill="#374151"/>
                                <!-- Ventanas -->
                                <rect x="25" y="45" width="15" height="12" fill="#e5e7eb" rx="2"/>
                                <rect x="45" y="45" width="15" height="12" fill="#e5e7eb" rx="2"/>
                            </svg>
                            
                            <!-- Caja SVG -->
                            <svg id="box" class="hero-animation w-12 h-12 absolute -right-16 top-4" viewBox="0 0 60 60" fill="none">
                                <rect x="5" y="15" width="50" height="35" fill="#f59e0b" rx="3"/>
                                <rect x="8" y="18" width="44" height="3" fill="#d97706"/>
                                <rect x="8" y="25" width="44" height="3" fill="#d97706"/>
                                <rect x="8" y="32" width="44" height="3" fill="#d97706"/>
                                <rect x="8" y="39" width="44" height="3" fill="#d97706"/>
                                <!-- Texto "FLETE" en la caja -->
                                <text x="30" y="35" text-anchor="middle" fill="#92400e" font-size="8" font-weight="bold">FLETE</text>
                            </svg>
                        </div>
                    </div>
                    
                    <div class="text-center fade-in">
                        <button onclick="document.getElementById('cotizar').scrollIntoView({behavior: 'smooth'})" 
                                class="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                            Solicitar Cotización
                        </button>
                    </div>
                </div>
            </section>
        `;
    }

    renderServicesSection() {
        return `
            <section id="servicios" class="py-20 bg-white">
                <div class="container mx-auto px-4">
                    <div class="text-center mb-16 fade-in">
                        <h2 class="text-4xl font-bold text-gray-800 mb-4">
                            <i class="fas fa-truck-moving text-blue-600 mr-3"></i>
                            Nuestros Servicios
                        </h2>
                        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
                            Ofrecemos servicios de transporte confiables y seguros para todas sus necesidades
                        </p>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <div class="text-center p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 fade-in">
                            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-200 transition-colors duration-300">
                                <i class="fas fa-home text-2xl text-blue-600"></i>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3">Mudanzas</h3>
                            <p class="text-gray-600 text-sm">
                                Mudanzas completas de hogares y oficinas con el máximo cuidado de sus pertenencias
                            </p>
                        </div>
                        
                        <div class="text-center p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 fade-in">
                            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-green-200 transition-colors duration-300">
                                <i class="fas fa-boxes text-2xl text-green-600"></i>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3">Mercadería</h3>
                            <p class="text-gray-600 text-sm">
                                Transporte seguro de mercadería y productos comerciales con seguimiento completo
                            </p>
                        </div>
                        
                        <div class="text-center p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 fade-in">
                            <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-orange-200 transition-colors duration-300">
                                <i class="fas fa-tv text-2xl text-orange-600"></i>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3">Electrodomésticos</h3>
                            <p class="text-gray-600 text-sm">
                                Manejo especializado de electrodomésticos y equipos electrónicos delicados
                            </p>
                        </div>
                        
                        <div class="text-center p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 fade-in">
                            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-red-200 transition-colors duration-300">
                                <i class="fas fa-hammer text-2xl text-red-600"></i>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3">Materiales</h3>
                            <p class="text-gray-600 text-sm">
                                Transporte de materiales de construcción y herramientas pesadas
                            </p>
                        </div>
                    </div>
                    
                    <div class="text-center mt-12 fade-in">
                        <div class="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
                            <h3 class="text-2xl font-bold text-gray-800 mb-4">
                                <i class="fas fa-shield-alt text-blue-600 mr-2"></i>
                                ¿Por qué elegirnos?
                            </h3>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                <div class="flex items-center space-x-3">
                                    <i class="fas fa-clock text-blue-600 text-xl"></i>
                                    <span class="text-gray-700">Puntualidad garantizada</span>
                                </div>
                                <div class="flex items-center space-x-3">
                                    <i class="fas fa-user-shield text-blue-600 text-xl"></i>
                                    <span class="text-gray-700">Personal capacitado</span>
                                </div>
                                <div class="flex items-center space-x-3">
                                    <i class="fas fa-dollar-sign text-blue-600 text-xl"></i>
                                    <span class="text-gray-700">Precios competitivos</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderContactSection() {
        return `
            <section id="cotizar" class="py-20 bg-white">
                <div class="container mx-auto px-4">
                    <div class="max-w-4xl mx-auto">
                        <div class="text-center mb-12 fade-in">
                            <h2 class="text-4xl font-bold text-gray-800 mb-4">
                                <i class="fas fa-file-invoice-dollar text-blue-600 mr-3"></i>
                                Solicitar Presupuesto
                            </h2>
                            <p class="text-gray-600 text-lg">
                                <i class="fab fa-whatsapp text-green-500 mr-2"></i>
                                Complete el formulario y le responderemos por WhatsApp
                            </p>
                        </div>
                        
                        <div class="bg-gray-50 rounded-2xl p-8 shadow-xl fade-in">
                            <form id="quote-form" class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="md:col-span-2">
                                    <label class="block text-sm font-medium text-gray-700 mb-2">
                                        <i class="fas fa-user mr-2 text-blue-600"></i>
                                        Nombre y Apellido *
                                    </label>
                                    <input type="text" id="fullName" required 
                                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                                </div>
                                
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">
                                        <i class="fas fa-phone mr-2 text-blue-600"></i>
                                        Teléfono *
                                    </label>
                                    <input type="tel" id="phone" required 
                                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                                </div>
                                
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">
                                        <i class="fas fa-truck mr-2 text-blue-600"></i>
                                        Tipo de Flete *
                                    </label>
                                    <select id="fleteType" required 
                                            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                                        <option value="">Seleccione...</option>
                                        <option value="Mudanza">Mudanza</option>
                                        <option value="Mercadería">Mercadería</option>
                                        <option value="Electrodomésticos">Electrodomésticos</option>
                                        <option value="Materiales de construcción">Materiales de construcción</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">
                                        <i class="fas fa-map-marker-alt mr-2 text-green-600"></i>
                                        Dirección de Origen *
                                    </label>
                                    <input type="text" id="originAddress" required 
                                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                                </div>
                                
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">
                                        <i class="fas fa-flag-checkered mr-2 text-red-600"></i>
                                        Dirección de Destino *
                                    </label>
                                    <input type="text" id="destinationAddress" required 
                                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                                </div>
                                
                                <div class="md:col-span-2">
                                    <label class="block text-sm font-medium text-gray-700 mb-2">
                                        <i class="fas fa-clipboard-list mr-2 text-blue-600"></i>
                                        Descripción del Contenido *
                                    </label>
                                    <textarea id="description" required rows="4" 
                                              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                              placeholder="Describa qué necesita transportar..."></textarea>
                                </div>
                                
                                <div class="md:col-span-2 text-center">
                                    <button type="submit" 
                                            class="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                                        <i class="fab fa-whatsapp mr-2"></i>
                                        Enviar por WhatsApp
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderGallerySection() {
        return `
            <section id="galeria" class="py-20 bg-gray-50">
                <div class="container mx-auto px-4">
                    <div class="text-center mb-12 fade-in">
                        <h2 class="text-4xl font-bold text-gray-800 mb-4">
                            <i class="fas fa-camera text-blue-600 mr-3"></i>
                            Nuestros Trabajos
                        </h2>
                        <p class="text-gray-600 text-lg">
                            <i class="fas fa-eye mr-2 text-gray-500"></i>
                            Algunos de los fletes que hemos realizado
                        </p>
                    </div>
                    
                    <div class="max-w-4xl mx-auto fade-in">
                        <div class="carousel-container relative rounded-2xl overflow-hidden shadow-xl">
                            <div id="carousel-track" class="carousel-track flex transition-transform duration-500 ease-in-out">
                                ${this.images.map((img, index) => `
                                    <div class="w-full flex-shrink-0">
                                        <img src="${img}" alt="Trabajo realizado ${index + 1}" 
                                             class="w-full h-96 object-cover">
                                    </div>
                                `).join('')}
                            </div>
                            
                            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                ${this.images.map((_, index) => `
                                    <div class="carousel-dot w-3 h-3 rounded-full bg-white/50 cursor-pointer transition-all duration-300 ${index === 0 ? 'bg-white' : ''}" 
                                         data-index="${index}"></div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderFooter() {
        return `
            <footer id="contacto" class="bg-gray-800 text-white py-12">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <div class="flex items-center space-x-3 mb-4">
                                <i class="fas fa-truck text-2xl text-blue-400"></i>
                                <h3 class="text-xl font-bold">Transporte Ezequiel</h3>
                            </div>
                            <p class="text-gray-400">
                                <i class="fas fa-calendar-alt mr-2"></i>
                                Fletes seguros y confiables desde 2017
                            </p>
                        </div>
                        
                        <div>
                            <h4 class="font-semibold mb-4">
                                <i class="fas fa-address-book mr-2 text-blue-400"></i>
                                Contacto
                            </h4>
                            <div class="space-y-2 text-gray-400">
                                <p><i class="fas fa-map-marker-alt mr-2"></i>Barranqueras, Chaco, Argentina</p>
                                <p><i class="fas fa-phone mr-2"></i>+54 362 530-3923</p>
                                <p><i class="fab fa-whatsapp mr-2 text-green-400"></i>WhatsApp disponible</p>
                            </div>
                        </div>
                        
                        <div>
                            <h4 class="font-semibold mb-4">
                                <i class="fas fa-cogs mr-2 text-blue-400"></i>
                                Servicios
                            </h4>
                            <div class="space-y-2 text-gray-400">
                                <p><i class="fas fa-home mr-2"></i>Mudanzas</p>
                                <p><i class="fas fa-boxes mr-2"></i>Transporte de mercadería</p>
                                <p><i class="fas fa-tv mr-2"></i>Electrodomésticos</p>
                                <p><i class="fas fa-hammer mr-2"></i>Materiales de construcción</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="border-t border-gray-700 pt-8 text-center text-gray-400">
                        <p><i class="fas fa-copyright mr-2"></i>Todos los derechos reservados. Diseñado por 
                            <a href="https://mangosoft.com.ar" target="_blank" 
                               class="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                               <i class="fas fa-code mr-1"></i>
                               MangoSoft
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        `;
    }

    setupEventListeners() {
        // Formulario de cotización
        const form = document.getElementById('quote-form');
        if (form) {
            form.addEventListener('submit', this.handleFormSubmit.bind(this));
        }

        // Accesibilidad
        this.setupAccessibilityControls();

        // Carrusel
        const dots = document.querySelectorAll('.carousel-dot');
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                this.goToSlide(index);
            });
        });

        // Animación del hero en scroll
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    setupAccessibilityControls() {
        const accessibilityBtn = document.getElementById('accessibility-btn');
        const accessibilityMenu = document.getElementById('accessibility-menu');
        const fontIncrease = document.getElementById('font-increase');
        const fontDecrease = document.getElementById('font-decrease');
        const contrastToggle = document.getElementById('contrast-toggle');
        const speechToggle = document.getElementById('speech-toggle');

        accessibilityBtn.addEventListener('click', () => {
            accessibilityMenu.classList.toggle('hidden');
        });

        fontIncrease.addEventListener('click', () => this.changeFontSize('increase'));
        fontDecrease.addEventListener('click', () => this.changeFontSize('decrease'));
        contrastToggle.addEventListener('click', () => this.toggleContrast());
        speechToggle.addEventListener('click', () => this.toggleSpeech());

        // Cerrar menú al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!accessibilityBtn.contains(e.target) && !accessibilityMenu.contains(e.target)) {
                accessibilityMenu.classList.add('hidden');
            }
        });
    }

    changeFontSize(action) {
        const body = document.body;
        const sizes = ['text-sm', 'text-base', 'text-lg', 'text-xl'];
        const currentIndex = sizes.indexOf(this.fontSize);
        
        if (action === 'increase' && currentIndex < sizes.length - 1) {
            body.classList.remove(this.fontSize);
            this.fontSize = sizes[currentIndex + 1];
            body.classList.add(this.fontSize);
        } else if (action === 'decrease' && currentIndex > 0) {
            body.classList.remove(this.fontSize);
            this.fontSize = sizes[currentIndex - 1];
            body.classList.add(this.fontSize);
        }
    }

    toggleContrast() {
        const body = document.body;
        this.isDarkMode = !this.isDarkMode;
        
        if (this.isDarkMode) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }

    toggleSpeech() {
        this.isSpeechEnabled = !this.isSpeechEnabled;
        const button = document.getElementById('speech-toggle');
        
        if (this.isSpeechEnabled) {
            button.textContent = 'Desactivar';
            button.classList.add('bg-blue-600', 'text-white');
            this.enableSpeech();
        } else {
            button.textContent = 'Activar';
            button.classList.remove('bg-blue-600', 'text-white');
            this.disableSpeech();
        }
    }

    enableSpeech() {
        // Agregar listeners a las secciones
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.addEventListener('mouseenter', this.speakSectionContent.bind(this));
        });
    }

    disableSpeech() {
        // Detener cualquier lectura en curso
        if (this.speech) {
            speechSynthesis.cancel();
        }
    }

    speakSectionContent(e) {
        if (!this.isSpeechEnabled) return;
        
        if (this.speech) {
            speechSynthesis.cancel();
        }
        
        const section = e.currentTarget;
        const text = this.extractTextContent(section);
        
        if (text && 'speechSynthesis' in window) {
            this.speech = new SpeechSynthesisUtterance(text);
            this.speech.lang = 'es-ES';
            this.speech.rate = 0.9;
            speechSynthesis.speak(this.speech);
        }
    }

    extractTextContent(element) {
        // Extraer texto relevante de la sección
        const headings = element.querySelectorAll('h1, h2, h3');
        const paragraphs = element.querySelectorAll('p');
        
        let text = '';
        
        headings.forEach(h => {
            text += h.textContent + '. ';
        });
        
        paragraphs.forEach(p => {
            text += p.textContent + '. ';
        });
        
        return text.substring(0, 200); // Limitar longitud
    }

    handleFormSubmit(e) {
        e.preventDefault();
        
        const formData = {
            fullName: document.getElementById('fullName').value,
            phone: document.getElementById('phone').value,
            fleteType: document.getElementById('fleteType').value,
            originAddress: document.getElementById('originAddress').value,
            destinationAddress: document.getElementById('destinationAddress').value,
            description: document.getElementById('description').value
        };

        const message = `¡Hola! Me gustaría solicitar un presupuesto para un flete.

*Datos del cliente:*
- Nombre: ${formData.fullName}
- Teléfono: ${formData.phone}

*Detalles del flete:*
- Tipo de flete: ${formData.fleteType}
- Origen: ${formData.originAddress}
- Destino: ${formData.destinationAddress}
- Descripción: ${formData.description}

¡Espero su respuesta! Gracias.`;

        const whatsappUrl = `https://wa.me/5493625303923?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }

    handleScroll() {
        const scrolled = window.pageYOffset;
        const truck = document.getElementById('truck');
        const box = document.getElementById('box');
        
        if (truck && box && scrolled > 50) {
            truck.classList.add('truck-move');
            box.classList.add('box-load');
            
            // Agregar un pequeño delay para que la animación se vea más natural
            setTimeout(() => {
                if (scrolled > 50) {
                    box.style.transition = 'all 1.2s ease-in-out';
                }
            }, 300);
        } else if (truck && box) {
            truck.classList.remove('truck-move');
            box.classList.remove('box-load');
            box.style.transition = 'all 0.6s ease-in-out';
        }
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    }

    startCarousel() {
        setInterval(() => {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
            this.updateCarousel();
        }, 4000);
    }

    goToSlide(index) {
        this.currentImageIndex = index;
        this.updateCarousel();
    }

    updateCarousel() {
        const track = document.getElementById('carousel-track');
        const dots = document.querySelectorAll('.carousel-dot');
        
        if (track) {
            track.style.transform = `translateX(-${this.currentImageIndex * 100}%)`;
        }
        
        dots.forEach((dot, index) => {
            if (index === this.currentImageIndex) {
                dot.classList.add('bg-white');
                dot.classList.remove('bg-white/50');
            } else {
                dot.classList.remove('bg-white');
                dot.classList.add('bg-white/50');
            }
        });
    }
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    new TransporteEzequielApp();
});