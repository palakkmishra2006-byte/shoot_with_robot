const robot = document.getElementById('robot');

document.addEventListener('click', (e) => {
    // Robot ke head se bullet niklegi
    const head = document.querySelector('.head');
    const rect = head.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    const bullet = document.createElement('div');
    bullet.classList.add('bullet');
    document.body.appendChild(bullet);

    const angle = Math.atan2(e.clientY - startY, e.clientX - startX);

    bullet.style.left = startX + 'px';
    bullet.style.top = startY + 'px';

    bullet.animate([
        { transform: `rotate(${angle}rad) translateX(0px)`, opacity: 1 },
        { transform: `rotate(${angle}rad) translateX(100vw)`, opacity: 0 }
    ], { duration: 700, fill: 'forwards' });

    // Flash effect
    const flash = document.createElement('div');
    flash.style.cssText = `position:absolute; width:30px; height:30px; background:orange; border-radius:50%; top:${startY-15}px; left:${startX-15}px; pointer-events:none;`;
    document.body.appendChild(flash);
    
    setTimeout(() => { bullet.remove(); flash.remove(); }, 700);
});