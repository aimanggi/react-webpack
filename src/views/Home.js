import React, { Component } from 'react';
import Base from '../layout/base';
import { Grid } from '@material-ui/core';
import profile from '../assets/img/profile-pict.png';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skill: {
                profile: "UI / UX Engineer, Front-end Developer",
                details: [
                    {
                        name: "UX Research",
                        score: "80%",
                        tools: "Paper, Pen, Balsamiq"
                    },
                    {
                        name: "UI Design",
                        score: "70%",
                        tools: "Adobe PS, AI, XD, Figma, InVision"
                    },
                    {
                        name: "Front-end Dev",
                        score: "90%",
                        tools: "HTML, CSS, JS, Bootstrap, React"
                    }
                ]
            },
            portfolio: [
                {
                    id: 1,
                    name: "Web Application",
                    overview:  "Diam massa semper a tincidunt cursus ultricies lectus eget urna.",
                    image: portfolio1,
                },
                {
                    id: 2,
                    name: "Web Application",
                    overview:  "Diam massa semper a tincidunt cursus ultricies lectus eget urna.",
                    image: portfolio2,
                }
            ]
        }
    }

    render() {
        const { skill } = this.state;
        return (
            <Base {...this.props}>
                <section className="hero">
                    <div className="hero-overlay">
                        <div className="hero-text container">
                            <div className="hero-title">
                                Hi, I am Anne Theresa
                            </div>
                            <div>Web Designer, Front-end Developer</div>
                        </div>
                    </div>
                    <div className="hero-image">
                    </div>
                </section>

                <section className="about section-base container">
                    <div className="title">About</div>
                    <div className="mb-4">Lorem ipsum dolor sit amet, Arcu, sed nisi, mi, arcu libero phasellus tincidunt. Rhoncus, diam penatibus aliquet tellus, in rutrum augue. Pellentesque senectus risus consectetur et sed purus sed. Consectetur adipiscing elit. Egestas porttitor nulla nulla egestas odio pharetra egestas aliquet mollis.</div>
                    <div>Lorem ipsum dolor sit amet, Arcu, sed nisi, mi, arcu libero phasellus tincidunt. Rhoncus, diam penatibus aliquet tellus, in rutrum augue. Pellentesque senectus risus consectetur et sed purus sed. Consectetur adipiscing elit. Egestas porttitor nulla nulla egestas odio pharetra egestas aliquet mollis.</div>
                </section>

                <section className="skill section-base section-color">
                    <div className="container">
                        <div className="title">Skill</div>
                        <Grid container spacing={10}>
                            <Grid item lg={5}>
                                <img className="profile-image" src={profile} />
                            </Grid>
                            <Grid item lg={7}>
                                <Grid container spacing={3}>
                                    <Grid className="font-weight-bold" item xs={4}>
                                        Profile
                                    </Grid>
                                    <Grid item xs={8}>
                                        {skill.profile}
                                    </Grid>

                                    {skill.details.map((data, index) => {
                                        return (
                                            <React.Fragment>
                                                <Grid className="font-weight-bold" item xs={4}>
                                                    {data.name}
                                                </Grid>
                                                <Grid item xs={8}>
                                                    <div className="bar-bg">
                                                        <div className="bar-top" style={{ width: data.score }}></div>
                                                    </div>
                                                </Grid>
                                                <Grid className="font-weight-bold" item xs={4}>
                                                    Tools
                                                </Grid>
                                                <Grid item xs={8}>
                                                    {data.tools}
                                                </Grid>
                                            </React.Fragment>
                                        )
                                    })}
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </section>

                <section className="portfolio section-base container">
                    <div className="title">Portfolio</div>
                    {/* <Grid container spacing={10}>
                        
                    </Grid> */}
                </section>
            </Base>

        );
    }
}

export default Home;