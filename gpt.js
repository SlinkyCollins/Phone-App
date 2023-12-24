let score = 0;

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.hole').forEach(function (hole) {
        hole.addEventListener('click', function () {
            if (hole.classList.contains('up')) {
                score++;
                updateScore();
            }
        });
    });

    setInterval(popMole, 1000);
});

function popMole() {
    const holes = document.querySelectorAll('.hole');
    const randomHole = holes[Math.floor(Math.random() * holes.length)];

    if (randomHole.classList.contains('up')) {
        randomHole.classList.remove('up');
    } else {
        randomHole.classList.add('up');
        setTimeout(() => {
            randomHole.classList.remove('up');
        }, 800);
    }
}

function updateScore() {
    document.getElementById('score').textContent = `Score: ${score}`;
}
