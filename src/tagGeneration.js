
// ACCEPTS: GoldMaterial, string, string
// RETURNS: [goldPrefix]gold, [goldPrefix][composition] gold, [goldPrefix][color] gold, [goldPurityPrefix][purity]
function generateGoldMaterialTagStrategy(gold, goldPrefix, goldPurityPrefix) {
	var tags = [];
	var suffix = "gold";

	tags.push(goldPrefix + suffix);

	if(gold.purity != null) {
		tags.push(goldPurityPrefix + gold.purity);
	} 

	if(gold.color != null) {
		tags.push(goldPrefix + gold.color + " " + suffix);
	} 

	if(gold.composition != null) {
		tags.push(goldPrefix + gold.composition + " " + suffix);
	} 

	return tags;
}

// ACCEPTS: SilverMaterial, string
// RETURNS: [silverPrefix]silver, [silverPrefix][composition] silver
function generateSilverMaterialTagStrategy(silver, silverPrefix) {
	var tags = [];
	var suffix = "silver";

	tags.push(silverPrefix + suffix);

	if(silver.composition != null) {
		tags.push(silverPrefix + silver.composition + " " + suffix);
	} 

	return tags;
}

// ACCEPTS: OtherMaterial
// RETURNS: [matPrefix][name]
function generateOtherMaterialTagStrategy(other, matPrefix) {
	var tags = [];

	if(other.name != null) {
		tags.push(matPrefix + other.name);
	} 

	return tags;
}

// delegates to other material functions
// expects a GoldMaterial/SilverMaterial/OtherMaterial
//           {gold material prefixes}
//           {silver material prefixes}
//           {other material prefixes}
function generateMaterialTags(material, gP, sP, omP) {
	var generatedTags = null;

	if(material instanceof GoldMaterial) {
		generatedTags = generateGoldMaterialTag(currentMaterial, gP.goldPrefix, gP.goldPurityPrefix);
	} else if(material instanceof SilverMaterial) {
		generatedTags = generateSilverMaterialTag(currentMaterial, sP.silverPrefix);
	} else if(material instanceof OtherMaterial) {
		generatedTags = generateOtherMaterialTag(currentMaterial, omP.otherPrefix);
	} else {
		throw new Error("Watch bracelet material of unknown type");
	}

	return generatedTags;
}

// ACCEPTS: DiamondStone
// RETURNS: [diamondPrefix]diamond, [diamondPrefix][cut] diamond, [diamondPrefix][color]-color diamond, 
//          [diamondPrefix][clarity] diamond, [diamondPrefix][carat]ct diamond,
//          [diamondColorPrefix][fancycolor] diamond
function generateDiamondStoneTag(diamond, diamondPrefix, diamondColorPrefix) {
	var tags = [];
	var suffix = "diamond";


	if(diamond.cut != null) {
		tags.push(diamondPrefix + diamond.cut + " " + suffix);
	}

	if(diamond.color != null) {
		tags.push(diamondPrefix+ diamond.color + "-color " + suffix);
	} 

	if(diamond.clarity != null) {
		tags.push(diamondPrefix + diamond.clarity + " " + suffix);
	} 
	
	if(diamond.cut != null) {
		tags.push(diamondPrefix + diamond.carat + "ct " + suffix);
	} 

	if(diamond.fancycolor != null) {
		tags.push(diamondColorPrefix + diamond.fancycolor + " " + suffix);
	} 

	if(tags.length > 0) {
		tags.push(diamondPrefix + suffix);
	}

	return tags;
}

// ACCEPTS: OtherStone
// RETURNS: [stonePrefix][name], [stonePrefix][color] [name], [carat]ct [name]
function generateOtherStoneTag(other, stonePrefix, stoneColorPrefix) {
	var tags = [];

	if(other.name != null) {
		tags.push(stonePrefix + other.name);

		if(other.color != null) {
			tags.push(stoneColorPrefix + other.color + " " + other.name);
		} 

		if(other.carat != null) {
			tags.push(stonePrefix + other.carat + "ct " + other.name);
		} 

	} 

	if(other.type != null) {
		tags.push(other.type);
	} 

	return tags;
}

// ACCEPTS: EstateDecade
// RETURNS: [decadePrefix][decade]
function generateEstateDecadeTag(decade, decadePrefix) {
	var tags = [];

	if(decade.decade != null) {
		tags.push(decadePrefix + " " + decade.decade);
	}

	return tags;
}

// ACCEPTS: Era
// RETURNS: [eraPrefix][era]
function generateEraTimePeriodTag(era, eraPrefix) {
	var tags = [];

	if(era.era != null) {
		tags.push(eraPrefix + era.era);
	}

	return tags;
}

