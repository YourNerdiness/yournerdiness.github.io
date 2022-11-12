const fileList = ["ad.png", "ae.png", "af.png", "ag.png", "ai.png", "al.png", "am.png", "ao.png", "aq.png", "ar.png", "as.png", "at.png", "au.png", "aw.png", "ax.png", "az.png", "ba.png", "bb.png", "bd.png", "be.png", "bf.png", "bg.png", "bh.png", "bi.png", "bj.png", "bl.png", "bm.png", "bn.png", "bo.png", "bq.png", "br.png", "bs.png", "bt.png", "bv.png", "bw.png", "by.png", "bz.png", "ca.png", "cc.png", "cd.png", "cf.png", "cg.png", "ch.png", "ci.png", "ck.png", "cl.png", "cm.png", "cn.png", "co.png", "cr.png", "cu.png", "cv.png", "cw.png", "cx.png", "cy.png", "cz.png", "de.png", "dj.png", "dk.png", "dm.png", "do.png", "dz.png", "ec.png", "ee.png", "eg.png", "eh.png", "er.png", "es.png", "et.png", "fi.png", "fj.png", "fk.png", "fm.png", "fo.png", "fr.png", "ga.png", "gb-eng.png", "gb-nir.png", "gb-sct.png", "gb-wls.png", "gb.png", "gd.png", "ge.png", "gf.png", "gg.png", "gh.png", "gi.png", "gl.png", "gm.png", "gn.png", "gp.png", "gq.png", "gr.png", "gs.png", "gt.png", "gu.png", "gw.png", "gy.png", "hk.png", "hm.png", "hn.png", "hr.png", "ht.png", "hu.png", "id.png", "ie.png", "il.png", "im.png", "in.png", "io.png", "iq.png", "ir.png", "is.png", "it.png", "je.png", "jm.png", "jo.png", "jp.png", "ke.png", "kg.png", "kh.png", "ki.png", "km.png", "kn.png", "kp.png", "kr.png", "kw.png", "ky.png", "kz.png", "la.png", "lb.png", "lc.png", "li.png", "lk.png", "lr.png", "ls.png", "lt.png", "lu.png", "lv.png", "ly.png", "ma.png", "mc.png", "md.png", "me.png", "mf.png", "mg.png", "mh.png", "mk.png", "ml.png", "mm.png", "mn.png", "mo.png", "mp.png", "mq.png", "mr.png", "ms.png", "mt.png", "mu.png", "mv.png", "mw.png", "mx.png", "my.png", "mz.png", "na.png", "nc.png", "ne.png", "nf.png", "ng.png", "ni.png", "nl.png", "no.png", "np.png", "nr.png", "nu.png", "nz.png", "om.png", "pa.png", "pe.png", "pf.png", "pg.png", "ph.png", "pk.png", "pl.png", "pm.png", "pn.png", "pr.png", "ps.png", "pt.png", "pw.png", "py.png", "qa.png", "re.png", "ro.png", "rs.png", "ru.png", "rw.png", "sa.png", "sb.png", "sc.png", "sd.png", "se.png", "sg.png", "sh.png", "si.png", "sj.png", "sk.png", "sl.png", "sm.png", "sn.png", "so.png", "sr.png", "ss.png", "st.png", "sv.png", "sx.png", "sy.png", "sz.png", "tc.png", "td.png", "tf.png", "tg.png", "th.png", "tj.png", "tk.png", "tl.png", "tm.png", "tn.png", "to.png", "tr.png", "tt.png", "tv.png", "tw.png", "tz.png", "ua.png", "ug.png", "um.png", "us.png", "uy.png", "uz.png", "va.png", "vc.png", "ve.png", "vg.png", "vi.png", "vn.png", "vu.png", "wf.png", "ws.png", "xk.png", "ye.png", "yt.png", "za.png", "zm.png", "zw.png"]

