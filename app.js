document.addEventListener("DOMContentLoaded", function() {
    const yesButton = document.getElementById("yes-btn");
    const noButton = document.getElementById("no-btn");
    const nervousGif = document.getElementById('nervous');
    const newGifs = document.querySelectorAll('.new-gif');
    const btnContainer = document.querySelector('.btn-container');
    const header = document.querySelector('header');

    noButton.addEventListener("click", function() {
        // Get the dimensions of the container
        const containerWidth = noButton.parentElement.clientWidth;
        const containerHeight = noButton.parentElement.clientHeight;

        // Calculate a random position within the container
        let randomX = Math.random() * (containerWidth - noButton.offsetWidth);
        let randomY = Math.random() * (containerHeight - noButton.offsetHeight);

        // Check if the new position overlaps with the yes button
        const yesButtonRect = yesButton.getBoundingClientRect();
        const noButtonRect = noButton.getBoundingClientRect();

        // If the new position overlaps with the yes button, recalculate the position
        while (isOverlapping(yesButtonRect, noButtonRect, randomX, randomY)) {
            randomX = Math.random() * (containerWidth - noButton.offsetWidth);
            randomY = Math.random() * (containerHeight - noButton.offsetHeight);
        }

        // Apply the new position to the no button
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";
    });

    yesButton.addEventListener('click', function() {
        // Hide nervous GIF
        nervousGif.style.display = 'none';

        // Show new GIFs
        newGifs.forEach(gif => {
            gif.style.display = 'block';
        });

        // Create and style new message element
        const message = document.createElement('div');
        message.id = 'message';
        message.textContent = 'Yay! Food on me later';
        message.style.fontFamily = 'lovely';
        message.style.fontWeight= 700;
        message.style.fontSize = '30px';
        message.style.textAlign = 'center';
        message.style.padding = '20px';
        message.style.borderTopLeftRadius = '20%';
        message.style.borderTopRightRadius = '20%';
        message.style.borderBottomLeftRadius = '20%';
        message.style.borderBottomRightRadius = '20%';
        message.style.position = 'absolute';
        message.style.top = '40%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, 50%)';
        message.style.width = '70vw';
        message.style.height = '20vh';
        message.style.zIndex= 3;
        message.style.textAlign= 'center';
        message.style.margin= '0 auto';

        // Insert new message element after the header
        header.parentNode.insertBefore(message, header.nextSibling);

        // Remove the original header
        header.remove();

        // Hide buttons
        btnContainer.style.display = 'none';
    });
});

function isOverlapping(rect1, rect2, x, y) {
    return (
        x < rect1.left + rect1.width &&
        x + rect2.width > rect1.left &&
        y < rect1.top + rect1.height &&
        y + rect2.height > rect1.top
    );
}
