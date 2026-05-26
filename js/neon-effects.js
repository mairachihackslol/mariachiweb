(function() {
    const neonCSS = `
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap');

        :root {
            --green: #00ff66;
            --red: #ff003c;
            --bg: #030304;
        }

        * { box-sizing: border-box; }

        body {
            position: relative;
            overflow-x: hidden;
            background-color: var(--bg) !important;
            color: #f1f5f9 !important;
        }

        h1, h2, h3, .font-black, .font-extrabold {
            font-family: 'Syne', sans-serif !important;
        }

        body::before {
            content: '';
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: -2;
            background:
                radial-gradient(ellipse at top left, rgba(0, 255, 102, 0.10) 0%, transparent 40%),
                radial-gradient(ellipse at bottom right, rgba(255, 0, 60, 0.10) 0%, transparent 40%);
        }

        body::after {
            content: '';
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: -1;
            background-image:
                linear-gradient(rgba(0, 255, 102, 0.025) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 102, 0.025) 1px, transparent 1px);
            background-size: 40px 40px;
        }

        .cyber-scanline {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 2px;
            background: linear-gradient(to right, transparent, rgba(0, 255, 102, 0.5), rgba(255, 0, 60, 0.5), transparent);
            opacity: 0.6;
            z-index: 9999;
            pointer-events: none;
            animation: scanline 6s linear infinite;
        }

        @keyframes scanline {
            0% { transform: translateY(-10vh); }
            100% { transform: translateY(110vh); }
        }

        .btn-primary {
            background: linear-gradient(135deg, #00ff66 0%, #00cc50 100%) !important;
            border: 1px solid rgba(0, 255, 102, 0.4) !important;
            box-shadow: 0 0 18px rgba(0, 255, 102, 0.25) !important;
            transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
            color: #000 !important;
            font-weight: 800 !important;
            font-family: 'Syne', sans-serif !important;
        }

        .btn-primary:hover {
            transform: translateY(-2px) scale(1.02) !important;
            box-shadow: 0 0 30px rgba(0, 255, 102, 0.5), 0 0 60px rgba(255, 0, 60, 0.2) !important;
            background: linear-gradient(135deg, #00ff66 0%, #ff003c 100%) !important;
            color: #fff !important;
        }

        .btn-primary:active {
            transform: translateY(0) scale(0.98) !important;
        }

        .glass-card {
            background: rgba(8, 8, 14, 0.75) !important;
            border: 1px solid rgba(0, 255, 102, 0.12) !important;
            box-shadow: 0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(0,255,102,0.05) !important;
            backdrop-filter: blur(14px) !important;
            transition: border-color 0.3s ease, box-shadow 0.3s ease !important;
        }

        .glass-card:hover {
            border-color: rgba(0, 255, 102, 0.28) !important;
            box-shadow: 0 12px 40px rgba(0,0,0,0.7), 0 0 20px rgba(0,255,102,0.08) !important;
        }

        /* Card entrance animation */
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
        }

        .card-anim {
            animation: fadeInUp 0.4s ease both;
        }

        /* Inputs */
        input, select, textarea {
            background: rgba(8,8,14,0.9) !important;
            border: 1px solid rgba(0,255,102,0.15) !important;
            color: #f1f5f9 !important;
            transition: border-color 0.2s, box-shadow 0.2s !important;
        }
        input:focus, select:focus, textarea:focus {
            border-color: rgba(0,255,102,0.5) !important;
            box-shadow: 0 0 0 3px rgba(0,255,102,0.08) !important;
            outline: none !important;
        }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #030304; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(to bottom, #00ff66, #ff003c); border-radius: 3px; }

        /* Status badges */
        .badge-pending { background: rgba(120,60,0,0.4); color: #fbbf24; border: 1px solid rgba(251,191,36,0.3); }
        .badge-done    { background: rgba(0,80,30,0.4);  color: #34d399; border: 1px solid rgba(52,211,153,0.3); }

        .ambient-logo {
            position: fixed;
            bottom: 16px; right: 16px;
            width: 100px; height: 100px;
            opacity: 0.12;
            z-index: -2;
            pointer-events: none;
            filter: drop-shadow(0 0 10px #00ff66);
            animation: logoFloat 5s ease-in-out infinite;
        }

        @keyframes logoFloat {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50%       { transform: translateY(-10px) rotate(3deg); }
        }

        /* Toast notification */
        #m7-toast {
            position: fixed;
            bottom: 24px; left: 50%;
            transform: translateX(-50%) translateY(80px);
            background: rgba(8,8,14,0.95);
            border: 1px solid rgba(0,255,102,0.4);
            box-shadow: 0 0 20px rgba(0,255,102,0.2);
            color: #fff;
            padding: 12px 24px;
            border-radius: 14px;
            font-size: 13px;
            font-weight: 600;
            z-index: 99999;
            transition: transform 0.3s ease;
            pointer-events: none;
            font-family: 'Syne', sans-serif;
        }
        #m7-toast.show { transform: translateX(-50%) translateY(0); }
    `;

    const styleEl = document.createElement('style');
    styleEl.innerHTML = neonCSS;
    document.head.appendChild(styleEl);

    // Toast function (global)
    window.m7Toast = function(msg, color = '#00ff66') {
        let toast = document.getElementById('m7-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'm7-toast';
            document.body.appendChild(toast);
        }
        toast.textContent = msg;
        toast.style.borderColor = color + '66';
        toast.style.boxShadow = `0 0 20px ${color}33`;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2800);
    };

    document.addEventListener('DOMContentLoaded', () => {
        const scanline = document.createElement('div');
        scanline.className = 'cyber-scanline';
        document.body.appendChild(scanline);

        const ambientLogo = document.createElement('img');
        ambientLogo.src = 'js/image_458769.jpg';
        ambientLogo.className = 'ambient-logo';
        ambientLogo.onerror = function() { this.style.display = 'none'; };
        document.body.appendChild(ambientLogo);

        // Particle canvas
        const canvas = document.createElement('canvas');
        canvas.id = 'neonParticlesCanvas';
        Object.assign(canvas.style, { position:'fixed', inset:'0', zIndex:'-3', pointerEvents:'none' });
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;
        let particles = [];
        const COUNT = 40;

        function rnd(a,b) { return Math.random()*(b-a)+a; }

        function init() {
            particles = Array.from({length: COUNT}, (_, i) => ({
                x: rnd(0, w), y: rnd(0, h),
                r: rnd(1, 2.5),
                color: i%2===0 ? `rgba(0,255,102,${rnd(0.15,0.4)})` : `rgba(255,0,60,${rnd(0.15,0.35)})`,
                shadow: i%2===0 ? '#00ff66' : '#ff003c',
                vx: rnd(-0.15, 0.15), vy: rnd(-0.35, -0.1),
                drift: rnd(0, 100)
            }));
        }

        function draw() {
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => {
                p.x += p.vx + Math.sin(p.drift + p.y * 0.002) * 0.1;
                p.y += p.vy;
                if (p.x < -5) p.x = w+5;
                if (p.x > w+5) p.x = -5;
                if (p.y < -5) p.y = h+5;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
                ctx.fillStyle = p.color;
                ctx.shadowBlur = 6;
                ctx.shadowColor = p.shadow;
                ctx.fill();
                ctx.shadowBlur = 0;
            });
            requestAnimationFrame(draw);
        }

        window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; init(); });
        init();
        draw();

        // Animate cards on load
        document.querySelectorAll('.glass-card').forEach((el, i) => {
            el.classList.add('card-anim');
            el.style.animationDelay = (i * 0.06) + 's';
        });
    });

    console.log('%c🇲🇽 MARIACHI HACKS %cMotor gráfico inicializado', 'color:#00ff66;font-weight:bold;font-size:13px', 'color:#888;font-size:11px');
})();
