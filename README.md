# Tagging

NOTE: "process [...] as a generic tag" means that the item will be processed to generate its tags, which will then be appended, one by one, to the parent tag

## HOW TO GENERATE A GENERIC MATERIAL TAG

### GOLD:
- purity - MATERIAL_GOLD_PURITY
- color - MATERIAL_GOLD_COLOR
- composition - MATERIAL_GOLD_COMPOSITION
RETURNS: gold, [composition] gold, [color] gold, [purity]

### SILVER: 
- composition - MATERIAL_SILVER_COMPOSITION
RETURNS: silver, [composition] silver

### OTHER:
- color - MATERIAL_OTHER_COLOR
- name - MATERIAL_OTHER_NAME
RETURNS: [name], [color] [name]



## HOW TO GENERATE A GENERIC STONE TAG

### DIAMOND:
- color - STONE_DIAMOND_COLOR
- cut - STONE_DIAMOND_CUT
RETURNS: diamond, [cut] diamond, [color] diamond

### OTHER:
- type - STONE_OTHER_TYPE
- color - STONE_OTHER_COLOR
- name - STONE_OTHER_NAME
RETURNS: [name], [type], [color] [name]



## HOW TO GENERATE ERA/TIME PERIOD TAG
- era - TIME_PERIOD
RETURNS: [era] era



## HOW TO GENERATE JEWELRY PRODUCT CATEGORY TAG
- type - JEWELRY_PRODUCT_CATEGORY
RETURNS: [type]



## HOW TO GENERATE BRIDAL PRODUCT CATEGORY TAG
- type - BRIDAL_PRODUCT_CATEGORY
RETURNS: [type]



## HOW TO GENERATE WATCH PRODUCT CATEGORY TAG
- type - WATCH_PRODUCT_ CATEGORY
RETURNS: [type]



## HOW TO GENERATE PRODUCT CONDITION TAG
- condition - PRODUCT_CONDITION
RETURNS: condition [condition]



## HOW TO GENERATE PRODUCT GENDER TAG
- gender - PRODUCT_GENDER
RETURNS: [gender]



## HOW TO GENERATE PRODUCT CERTIFIED TAG
- certified - PRODUCT_CERTIFIED
- type - PRODUCT_CERTIFIED_TYPE
RETURNS: [certified], [type] certified



## HOW TO GENERATE JEWELRY BRAND TAG
- brand - JEWELRY_BRAND_NAME
RETURNS: [brand]



## HOW TO GENERATE SPECIAL COLLECTION TAG
- type - SPECIAL_COLLECTION_TAG
RETURNS: [type]




## HOW TO GENERATE WATCH BRAND TAG
- name - WATCH_BRAND_NAME
RETURNS: [brand]



## HOW TO GENERATE WATCH MODEL TAG
- model - WATCH_MODEL_NAME
RETURNS: model [model]



## HOW TO GENERATE WATCH BRACELET TAG
- materials - process the material as a generic tag
- types - WATCH_BRACELET_TYPE
RETURNS: [material] bracelet, [type] bracelet



## HOW TO GENERATE WATCH STRAP TAG
LEATHER:
- color - WATCH_STRAP_MATERIAL_LEATHER_COLOR
- source - WATCH_STRAP_MATERIAL_LEATHER_SOURCE
RETURNS: leather strap, [color] leather strap, [source] leather strap

OTHER:
- name - WATCH_STRAP_MATERIAL_OTHER_NAME
- color - WATCH_STRAP_MATERIAL_OTHER_COLOR
RETURNS: [name] strap, [color] strap



## HOW TO GENERATE WATCH DIAL TAG
- patterns - WATCH_DIAL_PATTERN_FEATURE
- stones - WATCH_DIAL_STONE
- color - WATCH_DIAL_COLOR
RETURNS: [color] dial, [stone] dial, [pattern] dial



## HOW TO GENERATE WATCH BEZEL TAG
- pattern - WATCH_BEZEL_PATTERN
- material - process the material as a generic tag
- stone - process the stone as a generic tag
RETURNS: [pattern] bezel, [material] bezel, [stone] bezel



## HOW TO GENERATE WATCH CASE MATERIAL TAG
- material - process the material as a generic tag
RETURNS: [material] case material



## HOW TO GENERATE WATCH PAPERS TAG
- value - WATCH_PAPERS_VALUE
RETURNS: [value]



## HOW TO GENERATE PRODUCT YEAR TAG
- year - PRODUCT_YEAR
RETURNS: year [year]



## HOW TO GENERATE WATCH MOVEMENT TAG
- movement - WATCH_MOVEMENT
RETURNS: [movement] movement



## HOW TO GENERATE WATCH CASE DIMENSIONS TAG
- val1 - WATCH_CASE_DIMENSIONS
- val2 - WATCH_CASE_DIMENSIONS
- val3 - WATCH_CASE_DIMENSIONS
RETURNS: case size [val1], case size [val2], case size [val1] X [val2] X [val3]

