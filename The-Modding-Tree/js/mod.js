let modInfo = {
	name: "光之樹",
	id: "light_tree",
	author: "Hydrogenated233",
	pointsName: "光",
	modFiles: ["layers.js", "tree.js"],

	discordName: "EricZeng",
	discordLink: "discordapp.com/users/EricZeng#1744",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 48,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.1",
	name: "開始",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.0</h3><br>
		- Added things.<br>
		- Added stuff.`

let winText = `你竟然完成了這個超級難的樹！但你還可以繼續游戲或者重新游玩！`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if (hasUpgrade('e', 11)) gain = gain.add(1)
	if (hasUpgrade('e', 12)) gain = gain.times(upgradeEffect('e', 12))
	if (hasUpgrade('l', 11)) gain = gain.times(upgradeEffect('l', 11))
	if (hasUpgrade('e', 13)) gain = gain.times(upgradeEffect('e', 13))
	if (hasUpgrade('e', 14)) gain = gain.times(upgradeEffect('e', 14))
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	function() {if (player.points.gt(0)) return `你有 ${player.points} 光`},
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}