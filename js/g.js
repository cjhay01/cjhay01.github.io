var random = [
    "yo",
    "RoyalMike was here",
    "when will CRT become un-horny",
    "cope, seethe, mald",
    "what are you doing, go type something already",
    "s",
    "rubrub",
    "<a href=\"https://www.youtube.com/watch?v=5jJU-pLjdzc\" target=\"_blank\">https://www.youtube.com/watch?v=5jJU-pLjdzc</a>",
    "stop and edit the damn vid lmao u don't got nothin better to do",
    "grape cookie was hdhjtdyhgfghjkhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
    "no memes in general",
    "Never gonna give y-",
    "no bitches?",
    "lasagna",
    "h"
]
var statMultiplier = [
    {rarity:"Legendary", value:15},
    {rarity:"Ancient", value:10},
    {rarity:"Epic", value:5},
    {rarity:"Special", value:3},
    {rarity:"Rare", value:2},
    {rarity:"Common", value:1}
];
const baseStat = {hp:21, atk:4, def:5};
var calcText = document.getElementById('calc');
var levelInput = document.getElementById('level');
var multiInput = document.getElementById('multiText');
var hpInput = document.getElementById('hp');
var atkInput = document.getElementById('atk');
var defInput = document.getElementById('def');
var baseHP = baseStat.hp;
var baseATK = baseStat.atk;
var baseDEF = baseStat.def;
var multiplier = 0;
hpInput.placeholder = "hp (" + baseHP + ")";
atkInput.placeholder = "atk (" + baseATK + ")";
defInput.placeholder = "def (" + baseDEF + ")";
calcText.innerHTML = random[Math.floor(Math.random() * random.length)]
function changeText(e) {
    const dropdown = statMultiplier.filter(a => {
        return a.rarity === e.target.value
    })
    const statValue = dropdown.map(b => b.value)
    const statRarity = dropdown.map(b => b.rarity)
    multiplier = parseInt(statValue)
    multiInput.value = parseInt(statValue)
}
function calc() {
    const levelInt = parseInt(levelInput.value);
    if (levelInput.value === "" && multiInput.value === "") return calcText.innerHTML = "level, multiplier blank"
    if (levelInput.value === "") return calcText.innerHTML = "you didn\'t give any level"
    else if (isNaN(levelInt)) return calcText.innerHTML = "level NaN"

    if (multiInput.value != "") multiplier = parseInt(multiInput.value);
    if (isNaN(parseInt(multiInput.value))) return calcText.innerHTML = "multiplier NaN"

    if (hpInput.value != "") baseHP = parseInt(hpInput.value);
    if (isNaN(parseInt(baseHP))) return calcText.innerHTML = "hp NaN"

    if (hpInput.value != "") baseATK = parseInt(atkInput.value);
    if (isNaN(parseInt(baseATK))) return calcText.innerHTML = "atk NaN"
    
    if (hpInput.value != "") baseDEF = parseInt(defInput.value);
    if (isNaN(parseInt(baseDEF))) return calcText.innerHTML = "def NaN"

    calcText.innerHTML = "HP: " + (levelInt * multiplier * baseHP + baseHP).toLocaleString() + "<br>ATK: " + (levelInt * multiplier * baseATK + baseATK).toLocaleString() + "<br>DEF: " + (levelInt * multiplier * baseDEF + baseDEF).toLocaleString()
}