# Tagging

NOTE: If the value for "source of values" is all caps, it refers to a variable with the given name.

## HOW TO GENERATE GENERIC MATERIAL TAGS

### GOLD:

  |--------------------------------------------------------------------------------------------------|
  |Properties:                     Purity                 Color                 Composition          |
  |--------------------------------------------------------------------------------------------------|
  |Source of values:        MATERIAL_GOLD_PURITY    MATERIAL_GOLD_COLOR   MATERIAL_GOLD_COMPOSITION  |
  |--------------------------------------------------------------------------------------------------|
  |Generated tags format:            gold, [composition] gold, [color] gold, [purity]                |
  |--------------------------------------------------------------------------------------------------|

Ex: an 18kt yellow gold material is tagged as: **gold, yellow gold, 18kt**

### SILVER: 

  |--------------------------------------------------------------|
  |Properties:                        Composition                |
  |--------------------------------------------------------------|
  |Source of values:           MATERIAL_SILVER_COMPOSITION       |
  |--------------------------------------------------------------|
  |Generated tags format:      silver, [composition] silver      |
  |--------------------------------------------------------------|

Ex: a sterling silver material is tagged as: **silver, sterling silver**


### OTHER:

  |-------------------------------------------------------------------------|
  |Properties:                     Color                 Name               |
  |-------------------------------------------------------------------------|
  |Source of values:        MATERIAL_OTHER_COLOR    MATERIAL_OTHER_NAME     |
  |-------------------------------------------------------------------------|
  |Generated tags format:            [name], [color] [name]                 |
  |-------------------------------------------------------------------------|

Ex: green enamel is tagged as **enamel, green enamel**


## HOW TO GENERATE A GENERIC STONE TAG

### DIAMOND:

  |----------------------------------------------------------------------------------------------------------------------------------|
  |Properties:                   Cut                  Color                Clarity             Carat             Fancycolor          |
  |----------------------------------------------------------------------------------------------------------------------------------|
  |Source of values:       STONE_DIAMOND_CUT   STONE_DIAMOND_COLOR   STONE_DIAMOND_CLARITY   user-input     STONE_DIAMOND_FANCYCOLOR |
  |----------------------------------------------------------------------------------------------------------------------------------|
  |Generated tags format:  diamond, [cut] diamond, [color]-color diamond, [clarity] diamond, [carat]ct diamond, [fancycolor] diamond |
  |----------------------------------------------------------------------------------------------------------------------------------|

Ex: 2.05ct yellow round-cut diamond, VS1-clarity and G-color is tagged as: **diamond, round-cut diamond, G-color diamond, VS1 diamond, 2.05ct diamond, yellow diamond**


### OTHER:
  |--------------------------------------------------------------------------------------------------|
  |Properties:                 Type                 Color                Name            Carat       |
  |--------------------------------------------------------------------------------------------------|
  |Source of values:     STONE_OTHER_TYPE     STONE_OTHER_COLOR    STONE_OTHER_NAME    user-input    |
  |--------------------------------------------------------------------------------------------------|
  |Generated tags format:                    [name], [type], [color] [name], [carat]ct [name]        |
  |--------------------------------------------------------------------------------------------------|

Ex: yellow spessartite garnet is tagged as **garnet, spessartite, yellow garnet**


## HOW TO GENERATE ERA/TIME PERIOD TAG

  |--------------------------------------------|
  |Properties:                  Era            |
  |--------------------------------------------|
  |Source of values:        TIME_PERIOD        |
  |--------------------------------------------|
  |Generated tags format:    [era] era         |
  |--------------------------------------------|

Ex: edwardian era is tagged as **edwardian era**


## HOW TO GENERATE JEWELRY PRODUCT CATEGORY TAG

  |----------------------------------------------------|
  |Properties:                       Type              |
  |----------------------------------------------------|
  |Source of values:       JEWELRY_PRODUCT_CATEGORY    |
  |----------------------------------------------------|
  |Generated tags format:           [type]             |
  |----------------------------------------------------|

Ex: bracelet is tagged as **bracelet**


## HOW TO GENERATE BRIDAL PRODUCT CATEGORY TAG

  |----------------------------------------------------|
  |Properties:                       Type              |
  |----------------------------------------------------|
  |Source of values:       BRIDAL_PRODUCT_CATEGORY     |
  |----------------------------------------------------|
  |Generated tags format:           [type]             |
  |----------------------------------------------------|