const countryCodeToName = {
    "AF" : "Afghanistan",
    "AX" : "Aland Islands",
    "AL" : "Albania",
    "DZ" : "Algeria",
    "AS" : "American Samoa",
    "AD" : "Andorra",
    "AO" : "Angola",
    "AI" : "Anguilla",
    "AQ" : "Antarctica",
    "AG" : "Antigua And Barbuda",
    "AR" : "Argentina",
    "AM" : "Armenia",
    "AW" : "Aruba",
    "AU" : "Australia",
    "AT" : "Austria",
    "AZ" : "Azerbaijan",
    "BS" : "Bahamas",
    "BH" : "Bahrain",
    "BD" : "Bangladesh",
    "BB" : "Barbados",
    "BY" : "Belarus",
    "BE" : "Belgium",
    "BZ" : "Belize",
    "BJ" : "Benin",
    "BM" : "Bermuda",
    "BT" : "Bhutan",
    "BO" : "Bolivia",
    "BA" : "Bosnia And Herzegovina",
    "BW" : "Botswana",
    "BV" : "Bouvet Island",
    "BR" : "Brazil",
    "IO" : "British Indian Ocean Territory",
    "BN" : "Brunei Darussalam",
    "BG" : "Bulgaria",
    "BF" : "Burkina Faso",
    "BI" : "Burundi",
    "KH" : "Cambodia",
    "CM" : "Cameroon",
    "CA" : "Canada",
    "CV" : "Cape Verde",
    "BQ" : "Caribbean Netherlands",
    "KY" : "Cayman Islands",
    "CF" : "Central African Republic",
    "TD" : "Chad",
    "CL" : "Chile",
    "CN" : "China",
    "CX" : "Christmas Island",
    "CC" : "Cocos (Keeling) Islands",
    "CO" : "Colombia",
    "KM" : "Comoros",
    "CG" : "Congo",
    "CD" : "Congo, Democratic Republic",
    "CK" : "Cook Islands",
    "CR" : "Costa Rica",
    "CI" : "Cote D\'Ivoire",
    "HR" : "Croatia",
    "CU" : "Cuba",
    "CW" : "Curaçao",
    "CY" : "Cyprus",
    "CZ" : "Czech Republic",
    "DK" : "Denmark",
    "DJ" : "Djibouti",
    "DM" : "Dominica",
    "DO" : "Dominican Republic",
    "EC" : "Ecuador",
    "EG" : "Egypt",
    "SV" : "El Salvador",
    "GB-ENG" : "England",
    "GQ" : "Equatorial Guinea",
    "ER" : "Eritrea",
    "EE" : "Estonia",
    "ET" : "Ethiopia",
    "FK" : "Falkland Islands (Malvinas)",
    "FO" : "Faroe Islands",
    "FJ" : "Fiji",
    "FI" : "Finland",
    "FR" : "France",
    "GF" : "French Guiana",
    "PF" : "French Polynesia",
    "TF" : "French Southern Territories",
    "GA" : "Gabon",
    "GM" : "Gambia",
    "GE" : "Georgia",
    "DE" : "Germany",
    "GH" : "Ghana",
    "GI" : "Gibraltar",
    "GR" : "Greece",
    "GL" : "Greenland",
    "GD" : "Grenada",
    "GP" : "Guadeloupe",
    "GU" : "Guam",
    "GT" : "Guatemala",
    "GG" : "Guernsey",
    "GN" : "Guinea",
    "GW" : "Guinea-Bissau",
    "GY" : "Guyana",
    "HT" : "Haiti",
    "HM" : "Heard Island & Mcdonald Islands",
    "VA" : "Holy See (Vatican City State)",
    "HN" : "Honduras",
    "HK" : "Hong Kong",
    "HU" : "Hungary",
    "IS" : "Iceland",
    "IN" : "India",
    "ID" : "Indonesia",
    "IR" : "Iran, Islamic Republic Of",
    "IQ" : "Iraq",
    "IE" : "Ireland",
    "IM" : "Isle Of Man",
    "IL" : "Israel",
    "IT" : "Italy",
    "JM" : "Jamaica",
    "JP" : "Japan",
    "JE" : "Jersey",
    "JO" : "Jordan",
    "KZ" : "Kazakhstan",
    "KE" : "Kenya",
    "KI" : "Kiribati",
    "KR" : "Korea",
    "XK" : "Kosovo",
    "KW" : "Kuwait",
    "KG" : "Kyrgyzstan",
    "LA" : "Lao People\'s Democratic Republic",
    "LV" : "Latvia",
    "LB" : "Lebanon",
    "LS" : "Lesotho",
    "LR" : "Liberia",
    "LY" : "Libyan Arab Jamahiriya",
    "LI" : "Liechtenstein",
    "LT" : "Lithuania",
    "LU" : "Luxembourg",
    "MO" : "Macao",
    "MK" : "Macedonia",
    "MG" : "Madagascar",
    "MW" : "Malawi",
    "MY" : "Malaysia",
    "MV" : "Maldives",
    "ML" : "Mali",
    "MT" : "Malta",
    "MH" : "Marshall Islands",
    "MQ" : "Martinique",
    "MR" : "Mauritania",
    "MU" : "Mauritius",
    "YT" : "Mayotte",
    "MX" : "Mexico",
    "FM" : "Micronesia, Federated States Of",
    "MD" : "Moldova",
    "MC" : "Monaco",
    "MN" : "Mongolia",
    "ME" : "Montenegro",
    "MS" : "Montserrat",
    "MA" : "Morocco",
    "MZ" : "Mozambique",
    "MM" : "Myanmar",
    "NA" : "Namibia",
    "NR" : "Nauru",
    "NP" : "Nepal",
    "NL" : "Netherlands",
    "AN" : "Netherlands Antilles",
    "NC" : "New Caledonia",
    "NZ" : "New Zealand",
    "NI" : "Nicaragua",
    "NE" : "Niger",
    "NG" : "Nigeria",
    "NU" : "Niue",
    "NF" : "Norfolk Island",
    "GB-NIR" : "Northern Ireland",
    "MP" : "Northern Mariana Islands",
    "KP" : "North Korea",
    "NO" : "Norway",
    "OM" : "Oman",
    "PK" : "Pakistan",
    "PW" : "Palau",
    "PS" : "Palestinian Territory, Occupied",
    "PA" : "Panama",
    "PG" : "Papua New Guinea",
    "PY" : "Paraguay",
    "PE" : "Peru",
    "PH" : "Philippines",
    "PN" : "Pitcairn",
    "PL" : "Poland",
    "PT" : "Portugal",
    "PR" : "Puerto Rico",
    "QA" : "Qatar",
    "RE" : "Reunion",
    "RO" : "Romania",
    "RU" : "Russian Federation",
    "RW" : "Rwanda",
    "BL" : "Saint Barthelemy",
    "SH" : "Saint Helena",
    "KN" : "Saint Kitts And Nevis",
    "LC" : "Saint Lucia",
    "MF" : "Saint Martin",
    "PM" : "Saint Pierre And Miquelon",
    "VC" : "Saint Vincent And Grenadines",
    "WS" : "Samoa",
    "SM" : "San Marino",
    "ST" : "Sao Tome And Principe",
    "SA" : "Saudi Arabia",
    "GB-SCT" : "Scotland",
    "SN" : "Senegal",
    "RS" : "Serbia",
    "SC" : "Seychelles",
    "SL" : "Sierra Leone",
    "SG" : "Singapore",
    "SX" : "Sint Maarten",
    "SK" : "Slovakia",
    "SI" : "Slovenia",
    "SB" : "Solomon Islands",
    "SO" : "Somalia",
    "ZA" : "South Africa",
    "GS" : "South Georgia And Sandwich Isl.",
    "SS" : "South Sudan",
    "ES" : "Spain",
    "LK" : "Sri Lanka",
    "SD" : "Sudan",
    "SR" : "Suriname",
    "SJ" : "Svalbard And Jan Mayen",
    "SZ" : "Swaziland",
    "SE" : "Sweden",
    "CH" : "Switzerland",
    "SY" : "Syrian Arab Republic",
    "TW" : "Taiwan",
    "TJ" : "Tajikistan",
    "TZ" : "Tanzania",
    "TH" : "Thailand",
    "TL" : "Timor-Leste",
    "TG" : "Togo",
    "TK" : "Tokelau",
    "TO" : "Tonga",
    "TT" : "Trinidad And Tobago",
    "TN" : "Tunisia",
    "TR" : "Turkey",
    "TM" : "Turkmenistan",
    "TC" : "Turks And Caicos Islands",
    "TV" : "Tuvalu",
    "UG" : "Uganda",
    "UA" : "Ukraine",
    "AE" : "United Arab Emirates",
    "GB" : "United Kingdom",
    "US" : "United States",
    "UM" : "United States Outlying Islands",
    "UY" : "Uruguay",
    "UZ" : "Uzbekistan",
    "VU" : "Vanuatu",
    "VE" : "Venezuela",
    "VN" : "Viet Nam",
    "VG" : "Virgin Islands, British",
    "VI" : "Virgin Islands, U.S.",
    "GB-WLS" : "Whales",
    "WF" : "Wallis And Futuna",
    "EH" : "Western Sahara",
    "YE" : "Yemen",
    "ZM" : "Zambia",
    "ZW" : "Zimbabwe"
};

