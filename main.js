 
    // JavaScript code to handle the pop-up functionality
    const popOutImage = document.getElementById('popOutImage');
    const popOutContainer = document.getElementById('popOutContainer');
    const popImage = document.getElementById('popImage');

    // Function to show the pop-up when the image is clicked
    popOutImage.addEventListener('click', () => {
        popOutContainer.style.display = 'flex'; // Show the pop-up container
    });

    // Function to hide the pop-up when clicking outside the image
    popOutContainer.addEventListener('click', (event) => {
        if (event.target === popOutContainer) {
            popOutContainer.style.display = 'none'; // Hide the pop-up container
        }
    });

    popImage.addEventListener('click', () =>{
        popOutContainer.style.display = 'flex';
    });