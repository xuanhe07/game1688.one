/**
 * MONSTER SURVIVORS 网站主脚本
 * 作者: Roo
 * 版本: 1.0.0
 */

document.addEventListener('DOMContentLoaded', function() {
    // 初始化AOS动画库
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    
    // 初始化粒子背景
    initParticles();
    
    // 初始化视差效果
    initParallax();
    
    // 初始化Swiper轮播
    initSwiper();
    
    // 初始化Twitch嵌入
    initTwitchEmbed();
    
    // 导航栏滚动效果
    initScrollEffects();
    
    // 移动端菜单
    initMobileMenu();
    
    // 游戏演示加载
    initGameDemo();
    
    // 数据统计动画
    initStatsAnimation();
    
    // 折扣码弹窗
    initDiscountModal();
    
    // 回到顶部按钮
    initBackToTop();
    
    // 无障碍增强
    initAccessibility();
    
    // 性能监控
    initPerformanceMonitoring();
});

/**
 * 初始化粒子背景
 */
function initParticles() {
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#3b82f6'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#3b82f6',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

/**
 * 初始化视差效果
 */
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-layer');
    if (parallaxElements.length > 0 && typeof Parallax !== 'undefined') {
        const scene = document.querySelector('.relative.min-h-screen');
        if (scene) {
            new Parallax(scene);
        }
    }
}

/**
 * 初始化Swiper轮播
 */
function initSwiper() {
    if (typeof Swiper !== 'undefined' && document.querySelector('.swiper-container')) {
        new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }
        });
    }
}

/**
 * 初始化Twitch嵌入
 */
function initTwitchEmbed() {
    if (typeof Twitch !== 'undefined' && document.getElementById('twitch-embed')) {
        new Twitch.Embed('twitch-embed', {
            width: '100%',
            height: '100%',
            channel: 'monstersurvivors',
            layout: 'video',
            autoplay: false,
            parent: ['game1688.one', 'www.game1688.one', 'localhost']
        });
    }
}

/**
 * 导航栏滚动效果
 */
function initScrollEffects() {
    const header = document.getElementById('main-header');
    const backToTop = document.getElementById('back-to-top');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
                if (backToTop) {
                    backToTop.classList.remove('hidden');
                }
            } else {
                header.classList.remove('scrolled');
                if (backToTop) {
                    backToTop.classList.add('hidden');
                }
            }
        });
    }
}

/**
 * 移动端菜单
 */
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('hidden');
        });
        
        // 点击菜单项后关闭菜单
        const menuItems = mobileMenu.querySelectorAll('a');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                hamburger.classList.remove('active');
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

/**
 * 游戏演示加载
 */
function initGameDemo() {
    const loadGameBtn = document.getElementById('load-game-btn');
    const gameIframe = document.getElementById('game-iframe');
    const qualityBtns = document.querySelectorAll('.quality-btn');
    
    if (loadGameBtn && gameIframe) {
        loadGameBtn.addEventListener('click', function() {
            const src = gameIframe.getAttribute('data-src');
            gameIframe.setAttribute('src', src);
            loadGameBtn.textContent = '游戏加载中...';
            loadGameBtn.disabled = true;
            
            // 监听iframe加载完成
            gameIframe.addEventListener('load', function() {
                loadGameBtn.textContent = '重新加载';
                loadGameBtn.disabled = false;
            });
        });
        
        // 画质选择
        if (qualityBtns.length > 0) {
            qualityBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    // 移除所有按钮的active类
                    qualityBtns.forEach(b => b.classList.remove('active'));
                    // 添加当前按钮的active类
                    this.classList.add('active');
                    
                    // 获取画质设置
                    const quality = this.getAttribute('data-quality');
                    
                    // 如果iframe已加载，发送消息给游戏
                    if (gameIframe.src !== 'about:blank') {
                        gameIframe.contentWindow.postMessage({
                            type: 'setQuality',
                            quality: quality
                        }, '*');
                    }
                });
            });
        }
    }
}

/**
 * 数据统计动画
 */
function initStatsAnimation() {
    const stats = document.querySelectorAll('.stat-value');
    
    if (stats.length > 0) {
        // 检查元素是否在视口中
        const isInViewport = function(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };
        
        // 滚动时检查
        window.addEventListener('scroll', function() {
            stats.forEach(stat => {
                if (isInViewport(stat) && !stat.classList.contains('animated')) {
                    stat.classList.add('animated');
                    
                    // 简单的数字增长动画
                    const finalValue = stat.textContent;
                    let startValue = 0;
                    
                    // 如果包含非数字字符，保留它们
                    if (finalValue.includes('+')) {
                        const numericValue = parseInt(finalValue.replace(/[^0-9]/g, ''));
                        const increment = Math.ceil(numericValue / 50);
                        let currentValue = 0;
                        
                        const updateValue = setInterval(function() {
                            currentValue += increment;
                            if (currentValue >= numericValue) {
                                clearInterval(updateValue);
                                currentValue = numericValue;
                            }
                            stat.textContent = currentValue.toLocaleString() + '+';
                        }, 30);
                    } else if (finalValue.includes('/')) {
                        // 处理评分格式 (例如 4.8/5)
                        const parts = finalValue.split('/');
                        const numericValue = parseFloat(parts[0]);
                        const increment = numericValue / 30;
                        let currentValue = 0;
                        
                        const updateValue = setInterval(function() {
                            currentValue += increment;
                            if (currentValue >= numericValue) {
                                clearInterval(updateValue);
                                currentValue = numericValue;
                            }
                            stat.textContent = currentValue.toFixed(1) + '/' + parts[1];
                        }, 50);
                    }
                }
            });
        });
        
        // 初始检查
        window.dispatchEvent(new Event('scroll'));
    }
}

/**
 * 折扣码弹窗
 */
function initDiscountModal() {
    const discountModal = document.getElementById('discount-modal');
    const closeModal = document.getElementById('close-modal');
    
    if (discountModal && closeModal) {
        // 5秒后显示弹窗
        setTimeout(function() {
            discountModal.classList.remove('hidden');
        }, 5000);
        
        // 关闭弹窗
        closeModal.addEventListener('click', function() {
            discountModal.classList.add('hidden');
        });
        
        // 点击弹窗外部关闭
        discountModal.addEventListener('click', function(e) {
            if (e.target === discountModal) {
                discountModal.classList.add('hidden');
            }
        });
    }
}

/**
 * 回到顶部按钮
 */
function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/**
 * 无障碍增强
 */
function initAccessibility() {
    // 添加键盘导航支持
    const focusableElements = document.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach(element => {
        element.addEventListener('keyup', function(e) {
            // 回车键或空格键激活元素
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                element.click();
            }
        });
    });
    
    // 图片加载失败时的处理
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.alt = '图片加载失败: ' + this.alt;
            this.style.border = '1px dashed #f43f5e';
            this.style.padding = '5px';
        });
    });
}

/**
 * 性能监控
 */
function initPerformanceMonitoring() {
    // 简单的性能监控
    if (window.performance) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                
                console.log('页面加载时间: ' + pageLoadTime + 'ms');
                
                // 如果加载时间过长，可以发送到分析服务
                if (pageLoadTime > 3000) {
                    // 这里可以添加发送到分析服务的代码
                    console.warn('页面加载时间过长，可能需要优化');
                }
            }, 0);
        });
    }
}