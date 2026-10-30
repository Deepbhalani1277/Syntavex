/**
 * Syntavex Web Application — Client Interaction & Animation Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------
  // 1. Navbar Scroll State Handler
  // --------------------------------------------------
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --------------------------------------------------
  // 2. Mobile Navigation Menu Toggle
  // --------------------------------------------------
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const primaryNav = document.getElementById('primary-nav');

  if (mobileToggle && primaryNav) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', String(!isExpanded));
      primaryNav.classList.toggle('active');
    });

    const navLinks = primaryNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.setAttribute('aria-expanded', 'false');
        primaryNav.classList.remove('active');
      });
    });
  }

  // --------------------------------------------------
  // 3. Scroll Reveal Engine (IntersectionObserver)
  // --------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // --------------------------------------------------
  // 4. Cursor Spotlight Card Hover Effect
  // --------------------------------------------------
  const spotlightCards = document.querySelectorAll('.spotlight-card');
  spotlightCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // --------------------------------------------------
  // 5. Interactive Neural / Constellation Canvas
  // --------------------------------------------------
  const canvas = document.getElementById('neural-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let mouse = { x: null, y: null, maxDist: 140 };

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    });

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });

    let particles = [];
    const particleCount = Math.min(Math.floor((width * height) / 18000), 65);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 1.5 + 1;
        this.baseColor = Math.random() > 0.3 ? '#00E5FF' : '#7B2CBF';
        this.alpha = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce from boundaries
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse gentle interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.maxDist) {
            const force = (mouse.maxDist - dist) / mouse.maxDist;
            this.x -= (dx / dist) * force * 1.2;
            this.y -= (dy / dist) * force * 1.2;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.baseColor;
        ctx.globalAlpha = this.alpha;
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    initParticles();

    let animationFrameId;
    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const lineAlpha = (1 - dist / 120) * 0.16;
            ctx.strokeStyle = '#00E5FF';
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    // Pause animation when tab is inactive to save battery/GPU
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animate();
      }
    });
  }

  // --------------------------------------------------
  // 6. Interactive Live Agent Execution Terminal HUD
  // --------------------------------------------------
  const terminalScreen = document.getElementById('terminal-screen');
  const triggerBtn = document.getElementById('trigger-agent-btn');
  const latencyMetric = document.getElementById('metric-latency');

  if (terminalScreen) {
    const simulationCycles = [
      [
        { badge: 'PLAN', type: 'badge-plan', text: 'Initializing LangGraph state graph...' },
        { badge: 'RAG', type: 'badge-rag', text: 'Hybrid search pgvector + cross-encoder re-ranking top_k=5' },
        { badge: 'EXEC', type: 'badge-exec', text: 'Tool call dispatch: <span class="log-highlight">analytics_pipeline.execute()</span>' },
        { badge: 'EVAL', type: 'badge-eval', text: 'Relevancy check: <span class="log-success">0.992 PASS</span>. Zero hallucination detected.' },
        { badge: 'DONE', type: 'badge-plan', text: 'Synthesized payload streamed to client in <span class="log-highlight">38ms</span>.' }
      ],
      [
        { badge: 'PLAN', type: 'badge-plan', text: 'Received unstructured inbound document (PDF stream 4.2MB)' },
        { badge: 'RAG', type: 'badge-rag', text: 'Extracting semantic nodes via chunking & embedding pipeline' },
        { badge: 'EXEC', type: 'badge-exec', text: 'Schema validator: Pydantic v2 model strict match confirmed' },
        { badge: 'EVAL', type: 'badge-eval', text: 'PII guardrail active: Zero data leakage confirmed' },
        { badge: 'DONE', type: 'badge-plan', text: 'Normalized entities pushed to transactional DB in <span class="log-highlight">24ms</span>.' }
      ],
      [
        { badge: 'PLAN', type: 'badge-plan', text: 'Autonomous agent coordinator: Multi-worker synchronization' },
        { badge: 'EXEC', type: 'badge-exec', text: 'Worker 01 (Researcher) dispatched query to vector index' },
        { badge: 'EXEC', type: 'badge-exec', text: 'Worker 02 (Synthesizer) building deterministic code patch' },
        { badge: 'EVAL', type: 'badge-eval', text: 'Evals: Benchmark accuracy <span class="log-success">98.6%</span> against test suite' },
        { badge: 'DONE', type: 'badge-plan', text: 'State cycle resolved successfully. Dyno memory overhead: <span class="log-highlight">18MB</span>.' }
      ]
    ];

    let currentCycleIndex = 0;
    let isRunningCycle = false;

    function getFormattedTimestamp() {
      const now = new Date();
      return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}.${String(Math.floor(now.getMilliseconds() / 10)).padStart(2, '0')}`;
    }

    function addLogRow(badge, badgeClass, text) {
      const row = document.createElement('div');
      row.className = 'log-row';

      const ts = document.createElement('span');
      ts.className = 'log-ts';
      ts.textContent = getFormattedTimestamp();

      const badgeEl = document.createElement('span');
      badgeEl.className = `log-badge ${badgeClass}`;
      badgeEl.textContent = badge;

      const textEl = document.createElement('span');
      textEl.className = 'log-text';
      textEl.innerHTML = text;

      row.appendChild(ts);
      row.appendChild(badgeEl);
      row.appendChild(textEl);

      terminalScreen.appendChild(row);

      // Keep terminal scroll anchored to bottom
      terminalScreen.scrollTop = terminalScreen.scrollHeight;

      // Retain max 20 rows to keep memory tiny
      while (terminalScreen.children.length > 20) {
        terminalScreen.removeChild(terminalScreen.firstChild);
      }
    }

    async function runCycle(cycleIndex) {
      if (isRunningCycle) return;
      isRunningCycle = true;

      const cycle = simulationCycles[cycleIndex % simulationCycles.length];

      for (let i = 0; i < cycle.length; i++) {
        const item = cycle[i];
        addLogRow(item.badge, item.type, item.text);

        // Fluctuate latency metric slightly for realism
        if (latencyMetric) {
          const lat = Math.floor(Math.random() * 25 + 22);
          latencyMetric.textContent = `${lat}ms`;
        }

        await new Promise(r => setTimeout(r, 750));
      }

      isRunningCycle = false;
    }

    // Run first cycle automatically
    runCycle(0);

    // Auto-loop with delay
    let autoInterval = setInterval(() => {
      if (!isRunningCycle && document.visibilityState === 'visible') {
        currentCycleIndex++;
        runCycle(currentCycleIndex);
      }
    }, 4500);

    // User trigger button
    if (triggerBtn) {
      triggerBtn.addEventListener('click', () => {
        clearInterval(autoInterval);
        currentCycleIndex++;
        runCycle(currentCycleIndex);
        autoInterval = setInterval(() => {
          if (!isRunningCycle && document.visibilityState === 'visible') {
            currentCycleIndex++;
            runCycle(currentCycleIndex);
          }
        }, 5000);
      });
    }
  }

  // --------------------------------------------------
  // 7. 1-Click Clipboard Copy with Feedback
  // --------------------------------------------------
  const copyBtn = document.getElementById('copy-email-btn');
  const copyBtnText = document.getElementById('copy-btn-text');
  const targetEmail = 'contact@syntavex.com';

  if (copyBtn && copyBtnText) {
    let resetTimer = null;

    copyBtn.addEventListener('click', async () => {
      let copied = false;

      // Modern Clipboard API
      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(targetEmail);
          copied = true;
        } catch (err) {
          console.warn('Clipboard writeText failed, falling back:', err);
        }
      }

      // Legacy fallback
      if (!copied) {
        try {
          const textarea = document.createElement('textarea');
          textarea.value = targetEmail;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          copied = document.execCommand('copy');
          document.body.removeChild(textarea);
        } catch (err) {
          console.error('Fallback clipboard copy failed:', err);
        }
      }

      if (copied) {
        copyBtnText.textContent = 'Copied to clipboard!';
        copyBtn.style.backgroundColor = '#00FFB2';
        copyBtn.style.color = '#05070A';

        clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
          copyBtnText.textContent = 'Copy Address';
          copyBtn.style.backgroundColor = '';
          copyBtn.style.color = '';
        }, 2500);
      } else {
        window.location.href = `mailto:${targetEmail}`;
      }
    });
  }
});
