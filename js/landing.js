// Floating animation for CTA button
const ctaBtn = document.querySelector('.cta-btn');
if (ctaBtn) {
  ctaBtn.animate([
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-8px)' },
    { transform: 'translateY(0px)' }
  ], {
    duration: 2600,
    iterations: Infinity,
    easing: 'ease-in-out'
  });

  // Cursor tracking glow effect
  ctaBtn.addEventListener('mousemove', function(e) {
    const rect = ctaBtn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctaBtn.style.boxShadow = `0 8px 32px #2CBDFB55, 0 2px 8px #7F5AF055, 0 0 32px 8px rgba(44,189,251,0.25), ${x-rect.width/2}px ${y-rect.height/2}px 32px 8px #2CBDFB88`;
  });
  ctaBtn.addEventListener('mouseleave', function() {
    ctaBtn.style.boxShadow = '';
  });
} 