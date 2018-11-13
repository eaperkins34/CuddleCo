import React from 'react';
import { Container, NavLink } from 'reactstrap';
import './sidebar.css'

const SideBar = () => {
        return(
            <div>
                <Container md="3" id="humaneSoc">
                    <h1 id="title">Local Humane Societies</h1>
                    <NavLink className="rescue" href="http://www.hamiltonhumane.com/" target="_blank">Hamilton Co Humane Society</NavLink>< br />
                        <p className="info">With an open admission policy, a No-Kill philosophy, and more than 3,100 animals crossing our threshold each year, we have still maintained a 98% placement rate over the last 3 years.</p>
                    <NavLink className="rescue" href="https://indyhumane.org/wp-content/cache/all//index.html" target="_blank">Indianapolis Humane Society</NavLink>< br />
                        <p className="info">Serving Indianapolis and the surrounding counties since, the Humane Society of Indianapolis provides vital services to animals through sheltering and adopting animals, providing positive reinforcement behavior training for adoptable animals through our behavior programs, and outreach through our community and shelter programs.</p>
                    <NavLink className="rescue" href="http://heavenafterhellrescue.org/" target="_blank">Heaven After Hell Rescue</NavLink>< br />
                        <p className="info">We are an animal rescue that believes in giving shelter animals a voice and happy home. We take in unwanted or abused dogs and cats from high kill shelters. We prepare them for adoption and find the perfect match for the adoptive family and the animal.</p>
                    <NavLink className="rescue" href="https://www.ldrrescue.org/" target="_blank">Lucky Dog Rescue</NavLink>< br />
                        <p className="info">Lucky Dog Retreat Rescue (LDRR) is dedicated to the welfare of all our rescued dogs.  We achieve this task through pet education and training for our rescues, all our volunteers, our rescues new families, and the general public.</p>
                </Container>
            </div>
        )
    }


export default SideBar;