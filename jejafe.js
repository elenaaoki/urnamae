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
      "Jenis Kelamin": "Laki-laki"
    },
  {
    "Nama": [
      "Adhitya",
      "Adi",
      "Aditya",
      "Adri",
      "Adrie",
      "Agung",
      "Agus",
      "Ahmad",
      "Aji",
      "Alan",
      "Aldi",
      "Alex",
      "Andre",
      "Andri",
      "Angkasa",
      "Anwar",
      "Aprilio",
      "Ardi",
      "Ardy",
      "Arief",
      "Arif",
      "Awig",
      "Bagus",
      "Bambang",
      "Baswedan",
      "Bayu",
      "Bima",
      "Bimo",
      "Budi",
      "Candra",
      "Darmawan",
      "Desvan",
      "Dewandaru",
      "Dhani",
      "Didik",
      "Didit",
      "Dilla",
      "Dimas",
      "Dwi",
      "Eko",
      "Faisal",
      "Fajar",
      "Gibran",
      "Guruh",
      "Hanshel",
      "Heri",
      "Hermawan",
      "Heru",
      "Hery",
      "Ibnu",
      "Iskandar",
      "Iswahyudi",
      "Iwan",
      "Joko",
      "Kamil",
      "Kevin",
      "Krisna",
      "Lana",
      "Maulana",
      "Miswan",
      "Nugroho",
      "Nusantara",
      "Oktavianto",
      "Pamungkas",
      "Pangestu",
      "Prabowo",
      "Pratama",
      "Purnomo",
      "Puryanto",
      "Raka",
      "Reza",
      "Ricky",
      "Ridwan",
      "Ririn",
      "Risang",
      "Riski",
      "Riyanto",
      "Rizki",
      "Rizky",
      "Saloka",
      "Sandiaga Uno",
      "Santoso",
      "Saputra",
      "Saputro",
      "Setiawan",
      "Setiyawan",
      "Subianto",
      "Surya",
      "Syarif",
      "Taulany",
      "Tio",
      "Tri",
      "Trisnandar",
      "Tyo",
      "Uno",
      "Widodo",
      "Yoga",
      "Yudha",
      "Yusuf",
      "Zolla"
    ],
    "Negara": "Indonesia",
    "Jenis Kelamin": "Laki-laki"
  }
  ],
  female: [
  {
    "Nama": [
      "Ageha",
      "Ayase",
      "Ai",
      "Aoi",
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
      "Miyamori",
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
      "Mori",
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
      "Ren",
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
      "Sora",
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
  },
  {
    "Nama": [
      "Abby",
      "Abigail",
      "Ada",
      "Addison",
      "Adelaide",
      "Adele",
      "Adora",
      "Adriana",
      "Agnes",
      "Aileen",
      "Alaina",
      "Alanna",
      "Alberta",
      "Albina",
      "Aleana",
      "Alexa",
      "Alexandra",
      "Alexandria",
      "Alexis",
      "Alice",
      "Alicia",
      "Alisha",
      "Alison",
      "Allyson",
      "Alma",
      "Althea",
      "Alvina",
      "Alyson",
      "Amanda",
      "Amber",
      "Amberley",
      "Amelia",
      "Amy",
      "Ana",
      "Andrea",
      "Angel",
      "Angela",
      "Angelica",
      "Angelina",
      "Angella",
      "Angie",
      "Anna",
      "Annabelle",
      "Annabeth",
      "Anne",
      "Annette",
      "Annie",
      "Antonia",
      "Aoki",
      "April",
      "Arabella",
      "Arda",
      "Ariana",
      "Ariel",
      "Arya",
      "Ash",
      "Ashley",
      "Astrid",
      "Aubrey",
      "Audra",
      "Audrey",
      "Aurora",
      "Autumn",
      "Averil",
      "Avis",
      "Azalea",
      "Babette",
      "Barb",
      "Barbara",
      "Beatrice",
      "Beatrix",
      "Beau",
      "Becca",
      "Becki",
      "Becky",
      "Belinda",
      "Bella",
      "Berenice",
      "Bertha",
      "Betsy",
      "Bettina",
      "Betty",
      "Beverly",
      "Bianca",
      "Blair",
      "Blake",
      "Blanche",
      "Bobbi",
      "Bobby",
      "Bonnie",
      "Braden",
      "Brandy",
      "Brenda",
      "Brianna",
      "Bridget",
      "Brielle",
      "Brilliana",
      "Brooklyn",
      "Brynlee",
      "Bryony",
      "Caden",
      "Calla",
      "Candy",
      "Cara",
      "Cari",
      "Carina",
      "Carissa",
      "Carlena",
      "Carlene",
      "Carlie",
      "Carly",
      "Carmelita",
      "Carol",
      "Carol Ann",
      "Carol Anne",
      "Carole",
      "Carolina",
      "Caroline",
      "Carolyn",
      "Carrie Ann",
      "Carrie Anne",
      "Carroll",
      "Carry",
      "Carson",
      "Cary",
      "Casey",
      "Cassandra",
      "Cassidy",
      "Cathleen",
      "Cathy",
      "Cecilia",
      "Cecily",
      "Celestia",
      "Celia",
      "Celinda",
      "Chara",
      "Charis",
      "Charisse",
      "Charity",
      "Charla",
      "Charle",
      "Charlee",
      "Charlene",
      "Charley",
      "Charli",
      "Charlie",
      "Charlotte",
      "Charly",
      "Charlyne",
      "Charmaine",
      "Chas",
      "Chelsea",
      "Cherry",
      "Cheryl",
      "Chloe",
      "Christabel",
      "Christina",
      "Christine",
      "Christy",
      "Cindy",
      "Claire",
      "Clara",
      "Clare",
      "Claribel",
      "Clarice",
      "Clarissa",
      "Claudia",
      "Clementine",
      "Clover",
      "Cody",
      "Colette",
      "Colleen",
      "Cora",
      "Coral",
      "Coraline",
      "Cordelia",
      "Courtney",
      "Crystal",
      "Cynthia",
      "Daenerys",
      "Daisy",
      "Dana",
      "Dani",
      "Danielle",
      "Danna",
      "Daphne",
      "Darla",
      "Darlene",
      "Davina",
      "Dawn",
      "Deanna",
      "Deanne",
      "Debbie",
      "Deborah",
      "Dede",
      "Deja",
      "Delaney",
      "Delia",
      "Demetria",
      "Demi",
      "Destiny",
      "Devon",
      "Diamond",
      "Diana",
      "Diane",
      "Dimity",
      "Donna",
      "Dora",
      "Doreen",
      "Doris",
      "Dorothy",
      "Dottie",
      "Drew",
      "Dulcie",
      "Eadgifu",
      "Ealdgyth",
      "Ebony",
      "Edburga",
      "Eden",
      "Edith",
      "Edna",
      "Edris",
      "Edwina",
      "Effie",
      "Eileen",
      "Elaine",
      "Eleanor",
      "Elektra",
      "Elena",
      "Elisha",
      "Eliza",
      "Elizabeth",
      "Ella",
      "Elle",
      "Ellen",
      "Ellie",
      "Ellis",
      "Elora",
      "Emerald",
      "Emily",
      "Emma",
      "Enid",
      "Erika",
      "Erin",
      "Estelle",
      "Esther",
      "Esty",
      "Ethel",
      "Ethelreda",
      "Etty",
      "Eudora",
      "Eva",
      "Evan",
      "Eve",
      "Evelyn",
      "Fabienne",
      "Faith",
      "Faye",
      "Felicity",
      "Fern",
      "Finn",
      "Fiona",
      "Fleur",
      "Florence",
      "Frances",
      "Francie",
      "Francine",
      "Frederica",
      "Frida",
      "Gage",
      "Gale",
      "Gemma",
      "Georgene",
      "Georgia",
      "Georgiana",
      "Georgina",
      "Gia",
      "Gina",
      "Ginny",
      "Giselle",
      "Glenda",
      "Glenna",
      "Gloria",
      "Glynis",
      "Goldie",
      "Grace",
      "Gwen",
      "Gwenda",
      "Gwendolen",
      "Gwendoline",
      "Gwendolyn",
      "Gwyneth",
      "Haisley",
      "Haley",
      "Hannah",
      "Harmony",
      "Harriet",
      "Hayden",
      "Hayley",
      "Hazel",
      "Heather",
      "Heidi",
      "Helen",
      "Helena",
      "Helene",
      "Henrietta",
      "Hester",
      "Hilary",
      "Hilda",
      "Hodierna",
      "Holly",
      "Honor",
      "Hope",
      "Ida",
      "Imelda",
      "Imogen",
      "Ingrid",
      "Iona",
      "Irene",
      "Iris",
      "Irma",
      "Isa",
      "Isabel",
      "Isabella",
      "Isla",
      "Ivy",
      "Jacinta",
      "Jacqueline",
      "Jade",
      "Jan",
      "Jana",
      "Jane",
      "Janee",
      "Janelle",
      "Janet",
      "Janey",
      "Janie",
      "January",
      "Jasmine",
      "Jay",
      "Jayda",
      "Jayden",
      "Jayne",
      "Jaynie",
      "Jean",
      "Jeanie",
      "Jeannie",
      "Jemima",
      "Jemma",
      "Jenna",
      "Jennifer",
      "Jenny",
      "Jensen",
      "Jerri",
      "Jerry",
      "Jess",
      "Jessica",
      "Jessie",
      "Jill",
      "Joanna",
      "Joanne",
      "Jodi",
      "Jodie",
      "Jody",
      "Joelle",
      "Joey",
      "Johnny",
      "Jolie",
      "Josephine",
      "Josie",
      "Joy",
      "Joyce",
      "Judith",
      "Julia",
      "Julianne",
      "Julie",
      "Juliet",
      "June",
      "Justine",
      "Kailey",
      "Kalla",
      "Kara",
      "Karen",
      "Karin",
      "Karlee",
      "Karlene",
      "Karli",
      "Karlie",
      "Karly",
      "Karolyn",
      "Karrie",
      "Karyn",
      "Karyne",
      "Kasey",
      "Kate",
      "Katey",
      "Kathleen",
      "Kathryn",
      "Kathy",
      "Katie",
      "Katina",
      "Katrina",
      "Katy",
      "Kay",
      "Kayla",
      "Kaylee",
      "Kelly",
      "Kelsey",
      "Kierra",
      "Kim",
      "Kimberly",
      "Kira",
      "Kirsteen",
      "Kirstin",
      "Kitty",
      "Krista",
      "Kristen",
      "Kristi",
      "Kristin",
      "Kristy",
      "Kylie",
      "Kyra",
      "Lacey",
      "Lana",
      "Lanna",
      "Lara",
      "Larissa",
      "Laura",
      "Laurel",
      "Lauren",
      "Laurence",
      "Lauretta",
      "Laurie",
      "Lauryn",
      "Lavender",
      "Leanne",
      "Lee",
      "Leila",
      "Leisha",
      "Lena",
      "Lenna",
      "Leona",
      "Leonora",
      "Leslie",
      "Lettice",
      "Lexi",
      "Lila",
      "Liliana",
      "Lilibet",
      "Lilibeth",
      "Lilla",
      "Lillian",
      "Lillie",
      "Lilly",
      "Lily",
      "Lina",
      "Linda",
      "Lindsay",
      "Lindy",
      "Lisa",
      "Liza",
      "Lizzie",
      "Loraine",
      "Lorena",
      "Loretta",
      "Lori",
      "Lorinda",
      "Lorna",
      "Lorraine",
      "Louella",
      "Louisa",
      "Louise",
      "Lucia",
      "Lucinda",
      "Lucy",
      "Lydia",
      "Lyndsay",
      "Lynnette",
      "Lysette",
      "Mabel",
      "Mable",
      "Macy",
      "Madelaine",
      "Madeleine",
      "Madelyn",
      "Madge",
      "Madison",
      "Madonna",
      "Mae",
      "Maggie",
      "Magnolia",
      "Mallory",
      "Mandy",
      "Mara",
      "Marcia",
      "Marcie",
      "Margaret",
      "Margie",
      "Margo",
      "Maria",
      "Mariah",
      "Marian",
      "Marianne",
      "Marie",
      "Marigold",
      "Marigold",
      "Marilyn",
      "Marina",
      "Marissa",
      "Marjorie",
      "Marlene",
      "Marsha",
      "Marta",
      "Martina",
      "Mary",
      "Mary Belle",
      "Mason",
      "Matilda",
      "Maude",
      "Maura",
      "Maureen",
      "Mavis",
      "Maxine",
      "Maxine",
      "May",
      "Maya",
      "Mayola",
      "McKenna",
      "Meara",
      "Medea",
      "Megan",
      "Mehitable",
      "Mel",
      "Melanie",
      "Melina",
      "Melinda",
      "Melissa",
      "Melody",
      "Mercedes",
      "Meredith",
      "Merilyn",
      "Merle",
      "Merrilyn",
      "Mia",
      "Michele",
      "Michelle",
      "Mila",
      "Mildred",
      "Miley",
      "Millicent",
      "Millie",
      "Mina",
      "Mindi",
      "Mindy",
      "Minnie",
      "Mira",
      "Miranda",
      "Miriam",
      "Misty",
      "Moira",
      "Molly",
      "Muriel",
      "Myra",
      "Nadia",
      "Nadine",
      "Naila",
      "Naomi",
      "Narcissa",
      "Nathalie",
      "Nia",
      "Nicole",
      "Nikki",
      "Nina",
      "Noel",
      "Noella",
      "Noelle",
      "Odette",
      "Olive",
      "Olivia",
      "Paige",
      "Palmer",
      "Pamela",
      "Paris",
      "Patience",
      "Patrice",
      "Patsy",
      "Patty",
      "Paula",
      "Paulina",
      "Pearl",
      "Peggy",
      "Penelope",
      "Penny",
      "Pepper",
      "Perry",
      "Persis",
      "Petra",
      "Petrina",
      "Petula",
      "Petunia",
      "Philippa",
      "Phoebe",
      "Pixie",
      "Posy",
      "Precious",
      "Primrose",
      "Priscilla",
      "Quendrida",
      "Rachel",
      "Rain",
      "Raleigh",
      "Ramona",
      "Randy",
      "Reba",
      "Rebecca",
      "Regina",
      "Renesmee",
      "Rhiannon",
      "Rhoda",
      "Rhonda",
      "Riley",
      "Risa",
      "Rita",
      "Roberta",
      "Robin",
      "Romilda",
      "Ronnie",
      "Rosaleen",
      "Rosalie",
      "Rosalind",
      "Rosalyn",
      "Rosamund",
      "Rose",
      "Rosemary",
      "Rosie",
      "Ruby",
      "Russi",
      "Ruth",
      "Sabrina",
      "Sadie",
      "Salma",
      "Sam",
      "Samantha",
      "Sandi",
      "Sandra",
      "Sandy",
      "Sapphire",
      "Sarah",
      "Sarina",
      "Sasha",
      "Scarlett",
      "Selena",
      "Selma",
      "Serena",
      "Shania",
      "Sharla",
      "Sharleen",
      "Sharlene",
      "Sharon",
      "Sheena",
      "Shelley",
      "Sherry",
      "Sheryl",
      "Shirley",
      "Sibyl",
      "Sid",
      "Sidney",
      "Sienna",
      "Sierra",
      "Simone",
      "Sky",
      "Skyler",
      "Sophia",
      "Sophie",
      "Sorrel",
      "Stacy",
      "Stella",
      "Stephanie",
      "Stevie",
      "Stratus",
      "Sue",
      "Summer",
      "Sunngifu",
      "Susan",
      "Susanna",
      "Susanne",
      "Sutton",
      "Suzanne",
      "Syd",
      "Sydney",
      "Sylvia",
      "Sylvie",
      "Tabitha",
      "Talitha",
      "Tamara",
      "Tara",
      "Taylor",
      "Teresa",
      "Terry",
      "Thelma",
      "Thomasina",
      "Tiffany",
      "Tigerlily",
      "Tori",
      "Torres",
      "Torrie",
      "Tracy",
      "Trish",
      "Trisha",
      "Trudy",
      "Tyler",
      "Tyra",
      "Ursula",
      "Val",
      "Valarie",
      "Valda",
      "Valerie",
      "Vanessa",
      "Velma",
      "Velma",
      "Velvet",
      "Venetia",
      "Venus",
      "Vera",
      "Veronica",
      "Vicky",
      "Victoria",
      "Vilma",
      "Viola",
      "Violet",
      "Violette",
      "Virginia",
      "Vivian",
      "Wanda",
      "Waverly",
      "Wednesday",
      "Wendy",
      "Whitney",
      "Wilma",
      "Wilson",
      "Winifred",
      "Winnie",
      "Winnifred",
      "Yancy",
      "Yasmin",
      "Yvette",
      "Yvonne"
    ],
    "Negara": "Inggris",
    "Jenis Kelamin": "Perempuan"
  },
  {
    "Nama": [
      "Adelina",
      "Adinda",
      "Agustina",
      "Amanda",
      "Ambar",
      "Ambarsari",
      "Ambarwati",
      "Amelia",
      "Amirah",
      "Ana",
      "Anandya",
      "Anastasia",
      "Andi",
      "Andini",
      "Anggraeni",
      "Anggraini",
      "Anindya",
      "Anis",
      "Anita",
      "Anna",
      "Anne",
      "Annisa",
      "Aprilia",
      "Apriyana",
      "Arum",
      "Aryani",
      "Asmara",
      "Astrid",
      "Aulia",
      "Aurel",
      "Aurelia",
      "Bianca",
      "Cantika",
      "Citra",
      "Clara",
      "Clarissa",
      "Claudia",
      "Cynthia",
      "Dea",
      "Delia",
      "Deswita",
      "Desyana",
      "Dewi",
      "Dian",
      "Eka",
      "Ela",
      "Elena",
      "Elvira",
      "Fadilah",
      "Febri",
      "Fitri",
      "Fransisca",
      "Freya",
      "Gabriella",
      "Gendis",
      "Gina",
      "Gisella",
      "Gracia",
      "Ica",
      "Ima",
      "Imma",
      "Imtiyas",
      "Indrawati",
      "Inne",
      "Intan",
      "Ira",
      "Kartika",
      "Keira",
      "Kiki",
      "Klara",
      "Lana",
      "Lariska",
      "Lastri",
      "Laura",
      "Lauren",
      "Laurentia",
      "Lestari",
      "Lina",
      "Mawar",
      "Melati",
      "Melissa",
      "Mentari",
      "Monita",
      "Nabila",
      "Nadia",
      "Nadine",
      "Natasha",
      "Natasya",
      "Naura",
      "Nayla",
      "Ninda",
      "Ningrum",
      "Nisa",
      "Novi",
      "Novia",
      "Novita",
      "Nur",
      "Octavia",
      "Okvita",
      "Olive",
      "Olivia",
      "Pertiwi",
      "Pradita",
      "Priscilla",
      "Puspita",
      "Putri",
      "Putriana",
      "Ratna",
      "Ratri",
      "Raya",
      "Renata",
      "Retno",
      "Rina",
      "Rizka",
      "Sabrina",
      "Safira",
      "Safitri",
      "Sarah",
      "Sari",
      "Sekar",
      "Septia",
      "Silfia",
      "Silvia",
      "Sofia",
      "Syifa",
      "Tantri",
      "Tiara",
      "Tiwi",
      "Tyas",
      "Venna",
      "Vivi",
      "Widya",
      "Widyawati",
      "Wulan",
      "Wulandari",
      "Yeni"
    ],
    "Negara": "Indonesia",
    "Jenis Kelamin": "Perempuan"
  }
]
};

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

// Event Listeners
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