// ACCEPTS: ProductCategory
// RETURNS: [type]
function generateProductTypeTag(productType, ) {
	return generateSimpleTag(productType.category);
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

// ACCEPTS: ProductGender
// RETURNS: [genderPrefix][gender]
function generateProductGenderTag(gender, genderPrefix) {
	var tags = [];

	if(gender.gender != null) {
		tags.push(genderPrefix + gender.gender);
	}

	return tags;
}

// ACCEPTS: ProductCertified
// RETURNS: [certifiedPrefix]
function generateProductCertifiedTag(certifiedPrefix) {
	var tags = [];

	tags.push(certifiedPrefix);

	return tags;
}

// ACCEPTS: ProductBrand
// RETURNS: [brandPrefix][brand]
function generateProductBrandTag(brand, brandPrefix) {
	return generateSimpleTag(brandPrefix + brand.brand);
}

// ACCEPTS: ProductSpecialShapeOrCategory
// RETURNS: [spCollPrefix][type]
function generateSpecialCollectionTag(type, spCollPrefix) {
	return generateSimpleTag(spCollPrefix + type.type);
}

// ACCEPTS: WatchModel
// RETURNS: [modelPrefix][model]
function generateWatchModelTag(model, modelPrefix) {
	var tags = [];

	if(model.model != null) {
		tags.push(modelPrefix + model.model);
	}

	return tags;
}

// ACCEPTS: WatchBracelet
// RETURNS: for each material: [prefix][material] bracelet
function generateWatchBraceletTag(watchBracelet) {
	var tags = [];
	var suffix = "bracelet";
	var currentMaterial = null;
	var currentMaterialTags = null;

	var goldPrefixValues = {
    	goldPrefix: "$INFO$cmbndmatat$";
    	goldPurityPrefix"$INFO$cmbndmatat_goldpur$";
	};

	var silverPrefixValues = {
    	silverPrefix: "$INFO$cmbndmatat$";
	};

	var otherMaterialValues = {
    	otherPrefix: "$INFO$cmbndmatat$";
	};



	if(watchBracelet.materials != null && watchBracelet.materials.length > 0) {
		for(var i = 0; i < watchBracelet.materials.length; i++) {
			currentMaterial = watchBracelet.materials[i];

			currentMaterialTags = generateMaterialTags(currentMaterial, goldPrefixValues, silverPrefixValues, otherMaterialValues);

			for(var j = 0; j < currentMaterialTags.length; j++) {
				tags.push(currentMaterialTags[j].replace() + " " + suffix);
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
// RETURNS: [dialColorPrefix][color] dial, [dialStonePrefix][stone] dial
function generateWatchDialTag(watchDial, dialColorPrefix, dialStonePrefix) {
	var tags = [];
	var suffix = "dial";

	if(watchDial.stones != null && watchDial.stones.length > 0) {
		for(var i = 0; i < watchDial.stones.length; i++) {
			tags.push(dialStonePrefix + watchDial.stones[i] + " " + suffix);
		}

	}

	if(watchDial.color != null) {
		tags.push(dialColorPrefix + watchDial.color + " " + suffix);
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
// RETURNS: [watchPapersPrefix]
function generateWatchPapersTag(watchPapersPrefix) {
	return generateSimpleTag(watchPapersPrefix);
}

// ACCEPTS: ProductYear
// RETURNS: [yearPrefix][year]
function generateProductYearTag(productYear, yearPrefix) {
	var tags = [];

	if(productYear.year != null) {
		tags.push(yearPrefix + " " + productYear.year);
	}

	return tags;
}

// ACCEPTS: WatchMovement
// RETURNS: [movementPrefix][movement] movement
function generateWatchMovementTag(watchMovement, movementPrefix) {
	var tags = [];
	var suffix = "movement";

	if(watchMovement.movement != null) {
		tags.push(movementPrefix + watchMovement.movement + " " + suffix);
	}

	return tags;
}

// ACCEPTS: WatchCaseDimensions
// RETURNS: [caseSizePrefix][val1], [caseSizePrefix][val2], [caseSizePrefix][val3]
function generateWatchCaseSizeTag(watchCaseDimensions, caseSizePrefix) {
	var tags = [];

	if(watchCaseDimensions.dimensions != null && watchCaseDimensions.dimensions.length > 0) {
		for(var i = 0; i < watchCaseDimensions.dimensions.length; i++) {
			tags.push(caseSizePrefix + watchCaseDimensions.dimensions[i]);
		}
	}

	return tags;
}