Ex: engagement-rings is tagged as **engagement-rings**


## HOW TO GENERATE WATCH PRODUCT CATEGORY TAG

  |----------------------------------------------------|
  |Properties:                       Type              |
  |----------------------------------------------------|
  |Source of values:       WATCH_PRODUCT_CATEGORY      |
  |----------------------------------------------------|
  |Generated tags format:           [type]             |
  |----------------------------------------------------|

Ex: preowned is tagged as **preowned**


## HOW TO GENERATE PRODUCT CONDITION TAG

  |----------------------------------------------------|
  |Properties:                       Condition         |
  |----------------------------------------------------|
  |Source of values:           PRODUCT_CONDITION       |
  |----------------------------------------------------|
  |Generated tags format:    condition [condition]     |
  |----------------------------------------------------|

Ex: excellent is tagged as **condition excellent**


## HOW TO GENERATE PRODUCT GENDER TAG

  |---------------------------------------------|
  |Properties:                 Gender           |
  |---------------------------------------------|
  |Source of values:       PRODUCT_GENDER       |
  |---------------------------------------------|
  |Generated tags format:     [gender]          |
  |---------------------------------------------|

Ex: mens is tagged as **mens**


## HOW TO GENERATE PRODUCT CERTIFIED TAG

  |----------------------------------------------------------------------|
  |Properties:                 Certified                 Type            |
  |----------------------------------------------------------------------|
  |Source of values:       PRODUCT_CERTIFIED    PRODUCT_CERTIFIED_TYPE   |
  |----------------------------------------------------------------------|
  |Generated tags format:        [certified], [type] certified           |
  |----------------------------------------------------------------------|

Ex: gal-certified is tagged as **certified, gal certified**


## HOW TO GENERATE JEWELRY BRAND TAG

  |----------------------------------------------|
  |Properties:                   Brand           |
  |----------------------------------------------|
  |Source of values:       JEWELRY_BRAND_NAME    |
  |----------------------------------------------|
  |Generated tags format:       [brand]          |
  |----------------------------------------------|

Ex: Chimento is tagged as **chimento**


## HOW TO GENERATE SPECIAL COLLECTION TAG

  |------------------------------------------------|
  |Properties:                   Type              |
  |------------------------------------------------|
  |Source of values:      SPECIAL_COLLECTION_TAG   |
  |------------------------------------------------|
  |Generated tags format:       [type]             |
  |------------------------------------------------|

Ex: animal is tagged as **animal**


## HOW TO GENERATE WATCH BRAND TAG

  |--------------------------------------------------|
  |Properties:                   Brand               |
  |--------------------------------------------------|
  |Source of values:      WATCH_BRAND_NAME           |
  |--------------------------------------------------|
  |Generated tags format:       [brand]              |
  |--------------------------------------------------|

Ex: elgin is tagged as **elgin**


## HOW TO GENERATE WATCH MODEL TAG

  |--------------------------------------------------|
  |Properties:                  Model                |
  |--------------------------------------------------|
  |Source of values:      WATCH_MODEL_NAME           |
  |--------------------------------------------------|
  |Generated tags format:       [model]              |
  |--------------------------------------------------|

Ex: Datejust is tagged as **datejust**


## HOW TO GENERATE WATCH BRACELET TAG

  |--------------------------------------------------------------------------------|
  |Properties:                  Materials                          type            |
  |--------------------------------------------------------------------------------|
  |Source of values:      see "HOW TO GENERATE GENERIC      WATCH_BRACELET_TYPE    |
  |                            MATERIALS TAGS"                                     |
  |--------------------------------------------------------------------------------|
  |Generated tags format:       [material]^ bracelet, [type] bracelet              |
  |--------------------------------------------------------------------------------| 
^for each material tag generated as shown in "HOW... GENERIC MATERIALS TAGS", append "bracelet"

Ex: 18kt yellow gold oyster bracelet is tagged as **18kt bracelet, yellow gold bracelet, gold bracelet, oyster bracelet**


