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

    // Handle download button click
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get the current location and construct the correct path
            const currentPath = window.location.pathname;
            const isLocalFile = currentPath.startsWith('file://') || currentPath === '/';
            const downloadPath = isLocalFile ? './downloads/datverifier.zip' : '/downloads/datverifier.zip';
            
            // Update the href and trigger download
            downloadBtn.href = downloadPath;
            
            // Show feedback message
            const versionText = document.querySelector('.version-text');
            const originalText = versionText.textContent;
            
            // Verify if file exists (for local file system)
            if (isLocalFile) {
                fetch(downloadPath)
                    .then(response => {
                        if (response.ok) {
                            versionText.textContent = 'Download started! Check your downloads folder.';
                            versionText.style.color = '#008800';
                        } else {
                            versionText.textContent = 'Download failed. Please check if the file exists in the downloads folder.';
                            versionText.style.color = '#aa0000';
                        }
                    })
                    .catch(() => {
                        versionText.textContent = 'Download failed. Please check if the file exists in the downloads folder.';
                        versionText.style.color = '#aa0000';
                    });
            } else {
                versionText.textContent = 'Download started! Check your downloads folder.';
                versionText.style.color = '#008800';
            }
            
            // Reset message after 3 seconds
            setTimeout(() => {
                versionText.textContent = originalText;
                versionText.style.color = '';
            }, 3000);
        });
    }
}); 