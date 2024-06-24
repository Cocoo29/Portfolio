
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Bonjour, je me présente, <span className="purple">Coralie Coquelet </span>, et je viens
                        de <span className="purple"> Brest, France.</span>
                        <br />
                        Je suis actuellement en formation Intégratrice Web chez OpenClassRoom.
                        <br />
                        <br />
                        À par le codage, j'ai d'autres activités comme :
                    </p>
                    <ul>
                        <ul>
                            <li className="about-activity">
                                <ImPointRight/> Cinémas - Passionné de films, j'adore les genres horreur et
                                science-fiction pour l'adrénaline et l'imagination qu'ils procurent.
                            </li>
                            <li className="about-activity">
                                <ImPointRight/> Randonnées en forêt - Amateur de plein air, j'apprécie particulièrement
                                les randonnées en forêt pour me ressourcer et me reconnecter avec la nature.
                            </li>
                            <li className="about-activity">
                                <ImPointRight/> Lecture - Passionné de littérature, je suis avide de connaissances et je
                                lis souvent des livres qui peuvent m'améliorer dans la vie. J'ai également un penchant
                                pour les ouvrages sur la cybersécurité, un domaine qui m'intéresse particulièrement.
                            </li>
                        </ul>

                    </ul>
                    <footer></footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
