# Tagging

NOTE: "process [...] as a generic tag" means that the item will be processed to generate its tags, which will then be appended, one by one, to the parent tag

## HOW TO GENERATE A GENERIC MATERIAL TAG

### GOLD:
- purity - MATERIAL_GOLD_PURITY
- color - MATERIAL_GOLD_COLOR
- composition - MATERIAL_GOLD_COMPOSITION

* RETURNS: gold, [composition] gold, [color] gold, [purity]
* Ex: 18kt yellow gold -> gold, yellow gold, 18kt

### SILVER: 
- composition - MATERIAL_SILVER_COMPOSITION

* RETURNS: silver, [composition] silver
* Ex: sterling silver -> silver, sterling silver

### OTHER:
- color - MATERIAL_OTHER_COLOR
- name - MATERIAL_OTHER_NAME

* RETURNS: [name], [color] [name]
* Ex: green enamel -> enamel, green enamel


## HOW TO GENERATE A GENERIC STONE TAG

### DIAMOND:
- color - STONE_DIAMOND_COLOR
- cut - STONE_DIAMOND_CUT

* RETURNS: diamond, [cut] diamond, [color] diamond
* Ex: yellow round-cut diamond -> diamond, round-cut diamond, yellow diamond

### OTHER:
- type - STONE_OTHER_TYPE
- color - STONE_OTHER_COLOR
- name - STONE_OTHER_NAME

* RETURNS: [name], [type], [color] [name]
* Ex: yellow spessartite garnet -> garnet, spessartite, yellow garnet


## HOW TO GENERATE ERA/TIME PERIOD TAG
- era - TIME_PERIOD

* RETURNS: [era] era
* Ex: edwardian era -> edwardian era


## HOW TO GENERATE JEWELRY PRODUCT CATEGORY TAG
- type - JEWELRY_PRODUCT_CATEGORY

* RETURNS: [type]
* Ex: bracelet -> bracelet


## HOW TO GENERATE BRIDAL PRODUCT CATEGORY TAG
- type - BRIDAL_PRODUCT_CATEGORY

* RETURNS: [type]
* Ex: engagement-rings -> engagement-rings

## HOW TO GENERATE WATCH PRODUCT CATEGORY TAG
- type - WATCH_PRODUCT_ CATEGORY

* RETURNS: [type]
* Ex: preowned -> preowned

## HOW TO GENERATE PRODUCT CONDITION TAG
- condition - PRODUCT_CONDITION

* RETURNS: condition [condition]
* Ex: excellent -> condition excellent


## HOW TO GENERATE PRODUCT GENDER TAG
- gender - PRODUCT_GENDER

* RETURNS: [gender]
* Ex: mens -> mens


## HOW TO GENERATE PRODUCT CERTIFIED TAG
- certified - PRODUCT_CERTIFIED
- type - PRODUCT_CERTIFIED_TYPE

* RETURNS: [certified], [type] certified
* Ex: gal -> certified, gal certified

## HOW TO GENERATE JEWELRY BRAND TAG
- brand - JEWELRY_BRAND_NAME

* RETURNS: [brand]
* Ex: chimento -> chimento

## HOW TO GENERATE SPECIAL COLLECTION TAG
- type - SPECIAL_COLLECTION_TAG

* RETURNS: [type]
* Ex: animal -> animal


## HOW TO GENERATE WATCH BRAND TAG
- name - WATCH_BRAND_NAME
RETURNS: [brand]

* RETURNS: [brand]
* Ex: elgin -> elgin


## HOW TO GENERATE WATCH MODEL TAG
- model - WATCH_MODEL_NAME

* RETURNS: model [model]
* Ex: datejust -> model datejust


## HOW TO GENERATE WATCH BRACELET TAG
- materials - process the material as a generic material tag
- types - WATCH_BRACELET_TYPE

* RETURNS: [material] bracelet, [type] bracelet
* Ex: 18kt yellow gold oyster bracelet -> 18kt bracelet, yellow gold bracelet, gold bracelet, oyster bracelet


## HOW TO GENERATE WATCH STRAP TAG
LEATHER:
- color - WATCH_STRAP_MATERIAL_LEATHER_COLOR
- source - WATCH_STRAP_MATERIAL_LEATHER_SOURCE

* RETURNS: leather strap, [color] leather strap, [source] leather strap
* Ex: black alligator leather strap -> leather strap, black leather strap, alligator leather strap

OTHER:
- name - WATCH_STRAP_MATERIAL_OTHER_NAME
- color - WATCH_STRAP_MATERIAL_OTHER_COLOR

* RETURNS: [name] strap, [color] strap
* Ex: brown rubber -> brown strap, rubber strap


## HOW TO GENERATE WATCH DIAL TAG
- patterns - WATCH_DIAL_PATTERN_FEATURE
- stones - WATCH_DIAL_STONE
- color - WATCH_DIAL_COLOR

* RETURNS: [color] dial, [stone] dial, [pattern] dial
* Ex: white lapis chrono dial -> white dial, lapis dial, chrono dial

## HOW TO GENERATE WATCH BEZEL TAG
- pattern - WATCH_BEZEL_PATTERN
- material - process the material as a generic tag
- stone - process the stone as a generic tag

* RETURNS: [pattern] bezel, [material] bezel, [stone] bezel
* Ex: 18kt yellow gold fluted bezel with blue sapphires -> fluted bezel, 18kt bezel, gold bezel, yellow gold bezel, sapphire bezel, blue sapphire bezel


## HOW TO GENERATE WATCH CASE MATERIAL TAG
- material - process the material as a generic tag

* RETURNS: [material] case material
* Ex: 18kt yellow gold case -> 18kt case material, gold case material, yellow gold case material

## HOW TO GENERATE WATCH PAPERS TAG
- value - WATCH_PAPERS_VALUE

* RETURNS: [value]
* Ex: papers -> papers



## HOW TO GENERATE PRODUCT YEAR TAG
- year - PRODUCT_YEAR

* RETURNS: year [year]
* Ex: 1953 -> year 1953

## HOW TO GENERATE WATCH MOVEMENT TAG
- movement - WATCH_MOVEMENT

* RETURNS: [movement] movement
* Ex: automatic -> automatic


## HOW TO GENERATE WATCH CASE DIMENSIONS TAG
- val1 - WATCH_CASE_DIMENSIONS
- val2 - WATCH_CASE_DIMENSIONS
- val3 - WATCH_CASE_DIMENSIONS

* RETURNS: case size [val1], case size [val2], case size [val1] X [val2] X [val3]
* Ex: 32mm x 36mm -> case size 32mm, sase size 36m, case size 32mm X 36mm

