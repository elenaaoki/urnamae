// Data storage
let customData = [];
const defaultData = {
  male: [
    {
      "Nama": [
        "Naruto Uzumaki",
        "Sasuke Uchiha",
        "Ichigo Kurosaki",
        "Light Yagami",
        "Lelouch Lamperouge",
        "Edward Elric",
        "Goku Son",
        "Luffy Monkey D.",
        "Eren Yeager"
      ],
      "Negara": "Anime (Nama Laki)",
      "Jenis Kelamin": "laki-laki"
    },
    {
      "Nama": [
        "Joko Widodo",
        "Prabowo Subianto",
        "Sandiaga Uno",
        "Anies Baswedan",
        "Ridwan Kamil"
      ],
      "Negara": "Indonesia",
      "Jenis Kelamin": "laki-laki"
    }
  ],
  female: [
  {
    "Nama": [
      "Ageha",
      "Ai",
      "Aika",
      "Aiko",
      "Aimi",
      "Aina",
      "Aino",
      "Aira",
      "Airi",
      "Akane",
      "Akari",
      "Akemi",
      "Akeno",
      "Aki",
      "Akie",
      "Akiko",
      "Akina",
      "Akino",
      "Akiyo",
      "Ako",
      "Akoya",
      "Amane",
      "Ami",
      "Amina",
      "Anju",
      "Anna",
      "Anzu",
      "Ariko",
      "Arina",
      "Arisa",
      "Asaka",
      "Asako",
      "Asami",
      "Asuka",
      "Asumi",
      "Asuna",
      "Atsuko",
      "Atsumi",
      "Aya",
      "Ayaka",
      "Ayako",
      "Ayame",
      "Ayami",
      "Ayana",
      "Ayane",
      "Ayano",
      "Ayasa",
      "Ayu",
      "Ayuka",
      "Ayuko",
      "Ayumi",
      "Ayumu",
      "Azumi",
      "Chidori",
      "Chie",
      "Chieko",
      "Chiemi",
      "Chigusa",
      "Chiharu",
      "Chihaya",
      "Chiho",
      "Chika",
      "Chikage",
      "Chikako",
      "Chinami",
      "Chinatsu",
      "Chisato",
      "Chitose",
      "Chiya",
      "Chiyako",
      "Chiyo",
      "Chiyoko",
      "Chizuko",
      "Chizuru",
      "Eiko",
      "Eimi",
      "Ema",
      "Emi",
      "Emika",
      "Emiko",
      "Emiri",
      "Eri",
      "Erika",
      "Eriko",
      "Erina",
      "Etsuko",
      "Fubuki",
      "Fujie",
      "Fujiko",
      "Fūka",
      "Fukumi",
      "Fumi",
      "Fumie",
      "Fumika",
      "Fumiko",
      "Fumino",
      "Fusako",
      "Futaba",
      "Fuyuko",
      "Fuyumi",
      "Ginko",
      "Hana",
      "Hanae",
      "Hanako",
      "Harue",
      "Haruhi",
      "Haruko",
      "Haruna",
      "Haruno",
      "Haruyo",
      "Hasumi",
      "Hatsue",
      "Hatsumi",
      "Hatsune",
      "Hibari",
      "Hideko",
      "Himawari",
      "Himiko",
      "Hina",
      "Hinako",
      "Hiroe",
      "Hiroka",
      "Hiroko",
      "Hiroyo",
      "Hisa",
      "Hisae",
      "Hisako",
      "Hisayo",
      "Hitomi",
      "Hiyori",
      "Honami",
      "Honoka",
      "Ichigo",
      "Ichiko",
      "Ikue",
      "Ikuko",
      "Ikumi",
      "Ikuyo",
      "Inori",
      "Io",
      "Iroha",
      "Isuzu",
      "Ito",
      "Itsuko",
      "Itsumi",
      "Iyo",
      "Jitsuko",
      "Junko",
      "Juri",
      "Kaede",
      "Kaho",
      "Kahori",
      "Kahoru",
      "Kako",
      "Kana",
      "Kanae",
      "Kanako",
      "Kanami",
      "Kanna",
      "Kanoko",
      "Kanon",
      "Kaori",
      "Kaoruko",
      "Karen",
      "Karin",
      "Kasumi",
      "Katsuko",
      "Katsura",
      "Kawai",
      "Kaya",
      "Kayoko",
      "Kazue",
      "Kazuha",
      "Kazuko",
      "Kazusa",
      "Kazuyo",
      "Keiki",
      "Keiko",
      "Kiara",
      "Kie",
      "Kiho",
      "Kiko",
      "Kiku",
      "Kikue",
      "Kikuko",
      "Kimi",
      "Kimiko",
      "Kimiyo",
      "Kinu",
      "Kinuko",
      "Kira",
      "Kirari",
      "Kirie",
      "Kiriko",
      "Kirino",
      "Kiyoko",
      "Kiyomi",
      "Kiyone",
      "Koharu",
      "Komako",
      "Konami",
      "Konomi",
      "Koruri",
      "Kotoe",
      "Kotoko",
      "Kotomi",
      "Kotono",
      "Kotori",
      "Kou",
      "Kozue",
      "Kumi",
      "Kumiko",
      "Kuniko",
      "Kuriko",
      "Kyoko",
      "Maaya",
      "Machi",
      "Machiko",
      "Madoka",
      "Mahiro",
      "Maho",
      "Mai",
      "Maika",
      "Maiko",
      "Maimi",
      "Maki",
      "Makiko",
      "Mami",
      "Mamiko",
      "Mana",
      "Manaka",
      "Manami",
      "Mao",
      "Mari",
      "Marie",
      "Marika",
      "Mariko",
      "Marina",
      "Mariya",
      "Marumi",
      "Masae",
      "Masako",
      "Masayo",
      "Mashiro",
      "Masuko",
      "Matsuko",
      "Matsuri",
      "Maya",
      "Mayako",
      "Mayo",
      "Mayu",
      "Mayuka",
      "Mayuko",
      "Mayumi",
      "Megu",
      "Megumi",
      "Mei",
      "Meiko",
      "Meisa",
      "Michi",
      "Michie",
      "Michiko",
      "Midori",
      "Mie",
      "Mieko",
      "Miharu",
      "Miho",
      "Mihoko",
      "Miiko",
      "Mika",
      "Mikako",
      "Miki",
      "Mikiko",
      "Miku",
      "Mikuru",
      "Mima",
      "Mimori",
      "Mina",
      "Minae",
      "Minako",
      "Minami",
      "Mineko",
      "Mio",
      "Mioko",
      "Miori",
      "Mira",
      "Miri",
      "Misa",
      "Misaki",
      "Misako",
      "Misato",
      "Misono",
      "Misumi",
      "Misuzu",
      "Mitsuba",
      "Mitsuki",
      "Mitsuko",
      "Mitsuyo",
      "Miu",
      "Miwa",
      "Miwako",
      "Miya",
      "Miyabi",
      "Miyako",
      "Miyo",
      "Miyoko",
      "Miyoshi",
      "Miyū",
      "Miyuki",
      "Miyumi",
      "Mizue",
      "Mizuko",
      "Moa",
      "Moe",
      "Moeka",
      "Moeko",
      "Momiji",
      "Momo",
      "Momoe",
      "Momoha",
      "Momoka",
      "Momoko",
      "Momona",
      "Mone",
      "Motoko",
      "Murasaki",
      "Mutsuko",
      "Mutsumi",
      "Nagako",
      "Naho",
      "Nako",
      "Nami",
      "Namie",
      "Nana",
      "Nanae",
      "Nanako",
      "Nanami",
      "Nanase",
      "Nao",
      "Naoko",
      "Naru",
      "Naruko",
      "Narumi",
      "Natsue",
      "Natsuko",
      "Natsume",
      "Natsumi",
      "Nene",
      "Nina",
      "Noa",
      "Nobue",
      "Nobuko",
      "Nodoka",
      "Nonoka",
      "Noriko",
      "Noriyo",
      "Otoha",
      "Otome",
      "Ran",
      "Ranko",
      "Reika",
      "Reiko",
      "Reina",
      "Remi",
      "Rena",
      "Reona",
      "Rie",
      "Rieko",
      "Riho",
      "Rika",
      "Rikako",
      "Riko",
      "Rina",
      "Rinka",
      "Rinko",
      "Rino",
      "Rio",
      "Risa",
      "Risako",
      "Ritsuko",
      "Ruka",
      "Rumi",
      "Rumiko",
      "Rumina",
      "Runa",
      "Ruri",
      "Ruriko",
      "Ryōka",
      "Ryōko",
      "Sachi",
      "Sachie",
      "Sachiko",
      "Sadako",
      "Sae",
      "Saeko",
      "Saiko",
      "Saki",
      "Sakie",
      "Sakiko",
      "Saku",
      "Sakura",
      "Sakurako",
      "Sana",
      "Sanae",
      "Sanami",
      "Saori",
      "Sari",
      "Sarina",
      "Satoko",
      "Satomi",
      "Sawa",
      "Sawako",
      "Saya",
      "Sayaka",
      "Sayako",
      "Sayo",
      "Sayoko",
      "Sayori",
      "Sayuki",
      "Sayumi",
      "Sayuri",
      "Seiko",
      "Seina",
      "Seira",
      "Setsuko",
      "Shigeko",
      "Shiho",
      "Shihori",
      "Shiina",
      "Shimako",
      "Shina",
      "Shinako",
      "Shino",
      "Shiori",
      "Shizue",
      "Shizuka",
      "Shizuko",
      "Shizuku",
      "Shizuru",
      "Shōko",
      "Shuka",
      "Shuko",
      "Sonoko",
      "Sugako",
      "Sumi",
      "Sumie",
      "Sumika",
      "Sumiko",
      "Sumire",
      "Suzu",
      "Suzue",
      "Suzuka",
      "Suzuko",
      "Suzuna",
      "Tae",
      "Taeko",
      "Takako",
      "Takayo",
      "Takeko",
      "Tamako",
      "Tamami",
      "Tamao",
      "Tamayo",
      "Tamiko",
      "Tao",
      "Tarako",
      "Tatsuko",
      "Tazuko",
      "Teiko",
      "Tenka",
      "Teruko",
      "Tokiko",
      "Toko",
      "Tokuko",
      "Tomie",
      "Tomiko",
      "Tomoka",
      "Tomoko",
      "Tomoyo",
      "Toshiko",
      "Toyoko",
      "Tsubaki",
      "Tsugumi",
      "Tsukiko",
      "Tsukushi",
      "Tsuneko",
      "Tsuru",
      "Ui",
      "Uki",
      "Umeko",
      "Umi",
      "Uta",
      "Utami",
      "Waka",
      "Wakaba",
      "Wakako",
      "Wakana",
      "Yae",
      "Yaeko",
      "Yako",
      "Yasue",
      "Yasuko",
      "Yayoi",
      "Yoka",
      "Yoko",
      "Yoriko",
      "Yoshiko",
      "Yoshino",
      "Yua",
      "Yui",
      "Yuika",
      "Yuiko",
      "Yuina",
      "Yuka",
      "Yukako",
      "Yukari",
      "Yukie",
      "Yukika",
      "Yukiko",
      "Yukina",
      "Yukino",
      "Yūko",
      "Yume",
      "Yumeko",
      "Yumi",
      "Yumie",
      "Yumika",
      "Yumiko",
      "Yuna",
      "Yuno",
      "Yuri",
      "Yuria",
      "Yurie",
      "Yurika",
      "Yuriko",
      "Yurina",
      "Yuumi",
      "Yuuna",
      "Yuzuki"
    ],
    "Negara": "Jepang",
    "Jenis Kelamin": "Perempuan"
  }
]
};

