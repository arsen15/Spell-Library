/**
 * Authors: Ryan Montoya, Arsen Shintemirov, Roman Antipov
 * TCSS 445
 * Spring 2022
 */

import React from "react";
import "./ClassTerms.css";

function ClassTerms() {
    return(
        <div className="header">
            <h1> Class Terms page</h1>

            <p align="left" className="text">
                <h2>Types of Magic</h2>
                Arcane: magic that comes through wizard effectively but in a more complicated way is that it comes through the weave which is the source of arcane magic. 
                <br />
                <br />
                Divine:  magic that is given through the gods or from nature itself in the case of a  druid.

                <h2>Classes</h2>
                Fighter: no magic other than through a subclass. Source is arcane.
                <br />
                <br />
                Barbarian: no magic spells (magic subclasses but no spells).
                <br />
                <br />
                Artificer: spell source is arcane,can acquire specific divine spells through subclass. 
                <br />
                <br />
                Bard: spell source is arcane but can access divine spells through magical secrets. 
                <br />
                <br />
                Cleric: spell source is divine,but can access specific arcane spells through subclass. 
                <br />
                <br />
                Druid: spell source  is divine.
                <br />
                <br />
                Paladin: spell source is divine,but can access specific arcane spells through subclass. 
                <br />
                <br />
                Monk: no spells other than spell-like abilities.
                <br />
                <br />
                Ranger: spell source is divine ,but can access specific arcane spells through subclass.
                <br />
                <br />
                Rogue: no spells other than through a subclass. Source is Arcane.
                <br />
                <br />
                Sorcerer: spell source is Arcane but through subclass can get divine spells.
                <br />
                <br />
                Warlock: spell source is Arcane but through subclass can get divine spells.
                <br />
                <br />
                Wizard: spell source is Arcane no access to healing spells other than select few that sacrifice health.
            </p>

        </div>
    );
}

export default ClassTerms;