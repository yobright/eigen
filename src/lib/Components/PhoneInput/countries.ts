interface CountryData {
  name: string
  iso2: string
  dialCode: string
  areaCodes?: string[]
  flag: string
  mask: string
  internationalPrefixes?: string[]
  trunkPrefix?: string
  priority: number
}

export const countries: CountryData[] = [
  {
    name: "Afghanistan (‫افغانستان‬‎)",
    iso2: "af",
    dialCode: "93",
    priority: 32225560,
    flag: "🇦🇫",
    mask: "999 999 9999",
  },
  {
    name: "Åland Islands",
    iso2: "ax",
    dialCode: "358",
    priority: 29981,
    flag: "🇦🇽",
    mask: "999 9999999",
  },
  {
    name: "Albania (Shqipëri)",
    iso2: "al",
    dialCode: "355",
    priority: 2845955,
    flag: "🇦🇱",
    mask: "999 999 9999",
  },
  {
    name: "Algeria (‫الجزائر‬‎)",
    iso2: "dz",
    dialCode: "213",
    trunkPrefix: "0",
    internationalPrefixes: ["00"],
    priority: 43000000,
    flag: "🇩🇿",
    mask: "9999 99 99 99",
  },
  {
    name: "American Samoa",
    iso2: "as",
    dialCode: "1684",
    priority: 56700,
    flag: "🇦🇸",
    mask: "(999) 999-9999",
  },
  {
    name: "Andorra",
    iso2: "ad",
    dialCode: "376",
    priority: 77543,
    flag: "🇦🇩",
    mask: "999 999",
  },
  {
    name: "Angola",
    iso2: "ao",
    dialCode: "244",
    priority: 31127674,
    flag: "🇦🇴",
    mask: "999 999 999",
  },
  {
    name: "Anguilla",
    iso2: "ai",
    dialCode: "1264",
    priority: 14869,
    flag: "🇦🇮",
    mask: "(999) 999-9999",
  },
  {
    name: "Antigua and Barbuda",
    iso2: "ag",
    dialCode: "1268",
    priority: 96453,
    flag: "🇦🇬",
    mask: "(999) 999-9999",
  },
  {
    name: "Argentina",
    iso2: "ar",
    dialCode: "54",
    trunkPrefix: "0",
    internationalPrefixes: ["00"],
    priority: 45376763,
    flag: "🇦🇷",
    mask: "999 99-9999-9999",
  },
  {
    name: "Armenia (Հայաստան)",
    iso2: "am",
    dialCode: "374",
    priority: 2956900,
    flag: "🇦🇲",
    mask: "999 999999",
  },
  {
    name: "Aruba",
    iso2: "aw",
    dialCode: "297",
    priority: 112190,
    flag: "🇦🇼",
    mask: "999 9999",
  },
  {
    name: "Australia",
    iso2: "au",
    dialCode: "61",
    trunkPrefix: "0",
    internationalPrefixes: ["0011", "0015", "0014", "0018", "0019"],
    priority: 25756880,
    flag: "🇦🇺",
    mask: "9999 999 999",
  },
  {
    name: "Austria (Österreich)",
    iso2: "at",
    dialCode: "43",
    priority: 8902600,
    flag: "🇦🇹",
    mask: "9999 999999",
  },
  {
    name: "Azerbaijan (Azərbaycan)",
    iso2: "az",
    dialCode: "994",
    priority: 10067108,
    flag: "🇦🇿",
    mask: "999 999 99 99",
  },
  {
    name: "Bahamas",
    iso2: "bs",
    dialCode: "1242",
    priority: 385340,
    flag: "🇧🇸",
    mask: "(999) 999-999",
  },
  {
    name: "Bahrain (‫البحرين‬‎)",
    iso2: "bh",
    dialCode: "973",
    priority: 1543300,
    flag: "🇧🇭",
    mask: "9999 9999",
  },
  {
    name: "Bangladesh (বাংলাদেশ)",
    iso2: "bd",
    dialCode: "880",
    trunkPrefix: "0",
    internationalPrefixes: ["00"],
    priority: 168872634,
    flag: "🇧🇩",
    mask: "99999-999999",
  },
  {
    name: "Barbados",
    iso2: "bb",
    dialCode: "1246",
    priority: 287025,
    flag: "🇧🇧",
    mask: "(999) 999-9999",
  },
  {
    name: "Belarus (Беларусь)",
    iso2: "by",
    dialCode: "375",
    priority: 9397800,
    flag: "🇧🇾",
    mask: "9 999 999-99-99",
  },
  {
    name: "Belgium (België)",
    iso2: "be",
    dialCode: "32",
    trunkPrefix: "0",
    internationalPrefixes: ["00"],
    priority: 11528375,
    flag: "🇧🇪",
    mask: "9999 99 99 99",
  },
  {
    name: "Belize",
    iso2: "bz",
    dialCode: "501",
    priority: 408487,
    flag: "🇧🇿",
    mask: "999-9999",
  },
  {
    name: "Benin (Bénin)",
    iso2: "bj",
    dialCode: "229",
    priority: 11733059,
    flag: "🇧🇯",
    mask: "99 99 99 99",
  },
  {
    name: "Bermuda",
    iso2: "bm",
    dialCode: "1441",
    priority: 64027,
    flag: "🇧🇲",
    mask: "(999) 999-9999",
  },
  {
    name: "Bhutan (འབྲུག)",
    iso2: "bt",
    dialCode: "975",
    priority: 741672,
    flag: "🇧🇹",
    mask: "99 99 99 99",
  },
  {
    name: "Bolivia",
    iso2: "bo",
    dialCode: "591",
    priority: 11469896,
    flag: "🇧🇴",
    mask: "99999999",
  },
  {
    name: "Bosnia and Herzegovina (Босна и Херцеговина)",
    iso2: "ba",
    dialCode: "387",
    priority: 3301000,
    flag: "🇧🇦",
    mask: "999 999 999",
  },
  {
    name: "Botswana",
    iso2: "bw",
    dialCode: "267",
    priority: 2338851,
    flag: "🇧🇼",
    mask: "99 999 999",
  },
  {
    name: "Brazil (Brasil)",
    iso2: "br",
    dialCode: "55",
    trunkPrefix: "0",
    internationalPrefixes: ["0015", "0021", "0031", "0041"],
    priority: 211729470,
    flag: "🇧🇷",
    mask: "(99) 99999 9999",
  },
  {
    name: "British Indian Ocean Territory",
    iso2: "io",
    dialCode: "246",
    priority: 0,
    flag: "🇮🇴",
    mask: "(999) 999-9999",
  },
  {
    name: "British Virgin Islands",
    iso2: "vg",
    dialCode: "1284",
    priority: 104578,
    flag: "🇻🇬",
    mask: "999-999-9999",
  },
  {
    name: "Brunei",
    iso2: "bn",
    dialCode: "673",
    priority: 459500,
    flag: "🇧🇳",
    mask: "999 9999",
  },
  {
    name: "Bulgaria (България)",
    iso2: "bg",
    dialCode: "359",
    priority: 6951482,
    flag: "🇧🇬",
    mask: "999 999 999",
  },
  {
    name: "Burkina Faso",
    iso2: "bf",
    dialCode: "226",
    priority: 21510181,
    flag: "🇧🇫",
    mask: "99 99 99 99",
  },
  {
    name: "Burundi (Uburundi)",
    iso2: "bi",
    dialCode: "257",
    priority: 10953317,
    flag: "🇧🇮",
    mask: "99 99 99 99",
  },
  {
    name: "Cambodia (កម្ពុជា)",
    iso2: "kh",
    dialCode: "855",
    priority: 15288489,
    flag: "🇰🇭",
    mask: "999 999 999",
  },
  {
    name: "Cameroon (Cameroun)",
    iso2: "cm",
    dialCode: "237",
    priority: 26545864,
    flag: "🇨🇲",
    mask: "9 99 99 99 99",
  },
  {
    name: "Canada",
    iso2: "ca",
    dialCode: "1",
    trunkPrefix: "1",
    internationalPrefixes: ["011"],
    priority: 38083197,
    areaCodes: [
      "204",
      "226",
      "236",
      "249",
      "250",
      "289",
      "306",
      "343",
      "365",
      "387",
      "403",
      "416",
      "418",
      "431",
      "437",
      "438",
      "450",
      "506",
      "514",
      "519",
      "548",
      "579",
      "581",
      "587",
      "604",
      "613",
      "639",
      "647",
      "672",
      "705",
      "709",
      "742",
      "778",
      "780",
      "782",
      "807",
      "819",
      "825",
      "867",
      "873",
      "902",
      "905",
    ],
    flag: "🇨🇦",
    mask: "(999) 999-9999",
  },
  {
    name: "Cape Verde (Kabu Verdi)",
    iso2: "cv",
    dialCode: "238",
    priority: 550483,
    flag: "🇨🇻",
    mask: "999 99 99",
  },
  {
    name: "Caribbean Netherlands",
    iso2: "bq",
    flag: "🇧🇶",
    dialCode: "599",
    priority: 1,
    mask: "999 9999",
  },
  {
    name: "Cayman Islands",
    iso2: "ky",
    dialCode: "1345",
    priority: 65813,
    flag: "🇰🇾",
    mask: "999 9999",
  },
  {
    name: "Central African Republic (République centrafricaine)",
    iso2: "cf",
    dialCode: "236",
    priority: 5496011,
    flag: "🇨🇫",
    mask: "99 99 99 99",
  },
  {
    name: "Chad (Tchad)",
    iso2: "td",
    dialCode: "235",
    priority: 16244513,
    flag: "🇹🇩",
    mask: "99 99 99 99",
  },
  {
    name: "Chile",
    iso2: "cl",
    dialCode: "56",
    priority: 19458310,
    flag: "🇨🇱",
    mask: "(9) 9999 9999",
  },
  {
    name: "China (中国)",
    iso2: "cn",
    dialCode: "86",
    trunkPrefix: "0",
    internationalPrefixes: ["00"],
    priority: 1403322440,
    flag: "🇨🇳",
    mask: "999 9999 9999",
  },
  {
    name: "Christmas Island",
    iso2: "cx",
    dialCode: "61",
    priority: 1955,
    flag: "🇨🇽",
    mask: "9999 999 999",
  },
  {
    name: "Cocos (Keeling) Islands",
    iso2: "cc",
    dialCode: "61",
    priority: 500,
    flag: "🇨🇨",
    mask: "9999 999 999",
  },
  {
    name: "Colombia",
    iso2: "co",
    dialCode: "57",
    trunkPrefix: "0",
    internationalPrefixes: ["005", "007", "009"],
    priority: 50372424,
    flag: "🇨🇴",
    mask: "999 9999999",
  },
  {
    name: "Comoros (‫جزر القمر‬‎)",
    iso2: "km",
    dialCode: "269",
    priority: 873724,
    flag: "🇰🇲",
    mask: "999 99 99",
  },
  {
    name: "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
    iso2: "cd",
    dialCode: "243",
    trunkPrefix: "0",
    internationalPrefixes: ["00"],
    priority: 89561404,
    flag: "🇨🇩",
    mask: "99 999 9999",
  },
  {
    name: "Congo (Republic) (Congo-Brazzaville)",
    iso2: "cg",
    dialCode: "242",
    priority: 5518092,
    flag: "🇨🇬",
    mask: "9999 999 999",
  },
  {
    name: "Cook Islands",
    iso2: "ck",
    dialCode: "682",
    priority: 15200,
    flag: "🇨🇰",
    mask: "99 999",
  },
  {
    name: "Costa Rica",
    iso2: "cr",
    dialCode: "506",
    priority: 5058007,
    flag: "🇨🇷",
    mask: "9999 9999",
  },
  {
    name: "Côte d’Ivoire",
    iso2: "ci",
    dialCode: "225",
    priority: 25823071,
    flag: "🇨🇮",
    mask: "99 99 99 99",
  },
  {
    name: "Croatia (Hrvatska)",
    iso2: "hr",
    dialCode: "385",
    priority: 4076246,
    flag: "🇭🇷",
    mask: "999 999 9999",
  },
  {
    name: "Cuba",
    iso2: "cu",
    dialCode: "53",
    priority: 11193470,
    flag: "🇨🇺",
    mask: "99 9999999",
  },
  {
    name: "Curaçao",
    iso2: "cw",
    dialCode: "599",
    priority: 0,
    flag: "🇨🇼",
    mask: "9 999 9999",
  },
  {
    name: "Cyprus (Κύπρος)",
    iso2: "cy",
    dialCode: "357",
    priority: 875900,
    flag: "🇨🇾",
    mask: "99 999999",
  },
  {
    name: "Czech Republic (Česká republika)",
    iso2: "cz",
    dialCode: "420",
    priority: 10693939,
    flag: "🇨🇿",
    mask: "999 999 999",
  },
  {
    name: "Denmark (Danmark)",
    iso2: "dk",
    dialCode: "45",
    priority: 5824857,
    flag: "🇩🇰",
    mask: "99 99 99 99",
  },
  {
    name: "Djibouti",
    iso2: "dj",
    dialCode: "253",
    priority: 1078373,
    flag: "🇩🇯",
    mask: "99 99 99 99",
  },
  {
    name: "Dominica",
    iso2: "dm",
    dialCode: "1767",
    priority: 71808,
    flag: "🇩🇲",
    mask: "(999) 999-9999",
  },
  {
    name: "Dominican Republic (República Dominicana)",
    iso2: "do",
    dialCode: "1",
    priority: 10448499,
    areaCodes: ["809", "829", "849"],
    flag: "🇩🇴",
    mask: "999-999-9999",
  },
  {
    name: "Ecuador",
    iso2: "ec",
    dialCode: "593",
    priority: 17516888,
    flag: "🇪🇨",
    mask: "999 999 9999",
  },
  {
    name: "Egypt (‫مصر‬‎)",
    iso2: "eg",
    dialCode: "20",
    trunkPrefix: "0",
    internationalPrefixes: ["00"],
    priority: 100554998,
    flag: "🇪🇬",
    mask: "9999 999 9999",
  },
  {
    name: "El Salvador",
    iso2: "sv",
    dialCode: "503",
    priority: 6486201,
    flag: "🇸🇻",
    mask: "9999 9999",
  },
  {
    name: "Equatorial Guinea (Guinea Ecuatorial)",
    iso2: "gq",
    dialCode: "240",
    priority: 1454789,
    flag: "🇬🇶",
    mask: "999 999 999",
  },
  {
    name: "Eritrea",
    iso2: "er",
    dialCode: "291",
    priority: 3497117,
    flag: "🇪🇷",
    mask: "99 999 999",
  },
  {
    name: "Estonia (Eesti)",
    iso2: "ee",
    dialCode: "372",
    priority: 1328976,
    flag: "🇪🇪",
    mask: "9999 9999",
  },
  {
    name: "Ethiopia",
    iso2: "et",
    dialCode: "251",
    trunkPrefix: "0",
    internationalPrefixes: ["00"],
    priority: 98665000,
    flag: "🇪🇹",
    mask: "999 999 9999",
  },
  {
    name: "Falkland Islands (Islas Malvinas)",
    iso2: "fk",
    dialCode: "500",
    priority: 3198,
    flag: "🇫🇰",
    mask: "99999",
  },
  {
    name: "Faroe Islands (Føroyar)",
    iso2: "fo",
    dialCode: "298",
    priority: 52484,
    flag: "🇫🇴",
    mask: "999999",
  },
  {
    name: "Fiji",
    iso2: "fj",
    dialCode: "679",
    priority: 884887,
    flag: "🇫🇯",
    mask: "999 9999",
  },
  {
    name: "Finland (Suomi)",
    iso2: "fi",
    dialCode: "358",
    priority: 5498027,
    flag: "🇫🇮",
    mask: "999 9999999",
  },
  {
    name: "France",
    iso2: "fr",
    dialCode: "33",
    trunkPrefix: "0",
    internationalPrefixes: ["00"],
    priority: 67067000,
    flag: "🇫🇷",
    mask: "99 99 99 99 99",
  },
  {
    name: "French Guiana (Guyane française)",
    iso2: "gf",
    dialCode: "594",
    priority: 290691,
    flag: "🇬🇫",
    mask: "9999 99 99 99",
  },
  {
    name: "French Polynesia (Polynésie française)",
    iso2: "pf",
    dialCode: "689",
    priority: 275918,
    flag: "🇵🇫",
    mask: "99 99 99 99",
  },
  {
    name: "Gabon",
    iso2: "ga",
    dialCode: "241",
    priority: 2172579,
    flag: "🇬🇦",
    mask: "99 99 99 99",
  },
  {
    name: "Gambia",
    iso2: "gm",
    dialCode: "220",
    priority: 2347706,
    flag: "🇬🇲",
    mask: "999 9999",
  },
  {
    name: "Georgia (საქართველო)",
    iso2: "ge",
    dialCode: "995",
    priority: 3716858,
    flag: "🇬🇪",
    mask: "999 99 99 99",
  },
  {
    name: "Germany (Deutschland)",
    iso2: "de",
    dialCode: "49",
    trunkPrefix: "0",
    internationalPrefixes: ["00"],
    priority: 83166711,
    flag: "🇩🇪",
    mask: "99 99999999",
  },
  {
    name: "Ghana (Gaana)",
    iso2: "gh",
    dialCode: "233",
    priority: 30280811,
    flag: "🇬🇭",
    mask: "999 999 9999",
  },
  {
    name: "Gibraltar",
    iso2: "gi",
    dialCode: "350",
    priority: 33691,
    flag: "🇬🇮",
    mask: "99999999",
  },
  {
    name: "Greece (Ελλάδα)",
    iso2: "gr",
    dialCode: "30",
    priority: 10724599,
    flag: "🇬🇷",
    mask: "999 999 9999",
  },
  {
    name: "Greenland (Kalaallit Nunaat)",
    iso2: "gl",
    dialCode: "299",
    priority: 56081,
    flag: "🇬🇱",
    mask: "99 99 99",
  },
  {
    name: "Grenada",
    iso2: "gd",
    dialCode: "1473",
    priority: 112003,
    flag: "🇬🇩",
    mask: "(999) 999-9999",
  },
  {
    name: "Guadeloupe",
    iso2: "gp",
    dialCode: "590",
    priority: 395700,
    flag: "🇬🇵",
    mask: "9999 99 99 99",
  },
  {
    name: "Guam",
    iso2: "gu",
    dialCode: "1671",
    priority: 172400,
    flag: "🇬🇺",
    mask: "(999) 999-9999",
  },
  {
    name: "Guatemala",
    iso2: "gt",
    dialCode: "502",
    priority: 16604026,
    flag: "🇬🇹",
    mask: "9999 9999",
  },
  {
    name: "Guernsey",
    iso2: "gg",
    dialCode: "44",
    priority: 63196,
    flag: "🇬🇬",
    mask: "99999 999999",
  },
  {
    name: "Guinea (Guinée)",
    iso2: "gn",
    dialCode: "224",
    priority: 12218357,
    flag: "🇬🇳",
    mask: "999 99 99 99",
  },
  {
    name: "Guinea-Bissau (Guiné Bissau)",
    iso2: "gw",
    dialCode: "245",
    priority: 1604528,
    flag: "🇬🇼",
    mask: "999 999 999",
  },
  {
    name: "Guyana",
    iso2: "gy",
    dialCode: "592",
    priority: 782766,
    flag: "🇬🇾",
    mask: "999 9999",
  },
  {
    name: "Haiti",
    iso2: "ht",
    dialCode: "509",
    priority: 11577779,
    flag: "🇭🇹",
    mask: "99 99 9999",
  },
  {
    name: "Honduras",
    iso2: "hn",
    dialCode: "504",
    priority: 9304380,
    flag: "🇭🇳",
    mask: "9999-9999",
  },
  {
    name: "Hong Kong (香港)",
    iso2: "hk",
    dialCode: "852",
    priority: 7500700,
    flag: "🇭🇰",
    mask: "9999 9999",
  },
  {
    name: "Hungary (Magyarország)",
    iso2: "hu",
    dialCode: "36",
    priority: 9769000,
    flag: "🇭🇺",
    mask: "(99) 999 9999",
  },
  {
    name: "Iceland (Ísland)",
    iso2: "is",
    dialCode: "354",
    priority: 366130,
    flag: "🇮🇸",
    mask: "999 9999",
  },
  {
    name: "India (भारत)",
    iso2: "in",
    dialCode: "91",
    trunkPrefix: "0",
    internationalPrefixes: ["00"],
    priority: 1364120059,
    flag: "🇮🇳",
    mask: "99999 99999",
  },
  {
    name: "Indonesia",
    iso2: "id",
    dialCode: "62",
    trunkPrefix: "0",
    internationalPrefixes: ["001", "007", "008", "009"],
    priority: 269603400,
    flag: "🇮🇩",
    mask: "9999-999-999",
  },
  {
    name: "Iran (‫ایران‬‎)",
    iso2: "ir",
    dialCode: "98",
    trunkPrefix: "0",
    internationalPrefixes: ["00"],
    priority: 83573873,
    flag: "🇮🇷",
    mask: "9999 999 9999",
  },
  {
    name: "Iraq (‫العراق‬‎)",
    iso2: "iq",
    dialCode: "964",
    trunkPrefix: "0",
    internationalPrefixes: ["00"],
    priority: 40150200,
    flag: "🇮🇶",
    mask: "9999 999 9999",
  },
  {
    name: "Ireland",
    iso2: "ie",
    dialCode: "353",
    priority: 4921500,
    flag: "🇮🇪",
    mask: "999 999 9999",
  },
  {
    name: "Isle of Man",
    iso2: "im",
    dialCode: "44",
    priority: 83314,
    flag: "🇮🇲",
    mask: "99999 999999",
  },
  {
    name: "Israel (‫ישראל‬‎)",
    iso2: "il",
    dialCode: "972",
    priority: 9216070,
    flag: "🇮🇱",
    mask: "999-999-9999",
  },
  {
    name: "Italy (Italia)",
    iso2: "it",
    dialCode: "39",
    internationalPrefixes: ["00"],
    priority: 60238522,
    flag: "🇮🇹",
    mask: "999 999 9999",
  },
  {
    name: "Jamaica",
    iso2: "jm",
    dialCode: "1876",
    priority: 2726667,
    flag: "🇯🇲",
    mask: "(999) 999-9999",
  },
  {
    name: "Japan (日本)",
    iso2: "jp",
    dialCode: "81",
    trunkPrefix: "0",
    internationalPrefixes: ["010"],
    priority: 125930000,
    flag: "🇯🇵",
    mask: "999-9999-9999",
  },
  {
    name: "Jersey",
    iso2: "je",
    dialCode: "44",
    priority: 106800,
    flag: "🇯🇪",
    mask: "99999 999999",
  },
  {
    name: "Jordan (‫الأردن‬‎)",
    iso2: "jo",
    dialCode: "962",
    priority: 10713832,
    flag: "🇯🇴",
    mask: "99 9999 9999",
  },
  {
    name: "Kazakhstan (Казахстан)",
    iso2: "kz",
    dialCode: "77",
    priority: 18729296,
    flag: "🇰🇿",
    mask: "9 (999) 999 9999",
  },
  {
    name: "Kenya",
    iso2: "ke",
    dialCode: "254",
    trunkPrefix: "0",
    internationalPrefixes: ["000"],
    priority: 47564296,
    flag: "🇰🇪",
    mask: "9999 999999",
  },
  {
    name: "Kiribati",
    iso2: "ki",
    dialCode: "686",
    priority: 120100,
    flag: "🇰🇮",
    mask: "99999999",
  },
  {
    name: "Kuwait (‫الكويت‬‎)",
    iso2: "kw",
    dialCode: "965",
    priority: 4420110,
    flag: "🇰🇼",
    mask: "999 99999",
  },
  {
    name: "Kyrgyzstan (Кыргызстан)",
    iso2: "kg",
    dialCode: "996",
    priority: 6533500,
    flag: "🇰🇬",
    mask: "9999 999 999",
  },
  {
    name: "Laos (ລາວ)",
    iso2: "la",
    dialCode: "856",
    priority: 7123205,
    flag: "🇱🇦",
    mask: "999 99 999 999",
  },
  {
    name: "Latvia (Latvija)",
    iso2: "lv",
    dialCode: "371",
    priority: 1904600,
    flag: "🇱🇻",
    mask: "99 999 999",
  },
  {
    name: "Lebanon (‫لبنان‬‎)",
    iso2: "lb",
    dialCode: "961",
    priority: 6825442,
    flag: "🇱🇧",
    mask: "99 999 999",
  },
  {
    name: "Lesotho",
    iso2: "ls",
    dialCode: "266",
    priority: 2007201,
    flag: "🇱🇸",
    mask: "9999 9999",
  },
  {
    name: "Liberia",
    iso2: "lr",
    dialCode: "231",
    priority: 4475353,
    flag: "🇱🇷",
    mask: "999 999 9999",
  },
  {
    name: "Libya (‫ليبيا‬‎)",
    iso2: "ly",
    dialCode: "218",
    priority: 6871287,
    flag: "🇱🇾",
    mask: "999-9999999",
  },
  {
    name: "Liechtenstein",
    iso2: "li",
    dialCode: "423",
    priority: 38749,
    flag: "🇱🇮",
    mask: "999 999 999",
  },
  {
    name: "Lithuania (Lietuva)",
    iso2: "lt",
    dialCode: "370",
    priority: 2793353,
    flag: "🇱🇹",
    mask: "(9-999) 9999",
  },
  {
    name: "Luxembourg",
    iso2: "lu",
    dialCode: "352",
    priority: 626108,
    flag: "🇱🇺",
    mask: "999 999 999",
  },
  {
    name: "Macau (澳門)",
    iso2: "mo",
    dialCode: "853",
    priority: 696100,
    flag: "🇲🇴",
    mask: "9999 9999",
  },
  {
    name: "Macedonia (FYROM) (Македонија)",
    iso2: "mk",
    dialCode: "389",
    priority: 2077132,
    flag: "🇲🇰",
    mask: "999 999 999",
  },
  {
    name: "Madagascar (Madagasikara)",
    iso2: "mg",
    dialCode: "261",
    priority: 26251309,
    flag: "🇲🇬",
    mask: "999 99 999 99",
  },
  {
    name: "Malawi",
    iso2: "mw",
    dialCode: "265",
    priority: 19129952,
    flag: "🇲🇼",
    mask: "9999 99 99 99",
  },
  {
    name: "Malaysia",
    iso2: "my",
    dialCode: "60",
    priority: 32826760,
    flag: "🇲🇾",
    mask: "999-999 9999",
  },
  {
    name: "Maldives",
    iso2: "mv",
    dialCode: "960",
    priority: 374775,
    flag: "🇲🇻",
    mask: "999-9999",
  },
  {
    name: "Mali",
    iso2: "ml",
    dialCode: "223",
    priority: 20250833,
    flag: "🇲🇱",
    mask: "99 99 99 99",
  },
  {
    name: "Malta",
    iso2: "mt",
    dialCode: "356",
    priority: 493559,
    flag: "🇲🇹",
    mask: "9999 9999",
  },
  {
    name: "Marshall Islands",
    iso2: "mh",
    dialCode: "692",
    priority: 55500,
    flag: "🇲🇭",
    mask: "999-9999",
  },
  {
    name: "Martinique",
    iso2: "mq",
    dialCode: "596",
    priority: 30066648,
    flag: "🇲🇶",
    mask: "9999 99 99 99",
  },
  {
    name: "Mauritania (‫موريتانيا‬‎)",
    iso2: "mr",
    dialCode: "222",
    priority: 4077347,
    flag: "🇲🇷",
    mask: "99 99 99 99",
  },
  {
    name: "Mauritius (Moris)",
    iso2: "mu",
    dialCode: "230",
    priority: 1265475,
    flag: "🇲🇺",
    mask: "9999 9999",
  },
  {
    name: "Mayotte",
    iso2: "yt",
    dialCode: "262",
    priority: 270372,
    flag: "🇾🇹",
    mask: "9999 99 99 99",
  },
  {
    name: "Mexico (México)",
    iso2: "mx",
    dialCode: "52",
    trunkPrefix: "01",
    internationalPrefixes: ["00"],
    priority: 127792286,
    flag: "🇲🇽",
    mask: "999 999 999 9999",
  },
  {
    name: "Micronesia",
    iso2: "fm",
    dialCode: "691",
    priority: 104468,
    flag: "🇫🇲",
    mask: "999 9999",
  },
  {
    name: "Moldova (Republica Moldova)",
    iso2: "md",
    dialCode: "373",
    priority: 2640400,
    flag: "🇲🇩",
    mask: "9999 99 999",
  },
  {
    name: "Monaco",
    iso2: "mc",
    dialCode: "377",
    priority: 38100,
    flag: "🇲🇨",
    mask: "99 99 99 99 99",
  },
  {
    name: "Mongolia (Монгол)",
    iso2: "mn",
    dialCode: "976",
    priority: 3325178,
    flag: "🇲🇳",
    mask: "9999 9999",
  },
  {
    name: "Montenegro (Crna Gora)",
    iso2: "me",
    dialCode: "382",
    priority: 622359,
    flag: "🇲🇪",
    mask: "999 999 999",
  },
  {
    name: "Montserrat",
    iso2: "ms",
    dialCode: "1664",
    priority: 4989,
    flag: "🇲🇸",
    mask: "(999) 999-9999",
  },
  {
    name: "Morocco (‫المغرب‬‎)",
    iso2: "ma",
    dialCode: "212",
    trunkPrefix: "0",
    internationalPrefixes: ["00"],
    priority: 35942525,
    flag: "🇲🇦",
    mask: "9999-999999",
  },
  {
    name: "Mozambique (Moçambique)",
    iso2: "mz",
    dialCode: "258",
    priority: 30066648,
    flag: "🇲🇿",
    mask: "99 999 9999",
  },
  {
    name: "Myanmar (Burma)",
    iso2: "mm",
    dialCode: "95",
    trunkPrefix: "0",
    internationalPrefixes: ["00"],
    priority: 54817919,
    flag: "🇲🇲",
    mask: "99 999 9999",
  },
  {
    name: "Namibia (Namibië)",
    iso2: "na",
    dialCode: "264",
    priority: 2458936,
    flag: "🇳🇦",
    mask: "999 999 99999",
  },
  {
    name: "Nauru",
    iso2: "nr",
    dialCode: "674",
    priority: 11000,
    flag: "🇳🇷",
    mask: "999 9999",
  },
  {
    name: "Nepal (नेपाल)",
    iso2: "np",
    dialCode: "977",
    priority: 29996478,
    flag: "🇳🇵",
    mask: "999-9999999",
  },
  {
    name: "Netherlands (Nederland)",
    iso2: "nl",
    dialCode: "31",
    trunkPrefix: "0",
    internationalPrefixes: ["00"],
    priority: 17482181,
    flag: "🇳🇱",
    mask: "99",
  },
  {
    name: "New Caledonia (Nouvelle-Calédonie)",
    iso2: "nc",
    dialCode: "687",
    priority: 271407,
    flag: "🇳🇨",
    mask: "99.99.99",
  },
  {
    name: "New Zealand",
    iso2: "nz",
    dialCode: "64",
    priority: 5008365,
    flag: "🇳🇿",
    mask: "999 999 9999",
  },
  {
    name: "Nicaragua",
    iso2: "ni",
    dialCode: "505",
    priority: 6460411,
    flag: "🇳🇮",
    mask: "9999 9999",
  },
  {
    name: "Niger (Nijar)",
    iso2: "ne",
    dialCode: "227",
    priority: 22314743,
    flag: "🇳🇪",
    mask: "99 99 99 99",
  },
  {
    name: "Nigeria",
    iso2: "ng",
    dialCode: "234",
    trunkPrefix: "0",
    internationalPrefixes: ["00"],
    priority: 206139587,
    flag: "🇳🇬",
    mask: "9999 999 9999",
  },
  {
    name: "Niue",
    iso2: "nu",
    dialCode: "683",
    priority: 1520,
    flag: "🇳🇺",
    mask: "999 9999",
  },
  {
    name: "Norfolk Island",
    iso2: "nf",
    dialCode: "672",
    priority: 2169,
    flag: "🇳🇫",
    mask: "9 99999",
  },
  {
    name: "North Korea (조선 민주주의 인민 공화국)",
    iso2: "kp",
    dialCode: "850",
    priority: 25450000,
    flag: "🇰🇵",
    mask: "(9) 99999",
  },
  {
    name: "Northern Mariana Islands",
    iso2: "mp",
    dialCode: "1670",
    priority: 56200,
    flag: "🇲🇵",
    mask: "(999) 999-9999",
  },
  {
    name: "Norway (Norge)",
    iso2: "no",
    dialCode: "47",
    priority: 5372355,
    flag: "🇳🇴",
    mask: "999 99 999",
  },
  {
    name: "Oman (‫عُمان‬‎)",
    iso2: "om",
    dialCode: "968",
    priority: 4645249,
    flag: "🇴🇲",
    mask: "9999 9999",
  },
  {
    name: "Pakistan (‫پاکستان‬‎)",
    iso2: "pk",
    dialCode: "92",
    trunkPrefix: "0",
    internationalPrefixes: ["00"],
    priority: 220892331,
    flag: "🇵🇰",
    mask: "9999 9999999",
  },
  {
    name: "Palau",
    iso2: "pw",
    dialCode: "680",
    priority: 17900,
    flag: "🇵🇼",
    mask: "999 9999",
  },
  {
    name: "Palestine (‫فلسطين‬‎)",
    iso2: "ps",
    dialCode: "970",
    priority: 4976684,
    flag: "🇵🇸",
    mask: "9999 999 999",
  },
  {
    name: "Panama (Panamá)",
    iso2: "pa",
    dialCode: "507",
    priority: 4218808,
    flag: "🇵🇦",
    mask: "9999-9999",
  },
  {
    name: "Papua New Guinea",
    iso2: "pg",
    dialCode: "675",
    priority: 8935000,
    flag: "🇵🇬",
    mask: "9999 9999",
  },
  {
    name: "Paraguay",
    iso2: "py",
    dialCode: "595",
    priority: 7252672,
    flag: "🇵🇾",
    mask: "9999 999999",
  },
  {
    name: "Peru (Perú)",
    iso2: "pe",
    dialCode: "51",
    priority: 32824358,
    flag: "🇵🇪",
    mask: "999 999 999",
  },
  {
    name: "Philippines",
    iso2: "ph",
    dialCode: "63",
    trunkPrefix: "0",
    internationalPrefixes: ["00"],
    priority: 108829500,
    flag: "🇵🇭",
    mask: "9999 999 9999",
  },
  {
    name: "Poland (Polska)",
    iso2: "pl",
    dialCode: "48",
    internationalPrefixes: ["00"],
    priority: 38379000,
    flag: "🇵🇱",
    mask: "999 999 999",
  },
  {
    name: "Portugal",
    iso2: "pt",
    dialCode: "351",
    priority: 10295909,
    flag: "🇵🇹",
    mask: "999 999 999",
  },
  {
    name: "Puerto Rico",
    iso2: "pr",
    dialCode: "1",
    priority: 3193694,
    areaCodes: ["787", "939"],
    flag: "🇵🇷",
    mask: "(999) 999-9999",
  },
  {
    name: "Qatar (‫قطر‬‎)",
    iso2: "qa",
    dialCode: "974",
    priority: 2795484,
    flag: "🇶🇦",
    mask: "9999 9999",
  },
  {
    name: "Réunion (La Réunion)",
    iso2: "re",
    dialCode: "262",
    priority: 859959,
    mask: "999 99 99 99",
    flag: "🇷🇪",
  },
  {
    name: "Romania (România)",
    iso2: "ro",
    dialCode: "40",
    priority: 19405156,
    flag: "🇷🇴",
    mask: "9999 999 999",
  },
  {
    name: "Russia (Россия)",
    iso2: "ru",
    dialCode: "7",
    trunkPrefix: "8",
    priority: 146748590,
    flag: "🇷🇺",
    mask: "9 (999) 999-99-99",
  },
  {
    name: "Rwanda",
    iso2: "rw",
    dialCode: "250",
    priority: 12374397,
    flag: "🇷🇼",
    mask: "9999 999 999",
  },
  {
    name: "Saint Barthélemy (Saint-Barthélemy)",
    iso2: "bl",
    dialCode: "590",
    priority: 1,
    flag: "🇧🇱",
    mask: "9999 99 99 99",
  },
  {
    name: "Saint Helena",
    iso2: "sh",
    dialCode: "290",
    priority: 6000,
    flag: "🇸🇭",
    mask: "99999",
  },
  {
    name: "Saint Kitts and Nevis",
    iso2: "kn",
    dialCode: "1869",
    priority: 52823,
    flag: "🇰🇳",
    mask: "(999) 999-9999",
  },
  {
    name: "Saint Lucia",
    iso2: "lc",
    dialCode: "1758",
    priority: 178696,
    flag: "🇱🇨",
    mask: "(999) 999-9999",
  },
  {
    name: "Saint Martin (Saint-Martin (partie française))",
    iso2: "mf",
    dialCode: "590",
    priority: 2,
    flag: "🇲🇫",
    mask: "9999 99 99 99",
  },
  {
    name: "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
    iso2: "pm",
    dialCode: "508",
    priority: 5997,
    flag: "🇵🇲",
    mask: "999 99 99",
  },
  {
    name: "Saint Vincent and the Grenadines",
    iso2: "vc",
    dialCode: "1784",
    priority: 110608,
    flag: "🇻🇨",
    mask: "(999) 999-9999",
  },
  {
    name: "Samoa",
    iso2: "ws",
    dialCode: "685",
    priority: 200874,
    flag: "🇼🇸",
    mask: "99 99999",
  },
  {
    name: "San Marino",
    iso2: "sm",
    dialCode: "378",
    priority: 33553,
    flag: "🇸🇲",
    mask: "99 99 99 99",
  },
  {
    name: "São Tomé and Príncipe (São Tomé e Príncipe)",
    iso2: "st",
    dialCode: "239",
    priority: 210240,
    flag: "🇸🇹",
    mask: "999 9999",
  },
  {
    name: "Saudi Arabia (‫المملكة العربية السعودية‬‎)",
    iso2: "sa",
    dialCode: "966",
    trunkPrefix: "0",
    internationalPrefixes: ["00"],
    priority: 34218169,
    flag: "🇸🇦",
    mask: "999 999 9999",
  },
  {
    name: "Senegal (Sénégal)",
    iso2: "sn",
    dialCode: "221",
    priority: 16705608,
    flag: "🇸🇳",
    mask: "99 999 99 99",
  },
  {
    name: "Serbia (Србија)",
    iso2: "rs",
    dialCode: "381",
    priority: 6963764,
    flag: "🇷🇸",
    mask: "999 9999999",
  },
  {
    name: "Seychelles",
    iso2: "sc",
    dialCode: "248",
    priority: 98055,
    flag: "🇸🇨",
    mask: "9 999 999",
  },
  {
    name: "Sierra Leone",
    iso2: "sl",
    dialCode: "232",
    priority: 7901454,
    flag: "🇸🇱",
    mask: "(999) 999999",
  },
  {
    name: "Singapore",
    iso2: "sg",
    dialCode: "65",
    priority: 5703600,
    flag: "🇸🇬",
    mask: "9999 9999",
  },
  {
    name: "Sint Maarten",
    iso2: "sx",
    dialCode: "1721",
    priority: 0,
    flag: "🇸🇽",
    mask: "999-999-9999",
  },
  {
    name: "Slovakia (Slovensko)",
    iso2: "sk",
    dialCode: "421",
    priority: 5457873,
    flag: "🇸🇰",
    mask: "9999 999 999",
  },
  {
    name: "Slovenia (Slovenija)",
    iso2: "si",
    dialCode: "386",
    priority: 2095861,
    flag: "🇸🇮",
    mask: "999 999 999",
  },
  {
    name: "Solomon Islands",
    iso2: "sb",
    dialCode: "677",
    priority: 680806,
    flag: "🇸🇧",
    mask: "99 99999",
  },
  {
    name: "Somalia (Soomaaliya)",
    iso2: "so",
    dialCode: "252",
    priority: 15893219,
    flag: "🇸🇴",
    mask: "9 9999999",
  },
  {
    name: "South Africa",
    iso2: "za",
    dialCode: "27",
    trunkPrefix: "0",
    internationalPrefixes: ["00"],
    priority: 58775022,
    flag: "🇿🇦",
    mask: "999 999 9999",
  },
  {
    name: "South Korea (대한민국)",
    iso2: "kr",
    dialCode: "82",
    internationalPrefixes: ["001", "002", "004", "005", "006", "008"],
    priority: 51780579,
    flag: "🇰🇷",
    mask: "999-9999-9999",
  },
  {
    name: "South Sudan (‫جنوب السودان‬‎)",
    iso2: "ss",
    dialCode: "211",
    priority: 0,
    flag: "🇸🇸",
    mask: "9999 999 999",
  },
  {
    name: "Spain (España)",
    iso2: "es",
    dialCode: "34",
    internationalPrefixes: ["00"],
    priority: 47329981,
    flag: "🇪🇸",
    mask: "999 99 99 99",
  },
  {
    name: "Sri Lanka (ශ්‍රී ලංකාව)",
    iso2: "lk",
    dialCode: "94",
    priority: 21803000,
    flag: "🇱🇰",
    mask: "999 999 9999",
  },
  {
    name: "Sudan (‫السودان‬‎)",
    iso2: "sd",
    dialCode: "249",
    trunkPrefix: "0",
    internationalPrefixes: ["00"],
    priority: 42627655,
    flag: "🇸🇩",
    mask: "999 999 9999",
  },
  {
    name: "Suriname",
    iso2: "sr",
    dialCode: "597",
    priority: 581372,
    flag: "🇸🇷",
    mask: "999-9999",
  },
  {
    name: "Svalbard and Jan Mayen",
    iso2: "sj",
    dialCode: "47",
    priority: 1000,
    flag: "🇸🇯",
    mask: "999 99 999",
  },
  {
    name: "Swaziland",
    iso2: "sz",
    dialCode: "268",
    priority: 1093238,
    flag: "🇸🇿",
    mask: "9999 9999",
  },
  {
    name: "Sweden (Sverige)",
    iso2: "se",
    dialCode: "46",
    priority: 10345449,
    flag: "🇸🇪",
    mask: "999-999 99 99",
  },
  {
    name: "Switzerland (Schweiz)",
    iso2: "ch",
    dialCode: "41",
    priority: 8619259,
    flag: "🇨🇭",
    mask: "999 999 99 99",
  },
  {
    name: "Syria (‫سوريا‬‎)",
    iso2: "sy",
    dialCode: "963",
    priority: 17500657,
    flag: "🇸🇾",
    mask: "9999 999 999",
  },
  {
    name: "Taiwan (台灣)",
    iso2: "tw",
    dialCode: "886",
    priority: 23596493,
    flag: "🇹🇼",
    mask: "9999 999 999",
  },
  {
    name: "Tajikistan",
    iso2: "tj",
    dialCode: "992",
    priority: 9127000,
    flag: "🇹🇯",
    mask: "999 99 9999",
  },
  {
    name: "Tanzania",
    iso2: "tz",
    dialCode: "255",
    trunkPrefix: "0",
    internationalPrefixes: ["000"],
    priority: 57637628,
    flag: "🇹🇿",
    mask: "9999 999 999",
  },
  {
    name: "Thailand (ไทย)",
    iso2: "th",
    dialCode: "66",
    trunkPrefix: "0",
    internationalPrefixes: ["001", "002", "003", "004", "005", "006", "007", "008", "009"],
    priority: 66523092,
    flag: "🇹🇭",
    mask: "999 999 9999",
  },
  {
    name: "Timor-Leste",
    iso2: "tl",
    dialCode: "670",
    priority: 1387149,
    flag: "🇹🇱",
    mask: "9999 9999",
  },
  {
    name: "Togo",
    iso2: "tg",
    dialCode: "228",
    priority: 7538000,
    flag: "🇹🇬",
    mask: "99 99 99 99",
  },
  {
    name: "Tokelau",
    iso2: "tk",
    dialCode: "690",
    priority: 1400,
    flag: "🇹🇰",
    mask: "9999",
  },
  {
    name: "Tonga",
    iso2: "to",
    dialCode: "676",
    priority: 100651,
    flag: "🇹🇴",
    mask: "999 9999",
  },
  {
    name: "Trinidad and Tobago",
    iso2: "tt",
    dialCode: "1868",
    priority: 1363985,
    flag: "🇹🇹",
    mask: "(999) 999-9999",
  },
  {
    name: "Tunisia (‫تونس‬‎)",
    iso2: "tn",
    dialCode: "216",
    priority: 11722038,
    flag: "🇹🇳",
    mask: "99 999 999",
  },
  {
    name: "Turkey (Türkiye)",
    iso2: "tr",
    dialCode: "90",
    trunkPrefix: "0",
    internationalPrefixes: ["00"],
    priority: 83154997,
    flag: "🇹🇷",
    mask: "(999) 999 9999",
  },
  {
    name: "Turkmenistan",
    iso2: "tm",
    dialCode: "993",
    priority: 6031187,
    flag: "🇹🇲",
    mask: "9 99 999999",
  },
  {
    name: "Turks and Caicos Islands",
    iso2: "tc",
    dialCode: "1649",
    priority: 42953,
    flag: "🇹🇨",
    mask: "(999) 999-9999",
  },
  {
    name: "Tuvalu",
    iso2: "tv",
    dialCode: "688",
    priority: 10200,
    flag: "🇹🇻",
    mask: "999999",
  },
  {
    name: "Uganda",
    iso2: "ug",
    dialCode: "256",
    trunkPrefix: "0",
    internationalPrefixes: ["000"],
    priority: 41590300,
    flag: "🇺🇬",
    mask: "9999 999999",
  },
  {
    name: "Ukraine (Україна)",
    iso2: "ua",
    dialCode: "380",
    trunkPrefix: "0",
    internationalPrefixes: ["00"],
    priority: 41806221,
    flag: "🇺🇦",
    mask: "999 999 9999",
  },
  {
    name: "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)",
    iso2: "ae",
    dialCode: "971",
    priority: 9890400,
    flag: "🇦🇪",
    mask: "999 999 9999",
  },
  {
    name: "United Kingdom",
    iso2: "gb",
    dialCode: "44",
    trunkPrefix: "0",
    internationalPrefixes: ["00"],
    priority: 66796807,
    flag: "🇬🇧",
    mask: "9999 999999",
  },
  {
    name: "United States",
    iso2: "us",
    dialCode: "1",
    trunkPrefix: "1",
    internationalPrefixes: ["011"],
    priority: 329952186,
    flag: "🇺🇸",
    mask: "(999) 999-9999",
  },
  {
    name: "Uruguay",
    iso2: "uy",
    dialCode: "598",
    priority: 3530912,
    flag: "🇺🇾",
    mask: "999 999 999",
  },
  {
    name: "U.S. Virgin Islands",
    iso2: "vi",
    dialCode: "1340",
    priority: 104578,
    flag: "🇻🇮",
    mask: "999-999-9999",
  },
  {
    name: "Uzbekistan (Oʻzbekiston)",
    iso2: "uz",
    dialCode: "998",
    trunkPrefix: "0",
    internationalPrefixes: ["00"],
    priority: 34269199,
    flag: "🇺🇿",
    mask: "9 99 999 99 99",
  },
  {
    name: "Vanuatu",
    iso2: "vu",
    dialCode: "678",
    priority: 304500,
    flag: "🇻🇺",
    mask: "999 9999",
  },
  {
    name: "Vatican City (Città del Vaticano)",
    iso2: "va",
    dialCode: "39",
    priority: 825,
    flag: "🇻🇦",
    mask: "99 9999 9999",
  },
  {
    name: "Venezuela",
    iso2: "ve",
    dialCode: "58",
    priority: 32219521,
    flag: "🇻🇪",
    mask: "9999-9999999",
  },
  {
    name: "Vietnam (Việt Nam)",
    iso2: "vn",
    dialCode: "84",
    trunkPrefix: "0",
    priority: 96208984,
    flag: "🇻🇳",
    mask: "999 999 99 99",
  },
  {
    name: "Wallis and Futuna",
    iso2: "wf",
    dialCode: "681",
    priority: 11700,
    flag: "🇼🇫",
    mask: "99 99 99",
  },
  {
    name: "Western Sahara (‫الصحراء الغربية‬‎)",
    iso2: "eh",
    flag: "🇪🇭",
    mask: "999-999999",
    dialCode: "212",
    priority: 582463,
  },
  {
    name: "Yemen (‫اليمن‬‎)",
    iso2: "ye",
    dialCode: "967",
    priority: 29825968,
    flag: "🇾🇪",
    mask: "999 999 999",
  },
  {
    name: "Zambia",
    iso2: "zm",
    dialCode: "260",
    priority: 17885422,
    flag: "🇿🇲",
    mask: "999 9999999",
  },
  {
    name: "Zimbabwe",
    iso2: "zw",
    dialCode: "263",
    priority: 15159624,
    flag: "🇿🇼",
    mask: "999 999 9999",
  },
]

type Country = typeof countries[0]

export const countryIndex: Record<string, Country> = {}

for (const country of countries) {
  countryIndex[country.iso2] = country
}