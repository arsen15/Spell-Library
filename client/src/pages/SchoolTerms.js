import React from "react";
import './SchoolTerms.css'; 

function SchoolTerms() {
    return(
        <div className="container">
            <h1 align = "left"> School Terms page</h1>

            <div className="school-container">
                <h2>Abjuration</h2>
                <p>
                This is the most defensive school of magic. Abjuration spells are primarily used for protection, self-buffing, and counterspelling. If your Wizard wants to be a potent anti-caster, then they should probably try to find Abjuration spells.
                Some critical Abjuration spells to know about include the Protection spells, Counterspell, the Dispel Magic series, and Banishment. The Protection spells, like Protection from Evil and Good, are perfect counters to specific combats, and thus critical for a highly prepared magic user. Counterspell and Dispel Magic are both important for destroying powerful magic from bosses or dangerous creatures. Banishment is a unique spell that takes an enemy entirely out of combat for a while, which is great for isolating important targets.
                Abjuration is a critical school for protecting your Wizard as well. Spells like Mage Armor and Shield will keep your AC high enough to block projectiles or melee attacks. You can also put those buffs on your allies to keep them in front of you long enough to weave your spells! Against dragons, spells like Protection from Energy can absorb a ton of damage, enough to keep you alive for a long time.
                There are a ton of other abjuration spells, though! Use them to protect your party, protect your camp, or protect your AC!
                </p>
            </div>

            <div className="school-container">
                <h2>Conjuration</h2>
                <p>
                Conjuration is arguably the second most aggressive spell school. This school is responsible for the summoning spells and high-damage single target effects. However, and perhaps more importantly, it is the school of creation; if there’s magic that summons or constructs something, it’s in the Conjuration school.
                Important spells from this school include the Summoning spells tree, Entangling effects, Teleportation, and a wide variety of damaging effects. Summons are creatures that the caster controls that join combat for a limited amount of time. They are perfect for soaking up damage or even dealing a lot of it! Entangling spells, like Entangle or Web, will help you control combat. There are actually a pretty decent number of Conjuration spells that are specifically for combat control! Teleportation is critical in late game Dungeons & Dragons, and to get there you need to learn some Conjuration magic. Dimension Door, Misty Step, and Teleportation are great spells in this category. Finally, there’s a wide variety of just hard damage magic that you can look forward to! These spells don’t tend to be massive explosions, but there are areas of effect like Cloud of Daggers or Cloudkill that allow you to chase opponents. 
                This school has a ton of Concentration effects; they’re efficient uses of spell slots, but might not always do great burst damage right off the bat. Remember what spells have concentration, because they might inhibit your ability to cast!
                A great school that can do a wide variety of magical effects. Just remember that a lot of the constructions that Conjuration can make are magical, and thus are likely to be dispellable.
                </p>
            </div>

            <div className="school-container">
                <h2>Divination</h2>
                <p>
                Divination is the school of information gathering. It is responsible for a specific niche of magic, where the user is able to find out new things. Whether it be by magical eyeballs, swiftly learning a new language, or simply understanding where things are, Divination is key if you want to survive.
                Some important spells here include the Detect spells, Clairvoyance, the Augury effects, and the Language effects. Detect spells are really strong, allowing you to find magic where it is otherwise invisible (or even finding creatures that are invisible!). Clairvoyance (and spells like Arcane Eye or Locate Creature) are good for scouting specific locations or people to ensure they are safe. Augury and Commune, as well as other effects like them, allow the player to gain some level of insight from their DM. This can be useful for mediating party conflicts. Language spells, like Comprehend Languages and Tongues, might help you perform diplomacy where it was otherwise impossible.
                There are more spells to talk about, such as Hunter’s Mark (a damage-oriented spell), but that’s the jist of Divination!
                </p>
            </div>

            <div className="school-container">
                <h2>Enchantment</h2>
                <p>
                The Enchantment school is devoted to ruining the day of others, or buffing your allies to help out. The Enchantment school targets the mind of their opponents, rupturing thoughts or forcing statuses that even the strongest Barbarian can hardly resist.
                The spells of Enchantment are all fairly similar in the long run. The standard Enchantment spell requires a Wisdom save, or the target is forced to follow the orders of the caster to some degree. The range of Enchantment varies drastically; from a simple Charm to Frighten, to outright mental control. You may recognize spells like Dominate Person, Charm Person, Enthrall, Hex, Hold Person, and Modify Memory. These are all very strong Enchantment spells.
                Enchantment also has a somewhat more niche purpose; buffs. Spells like Bless, Heroism, and Motivational Speech cause your allies to work harder, ignore pain, and do more.
                There are also a few enchantment spells that deal damage, such as Tash’s Mind Whip or Psychic Scream. These are some of the only ways to get Psychic damage in the game, so, not a bad idea to consider!
                Enchantment schools are not effective against those without minds. Don’t try and Dominate a massive Rat, because it probably won’t work!
                </p>
            </div>

            <div className="school-container">
                <h2>Evocation</h2>
                <p>
                Evocation is the school of the damage dealer. This school is fairly similar to Conjuration in flavor; however, where Conjuration focused on creation of magical constructs, Evocation is the creation of pure elemental forces to do your dirty work. This is the highest damage school of magic by far, and is perhaps the most well-known school.
                Standouts of this school include the classic Area of Effect spells; Fireball, Lighting Bolt, Earthquake, Thunderwave, and plenty more. These spells are super important for taking down groups of enemies, something that most melee or martial classes have trouble doing. You can clear out rooms really fast by spending spell slots on Evocation spells.
                Evocation is also used for some single-target effects. Things like Chromatic Orb, Divine Word, the Power Word series, Magic Missile… These and a ton more are specifically for removing a singular target from the fight as soon as possible. They do more burst damage than spells like Spiritual Weapon, but they tend to not do damage for more than one turn.
                However, did you know that healing magic is Evocation? That’s right; Cure Wounds, Heal, and Healing Word are all Evocation spells. That means your standard Cleric or Bard will be slinging loads of healing magic, and preparing to counter evocation might mean stopping a healer from doing their work.
                If it’s about manipulating matter and energy, more than creating something specific, it’s gonna be Evocation.
                </p>
            </div>

            <div className="school-container">
                <h2>Illusion</h2>
                <p>
                Illusion spells are like Enchantment, but focus more on tricking the mind than direct manipulation. Illusions change the senses of the target, convincing them that there’s something there that is not truly there. It is by far the most DM-dependant school; Illusion can be easily ignored if it is not played into! But, a good illusionist can cause an army to surrender. Knowing your illusion magic can save your skin, or at least save you from missing treasure.
                Illusion magic is basically split into two categories; Creative Illusions and Mechanical Illusions. Creative Illusions are spells that require you to craft them individually, and thus are stronger the more applicable they are to the situation. Spells like Creation, Disguise Self, Illusory Script, and the Major Image Tree are all in this category. As you become better and better at D&D, and as long as your DM is willing to play along, these spells will be really fun, and potentially very strong. Great at problem solving, at least!
                Mechanical Illusions have set effects and DCs, which means they are more akin to the other schools of magic. These spells include Blink and Invisibility, buffs that are insanely strong and help you survive for a long time. Spells like Color Spray allow you to distract enemies with a DC, potentially incapacitating them if it’s early enough.
                However, Illusions also have damage effects. Illusory Dragon is an illusory Area of Effect, Mental Prison deals Psychic damage and incapacitates someone, and Shadow Sword just deals good damage. This is not the best damage school by any means, but forming illusions to suit your goals is helpful nonetheless!
                Like Enchantment, these really only work against creatures that can be charmed and have brains. Keep that in mind, and make sure you have some other spells just in case!
                </p>
            </div>

            <div className="school-container">
                <h2>Necromancy</h2>
                <p>
                Necromancy is a weird and unique offensive school, focused on manipulating the plane of death. Rather than sticking to combat control and damage, like Conjuration and Evocation, Necromancy does a wide variety of effects. A true Necromancer allies themselves with the dead, but any Necromancy magic relies on a living (or formally living) being to work.
                Some notable necromancy magic include some of the damaging spells. Spells like Enervation, Finger of Death, Harm, and Vampiric Touch harm your enemies, but tend to have another effect attached. Finger of Death, for instance, deals a massive amount of damage, but requires you to land an attack roll and for them to fail a save. Vampiric Touch heals the caster, letting you deal damage while keeping yourself alive.
                Necromancy is also a great debuffing school, with powerful spells like Blight, Contagion, and Ray of Sickness. These are not necessarily as brutal as the debuffs from Enchantment, but they deal a bit of damage on the way, and can be a more direct inhibitor to the enemy’s ability to attack you.
                Necromancy is also a summoning school, in more ways than one! You can summon skeletons or spirits using Necromancy and build an undead army. Or, you use Necromancy to bring party members back to life. That means that every Cleric should have a tiny bit of Necromancy in their spell repertoire!
                Necromancy has a ton of different magical effects, but they all have to deal with Necrotic damage, or some way of inhibiting the opponent. This is the de facto school of Necromancers and Liches. If you want to fight them, find ways to resist necrotic damage, sickness, and… well, never be too low on health. There are a few spells in there that ignore the Dying state and just remove you from the game!
                </p>
            </div>

            <div className="school-container">
                <h2>Transmutation</h2>
                <p>
                Transmutation is the school that focuses on changing the user, or the user’s allies, and making them better. As the primary buffing school, Transmutation focuses on altering the user or environment to fit your needs. That does mean that Transmutation has some similarities with Conjuration, though instead of creating solutions, you alter things around you to make them into solutions.
                Transmutation’s best quality comes from buffs. This is the school where very strong buffs, like Fly and Haste, come from. These spells (among others), when spread around your party, will help increase durability and damage. While you won’t be dealing damage specifically, the problem solving of your other party members will increase far beyond what is normal for their class! 
                That doesn’t mean that Transmutation is without damage. While it is sub-par at damage, spells like Dragon Breath, Cordon of Arrows, and Heat Metal all have their uses. And all players remember their first encounter with a Disintegrate spell. If you want to deal damage, Transmutation can sometimes be absolutely devastating.
                If that wasn’t quite enough, the school also has some debuffs and status effects. Flesh to Stone can instantly end a fight, if the target fails their saving throw. Polymorph and Mass Polymorph can completely ruin a group of enemies, allowing you to choose who you target.
                Transmutation has utility spells as well; a ton of the Shape magic, like Shape Water or Move Earth, can allow you to skip entire portions of dungeons. You also have spells like Meld into Stone, Reverse Gravity, and Speak with Plants, which can provide you some weird utility in the short run!
                Transmutation is a relatively wide and varied school, but is all about changing their environment. The best buffs in the game are here, and some of the best debuffs are here too!
                </p>
            </div>

            <div className="school-container">
                <p>
                    The descriptions for each spell school came from this source:  <a href="https://www.nerdsandscoundrels.com/schools-of-magic-5e/" >Nerds + Scoundrels</a> 
                </p>
            </div>
        </div>
    );
}

export default SchoolTerms;