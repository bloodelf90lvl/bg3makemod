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
   // rage effect
   data "SpellAnimation" "73afb4e5-8cfe-4479-95cf-16889597fee3,,;9583ecee-cf6c-4735-86db-7ebf1df15eae,,;de006e3f-70fb-4eb7-a98d-d845d15b20e8,,;50696db7-d931-4734-915d-32d038ba99a5,,;6ec808e1-e128-44ef-9361-a713bf86de8f,,;,,;f920a0a6-f257-4ce4-8d17-2dcaa7bb7bbb,,;,,;,,"


   # заражение
   new entry "Projectile_SpiderInfestation"
   type "SpellData"
   data "SpellType" "Projectile"
   using "Projectile_MainHandAttack"
   data "TargetRadius" "3"
   data "AreaRadius" "3"
   data "ExplodeRadius" "3"
   data "SpellRoll" "not SavingThrow(Ability.Dexterity, 13)"
   data "SpellSuccess" "ApplyStatus(SPIDER_INFESTATION,100,4)"
   data "TargetConditions" "Character() and not Self() and not Dead() and not (Tagged('SPIDER') or Tagged('SPIDER_PHASE') or HasPassive('SpiderWalk') or HasStatus('SPIDER_INFESTATION'))"
   data "Trajectories" "6febfa58-3230-4779-b52e-3df2518c0f85"
   data "DisplayName" "h3f2782eag1b3dg4d1bg915ag8043f150a66f;1"
   data "Description" "h393f6a0cg9b4dg4d0eg8227g9d0d5b339d9b;2"
   data "TooltipDamageList" ""
   data "TooltipAttackSave" "Dexterity"
   data "TooltipStatusApply" "ApplyStatus(SPIDER_INFESTATION,100,4)"
   data "SpellAnimationIntentType" "Aggressive"


- make bite to poizon enemies with TWN_Poison_Paralytic_A_a5d93495 on stan/using resource
- update character stats
- default resistance check
- spiders infusions Projectile_SpiderInfestation
- use this to make eggs Target_FOR_SpiderQueen_HatchEggs
