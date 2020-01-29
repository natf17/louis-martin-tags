
// ACCEPTS: GoldMaterial
// RETURNS: gold, [composition] gold, [color] gold, [purity]
function generateGoldMaterialTagStrategy(gold) {
	var tags = [];
	var suffix = "gold";

	if(gold.purity != null) {
		tags.push(suffix);
	} 

	if(gold.color != null) {
		tags.push(gold.color + " " + suffix);
	} 

	if(gold.composition != null) {
		tags.push(gold.composition + " " + suffix);
	} 

	if(tags.length > 0) {
		tags.push(suffix);
	}

	return tags;
}

// ACCEPTS: SilverMaterial
// RETURNS: silver, [composition] silver
function generateSilverMaterialTagStrategy(silver) {
	var tags = [];
	var suffix = "silver";

	tags.push(suffix);

	if(silver.composition != null) {
		tags.push(silver.composition + " " + suffix);
	} 

	return tags;
}

// ACCEPTS: OtherMaterial
// RETURNS: [name], [color] [name]
function generateOtherMaterialTagStrategy(other) {
	var tags = [];

	if(other.name != null) {
		tags.push(other.name);

		if(other.color != null) {
			tags.push(other.color + " " + other.name);
		} 
	} 

	return tags;
}

// delegates to other material functions
function generateMaterialTags(material) {
	var generatedTags = null;

	if(material instanceof GoldMaterial) {
		generatedTags = generateGoldMaterialTag(currentMaterial);
	} else if(material instanceof SilverMaterial) {
		generatedTags = generateSilverMaterialTag(currentMaterial);
	} else if(material instanceof OtherMaterial) {
		generatedTags = generateOtherMaterialTag(currentMaterial);
	} else {
		throw new Error("Watch bracelet material of unknown type");
	}

	return generatedTags;
}

// ACCEPTS: DiamondStone
// RETURNS: diamond, [cut] diamond, [color]-color diamond, [clarity] diamond, [carat]ct diamond, [fancycolor] diamond
function generateDiamondStoneTag(diamond) {
	var tags = [];
	var suffix = "diamond";


	if(diamond.cut != null) {
		tags.push(diamond.cut + " " + suffix);
	}

	if(diamond.color != null) {
		tags.push(diamond.color + "-color " + suffix);
	} 

	if(diamond.clarity != null) {
		tags.push(diamond.clarity + " " + suffix);
	} 
	
	if(diamond.cut != null) {
		tags.push(diamond.carat + "ct " + suffix);
	} 

	if(diamond.fancycolor != null) {
		tags.push(diamond.fancycolor + " " + suffix);
	} 

	if(tags.length > 0) {
		tags.push(suffix);
	}

	return tags;
}

// ACCEPTS: OtherStone
// RETURNS: [name], [type], [color] [name], [carat]ct [name]
function generateOtherStoneTag(other) {
	var tags = [];

	if(other.name != null) {
		tags.push(other.name);

		if(other.color != null) {
			tags.push(other.color + " " + other.name);
		} 

		if(other.carat != null) {
			tags.push(other.carat + "ct " + other.name);
		} 

	} 

	if(other.type != null) {
		tags.push(other.type);
	} 

	return tags;
}

// ACCEPTS: Era
// RETURNS: [era] era
function generateEraTimePeriodTag(era) {
	var tags = [];
	var suffix = "era";

	if(era.era != null) {
		tags.push(era.era + " " + suffix);
	}

	return tags;
}

// ACCEPTS: ProductCategory
// RETURNS: [type]
function generateProductTypeTag(productType) {
	return generateSimpleTag(productType.category);
}

// RETURNS: [value]
function generateSimpleTag(value) {
	var tags = [];

	if(productType != null) {
		tags.push(value);
	}

	return tags;
}

// ACCEPTS: ProductCondition
// RETURNS: condition [condition]
function generateProductConditionTag(condition) {
	var tags = [];
	var prefix = "condition";

	if(condition.condition != null) {
		tags.push(prefix + " " + condition.condition);
	}

	return tags;
}

// ACCEPTS: ProductGender
// RETURNS: [gender]
function generateProductGenderTag(gender) {
	var tags = [];

	if(gender.gender != null) {
		tags.push(gender.gender);
	}

	return tags;
}

// ACCEPTS: ProductCertified
// RETURNS: [certified], [type] certified
function generateProductCertifiedTag(certified) {
	var tags = [];
	var suffix = "certified";

	if(certified.certified != null) {
		tags.push(certified.certified);
		
		if(certified.type != null) {
			tags.push(certified.type + " " + suffix);
		}
	}

	return tags;
}

// ACCEPTS: ProductBrand
// RETURNS: [brand]
function generateProductBrandTag(brand) {
	return generateSimpleTag(brand.brand);
}

// ACCEPTS: ProductSpecialShapeOrCategory
// RETURNS: [type]
function generateSpecialCollectionTag(type) {
	return generateSimpleTag(type.type);
}

