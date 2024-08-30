    const userInput = document.getElementById('user-input');
    const checkBtn = document.getElementById('check-btn');
    const clearBtn = document.getElementById('clear-btn');
    const resultsDiv = document.getElementById('results-div');

    checkBtn.addEventListener('click', validatePhoneNumber);
    clearBtn.addEventListener('click', clearResults);

    function validatePhoneNumber() {
        const phoneNumber = userInput.value.trim();

        if (phoneNumber === '') {
            alert('Please provide a phone number');
            return;
        }

        const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;

        if (phoneRegex.test(phoneNumber)) {
            resultsDiv.textContent = `Valid US number: ${phoneNumber}`;
            resultsDiv.style.color = 'green';
        } else {
            resultsDiv.textContent = `Invalid US number: ${phoneNumber}`;
            resultsDiv.style.color = 'red';
        }
    }

    function clearResults() {
        userInput.value = '';
        resultsDiv.textContent = '';
    }
