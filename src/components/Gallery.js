import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Lightbox from 'react-images'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Img from 'gatsby-image'
// import { graphql } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby'

class Gallery extends Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
      // images: props.images.map(image =>
      //     Object.assign({ srcSet: image.fluid.srcSet })
      //   )
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.gotoImage = this.gotoImage.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
  }
  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  gotoImage(index) {
    this.setState({
      currentImage: index,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }
  renderGallery() {
    const { images } = this.props

    if (!images) return

    const gallery = images.map((obj, i) => {
      return (
        <article className="6u 12u$(xsmall) work-item" key={i}>
          <a
            className="image fit thumb"
            href={obj.src}
            onClick={e => this.openLightbox(i, e)}
          >
            <img src={obj.thumbnail} alt="" />
          </a>

          <h3>{obj.caption}</h3>
          <p>{obj.description}</p>
        </article>
      )
    })

    return <div className="row">{gallery}</div>
  }
  render() {
    // const {edges} = this.props.data.allFile.edges;

    return (
      <StaticQuery
        query={graphql`
          query {
            allFile(sort: {fields: [name], order: ASC}, filter: {relativeDirectory: {eq: "b-cards"}}) {
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
        `}
        render={data => {
          
          const imgObjArray =
            data.allFile.edges.map((obj, i) => (
              {
                src: obj.node.childImageSharp.fluid.src,
                id: obj.node.id,
                caption: obj.node.childImageSharp.fluid.originalName
              }
            ))

          return (
          <>
            {/* {this.renderGallery()} */}
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 2, 600: 3, 750: 4 }}
            >
              <Masonry gutter="5px">
                {data.allFile.edges.map((imgObj, i) => (
                  <a
                    // className="image fit thumb"
                    key={'mi' + i}
                    href={imgObj.node.childImageSharp.fluid.srcSet}
                    onClick={e => this.openLightbox(i, e)}
                  >
                    <Img fluid={imgObj.node.childImageSharp.fluid} />
                  </a>
                ))}
              </Masonry>
            </ResponsiveMasonry>
            <Lightbox
              currentImage={this.state.currentImage}
              images={imgObjArray}
              isOpen={this.state.lightboxIsOpen}
              onClickImage={this.handleClickImage}
              onClickNext={this.gotoNext}
              onClickPrev={this.gotoPrevious}
              onClickThumbnail={this.gotoImage}
              onClose={this.closeLightbox}
            />
          </>
        )
      }}
      />
    )
  }
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

// export const query = graphql`
//     query {
//         allFile {
//             edges {
//                 node {
//                     childImageSharp {
//                         fluid {
//                             ...GatsbyImageSharpFluid_noBase64
//                             srcSet
//                         }
//                     }
//                 }
//             }
//         }
//     }
// `

export default Gallery
