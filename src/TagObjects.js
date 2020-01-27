/*
	OBJECTS
*/

function GoldMaterial(purity, color, composition) {
	this.purity = purity;
	this.color = color;
	this.composition = composition;
}

function SilverMaterial(composition) {
	this.composition = composition;
}

function OtherMaterial(name, color) {
	this.name = name;
	this.color = color;
}

function DiamondStone(cut, color, clarity, carat, fancyColor) {
	this.cut = cut;
	this.color = color;
	this.clarity = clarity;
	this.carat = carat;
	this.fancyColor = fancyColor;
}

function OtherStone(name, type, color, carat) {
	this.name = name;
	this.type = type;
	this.color = color;
	this.carat = carat;
}

function Era(era) {
	this.era = era;
}

function ProductCategory(category){
	this.category = category;
}

function ProductCondition(condition){
	this.condition = condition;
}

function ProductGender(gender){
	this.gender = gender;
}

function ProductCertified(certified, type) {
	this.certified = certified;
	this.type = type;
}

function ProductBrand(brand){
	this.brand = brand;
}

function ProductSpecialShapeOrCategory(type) {
	this.type = type;
}

function WatchModel(model) {
	this.model = model;
}

// expects an array of material objects and type strings
function WatchBracelet(materials, types) {
	this.materials = materials;
	this.types = types;
}

// expects a LeatherStrapMaterial or OtherStrapMaterial
function WatchStrap(material) {
	this.material = material;
}

function LeatherStrapMaterial(color, source) {
	this.color = color;
	this.source = source;
}

function OtherStrapMaterial(name, color) {
	this.color = color;
	this.name = name;
}

// patterns, stones are arrays
function WatchDial(patterns, stones, color) {
	this.patterns = patterns;
	this.stones = stones;
	this.color = color;
}

function WatchDialPattern(pattern) {
	this.pattern = pattern;
}

function WatchDialStones(stone) {
	this.stone = stone;
}


// GoldMaterial, SilverMaterial, or OtherMaterial
function WatchCase(materials) {
	this.materials = materials;
 }

function WatchPapers(value) {
	this.value = value;
}

function ProductYear(year) {
	this.year = year;
}

function WatchMovement(movement) {
	this.movement = movement;
}

// expects an array of strings
function WatchCaseDimensions(dimensions) {
	this.dimensions = dimensions;
}



