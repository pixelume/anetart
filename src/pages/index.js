import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import styled from 'styled-components';
import Gallery from '../components/Gallery'
import Skills from '../components/Skills';
// import {graphql} from 'gatsby';

// import thumb01 from '../assets/images/b-cards/01.jpg'
// import thumb02 from '../assets/images/b-cards/02.jpg'
// import thumb03 from '../assets/images/b-cards/03.jpg'
// import thumb04 from '../assets/images/b-cards/04.jpg'
// import thumb05 from '../assets/images/b-cards/05.jpg'
// import thumb06 from '../assets/images/b-cards/06.jpg'

// import full01 from '../assets/images/b-cards/01.jpg'
// import full02 from '../assets/images/b-cards/02.jpg'
// import full03 from '../assets/images/b-cards/03.jpg'
// import full04 from '../assets/images/b-cards/04.jpg'
// import full05 from '../assets/images/b-cards/05.jpg'
// import full06 from '../assets/images/b-cards/06.jpg'

// const BC_IMAGES = [
//     { id: '1', src: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
//     { id: '2', src: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
//     { id: '3', src: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
//     { id: '4', src: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
//     { id: '5', src: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
//     { id: '6', src: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
// ];

const WorkNavContainer = styled.div`
    display: flex;
    max-width: 100%;
    flex-wrap: wrap;
    margin: 0px auto 15px;
    padding: 5px;
    justify-content: center;
    background-color: #eaf8ff;
    border-radius: 5px;
`;

