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
  Modules: require("../assets/Modules.png"),
  CodeSplitting: require("../assets/CodeSplitting.jpg"),
  CodeSplitting2: require("../assets/CodeSplitting2.jpg"),
  ChooseAdventure: require("../assets/ChooseAdventure.jpg")
};
const examples = {
  ES6: require("raw!../examples/ES6.example"),
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
              Web Api with React,<br />Webpack and ES6
            </Heading>
            By James Armstrong
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary">
            <Heading size={1} caps fit textColor="primary" >
              Toolchain - NPM
            </Heading>
            <Image src={images.NPM} width={300}/>
            <List textColor="primary">
              <Appear><ListItem>Like Nuget for JS</ListItem></Appear>
              <Appear><ListItem>Small single purpose tools</ListItem></Appear>
              <Appear><ListItem>Very large repository(350k vs 70k for Nuget)</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary">
            <Heading size={1} caps fit textColor="primary">
              Toolchain - NPM
            </Heading>
            <Image src={images.Lego} width="75%"/>
          </Slide>
          <Slide transition={["fade"]}>
            <Heading size={1} caps fit >
              Toolchain - Webpack
            </Heading>
            <Heading size={2} style={{fontSize: 34}} >
              Asp.net Bundler on steroids
            </Heading>
            <Image src={images.Webpack} width="75%"/>
          </Slide>
          <Slide transition={["fade"]} >
            <Heading size={1} caps fit >
              Toolchain - Webpack
            </Heading>
            <Heading size={2} style={{fontSize: 34}}>
              Deals with Assets not just JS<br />
              (js, img, css, and binary)
            </Heading>
            <Image src={images.WebpackModules} width="75%" />
          </Slide>
          <Slide transition={["fade"]} >
            <Heading size={1} caps fit >
              Toolchain - Webpack
            </Heading>
            <Heading size={2} style={{fontSize: 34}} >
              Module Loading
            </Heading>
            <Image src={images.Modules} width="75%" />
          </Slide>
          <CodeSlide
            bgColor="primary"
            transition={[]}
            lang="jsx"
            code={examples.WebpackModule}
            ranges={[
                { loc: [0, 4], note: "Create the new component"},
                { loc: [4, 12], note: "Use the new component"},
                { loc: [13, 18], note: "Output"}
            ]}
          />
          <Slide transition={["fade"]} >
            <Heading size={1} caps fit>
              Toolchain - Webpack
            </Heading>
            <Heading size={2} style={{fontSize: 34}}>
              Can split into chunks <br />and lazy loaded(code splitting)
            </Heading>
            <Image src={images.WebpackModules} width="100%" />
          </Slide>
          <Slide transition={["fade"]} textColor="primary">
            <Heading size={1} caps fit >
              Toolchain - Webpack
            </Heading>
            <Heading size={2} style={{fontSize: 34}} >
              Can split into chunks and lazy loaded(code splitting)
            </Heading>
            <Image src={images.CodeSplitting} width="75%" />
          </Slide>
          <Slide transition={["fade"]} textColor="primary">
            <Heading size={1} caps fit >
              Toolchain - Webpack
            </Heading>
            <Heading size={2} style={{fontSize: 34}} >
              Can split into chunks and lazy loaded(code splitting)
            </Heading>
            <Image src={images.CodeSplitting2} width="75%" />
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary">
            <Heading size={1} caps fit textColor="primary">
              Create-React-App
            </Heading>
            <List textColor="primary">
              <Appear><ListItem>Easy way to get a React app</ListItem></Appear>
              <Appear><ListItem>All tools already configured</ListItem></Appear>
              <Appear><ListItem>Development and Prod Env.</ListItem></Appear>
            </List>
          </Slide>


           <Slide transition={["fade"]} bgColor="secondary">
            <Heading size={1} caps fit textColor="primary">
              There is an easier way!
            </Heading>
            <List textColor="primary">
              <Appear><ListItem>.Net Core WebApi</ListItem></Appear>
              <Appear><ListItem>All tools already configured</ListItem></Appear>
              <Appear><ListItem>Development and Prod Env.</ListItem></Appear>
            </List>
          </Slide>
         
          <CodeSlide
            bgColor="primary"
            transition={[]}
            lang="js"
            code={examples.ES6}
            ranges={[
                { loc: [0, 7], title: "ES2015(AKA ES6)", note: "Let and Const"},
                { loc: [8, 13], title: "ES2015(AKA ES6)", note: "Spread Operator"},
                { loc: [13, 18], title: "ES2015(AKA ES6)", note: "Spread Operator"},
                { loc: [18, 25], title: "ES2015(AKA ES6)", note: "Spread Operator"},
                { loc: [26, 29], title: "ES2015(AKA ES6)", note: "String Interpolation"}
            ]}
          />
        </Deck>
      </Spectacle>
    );
  }
}
