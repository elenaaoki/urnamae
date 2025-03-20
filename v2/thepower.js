   // Data storage
    let customData = [];
    
    // Constants
    const MAX_ATTEMPTS = 1000; // Maximum number of attempts to find a matching name
    const TIMEOUT_MS = 2000; // Timeout in milliseconds

    // DOM elements
    const versionRadios = document.querySelectorAll('input[name="version"]');
    const customSection = document.getElementById('custom-section');
    const selectionSection = document.getElementById('selection-section');
    const advancedFeaturesToggle = document.getElementById('toggle-advanced');
    const advancedOptions = document.getElementById('advanced-options');
    const nameWordsSelect = document.getElementById('name-words');
    const suggestFirst = document.getElementById('suggest-first');
    const suggestMiddle = document.getElementById('suggest-middle');
    const suggestLast = document.getElementById('suggest-last');
    const firstLetter = document.getElementById('first-letter');
    const middleLetter = document.getElementById('middle-letter');
    const lastLetter = document.getElementById('last-letter');

    // Functions
    function updateSelections(data) {
        const genderCheckboxes = document.getElementById('gender-checkboxes');
        const countryCheckboxes = document.getElementById('country-checkboxes');
        
        // Clear existing checkboxes
        genderCheckboxes.innerHTML = '';
        countryCheckboxes.innerHTML = '';

        // Get unique genders and countries
        const genders = [...new Set(data.map(item => item["Gender"]))];
        const countries = [...new Set(data.map(item => item.Origin))];

        // Create gender checkboxes
        genders.forEach(gender => {
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = gender;
            checkbox.checked = true;
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(` ${gender}`));
            genderCheckboxes.appendChild(label);
        });

        // Create country checkboxes
        countries.forEach(country => {
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = country;
            checkbox.checked = true;
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(` ${country}`));
            countryCheckboxes.appendChild(label);
        });
    }

    function toggleAdvancedFeatures() {
      const advancedFeatures = document.getElementById('advanced-features');
      const isCustomMode = document.querySelector('input[name="version"]:checked').value === 'custom';
      advancedFeatures.style.display = isCustomMode || versionRadios[0].checked ? 'block' : 'none';
    }

    function isAdvancedEnabled() {
      return document.getElementById('toggle-advanced').checked;
    }

    function copyToClipboard(button, text) {
        navigator.clipboard.writeText(text).then(() => {
            button.textContent = 'Copied';
            button.classList.add('copied');
            setTimeout(() => {
                button.textContent = 'Copy';
                button.classList.remove('copied');
            }, 2000);
        });
    }

    function copyAllNames() {
        const resultElements = document.querySelectorAll('.result span');
        const allNames = Array.from(resultElements).map(el => el.textContent).join('\n');
        
        const copyAllBtn = document.getElementById('copyAll');
        navigator.clipboard.writeText(allNames).then(() => {
            copyAllBtn.textContent = 'Copied All';
            copyAllBtn.classList.add('copied');
            setTimeout(() => {
                copyAllBtn.textContent = 'Copy All';
                copyAllBtn.classList.remove('copied');
            }, 2000);
        });
    }

    function updateMiddleNameOptions() {
        const nameWords = parseInt(nameWordsSelect.value);
        const middleNameOptions = document.querySelectorAll('.middle-name-option');
        middleNameOptions.forEach(option => {
            option.style.display = nameWords === 3 ? 'block' : 'none';
        });
    }

    // Initialize with default data
    updateSelections([...maleData, ...femaleData]);

    versionRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'custom') {
                customSection.style.display = 'block';
                selectionSection.style.display = 'none';
            } else {
                customSection.style.display = 'none';
                selectionSection.style.display = 'block';
                updateSelections([...maleData, ...femaleData]);
            }
            toggleAdvancedFeatures();
        });
    });

    advancedFeaturesToggle.addEventListener('change', function() {
        advancedOptions.style.display = this.checked ? 'block' : 'none';
        if (this.checked) {
            updateMiddleNameOptions();
        } else {
            // Reset advanced options when disabled
            nameWordsSelect.value = '2';
            suggestFirst.value = '';
            suggestMiddle.value = '';
            suggestLast.value = '';
            firstLetter.value = '';
            middleLetter.value = '';
            lastLetter.value = '';
        }
    });

    nameWordsSelect.addEventListener('change', updateMiddleNameOptions);

    document.getElementById('file').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const data = JSON.parse(e.target.result);
                customData = data;
                selectionSection.style.display = 'block';
                updateSelections(customData);
            } catch (err) {
                alert("Invalid JSON file");
            }
        };
        reader.readAsText(file);
    });

    document.getElementById('generate').addEventListener('click', function() {
        const selectedGenders = Array.from(document.querySelectorAll('#gender-checkboxes input:checked'))
            .map(checkbox => checkbox.value);
        const selectedCountries = Array.from(document.querySelectorAll('#country-checkboxes input:checked'))
            .map(checkbox => checkbox.value);

        if (selectedCountries.length === 0 || selectedGenders.length === 0) {
            alert("Please select at least one gender and one country");
            return;
        }

        let filteredNames = [];
        const isCustomMode = document.querySelector('input[name="version"]:checked').value === 'custom';
        
        if (isCustomMode) {
            filteredNames = customData
                .filter(item => 
                    selectedCountries.includes(item.Origin) && 
                    selectedGenders.includes(item["Gender"]))
                .flatMap(item => item.Name.flatMap(name => name.split(' ')));
        } else {
            const allNames = [...maleData, ...femaleData];
            filteredNames = allNames
                .filter(item => 
                    selectedCountries.includes(item.Origin) && 
                    selectedGenders.includes(item["Gender"]))
                .flatMap(item => item.Name.flatMap(name => name.split(' ')));
        }

        if (filteredNames.length === 0) {
            alert("No names found for the selected options");
            return;
        }

        const results = document.getElementById('results');
        results.innerHTML = '';
        
        // Add Copy All button
        const copyAllBtn = document.createElement('button');
        copyAllBtn.id = 'copyAll';
        copyAllBtn.className = 'copy-btn copy-all-btn';
        copyAllBtn.textContent = 'Copy All';
        copyAllBtn.onclick = copyAllNames;
        results.appendChild(copyAllBtn);

        // Generate and display names
        for (let i = 0; i < 10; i++) {
            let mixedName = '';
            const nameWords = isAdvancedEnabled() ? parseInt(nameWordsSelect.value) : 2;

            for (let j = 0; j < nameWords; j++) {
                let name = '';
                if (isAdvancedEnabled()) {
                    if (j === 0 && suggestFirst.value) {
                        name = suggestFirst.value;
                    } else if (j === 1 && nameWords === 3 && suggestMiddle.value) {
                        name = suggestMiddle.value;
                    } else if (j === nameWords - 1 && suggestLast.value) {
                        name = suggestLast.value;
                    }
                }
                
                if (!name) {
                    const startTime = Date.now();
                    let attempts = 0;
                    let letterToMatch = '';
                    
                    if (isAdvancedEnabled()) {
                        if (j === 0 && firstLetter.value) letterToMatch = firstLetter.value;
                        else if (j === 1 && nameWords === 3 && middleLetter.value) letterToMatch = middleLetter.value;
                        else if (j === nameWords - 1 && lastLetter.value) letterToMatch = lastLetter.value;
                    }

                    do {
                        name = filteredNames[Math.floor(Math.random() * filteredNames.length)];
                        attempts++;

                        if (Date.now() - startTime > TIMEOUT_MS || attempts > MAX_ATTEMPTS) {
                            name = `[No ${letterToMatch.toUpperCase()}-name found]`;
                            break;
                        }
                    } while (
                        letterToMatch && !name.toLowerCase().startsWith(letterToMatch.toLowerCase())
                    );
                }
                mixedName += (j > 0 ? ' ' : '') + name;
            }
            
            const resultDiv = document.createElement('div');
            resultDiv.className = 'result';
            resultDiv.innerHTML = `
                <span>${mixedName}</span>
                <button class="copy-btn" onclick="copyToClipboard(this, '${mixedName}')">Copy</button>
            `;
            results.appendChild(resultDiv);
        }
    });

    // Initialize
    toggleAdvancedFeatures();
    updateMiddleNameOptions();