## HOW TO GENERATE WATCH STRAP TAG
LEATHER:

  |-----------------------------------------------------------------------------------------------------|
  |Properties:                            Color                                  Source                 |
  |-----------------------------------------------------------------------------------------------------|
  |Source of values:       WATCH_STRAP_MATERIAL_LEATHER_COLOR     WATCH_STRAP_MATERIAL_LEATHER_SOURCE   |
  |-----------------------------------------------------------------------------------------------------|
  |Generated tags format:        leather strap, [color] leather strap, [source] leather strap           |
  |-----------------------------------------------------------------------------------------------------|

Ex: black alligator leather strap is tagged as **leather strap, black leather strap, alligator leather strap**


OTHER:

  |-----------------------------------------------------------------------------------------------------|
  |Properties:                            Name                                  Color                   |
  |-----------------------------------------------------------------------------------------------------|
  |Source of values:       WATCH_STRAP_MATERIAL_OTHER_NAME        WATCH_STRAP_MATERIAL_OTHER_COLOR      |
  |-----------------------------------------------------------------------------------------------------|
  |Generated tags format:                         [name] strap, [color] strap                           |
  |-----------------------------------------------------------------------------------------------------|

Ex: brown rubber strap is tagged as **brown strap, rubber strap**


## HOW TO GENERATE WATCH DIAL TAG

  |--------------------------------------------------------------------------------------------------|
  |Properties:                     Patterns                    Stones                 Color          |
  |--------------------------------------------------------------------------------------------------|
  |Source of values:        WATCH_DIAL_PATTERN_FEATURE    WATCH_DIAL_STONE      WATCH_DIAL_COLOR     |
  |--------------------------------------------------------------------------------------------------|
  |Generated tags format:               [color] dial, [stone] dial, [pattern] dial                   |
  |--------------------------------------------------------------------------------------------------|

Ex: a white lapis chrono dial is tagged as: **white dial, lapis dial, chrono dial**


## HOW TO GENERATE WATCH CASE MATERIAL TAG

  |------------------------------------------------------------|
  |Properties:                  Materials                      |
  |------------------------------------------------------------|
  |Source of values:      see "HOW TO GENERATE GENERIC         |
  |                            MATERIALS TAGS"                 |
  |------------------------------------------------------------|
  |Generated tags format:     [material]^ case material        |
  |------------------------------------------------------------| 
^for each material tag generated as shown in "HOW... GENERIC MATERIALS TAGS", append "case material"

Ex: 18kt yellow gold case is tagged as **18kt case material, gold case material, yellow gold case material**


## HOW TO GENERATE WATCH PAPERS TAG

  |--------------------------------------------------|
  |Properties:                  Value                |
  |--------------------------------------------------|
  |Source of values:      WATCH_PAPERS_VALUE         |
  |--------------------------------------------------|
  |Generated tags format:       [value]              |
  |--------------------------------------------------|

Ex: papers is tagged as **papers**


## HOW TO GENERATE PRODUCT YEAR TAG

  |-----------------------------------------------|
  |Properties:                  Year              |
  |-----------------------------------------------|
  |Source of values:        PRODUCT_YEAR          |
  |-----------------------------------------------|
  |Generated tags format:   year [year]           |
  |-----------------------------------------------|

Ex: 1953 is tagged as **year 1953**


## HOW TO GENERATE WATCH MOVEMENT TAG

  |-----------------------------------------------|
  |Properties:                  Movement          |
  |-----------------------------------------------|
  |Source of values:          WATCH_MOVEMENT      |
  |-----------------------------------------------|
  |Generated tags format:  [movement] movement    |
  |-----------------------------------------------|

Ex: automatic is tagged as **automatic movement**


## HOW TO GENERATE WATCH CASE DIMENSIONS TAG

  |-------------------------------------------------------------------------------------------------------|
  |Properties:                      Val1                     Val2                       Val3              |
  |-------------------------------------------------------------------------------------------------------|
  |Source of values:        WATCH_CASE_DIMENSIONS    WATCH_CASE_DIMENSIONS      WATCH_CASE_DIMENSIONS     |
  |-------------------------------------------------------------------------------------------------------|
  |Generated tags format:     case size [val1], case size [val2], case size [val1] X [val2] X [val3]      |
  |-------------------------------------------------------------------------------------------------------|

Ex: case dimensions of 32mm x 36mm: **case size 32mm, case size 36m, case size 32mm X 36mm**

