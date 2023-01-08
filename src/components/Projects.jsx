import styled from "styled-components"
import shibbabeurre from '../assets/shibbabeurre-logo.png'
import Total from '../assets/Total-Logo.png'

const CardProjects = styled.article`
    display: flex;
    flex-direction: column;
    `

export const CardTitle = styled.h1`
    font-family: 'Inter';
    color: #898989;
    margin-left: 20px;
    `

const CardBackground = styled.div`
    color: white;
    position: absolute;
    font-family: 'Chewy', cursive;
    transform-origin: left center;
    transform: rotate(90deg);
    top: calc(-10vw*2);
    left: 50vw;
    font-size: 78vw;
    z-index: -1;
    margin: 0px;
    padding: 0px;
    `

const CardProjetRight = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const CardProjetLeft = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
`

const CardBoxProjet = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 150px;
    width: 33%;
    `

const CardTitleProjet = styled.h2`
    font-family: 'Inter';
    font-size: 40px;
    font-weight: 700;
    color: #FF45B4;
    margin-top: 0px;
    `

const CardInfoProjet = styled.div`
    font-family: 'Inter';
    font-size: 24px;
    font-weight: 700;
    color: #1BEB9E;
    text-align: center;
    `

function Project() {
    return (
        <CardProjects>
            <CardTitle>/Projets</CardTitle>
            <CardBackground>haDock404</CardBackground>
            <CardProjetRight>
                <img src={shibbabeurre} alt="" />
                <CardBoxProjet>
                    <CardTitleProjet>
                        ShibbaBeurre
                    </CardTitleProjet>
                    <CardInfoProjet>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores modi repellat dignissimos ipsam? Numquam aperiam voluptatum iste porro non sunt rem iusto, commodi repudiandae recusandae aspernatur illum, quam dolor illo.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores modi repellat dignissimos ipsam? Numquam aperiam voluptatum iste porro non sunt rem iusto, commodi repudiandae recusandae aspernatur illum, quam dolor illo.
                    </CardInfoProjet>
                </CardBoxProjet>
            </CardProjetRight>

            <CardProjetLeft>
                <img src={Total} alt="" />
                <CardBoxProjet>
                    <CardTitleProjet>
                        TotalEnergie
                    </CardTitleProjet>
                    <CardInfoProjet>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores modi repellat dignissimos ipsam? Numquam aperiam voluptatum iste porro non sunt rem iusto, commodi repudiandae recusandae aspernatur illum, quam dolor illo.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores modi repellat dignissimos ipsam? Numquam aperiam voluptatum iste porro non sunt rem iusto, commodi repudiandae recusandae aspernatur illum, quam dolor illo.
                    </CardInfoProjet>
                </CardBoxProjet>
            </CardProjetLeft>

            <CardProjetRight>
                <img src={shibbabeurre} alt="" />
                <CardBoxProjet>
                    <CardTitleProjet>
                        ShibbaBeurre
                    </CardTitleProjet>
                    <CardInfoProjet>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores modi repellat dignissimos ipsam? Numquam aperiam voluptatum iste porro non sunt rem iusto, commodi repudiandae recusandae aspernatur illum, quam dolor illo.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores modi repellat dignissimos ipsam? Numquam aperiam voluptatum iste porro non sunt rem iusto, commodi repudiandae recusandae aspernatur illum, quam dolor illo.
                    </CardInfoProjet>
                </CardBoxProjet>
            </CardProjetRight>

            <CardProjetLeft>
                <img src={shibbabeurre} alt="" />
                <CardBoxProjet>
                    <CardTitleProjet>
                        ShibbaBeurre
                    </CardTitleProjet>
                    <CardInfoProjet>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores modi repellat dignissimos ipsam? Numquam aperiam voluptatum iste porro non sunt rem iusto, commodi repudiandae recusandae aspernatur illum, quam dolor illo.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores modi repellat dignissimos ipsam? Numquam aperiam voluptatum iste porro non sunt rem iusto, commodi repudiandae recusandae aspernatur illum, quam dolor illo.
                    </CardInfoProjet>
                </CardBoxProjet>
            </CardProjetLeft>

            <CardProjetRight>
                <img src={shibbabeurre} alt="" />
                <CardBoxProjet>
                    <CardTitleProjet>
                        ShibbaBeurre
                    </CardTitleProjet>
                    <CardInfoProjet>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores modi repellat dignissimos ipsam? Numquam aperiam voluptatum iste porro non sunt rem iusto, commodi repudiandae recusandae aspernatur illum, quam dolor illo.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores modi repellat dignissimos ipsam? Numquam aperiam voluptatum iste porro non sunt rem iusto, commodi repudiandae recusandae aspernatur illum, quam dolor illo.
                    </CardInfoProjet>
                </CardBoxProjet>
            </CardProjetRight>

            <CardProjetLeft>
                <img src={shibbabeurre} alt="" />
                <CardBoxProjet>
                    <CardTitleProjet>
                        ShibbaBeurre
                    </CardTitleProjet>
                    <CardInfoProjet>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores modi repellat dignissimos ipsam? Numquam aperiam voluptatum iste porro non sunt rem iusto, commodi repudiandae recusandae aspernatur illum, quam dolor illo.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores modi repellat dignissimos ipsam? Numquam aperiam voluptatum iste porro non sunt rem iusto, commodi repudiandae recusandae aspernatur illum, quam dolor illo.
                    </CardInfoProjet>
                </CardBoxProjet>
            </CardProjetLeft>

            <CardProjetRight>
                <img src={shibbabeurre} alt="" />
                <CardBoxProjet>
                    <CardTitleProjet>
                        ShibbaBeurre
                    </CardTitleProjet>
                    <CardInfoProjet>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores modi repellat dignissimos ipsam? Numquam aperiam voluptatum iste porro non sunt rem iusto, commodi repudiandae recusandae aspernatur illum, quam dolor illo.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores modi repellat dignissimos ipsam? Numquam aperiam voluptatum iste porro non sunt rem iusto, commodi repudiandae recusandae aspernatur illum, quam dolor illo.
                    </CardInfoProjet>
                </CardBoxProjet>
            </CardProjetRight>

            <CardProjetLeft>
                <img src={shibbabeurre} alt="" />
                <CardBoxProjet>
                    <CardTitleProjet>
                        ShibbaBeurre
                    </CardTitleProjet>
                    <CardInfoProjet>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores modi repellat dignissimos ipsam? Numquam aperiam voluptatum iste porro non sunt rem iusto, commodi repudiandae recusandae aspernatur illum, quam dolor illo.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores modi repellat dignissimos ipsam? Numquam aperiam voluptatum iste porro non sunt rem iusto, commodi repudiandae recusandae aspernatur illum, quam dolor illo.
                    </CardInfoProjet>
                </CardBoxProjet>
            </CardProjetLeft>
        </CardProjects>
        
    );
}

export default Project