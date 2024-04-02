document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.sample');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            playAudio(this.getAttribute('data-src'));
        });
    });

    const sayItButton = document.getElementById('sayItButton');
    sayItButton.addEventListener('click', function () {
        const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
        const matchingButton = Array.from(buttons).find(button => button.textContent.toLowerCase().includes(searchInput));
        if (matchingButton) {
            playAudio(matchingButton.getAttribute('data-src'));
        } else {
            alert('No matching audio found!');
        }
    });

    function playAudio(audioSrc) {
        const audio = new Audio(audioSrc);
        audio.play();
    }
});