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
  NodeVS: require("../assets/NodeInVS.png"),
  NPM: require("../assets/npm.jpg"),
  Lego: require("../assets/Lego.jpg"),
  Webpack: require("../assets/Webpack.png"),
  WebpackModules: require("../assets/WebpackModules.png"),
  Modules: require("../assets/Modules.png")
};
const examples = {
  stringInterpolation: require("raw!../examples/StringInterpolation.example"),
  spreadOperator: require("raw!../examples/spreadOperator.example"),
  WebpackModule: require("raw!../examples/WebpackModule.example")
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
            <Image src={images.NPM} width={300}/>
            <List textColor="secondary">
              <Appear><ListItem>Like Nuget for JS</ListItem></Appear>
              <Appear><ListItem>Think of as Lego’s you can plug in play</ListItem></Appear>
              <Appear><ListItem>Large repository of Lego’s(350k vs 70k for Nuget)</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} textColor="primary">
            <Heading size={1} caps fit >
              Toolchain - NPM
            </Heading>
            <Image src={images.Lego} width={800} />
          </Slide>
          <Slide transition={["fade"]} textColor="primary">
            <Heading size={1} caps fit >
              Toolchain - Webpack - Asp.net Bundler on steroids
            </Heading>
            <Image src={images.Webpack} width={500} />
          </Slide>
          <Slide transition={["fade"]} textColor="primary">
            <Heading size={1} caps fit >
              Toolchain - Webpack - Deals with Assets not just JS(js, img, css, and binary)
            </Heading>
            <Image src={images.WebpackModules} width={800} />
          </Slide>
          <Slide transition={["fade"]} textColor="primary">
            <Heading size={1} caps fit >
              Toolchain - Webpack - Module Loading
            </Heading>
            <Image src={images.Modules} width={800} />
          </Slide>
          <CodeSlide textColor="primary"
            transition={[]}
            lang="jsx"
            code={examples.WebpackModule}
            ranges={[
                { loc: [0, 4], title: "Create the new component"},
                { loc: [5, 12], title: "Use the new component"},
                { loc: [13, 18], title: "Output"}
            ]}
          />
          <Slide transition={["fade"]} textColor="primary">
            <Heading size={1} caps fit lineHeight={1.5}>
              Toolchain - Webpack - Can split into chunks <br />and lazy loaded(code splitting)
            </Heading>
            <Image src={images.WebpackModules} width={800} />
          </Slide>
          <CodeSlide textColor="primary"
            transition={[]}
            lang="js"
            code={examples.stringInterpolation}
            ranges={[
                { loc: [0, 2], title: "String Interpolation"}
            ]}
          />
        </Deck>
      </Spectacle>
    );
  }
}
