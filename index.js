document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("grain-canvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function drawStaticGrain() {
        const size = 10; // size of each grain "block"
        const cols = Math.ceil(canvas.width / size);
        const rows = Math.ceil(canvas.height / size);

        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                const gray = Math.random() * 255 | 0;
                ctx.fillStyle = `rgba(${gray}, ${gray}, ${gray}, 0.06)`;
                ctx.fillRect(x * size, y * size, size, size);
            }
        }
    }

    resizeCanvas();
    drawStaticGrain();

    // Optional: redraw when resized
    window.addEventListener("resize", () => {
        resizeCanvas();
        drawStaticGrain();
    });
});

// Page toggle
function toggleSelection() {
    const page1 = document.querySelector('.page-1');
    const page2 = document.querySelector('.page-2');

    const isPage1Active = page1.classList.contains('active');

    if (isPage1Active) {
        page1.classList.remove('active');
        page2.classList.add('active');
    } else {
        page2.classList.remove('active');
        page1.classList.add('active');
    }
}
function openLetter() {
    const letter = document.getElementById('NoteDIV');
    const button = document.querySelector('.open-letter-btn');

    // Show the letter, hide the button
    letter.classList.add('show');
    button.style.display = 'none';
}