const countries = Object.values(countryCodeToName);

let country = "";
let current = 0;

function init() {

    let guessFields = document.getElementsByClassName("guessS");

    for (let i = 0; i < 6; i++) {

        let guessField = guessFields[i];

        for (let j = 0; j < countries.length; j++) {

            let option = document.createElement("option");

            option.textContent = countries[j];
            option.value = countries[j];

            guessField.appendChild(option);

        }

    }

    next();

}

function stringDifference(str1, str2) {

    if (str1.length == 0) return str2.length;
    if (str2.length == 0) return str1.length;

    let distance = 0;

    if (str1.length < str2.length) {

        distance = str2.length - str1.length;

        for (let i = 0; i < str1.length; i++) {

            if (str1[i] != str2[i]) distance++;
            
        }

    }

    else {

        distance = str1.length - str2.length;

        for (let i = 0; i < str2.length; i++) {

            if (str1[i] != str2[i]) distance++;
            
        }

    }

    return distance;

}

function searchForGuess() {

    let currentGuess = document.getElementById("g" + current).value;

    let minMatch = 1000;
    let selectedCountry = "";

    for (let i = 0; i < countries.length; i++) {

        closeness = stringDifference(countries[i], currentGuess);

        if (closeness < minMatch) {

            minMatch = closeness;
            selectedCountry = countries[i];

        }

        if (minMatch == 0) break;

    }

    document.getElementById("s" + current).value = selectedCountry;

}

