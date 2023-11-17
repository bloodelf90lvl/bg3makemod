Make a new mod:
 - change visual model of spider's toxic robe to use model of drow's mage robe
 - make 2 versions, vanilla status and reworked stats
 - reworked version will keep vanila's effect, but also will provide a new spell shapeshift which will transform you into a mother of spider
 - spider queen, add new spell to summon some spiders?? (throwble spiders bomb might help)
    // discoverd in Gustav
    new entry "FOR_SpiderQueen_Robe"
    type "Armor"
    using "ARM_Robe_Body"
    data "RootTemplate" "0db056b3-23d1-4873-883d-482b5d9337b5"
    data "ItemGroup" ""
    data "ValueLevel" "5"
    data "ValueUUID" "be545ee9-311c-4ab8-ab14-fefcc552cace"
    data "ValueScale" "1"
    data "Rarity" "Uncommon"
    data "PassivesOnEquip" "FOR_SpiderQueen_Robe_Passive"
    data "Unique" "1"

   FOR_Spiders_SpiderQueen // boss   Spider_Phase_Queen   Phase_Spider_Queen
   6047fffd-f7d3-4956-8b7a-ef82c08f8867
   MAG_LuckySeven_Amulet_95f850c6-ccaf-4f37-8c7a-33f740765ec0
   TWN_Poison_Paralytic_A_a5d93495-c01c-4dd4-928c-3793f620121f


- make bite to poizon enemies with TWN_Poison_Paralytic_A_a5d93495 on stan/using resource
- update character stats
- default resistance check
- spiders infusions Projectile_SpiderInfestation
- use this to make eggs Target_FOR_SpiderQueen_HatchEggs
