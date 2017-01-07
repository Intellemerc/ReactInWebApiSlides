// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
import CodeSlide from "spectacle-code-slide";
import { theme } from "spectacle-theme-solarized-dark";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  NodeVS: require("../assets/NodeInVS.png")
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Web Api with React, Webpack and ES6
            </Heading>
            By James Armstrong
          </Slide>
          <Slide transition={["fade"]} textColor="primary">
            <Heading size={1} caps fit>
              Toolchain - NPM
            </Heading>
            <List textColor="secondary">
              <Appear><ListItem>Like Nuget for JS</ListItem></Appear>
              <Appear><ListItem>Mindset is collection of Lego’s you can plug in play</ListItem></Appear>
              <Appear><ListItem>Large repository of Lego’s(350k vs 70k for Nuget)</ListItem></Appear>  
            </List>
            <Image src={images.NPM} width={300}/>
          </Slide>
          <Slide transition={["fade"]} textColor="primary">
            <Heading size={1} caps fit >
              Toolchain - Webpack
            </Heading>
            <List textColor="secondary">
              <Appear>
                <ListItem>Asp.net Bundler on steroids</ListItem>
              </Appear>
              <Appear>
                <ListItem>Module Loading</ListItem>
              </Appear>
              <Appear><ListItem>Deals with Assets not just JS(js, img, css, and binary)</ListItem></Appear>
              <Appear><ListItem>Can split into chunks and lazy loaded(code splitting)</ListItem></Appear>
            </List>
          </Slide>
          <CodeSlide textColor="primary"
            transition={[]}
            lang="js"
            code={require("raw!../assets/StringInterpolation.example")}
            ranges={[
                { loc: [0, 2], title: "String Interpolation"}
            ]}
          />
        </Deck>
      </Spectacle>
    );
  }
}
