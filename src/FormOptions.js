
var MATERIAL_GOLD_PURITY = {
	values: [
		"10kt",
		"14kt",
		"15kt",
		"18kt"
	]
};

var MATERIAL_GOLD_COLOR = {
	values: [
		"Rose",
		"White",
		"Yellow"
	]
};

var MATERIAL_GOLD_COMPOSITION = {
	values: [
		"Filled",
		"Plated",
		"Top"
	]
};

var MATERIAL_SILVER_COMPOSITION = {
	values: [
		"Sterling",
		"Plated",
		"Filled"
	]
};

var WATCH_STRAP_MATERIAL_LEATHER_COLOR = {
	values: [
		"Black",
		"Brown"
	]
};

var WATCH_STRAP_MATERIAL_LEATHER_SOURCE = {
	values: [
		"Alligator"
	]
};

var MATERIAL_OTHER_COLOR = {
	values: [
		"Black",
		"Blue",
		"Green"
	]
};

var MATERIAL_OTHER_NAME = {
	values: [
		"Vermeil",
		"Platinum",
		"Stainless steel",
		"Enamel"
	]
};

var STONE_DIAMOND_COLOR = {
	values: [
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q", 
		"R"

	]
};

var STONE_DIAMOND_CLARITY = {
	values: [
		"IF",
		"VVS1",
		"VVS2",
		"VS1",
		"VS2",
		"SI1",
		"SI2",
		"I1",
		"I2",
		"I3"
	]
};

var STONE_DIAMOND_CARAT = {
	// to be input by user
};

var STONE_DIAMOND_FANCYCOLOR = {
	values: [
		"Black",
		"Champagne",
		"Yellow",
		"White"
	]
};

var STONE_DIAMOND_CUT = {
	values: [
		"Asscher",
		"Baguette",
		"Emerald",
		"European",
		"French",
		"Marquise",
		"Multi",
		"Princess",
		"Radiant",
		"Rose",
		"Round"
	]
};

var STONE_OTHER_TYPE = {
	values: [
		"Angel", //coral
		"Natural", //(coral, turquoise)
		"Spessartite", //(garnet)
		"Akoya", //pearl
		"Mother of pearl", //pearl
		"Tahitian", //pearl
		"South sea", //pearl
		"Cabochon"
	]
};

var STONE_OTHER_COLOR = {
	values: [
		"Black",
		"Blue", 
		"White", 
		"Green",
		"Pink", 
		"Yellow", 
		"Orange", 
		"Lemon"
	]
};

var STONE_OTHER_CARAT = {
	// input by user
};


var STONE_OTHER_NAME = {
	values: [
		"agate",
		"amethyst", 
		"apatite", 
		"coral",
		"onyx", 
		"beryl", 
		"aquamarine", 
		"opal", 
		"topaz", 
		"citrine", 
		"emerald", 
		"morganite", 
		"chrysoberyl", 
		"turquoise", 
		"topaz", 
		"tourmaline", 
		"tsavorite",
		"prasiolite", 
		"rubellite", 
		"ruby", 
		"tanzanite", 
		"garnet", 
		"jade", 
		"feldspar", 
		"gemstone", 
		"labradorite", 
		"scarab", 
		"semi precious"
		"sapphire", 
		"pearl", 
		"lapis", 
		"quartz"
	]
};


var WATCH_BRAND_NAME = {
	values: [
		"ball",
		"audemars piguet", 
		"baume & mercier", 
		"benrus",
		"breitling", 
		"cartier", 
		"cortina", 
		"corum", 
		"davidoff",
		"doxa",
		"elgin", 
		"girard-perregaux",
		"glycine",
		"gruen", 
		"hamilton", 
		"heuer", 
		"IWC", 
		"jaeger lecoultre", 
		"jules jurgensen",
		"lecoultre", 
		"longines", 
		"lucien piccard",
		"mathey-tissot",
		"mido"
		"movado", 
		"omega", 
		"patek philippe", 
		"peridot", 
		"piaget", 
		"rolex", 
		"tag heuer", 
		"tiffany & co"
		"ulysse nardin", 
		"universal geneve", 
		"vacheron & constantin", 
		"wittnauer",
		"zenith"
	]
};

