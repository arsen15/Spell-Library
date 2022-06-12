import React from "react";
import "./About.css";


function About() {
    return(
        <div className="header">
            <h1> About</h1>
            <p className="text">
                <h2> Tutorial</h2>
                <p>Some constraints for the data that can be entered for the spells:</p>
                <ul>
                    <li>Tags for spell concentration, ritual can only be "Yes" or "No". </li>
                    <li>Spell Levels are between 0 and 9. Cantrip is at value 0.</li>
                    <li>Schools can be Abjuration, Conjuration, Divination, Enchantment, Evocation, Illusion, Necromancy, Transmutation.</li>
                    <li>Casting time can be 1 action, 1 bonus action, 1 reaction, 1 minute, 1 hour, 8 hours, 24 hours.</li>
                </ul>
                <br />
                <br />
                Authors: Arsen Shintemirov, Ryan Tyler Montoya, Roman Antipov
                <br />
                <br />
                D&D Spell Organizer is a project made for TCSS445 at UWT, Spring 2022. Instructor: Tom Capaul
                <br />
                <br />
                References: This is where we got most of the sample data, and the tutorials we followed to learn fullstack development.
                <br />
                <br />
                This project was made for educational purposes only.
            </p>
        </div>
    );
}

export default About;