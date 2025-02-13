const countries = [
  {
    id: 1,
    name: 'Russia',
  },
  {
    id: 3,
    name: 'Canada',
  },
  {
    id: 4,
    name: 'China',
  },
  {
    id: 6,
    name: 'Brazil',
  },
  {
    id: 7,
    name: 'Australia',
  },
  {
    id: 8,
    name: 'India',
  },
  {
    id: 9,
    name: 'Argentina',
  },
  {
    id: 10,
    name: 'Kazakhstan',
  },
  {
    id: 11,
    name: 'Algeria',
  },
  {
    id: 12,
    name: 'Democratic Republic of the Congo',
  },
  {
    id: 14,
    name: 'Greenland',
  },
  {
    id: 15,
    name: 'Saudi Arabia',
  },
  {
    id: 16,
    name: 'Mexico',
  },
  {
    id: 17,
    name: 'Indonesia',
  },
  {
    id: 18,
    name: 'Sudan',
  },
  {
    id: 19,
    name: 'Libya',
  },
  {
    id: 20,
    name: 'Iran',
  },
  {
    id: 21,
    name: 'Mongolia',
  },
  {
    id: 22,
    name: 'Peru',
  },
  {
    id: 23,
    name: 'Chad',
  },
  {
    id: 24,
    name: 'Niger',
  },
  {
    id: 25,
    name: 'Angola',
  },
  {
    id: 26,
    name: 'Mali',
  },
  {
    id: 27,
    name: 'South Africa',
  },
  {
    id: 28,
    name: 'Colombia',
  },
  {
    id: 29,
    name: 'Ethiopia',
  },
  {
    id: 30,
    name: 'Bolivia',
  },
  {
    id: 31,
    name: 'Mauritania',
  },
  {
    id: 32,
    name: 'Egypt',
  },
  {
    id: 33,
    name: 'Tanzania',
  },
  {
    id: 34,
    name: 'Nigeria',
  },
  {
    id: 35,
    name: 'Venezuela',
  },
  {
    id: 36,
    name: 'Pakistan',
  },
  {
    id: 37,
    name: 'Namibia',
  },
  {
    id: 38,
    name: 'Mozambique',
  },
  {
    id: 39,
    name: 'Turkey',
  },
  {
    id: 40,
    name: 'Chile',
  },
  {
    id: 41,
    name: 'Zambia',
  },
  {
    id: 42,
    name: 'Myanmar',
  },
  {
    id: 43,
    name: 'Afghanistan',
  },
  {
    id: 44,
    name: 'South Sudan',
  },
  {
    id: 45,
    name: 'France',
  },
  {
    id: 46,
    name: 'Somalia',
  },
  {
    id: 47,
    name: 'Central African Republic',
  },
  {
    id: 48,
    name: 'Ukraine',
  },
  {
    id: 49,
    name: 'Madagascar',
  },
  {
    id: 50,
    name: 'Botswana',
  },
  {
    id: 51,
    name: 'Kenya',
  },
  {
    id: 53,
    name: 'Thailand',
  },
  {
    id: 54,
    name: 'Spain',
  },
  {
    id: 55,
    name: 'Turkmenistan',
  },
  {
    id: 56,
    name: 'Cameroon',
  },
  {
    id: 57,
    name: 'Papua New Guinea',
  },
  {
    id: 58,
    name: 'Yemen',
  },
  {
    id: 59,
    name: 'Sweden',
  },
  {
    id: 60,
    name: 'Uzbekistan',
  },
  {
    id: 61,
    name: 'Morocco',
  },
  {
    id: 62,
    name: 'Iraq',
  },
  {
    id: 63,
    name: 'Paraguay',
  },
  {
    id: 64,
    name: 'Zimbabwe',
  },
  {
    id: 65,
    name: 'Norway',
  },
  {
    id: 66,
    name: 'Japan',
  },
  {
    id: 67,
    name: 'Germany',
  },
  {
    id: 68,
    name: 'Republic of the Congo',
  },
  {
    id: 69,
    name: 'Finland',
  },
  {
    id: 70,
    name: 'Vietnam',
  },
  {
    id: 71,
    name: 'Malaysia',
  },
  {
    id: 73,
    name: 'Ivory Coast',
  },
  {
    id: 74,
    name: 'Poland',
  },
  {
    id: 75,
    name: 'Oman',
  },
  {
    id: 76,
    name: 'Italy',
  },
  {
    id: 77,
    name: 'Philippines',
  },
  {
    id: 78,
    name: 'Ecuador',
  },
  {
    id: 79,
    name: 'Burkina Faso',
  },
  {
    id: 80,
    name: 'New Zealand',
  },
  {
    id: 81,
    name: 'Gabon',
  },
  {
    id: 82,
    name: 'Western Sahara',
  },
  {
    id: 83,
    name: 'Guinea',
  },
  {
    id: 84,
    name: 'United Kingdom',
  },
  {
    id: 85,
    name: 'Uganda',
  },
  {
    id: 86,
    name: 'Ghana',
  },
  {
    id: 87,
    name: 'Romania',
  },
  {
    id: 88,
    name: 'Laos',
  },
  {
    id: 89,
    name: 'Guyana',
  },
  {
    id: 90,
    name: 'Belarus',
  },
  {
    id: 91,
    name: 'Kyrgyzstan',
  },
  {
    id: 92,
    name: 'Senegal',
  },
  {
    id: 93,
    name: 'Syria',
  },
  {
    id: 94,
    name: 'Cambodia',
  },
  {
    id: 95,
    name: 'Somaliland',
  },
  {
    id: 96,
    name: 'Uruguay',
  },
  {
    id: 97,
    name: 'Suriname',
  },
  {
    id: 98,
    name: 'Tunisia',
  },
  {
    id: 99,
    name: 'Bangladesh',
  },
  {
    id: 100,
    name: 'Nepal',
  },
  {
    id: 101,
    name: 'Tajikistan',
  },
  {
    id: 102,
    name: 'Greece',
  },
  {
    id: 103,
    name: 'Nicaragua',
  },
  {
    id: 104,
    name: 'North Korea',
  },
  {
    id: 105,
    name: 'Malawi',
  },
  {
    id: 106,
    name: 'Eritrea',
  },
  {
    id: 107,
    name: 'Benin',
  },
  {
    id: 108,
    name: 'Honduras',
  },
  {
    id: 109,
    name: 'Liberia',
  },
  {
    id: 110,
    name: 'Bulgaria',
  },
  {
    id: 111,
    name: 'Cuba',
  },
  {
    id: 112,
    name: 'Guatemala',
  },
  {
    id: 113,
    name: 'Iceland',
  },
  {
    id: 114,
    name: 'South Korea',
  },
  {
    id: 115,
    name: 'Hungary',
  },
  {
    id: 116,
    name: 'Portugal',
  },
  {
    id: 117,
    name: 'Jordan',
  },
  {
    id: 118,
    name: 'Serbia',
  },
  {
    id: 119,
    name: 'Azerbaijan',
  },
  {
    id: 120,
    name: 'Austria',
  },
  {
    id: 121,
    name: 'United Arab Emirates',
  },
  {
    id: 122,
    name: 'Czech Republic',
  },
  {
    id: 123,
    name: 'Panama',
  },
  {
    id: 124,
    name: 'Sierra Leone',
  },
  {
    id: 125,
    name: 'Ireland',
  },
  {
    id: 126,
    name: 'Georgia',
  },
  {
    id: 127,
    name: 'Sri Lanka',
  },
  {
    id: 128,
    name: 'Lithuania',
  },
  {
    id: 129,
    name: 'Latvia',
  },
  {
    id: 130,
    name: 'Svalbard',
  },
  {
    id: 131,
    name: 'Togo',
  },
  {
    id: 132,
    name: 'Croatia',
  },
  {
    id: 133,
    name: 'Bosnia and Herzegovina',
  },
  {
    id: 134,
    name: 'Costa Rica',
  },
  {
    id: 135,
    name: 'Slovakia',
  },
  {
    id: 136,
    name: 'Dominican Republic',
  },
  {
    id: 137,
    name: 'Estonia',
  },
  {
    id: 138,
    name: 'Denmark',
  },
  {
    id: 139,
    name: 'Netherlands',
  },
  {
    id: 140,
    name: 'Switzerland',
  },
  {
    id: 141,
    name: 'Bhutan',
  },
  {
    id: 142,
    name: 'Guinea-Bissau',
  },
  {
    id: 143,
    name: 'Taiwan',
  },
  {
    id: 144,
    name: 'Moldova',
  },
  {
    id: 145,
    name: 'Belgium',
  },
  {
    id: 146,
    name: 'Lesotho',
  },
  {
    id: 147,
    name: 'Armenia',
  },
  {
    id: 148,
    name: 'Solomon Islands',
  },
  {
    id: 149,
    name: 'Albania',
  },
  {
    id: 150,
    name: 'Equatorial Guinea',
  },
  {
    id: 151,
    name: 'Burundi',
  },
  {
    id: 152,
    name: 'Haiti',
  },
  {
    id: 153,
    name: 'Rwanda',
  },
  {
    id: 154,
    name: 'North Macedonia',
  },
  {
    id: 155,
    name: 'Djibouti',
  },
  {
    id: 156,
    name: 'Belize',
  },
  {
    id: 157,
    name: 'Israel',
  },
  {
    id: 158,
    name: 'El Salvador',
  },
  {
    id: 159,
    name: 'Slovenia',
  },
  {
    id: 160,
    name: 'New Caledonia',
  },
  {
    id: 161,
    name: 'Fiji',
  },
  {
    id: 162,
    name: 'Kuwait',
  },
  {
    id: 163,
    name: 'Eswatini',
  },
  {
    id: 164,
    name: 'East Timor',
  },
  {
    id: 165,
    name: 'Bahamas',
  },
  {
    id: 166,
    name: 'Montenegro',
  },
  {
    id: 167,
    name: 'Vanuatu',
  },
  {
    id: 168,
    name: 'Falkland Islands',
  },
  {
    id: 169,
    name: 'Qatar',
  },
  {
    id: 170,
    name: 'Gambia',
  },
  {
    id: 171,
    name: 'Jamaica',
  },
  {
    id: 172,
    name: 'Kosovo',
  },
  {
    id: 173,
    name: 'Lebanon',
  },
  {
    id: 174,
    name: 'Cyprus',
  },
  {
    id: 175,
    name: 'Puerto Rico',
  },
  {
    id: 176,
    name: 'Abkhazia',
  },
  {
    id: 177,
    name: 'French Southern Territories',
  },
  {
    id: 178,
    name: 'Palestine',
  },
  {
    id: 179,
    name: 'Brunei',
  },
  {
    id: 180,
    name: 'Trinidad and Tobago',
  },
  {
    id: 181,
    name: 'French Polynesia',
  },
  {
    id: 182,
    name: 'Transnistria',
  },
  {
    id: 183,
    name: 'Cape Verde',
  },
  {
    id: 184,
    name: 'South Georgia and the South Sandwich Islands',
  },
  {
    id: 185,
    name: 'South Ossetia',
  },
  {
    id: 186,
    name: 'Northern Cyprus',
  },
  {
    id: 187,
    name: 'Samoa',
  },
  {
    id: 188,
    name: 'Luxembourg',
  },
  {
    id: 190,
    name: 'Mauritius',
  },
  {
    id: 191,
    name: 'Comoros',
  },
  {
    id: 192,
    name: 'Åland',
  },
  {
    id: 193,
    name: 'Faroe Islands',
  },
  {
    id: 194,
    name: 'Hong Kong',
  },
  {
    id: 195,
    name: 'São Tomé and Príncipe',
  },
  {
    id: 196,
    name: 'Turks and Caicos Islands',
  },
  {
    id: 197,
    name: 'Kiribati',
  },
  {
    id: 198,
    name: 'Bahrain',
  },
  {
    id: 199,
    name: 'Dominica',
  },
  {
    id: 200,
    name: 'Tonga',
  },
  {
    id: 201,
    name: 'Singapore',
  },
  {
    id: 202,
    name: 'Micronesia',
  },
  {
    id: 203,
    name: 'Saint Lucia',
  },
  {
    id: 204,
    name: 'Isle of Man',
  },
  {
    id: 205,
    name: 'Guam',
  },
  {
    id: 206,
    name: 'Andorra',
  },
  {
    id: 207,
    name: 'Palau',
  },
  {
    id: 208,
    name: 'Northern Mariana Islands',
  },
  {
    id: 209,
    name: 'Seychelles',
  },
  {
    id: 210,
    name: 'Curaçao',
  },
  {
    id: 211,
    name: 'Antigua and Barbuda',
  },
  {
    id: 212,
    name: 'Barbados',
  },
  {
    id: 213,
    name: 'Heard Island and McDonald Islands',
  },
  {
    id: 214,
    name: 'Saint Helena, Ascension and Tristan da Cunha',
  },
  {
    id: 215,
    name: 'Saint Vincent and the Grenadines',
  },
  {
    id: 216,
    name: 'Jan Mayen',
  },
  {
    id: 217,
    name: 'U.S. Virgin Islands',
  },
  {
    id: 218,
    name: 'Grenada',
  },
  {
    id: 219,
    name: 'Malta',
  },
  {
    id: 220,
    name: 'Maldives',
  },
  {
    id: 221,
    name: 'Bonaire',
  },
  {
    id: 222,
    name: 'Cayman Islands',
  },
  {
    id: 223,
    name: 'Saint Kitts and Nevis',
  },
  {
    id: 224,
    name: 'Niue',
  },
  {
    id: 225,
    name: 'Akrotiri and Dhekelia',
  },
  {
    id: 226,
    name: 'Saint Pierre and Miquelon',
  },
  {
    id: 227,
    name: 'Cook Islands',
  },
  {
    id: 228,
    name: 'American Samoa',
  },
  {
    id: 229,
    name: 'Marshall Islands',
  },
  {
    id: 230,
    name: 'Aruba',
  },
  {
    id: 231,
    name: 'Easter Island',
  },
  {
    id: 232,
    name: 'Liechtenstein',
  },
  {
    id: 233,
    name: 'British Virgin Islands',
  },
  {
    id: 234,
    name: 'Wallis and Futuna',
  },
  {
    id: 235,
    name: 'Christmas Island',
  },
  {
    id: 236,
    name: 'Jersey',
  },
  {
    id: 237,
    name: 'Montserrat',
  },
  {
    id: 238,
    name: 'Anguilla',
  },
  {
    id: 239,
    name: 'Guernsey',
  },
  {
    id: 240,
    name: 'San Marino',
  },
  {
    id: 241,
    name: 'British Indian Ocean Territory',
  },
  {
    id: 242,
    name: 'Bermuda',
  },
  {
    id: 243,
    name: 'Saint Martin',
  },
  {
    id: 244,
    name: 'Bouvet Island',
  },
  {
    id: 245,
    name: 'Pitcairn Islands',
  },
  {
    id: 246,
    name: 'Norfolk Island',
  },
  {
    id: 247,
    name: 'Sint Maarten',
  },
  {
    id: 248,
    name: 'U.S. Minor Outlying Islands',
  },
  {
    id: 249,
    name: 'Macau',
  },
  {
    id: 250,
    name: 'Tuvalu',
  },
  {
    id: 251,
    name: 'Saint Barthélemy',
  },
  {
    id: 252,
    name: 'Nauru',
  },
  {
    id: 253,
    name: 'Sint Eustatius',
  },
  {
    id: 254,
    name: 'Cocos (Keeling) Islands',
  },
  {
    id: 255,
    name: 'Saba',
  },
  {
    id: 256,
    name: 'Tokelau',
  },
  {
    id: 257,
    name: 'Gibraltar',
  },
  {
    id: 258,
    name: 'Clipperton Island',
  },
  {
    id: 259,
    name: 'Ashmore and Cartier Islands',
  },
  {
    id: 260,
    name: 'Coral Sea Islands',
  },
  {
    id: 262,
    name: 'Monaco',
  },
  {
    id: 263,
    name: 'Vatican City',
  },
];