// Version selection handling
const versionRadios = document.querySelectorAll('input[name="version"]');
const customSection = document.getElementById('custom-section');
const selectionSection = document.getElementById('selection-section');

function updateSelections(data) {
  const genderCheckboxes = document.getElementById('gender-checkboxes');
  const countryCheckboxes = document.getElementById('country-checkboxes');
  
  // Clear existing checkboxes
  genderCheckboxes.innerHTML = '';
  countryCheckboxes.innerHTML = '';

  // Get unique genders and countries
  const genders = [...new Set(data.map(item => item["Jenis Kelamin"]))];
  const countries = [...new Set(data.map(item => item.Negara))];

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

// Initialize with default data
updateSelections([...defaultData.male, ...defaultData.female]);

versionRadios.forEach(radio => {
  radio.addEventListener('change', function() {
    if (this.value === 'custom') {
      customSection.style.display = 'block';
      selectionSection.style.display = 'none';
    } else {
      customSection.style.display = 'none';
      selectionSection.style.display = 'block';
      updateSelections([...defaultData.male, ...defaultData.female]);
    }
  });
});

// File upload handling
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

// Name generation
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
        selectedCountries.includes(item.Negara) && 
        selectedGenders.includes(item["Jenis Kelamin"]))
      .flatMap(item => item.Nama.flatMap(name => name.split(' ')));
  } else {
    const allNames = [...defaultData.male, ...defaultData.female];
    filteredNames = allNames
      .filter(item => 
        selectedCountries.includes(item.Negara) && 
        selectedGenders.includes(item["Jenis Kelamin"]))
      .flatMap(item => item.Nama.flatMap(name => name.split(' ')));
  }

  if (filteredNames.length === 0) {
    alert("No names found for the selected options");
    return;
  }

  const results = document.getElementById('results');
  results.innerHTML = '';
  
  for (let i = 0; i < 10; i++) {
    const name1 = filteredNames[Math.floor(Math.random() * filteredNames.length)];
    const name2 = filteredNames[Math.floor(Math.random() * filteredNames.length)];
    const mixedName = `${name1} ${name2}`;
    
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result';
    resultDiv.innerHTML = `
      <span>${mixedName}</span>
      <button class="copy-btn" onclick="copyToClipboard(this, '${mixedName}')">Copy</button>
    `;
    results.appendChild(resultDiv);
  }
});