// ACCEPTS: WatchModel
// RETURNS: model [model]
function generateWatchModelTag(model) {
	var tags = [];
	var prefix = "model";

	if(model.model != null) {
		tags.push(prefix + " " + model.model);
	}

	return tags;
}

// ACCEPTS: WatchBracelet
// RETURNS: for each material: [material] bracelet
//         [type] bracelet
function generateWatchBraceletTag(watchBracelet) {
	var tags = [];
	var suffix = "bracelet";
	var currentMaterial = null;
	var currentMaterialTags = null;

	if(watchBracelet.types != null && watchBracelet.types.length > 0) {
		for(var i = 0; i < watchBracelet.types.length; i++) {
			tags.push(watchBracelet.types[i] + " " + suffix);
		}
	}

	if(watchBracelet.materials != null && watchBracelet.materials.length > 0) {
		for(var i = 0; i < watchBracelet.materials.length; i++) {
			currentMaterial = watchBracelet.materials[i];

			currentMaterialTags = generateMaterialTags(currentMaterial);

			for(var j = 0; j < currentMaterialTags.length; j++) {
				tags.push(currentMaterialTags[j] + " " + suffix);
			}
		}
	}

	return tags;
}

// ACCEPTS: LeatherStrapMaterial/OtherStrapMaterial
// RETURNS: leather strap, [color] leather strap, [source] leather strap
//     or: [name] strap, [color] strap
function generateWatchStrapTag(watchStrap) {
	var tags = [];
	var leather = "leather";
	var suffix = "strap";

	if(watchStrap.material instanceof LeatherStrapMaterial) {
		tags.push(leather + " " + strap);
		if(watchStrap.material.color != null) {
			tags.push(watchStrap.material.color + " " leather + " " + strap);
		}
		if(watchStrap.material.source != null) {
			tags.push(watchStrap.material.source + " " leather + " " + strap);
		}
	} else if (watchStrap.material instanceof OtherStrapMaterial) {
		if(watchStrap.material.name != null) {
			tags.push(watchStrap.material.name + " " + strap);
		} else {
			throw new Error("Other strap material must have a name");

		}

		if(watchStrap.material.color != null) {
			tags.push(watchStrap.material.color + " " + strap);
		}
	} else {
		throw new Error("Watch strap material of unknown type");
	}

	return tags;
}

// ACCEPTS: WatchDial
// RETURNS: [color] dial, [stone] dial, [pattern] dial
function generateWatchDialTag(watchDial) {
	var tags = [];
	var suffix = "dial";

	if(watchDial.patterns != null && watchDial.patterns.length > 0) {
		for(var i = 0; i < watchDial.patterns.length; i++) {
			tags.push(watchDial.patterns[i] + " " + suffix);
		}

	}

	if(watchDial.stones != null && watchDial.stones.length > 0) {
		for(var i = 0; i < watchDial.stones.length; i++) {
			tags.push(watchDial.stones[i] + " " + suffix);
		}

	}

	if(watchDial.color != null) {
		tags.push(watchDial.color + " " + suffix);
	}

	return tags;

}

// ACCEPTS: WatchCase
// RETURNS: [material] case material
function generateWatchCaseTag(watchCase) {
	var tags = [];
	var suffix = "case material";

	var currentMaterial;
	if(watchCase.materials != null && watchCase.materials.length > 0) {
		for(var i = 0; i < watchCase.materials.length; i++) {
			currentMaterial = watchCase.materials[i];
			
			currentMaterialTags  = generateMaterialTags(currentMaterial);
			
			for(var j = 0; j < currentMaterialTags.length; j++) {
				tags.push(currentMaterialTags[j] + " " + suffix);
			}
		}
	}

	return tags;

}

// ACCEPTS: WatchPapers
// RETURNS: [value]
function generateWatchPapersTag(watchPapers) {
	return generateSimpleTag(watchPapers.value);
}

// ACCEPTS: ProductYear
// RETURNS: year [year]
function generateProductYearTag(productYear) {
	var tags = [];
	var prefix = "year";

	if(productYear.year != null) {
		tags.push(prefix + " " + productYear.year);
	}

	return tags;
}

// ACCEPTS: WatchMovement
// RETURNS: [movement] movement
function generateWatchMovementTag(watchMovement) {
	var tags = [];
	var suffix = "movement";

	if(watchMovement.movement != null) {
		tags.push(watchMovement.movement + " " + suffix);
	}

	return tags;
}

// ACCEPTS: WatchCaseDimensions
// RETURNS: case size [val1], case size [val2], case size [val1] X [val2] X [val3]
function generateWatchCaseSizeTag(watchCaseDimensions) {
	var tags = [];
	var prefix = "case size";
	var fullDimension = "";
	var connector = " X ";

	if(watchCaseDimensions.dimensions != null && watchCaseDimensions.dimensions.length > 0) {
		for(var i = 0; i < watchCaseDimensions.dimensions.length; i++) {
			tags.push(prefix + " " + watchCaseDimensions.dimensions);

			if(i < watchCaseDimensions.dimensions.length - 1) {
				fullDimension += connector;
			}
		}
		tags.push(prefix + " " + fullDimension);
	}

	return tags;
}

