// Add window dragging functionality (simulated)
document.addEventListener('DOMContentLoaded', () => {
    const windows = document.querySelectorAll('.window');
    
    windows.forEach(window => {
        const titleBar = window.querySelector('.title-bar');
        const controls = window.querySelector('.title-bar-controls');
        
        if (titleBar && controls) {
            // Add hover effect to window controls
            controls.querySelectorAll('button').forEach(button => {
                button.addEventListener('mouseover', () => {
                    button.style.backgroundColor = '#dfdfdf';
                });
                
                button.addEventListener('mouseout', () => {
                    button.style.backgroundColor = '#c0c0c0';
                });
            });
        }
    });

    // Add typing effect to terminal
    const terminal = document.querySelector('.terminal pre');
    if (terminal) {
        const text = terminal.textContent;
        terminal.textContent = '';
        let index = 0;

        function typeText() {
            if (index < text.length) {
                terminal.textContent += text.charAt(index);
                index++;
                setTimeout(typeText, 50);
            }
        }

        // Start typing effect when terminal is in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeText();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(terminal);
    }

    // Add click effect to download button
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Download functionality coming soon!');
        });
    }
}); 