function guess() {

    if (document.getElementById("s" +  current).value == country) {

        document.getElementById("output").textContent = "Correct!!!"

        document.getElementById("nextButton").disabled = false;
        document.getElementById("guessButton").disabled = true;

    }

    else {

        document.getElementById("output").textContent = "Incorrect";

        current++;

        shiftGuessFields();

    }

    if (current > 5) {

        document.getElementById("output").textContent = country

        document.getElementById("nextButton").disabled = false;
        document.getElementById("guessButton").disabled = true;

    }

}

function shiftGuessFields() {

    let guessFieldsG = document.getElementsByClassName("guessG");
    let guessFieldsS = document.getElementsByClassName("guessS");

    for (let i = 0; i < 6; i++) {

        let guessFieldG = guessFieldsG[i];
        let guessFieldS = guessFieldsS[i];

        if (i == current) {

            guessFieldG.disabled = false;
            guessFieldS.disabled = false;

        }

        else {

            guessFieldG.disabled = true;
            guessFieldS.disabled = true;

        }

    }

}

function next() {

    document.getElementById("nextButton").disabled = true;
    document.getElementById("guessButton").disabled = false;

    document.getElementById("output").textContent = ""

    current = 0;

    shiftGuessFields();

    let form = document.getElementsByTagName("form")[0];

    form.reset();

    displayImage();

}

function displayImage() {

    let image = document.getElementById("flag");

    let pictureName = fileList[randNumber(0, fileList.length)].slice(0, -4);

    let fileName = "./flags/" + pictureName + ".png";
    
    image.src = fileName;

    country = countryCodeToName[pictureName.toUpperCase()];

    if (country == undefined) {

        alert("Hi. My code has detected an error. If you could please report an issue here (https://github.com/YourNerdiness/yournerdiness.github.io/issues), with the error code 1000" + pictureName.toUpperCase() + ", I would greatly appreciate it. To continue playing, reload the page.");

    }

}

function randNumber(lowerbound, upperBound) {

    return lowerbound + Math.floor(Math.random()*upperBound);

}