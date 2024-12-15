const player = document.querySelector('#player'); // Adjust the selector based on your actual player element
const movePlayer = 10; // Set your desired movement speed

// Check for CSS transitions
player.style.transition = 'none';

const handleMovement = (e) => {
    let left = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    const bottom = parseInt(window.getComputedStyle(player).getPropertyValue('bottom'));

    console.log(`Key pressed: ${e.key}`);
    console.log(`Current position - Left: ${left}px, Bottom: ${bottom}px`);

    switch (e.key) {
        case 'a':
            if (left <= 0) return (player.style.left = '0px');
            player.style.left = left - movePlayer + 'px';
            break;
        case 'd':
            player.style.left = left + movePlayer + 'px';
            break;
        case 'w':
            player.style.bottom = bottom + movePlayer + 'px';
            break;
        case 's':
            player.style.bottom = bottom - movePlayer + 'px';
            break;
    }

    console.log(`New position - Left: ${player.style.left}, Bottom: ${player.style.bottom}`);
};

window.addEventListener('keydown', handleMovement);