const WorkBtn = styled.button`
    margin: 2px;
`;

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            workCategory: 'bc'
            // lightboxIsOpen: false,
            // currentImage: 0,
        };

        // this.closeLightbox = this.closeLightbox.bind(this);
        // this.gotoNext = this.gotoNext.bind(this);
        // this.gotoPrevious = this.gotoPrevious.bind(this);
        // this.openLightbox = this.openLightbox.bind(this);
        // this.handleClickImage = this.handleClickImage.bind(this);
    }

    // openLightbox (index, event) {
    //     event.preventDefault();
    //     this.setState({
    //         currentImage: index,
    //         lightboxIsOpen: true,
    //     });
    // }
    // closeLightbox () {
    //     this.setState({
    //         currentImage: 0,
    //         lightboxIsOpen: false,
    //     });
    // }
    // gotoPrevious () {
    //     this.setState({
    //         currentImage: this.state.currentImage - 1,
    //     });
    // }
    // gotoNext () {
    //     this.setState({
    //         currentImage: this.state.currentImage + 1,
    //     });
    // }
    // handleClickImage () {
    //     if (this.state.currentImage === this.props.images.length - 1) return;

    //     this.gotoNext();
    // }

    workBtnHandler = (category) => {
        this.setState({workCategory: category});
    }

    createImgObjArray = dataArray => {
        return dataArray.map((obj, i) => (
            {
              src: obj.node.childImageSharp.fluid.src,
              srcSet: obj.node.childImageSharp.fluid.srcSet,
              id: obj.node.id,
              caption: obj.node.childImageSharp.fluid.originalName,
              fluid: obj.node.childImageSharp.fluid
            }
          ))
    }

    render() {
        const siteTitle = "Gatsby Starter - Strata"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Ipsum lorem dolor aliquam ante commodo<br />
                            magna sed accumsan arcu neque.</h2>
                        </header>
                        <p>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </section>
                    <section id="onedotfive">
                        <header className="major">
                            <h2>Professional Skills</h2>
                        </header>
                        <Skills/>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>
                        <WorkNavContainer>
                            <WorkBtn onClick={() => this.workBtnHandler('bc')} className="button">Business Cards</WorkBtn>
                            <WorkBtn onClick={() => this.workBtnHandler('logos')} className="button">Logo Designs</WorkBtn>
                            <WorkBtn onClick={() => this.workBtnHandler('branding')} className="button">Branding</WorkBtn>
                            <WorkBtn onClick={() => this.workBtnHandler('flexo')} className="button">Flexo Printing</WorkBtn>
                            <WorkBtn onClick={() => this.workBtnHandler('litho')} className="button">Litho Printing</WorkBtn>
                            <WorkBtn onClick={() => this.workBtnHandler('cal')} className="button">Calendars</WorkBtn>
                            <WorkBtn onClick={() => this.workBtnHandler('tickets')} className="button">Tickets</WorkBtn>
                            <WorkBtn onClick={() => this.workBtnHandler('packaging')} className="button">Packaging</WorkBtn>
                            <WorkBtn onClick={() => this.workBtnHandler('misc')} className="button">Miscellaneous</WorkBtn>
                        </WorkNavContainer>

                        {this.state.workCategory === 'bc' && <Gallery imgObjArray={this.createImgObjArray(this.props.data.bCards.edges)}/>}
                        {this.state.workCategory === 'logos' && <Gallery imgObjArray={this.createImgObjArray(this.props.data.logos.edges)}/>}
                        {this.state.workCategory === 'branding' && <Gallery imgObjArray={this.createImgObjArray(this.props.data.branding.edges)}/>}
                        {this.state.workCategory === 'flexo' && <Gallery imgObjArray={this.createImgObjArray(this.props.data.flexo.edges)}/>}
                        {this.state.workCategory === 'litho' && <Gallery imgObjArray={this.createImgObjArray(this.props.data.litho.edges)}/>}
                        {this.state.workCategory === 'cal' && <Gallery imgObjArray={this.createImgObjArray(this.props.data.cal.edges)}/>}
                        {this.state.workCategory === 'tickets' && <Gallery imgObjArray={this.createImgObjArray(this.props.data.tickets.edges)}/>}
                        {this.state.workCategory === 'packaging' && <Gallery imgObjArray={this.createImgObjArray(this.props.data.packaging.edges)}/>}
                        {this.state.workCategory === 'misc' && <Gallery imgObjArray={this.createImgObjArray(this.props.data.misc.edges)}/>}
                        {/* <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} /> */}

                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        171 Prospect rd.<br />
                                        Walmer, PE<br />
                                        Eastern Cape,
                                        6070
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        000-000-0000
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">hello@untitled.tld</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export const query = graphql`
query {
    bCards: allFile(sort: {fields: [name], order: ASC}, filter: {relativeDirectory: {eq: "b-cards"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 787) {
            ...GatsbyImageSharpFluid_noBase64
              srcSet
              src
              originalName
            }
          }
          id
        }
      }
    }
    logos: allFile(sort: {fields: [name], order: ASC}, filter: {relativeDirectory: {eq: "logos"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 787) {
            ...GatsbyImageSharpFluid_noBase64
              srcSet
              src
              originalName
            }
          }
          id
        }
      }
    }
    branding: allFile(sort: {fields: [name], order: ASC}, filter: {relativeDirectory: {eq: "branding"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 787) {
              ...GatsbyImageSharpFluid_noBase64
                srcSet
                src
                originalName
              }
            }
            id
          }
        }
      }
    flexo: allFile(sort: {fields: [name], order: ASC}, filter: {relativeDirectory: {eq: "flexo"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 787) {
              ...GatsbyImageSharpFluid_noBase64
                srcSet
                src
                originalName
              }
            }
            id
          }
        }
      }
    litho: allFile(sort: {fields: [name], order: ASC}, filter: {relativeDirectory: {eq: "litho"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 787) {
              ...GatsbyImageSharpFluid_noBase64
                srcSet
                src
                originalName
              }
            }
            id
          }
        }
      }
    cal: allFile(sort: {fields: [name], order: ASC}, filter: {relativeDirectory: {eq: "cal"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 787) {
              ...GatsbyImageSharpFluid_noBase64
                srcSet
                src
                originalName
              }
            }
            id
          }
        }
      }
    tickets: allFile(sort: {fields: [name], order: ASC}, filter: {relativeDirectory: {eq: "tickets"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 787) {
              ...GatsbyImageSharpFluid_noBase64
                srcSet
                src
                originalName
              }
            }
            id
          }
        }
      }
    packaging: allFile(sort: {fields: [name], order: ASC}, filter: {relativeDirectory: {eq: "packaging"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 787) {
              ...GatsbyImageSharpFluid_noBase64
                srcSet
                src
                originalName
              }
            }
            id
          }
        }
      }
    misc: allFile(sort: {fields: [name], order: ASC}, filter: {relativeDirectory: {eq: "misc"}}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 787) {
              ...GatsbyImageSharpFluid_noBase64
                srcSet
                src
                originalName
              }
            }
            id
          }
        }
      }
  }
`

export default HomeIndex