var WATCH_MODEL_NAME = {
	values: [
		"5010",
		"air-king", 
		"alarm", 
		"aquaracer",
		"calatrava", 
		"carrera", 
		"cellini", 
		"cellini cellissima", 
		"cellini danaos", 
		"cellini prince", 
		"chronomat", 
		"chronometer", 
		"colt 33", 
		"colt chronograph", 
		"constellation", 
		"constellation chronometer", 
		"cubelin",
		"curvex",
		"date", 
		"datejust", 
		"datejust president", 
		"daytona", 
		"de ville", 
		"elite", 
		"ellipse", 
		"explorer I", 
		"explorer II", 
		"flight", 
		"flightmaster"
		"geneve", 
		"gmt-master", 
		"gmt-master-II", 
		"gondolo",
		"grasshopper",
		"grafic"
		"indianapolis 500",
		"jolly roger",
		"ladies",
		"master mariner",
		"milgauss",
		"monaco",
		"nautilus",
		"navitimer",
		"navitimer montbrillant",
		"oyster perpetual",
		"navitimer montbrillant",
		"pocket watch",
		"powermatic",
		"president",
		"rootbeer",
		"sea-dweller",
		"seamaster",
		"sir echo",
		"skeleton",
		"submariner",
		"super ocean",
		"tiffany calatrava",
		"trainmaster",
		"trapeze",
		"twenty-4",
		"windrider cockpit",
		"yachtmaster"

	]
};


var WATCH_BRACELET_TYPE = {
	values: [
		"oyster"
	]
};

var WATCH_STRAP_MATERIAL_OTHER_NAME = {
	values: [
		"rubber",
		"cord"
	]
};


var WATCH_STRAP_MATERIAL_OTHER_COLOR = {
	values: [
		""
	]
};


var WATCH_DIAL_PATTERN_FEATURE = {
	values: [
		"skull",
		"stardust",
		"mystery",
		"bullseye",
		"chapter ring",
		"crono",
		"du pont",
		"coin",
		"guilloche",
		"lined",
		"mason",
		"nude",
		"off-white",
		"pearlized",
		"pie pan",
		"skeleton",
		"tuxedo stripe",
		"two tone"
	]
};


var WATCH_DIAL_STONE = {
	values: [
		"lapis",
		"mother of pearl"
	]
};

var WATCH_DIAL_COLOR = {
	values: [
		"white",
		"beige",
		"black",
		"blue",
		"brown",
		"burgundy",
		"champagne",
		"gold",
		"green",
		"grey",
		"mars",
		"pink",
		"porcelain",
		"salmon",
		"silver",
		"tan",
		"yellow"

	]
};


var WATCH_PAPERS_VALUE = {
	values: [
		"papers",
		"no papers"
	]
};

var PRODUCT_YEAR = {
	values: [
		"1948",
		"1900s"
	]
};

var WATCH_MOVEMENT = {
	values: [
		"automatic",
		"mechanical",
		"bumper mechanical",
		"quartz"
	]
};

var WATCH_CASE_DIMENSIONS = {
	values: [
		"10mm",
		"50mm"
	]
};

var JEWELRY_PRODUCT_CATEGORY = {
	values: [
		"bracelet",
		"brooch/pin",
		"ring",
		"earrings",
		"necklace/pendant"
	]
};

var BRIDAL_PRODUCT_CATEGORY = {
	values: [
		"engagement-rings",
		"wedding-bands"
	]
};

var WATCH_PRODUCT_CATEGORY = {
	values: [
		"preowned",
		"vintage"
	]
};

var TIME_PERIOD = {
	values: [
		"art deco",
		"edwardian",
		"retro",
		"victorian"
	]
};

var PRODUCT_CONDITION = {
	values: [
		"excellent",
		"good",
		"very good",
		"victorian"
	]
};

var PRODUCT_GENDER = {
	values: [
		"mens",
		"womens",
		"unisex"
	]
};

var PRODUCT_CERTIFIED = {
	values: [
		"certified"
	]
};

var PRODUCT_CERTIFIED_TYPE = {
	values: [
		"gal"
	]
};

var JEWELRY_BRAND_NAME = {
	values: [
		"bulgari",
		"bvlgari",
		"chimento",
		"Jose Hess"
	]
};

var SPECIAL_COLLECTION_TAGS = {
	values: [
		"animal",
		"ballerina",
		"tennis bracelet",
		"drop earrings"
	]
};
