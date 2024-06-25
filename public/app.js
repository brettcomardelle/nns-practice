document.addEventListener('DOMContentLoaded', function () {
    const characterDisplay = document.getElementById('character');
    const keyInfo = document.getElementById('key-info');
    const buttons = document.querySelectorAll('#button-container button');
    
    let currentKey = 'A'; // Default key
    
    // Function to update the displayed character
    function updateCharacter() {
        const keys = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];
        const randomIndex = Math.floor(Math.random() * keys.length);
        characterDisplay.textContent = keys[randomIndex];
        currentKey = keys[randomIndex]; // Update currentKey
    }

    // Function to handle button click
    function handleButtonClick(button) {
        const buttonText = button.textContent;
        
        // Check if button text matches current key
        if (buttonText === currentKey) {
            document.body.classList.add('green-background');
            keyInfo.classList.add('white-text');
        } else {
            document.body.classList.add('red-background');
            keyInfo.classList.add('white-text');
        }

        // Reset UI after 1 second
        setTimeout(() => {
            document.body.classList.remove('green-background', 'red-background');
            keyInfo.classList.remove('white-text');
            updateCharacter(); // Update character after delay
        }, 1000);
    }

    // Event listener for button clicks
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            handleButtonClick(button);
        });
    });

    // Initial character display update
    updateCharacter();

    // Function to toggle dropdown menu visibility
    function toggleDropdown() {
        const dropdown = document.getElementById('keyDropdown');
        dropdown.classList.toggle('show');
    }

    // Function to select a specific key from the dropdown
    function selectKey(key) {
        currentKey = key;
        document.getElementById('key-info').textContent = `key: ${key}`;
        toggleDropdown(); // Hide dropdown after selection
    }

    // Event listener for key dropdown menu items
    const dropdownItems = document.querySelectorAll('#keyDropdown a');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function () {
            selectKey(item.textContent.trim());
        });
    });
});
