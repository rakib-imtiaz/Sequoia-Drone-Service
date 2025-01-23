class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                }

                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                #navbar {
                    backdrop-filter: blur(5px);
                    -webkit-backdrop-filter: blur(5px);
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    width: 100%;
                    z-index: 50;
                    transition: all 0.3s;
                    background: transparent;
                }

                .container {
                    max-width: 80rem;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                    width: 100%;
                }

                .nav-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 4rem;
                    position: relative;
                }

                .logo {
                    color: white;
                    text-decoration: none;
                    font-size: 1.5rem;
                    font-weight: bold;
                    z-index: 60;
                }

                .nav-links {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                }

                .nav-link {
                    position: relative;
                    color: white;
                    text-decoration: none;
                    transition: all 0.3s;
                    font-size: 1rem;
                    padding: 0.5rem;
                    white-space: nowrap;
                }

                .nav-link:hover {
                    color: #4ade80;
                }

                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: 0;
                    left: 50%;
                    background-color: #4ade80;
                    transition: all 0.3s ease;
                    transform: translateX(-50%);
                }

                .nav-link:hover::after {
                    width: calc(100% - 1rem);
                }

                .dropdown {
                    position: relative;
                    display: inline-block;
                }

                .dropdown button {
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-size: inherit;
                    padding: 0.5rem;
                    color: white;
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    white-space: nowrap;
                }

                .dropdown button svg {
                    width: 1rem;
                    height: 1rem;
                    transition: transform 0.3s ease;
                    flex-shrink: 0;
                }

                .dropdown:hover button svg {
                    transform: rotate(180deg);
                }

                .dropdown-content {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    min-width: 200px;
                    background: rgba(17, 24, 39, 0.95);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 0.5rem;
                    padding: 0.5rem 0;
                    opacity: 0;
                    transform: translateY(-10px);
                    transition: opacity 0.3s ease, transform 0.3s ease;
                    z-index: 50;
                }

                .dropdown:hover .dropdown-content,
                .dropdown-content:hover {
                    display: block;
                    opacity: 1;
                    transform: translateY(0);
                }

                .dropdown-content a {
                    display: block;
                    padding: 0.75rem 1.5rem;
                    color: white;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }

                .dropdown-content a:hover {
                    background: rgba(74, 222, 128, 0.1);
                    padding-left: 2rem;
                }

                .dropdown-button {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .dropdown-button i {
                    transition: transform 0.2s ease;
                }

                .dropdown:hover .dropdown-button i {
                    transform: rotate(180deg);
                }

                .contact-button {
                    background-color: #4ade80;
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border-radius: 9999px;
                    text-decoration: none;
                    transition: all 0.3s;
                    font-weight: 500;
                    white-space: nowrap;
                }

                .contact-button:hover {
                    background-color: #22c55e;
                    transform: translateY(-2px);
                }

                .mobile-menu-button {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    padding: 0.5rem;
                    cursor: pointer;
                    z-index: 60;
                }

                .mobile-menu-button svg {
                    width: 2rem;
                    height: 2rem;
                    transition: transform 0.3s ease;
                }

                .mobile-menu-button.active svg {
                    transform: rotate(90deg);
                }

                .mobile-overlay {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    z-index: 40;
                }

                .mobile-overlay.active {
                    opacity: 1;
                }

                @media (max-width: 768px) {
                    .mobile-menu-button {
                        display: block;
                    }

                    .mobile-overlay {
                        display: block;
                        pointer-events: none;
                    }

                    .mobile-overlay.active {
                        pointer-events: auto;
                    }

                    .nav-links {
                        position: fixed;
                        top: 0;
                        right: -300px;
                        width: 300px;
                        height: 100vh;
                        background: rgba(17, 24, 39, 0.98);
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: stretch;
                        padding: 5rem 1.5rem 2rem;
                        gap: 1rem;
                        transition: transform 0.3s ease;
                        overflow-y: auto;
                        z-index: 50;
                    }

                    .nav-links.active {
                        transform: translateX(-300px);
                    }

                    .nav-link {
                        font-size: 1.125rem;
                        padding: 0.75rem;
                        text-align: left;
                        border-radius: 0.375rem;
                        transition: all 0.2s ease;
                    }

                    .nav-link:hover {
                        background: rgba(255, 255, 255, 0.1);
                    }

                    .nav-link::after {
                        display: none;
                    }

                    .dropdown {
                        width: 100%;
                    }

                    .dropdown button {
                        width: 100%;
                        justify-content: space-between;
                        padding: 0.75rem;
                        border-radius: 0.375rem;
                    }

                    .dropdown button svg {
                        transition: transform 0.3s ease;
                    }

                    .dropdown.active button svg {
                        transform: rotate(180deg);
                    }

                    .dropdown-content {
                        position: static;
                        transform: none;
                        background: transparent;
                        box-shadow: none;
                        opacity: 1;
                        visibility: visible;
                        display: none;
                        width: 100%;
                        padding: 0;
                        margin: 0.5rem 0 0.5rem 1rem;
                        border-left: 2px solid rgba(255, 255, 255, 0.1);
                    }

                    .dropdown.active .dropdown-content {
                        display: block;
                    }

                    .dropdown-item {
                        padding: 0.75rem 1rem;
                        text-align: left;
                        font-size: 1rem;
                        border-radius: 0.375rem;
                    }

                    .dropdown-item:hover {
                        background: rgba(255, 255, 255, 0.1);
                    }

                    .contact-button {
                        margin-top: 1rem;
                        text-align: center;
                        padding: 0.875rem 1.5rem;
                    }
                }
            </style>

            <nav id="navbar">
                <div class="container">
                    <div class="nav-container">
                        <a href="index.html" class="logo">Sequoia</a>

                        <button class="mobile-menu-button" aria-label="Toggle menu">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-16 6h16"/>
                            </svg>
                        </button>
                        
                        <div class="mobile-overlay"></div>
                        <div class="nav-links">
                            <a href="index.html" class="nav-link">Home</a>
                            
                            <div class="dropdown">
                                <button class="nav-link">
                                    Services
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div class="dropdown-content">
                                    <a href="photo-video.html" class="dropdown-item">Photo / Video</a>
                                    <a href="asset-inspection.html" class="dropdown-item">Asset Inspection</a>
                                    <a href="thermal-imaging.html" class="dropdown-item">Thermal Imaging & Inspections</a>
                                    <a href="mapping.html" class="dropdown-item">Mapping & Agriculture Applications</a>
                                    <a href="real-estate.html" class="dropdown-item">Real Estate Photography</a>
                                    <a href="search-rescue.html" class="dropdown-item">Search & Rescue, Municipal Applications</a>
                                    <a href="events.html" class="dropdown-item">Events / Livestream</a>
                                </div>
                            </div>

                            <a href="#contact" class="contact-button">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        `;

        const mobileMenuButton = this.shadowRoot.querySelector('.mobile-menu-button');
        const navLinks = this.shadowRoot.querySelector('.nav-links');
        const mobileOverlay = this.shadowRoot.querySelector('.mobile-overlay');
        const dropdown = this.shadowRoot.querySelector('.dropdown');
        const dropdownButton = this.shadowRoot.querySelector('.dropdown button');

        const toggleMobileMenu = (show) => {
            mobileMenuButton.classList.toggle('active', show);
            navLinks.classList.toggle('active', show);
            mobileOverlay.classList.toggle('active', show);
            document.body.style.overflow = show ? 'hidden' : '';
        };

        mobileMenuButton.addEventListener('click', () => {
            const isActive = navLinks.classList.contains('active');
            toggleMobileMenu(!isActive);
        });

        mobileOverlay.addEventListener('click', () => {
            toggleMobileMenu(false);
        });

        dropdownButton.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.contains(e.target)) {
                toggleMobileMenu(false);
                dropdown.classList.remove('active');
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                toggleMobileMenu(false);
                dropdown.classList.remove('active');
            }
        });

        // Add scroll event listener
        window.addEventListener('scroll', () => {
            const navbar = this.shadowRoot.getElementById('navbar');
            if (window.pageYOffset > 50) {
                navbar.style.background = 'rgba(17, 24, 39, 0.95)';
                navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'transparent';
                navbar.style.boxShadow = 'none';
            }
        });
    }
}

customElements.define('header-component', HeaderComponent); 