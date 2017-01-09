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
  NewWebApi: require("../assets/NewWebapi.png"),
  FilesToMove: require("../assets/FilesToMove.png"),
  NPMTaskRunner: require("../assets/NPMTaskRunner.png"),
  Choose: require("../assets/Choose.jpg")
};
const examples = {
  ES6: require("raw!../examples/ES6.example"),
  WebpackModule: require("raw!../examples/WebpackModule.example"),
  createReact: require("raw!../examples/createReact.example"),
  UrlRewrite: require("raw!../examples/UrlRewrite.example"),
  WPP: require("raw!../examples/wpp.example"),
  ImportToRequire: require("raw!../examples/ImportToRequire.example"),
  NetCore: require("raw!../examples/NetCore.example"),
  Slides: require("raw!../examples/deck.example")
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
              NPM Task Runner
            </Heading>
            <Heading size={2} textColor="primary" style={{fontSize: 42}}>
            Install: <Link textColor="primary" style={{textDecoration: "underline"}} href="https://marketplace.visualstudio.com/items?itemName=MadsKristensen.NPMTaskRunner">NPM Task Runner</Link>
            </Heading>
            <Image src={images.NPMTaskRunner} width="100%" />
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary" >
            <Heading size={1} caps fit textColor="primary">
              Choose your own Adventure
            </Heading>
            <Layout>
              <Fill>
                <List textColor="primary">
                  <ListItem><Link textColor="primary" style={{textDecoration: "underline"}} href="/#/12">Asp.Net WebApi</Link></ListItem>
                  <ListItem><Link textColor="primary" style={{textDecoration: "underline"}} href="/#/20">.Net Core</Link></ListItem>
                </List>
              </Fill>
              <Fill>
                <Image src={images.Choose} width="100%" />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["fade"]} >
            <Heading size={1} caps fit >
              1.Create-React-App
            </Heading>
            <List >
              <Appear><ListItem>Easy way to get a React app</ListItem></Appear>
              <Appear><ListItem>All tools already configured</ListItem></Appear>
              <Appear><ListItem>Development and Prod Env.</ListItem></Appear>
            </List>
          </Slide>
          <CodeSlide
            transition={[]}
            lang="batch"
            code={examples.createReact}
            ranges={[
                { loc: [0, 4], title: "Create-React-App", note: "Install Create App" },
                { loc: [22, 28], title: "Create-React-App", note: "Run Create App" },
                { loc: [29, 31], title: "Create-React-App", note: "Change to dir" },
                { loc: [32, 34], title: "Create-React-App", note: "Start it" },
                { loc: [37, 41], title: "Create-React-App", note: "Start it" }
            ]}
          />

         <Slide transition={["fade"]} bgColor="secondary">
            <Heading size={1} caps fit textColor="primary">
              2.Integrate it with WebApi
            </Heading>
            <Heading size={2}textColor="primary" style={{fontSize: 34}}>
              New WebApi Project
            </Heading>
            <Image src={images.NewWebApi} width="75%" />
          </Slide>

          <Slide transition={["fade"]}>
            <Heading size={1} caps fit>
              3.Integrate it with WebApi
            </Heading>
            <Heading size={2} style={{fontSize: 34}}>
              Copy certain create react app files to webapi
            </Heading>
            <Image src={images.FilesToMove} width="40%" />
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary">
            <Heading size={1} caps fit textColor="primary">
              4.Integrate it with WebApi
            </Heading>
            <List textColor="primary">
              <Appear><ListItem>Change js to tsx</ListItem></Appear>
              <Appear><ListItem>Add tsconfig.json file</ListItem></Appear>
              <Appear>
                <ListItem>
                  Install types for current items
                  <List >
                    <ListItem style={{fontSize: 20}}>
                      &nbsp;&nbsp;npm install --save-dev @types/jest @types/react @types/react-dom @types/requirejs
                    </ListItem>
                  </List>
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="xml"
            code={examples.UrlRewrite}
            ranges={[
                { loc: [2, 4], title: "5.URL Rewrite", note: "Match All Urls" },
                { loc: [5, 6], title: "5.URL Rewrite", note: "And files exists in Build folder" },
                { loc: [7, 8], title: "5.URL Rewrite", note: "Change url to Build path" },
                { loc: [9, 11], title: "5.URL Rewrite", note: "Rewrite all react routes" },
                { loc: [12, 15], title: "5.URL Rewrite", note: "Ignore conditions" },
                { loc: [16, 17], title: "5.URL Rewrite", note: "Rewrite to React" },
                { loc: [18, 20], title: "5.URL Rewrite", note: "Match root /" },
                { loc: [20, 21], title: "5.URL Rewrite", note: "Rewrite to React" }

            ]}
          />

          <CodeSlide
            transition={[]}
            lang="xml"
            code={examples.WPP}
            ranges={[
                { loc: [2, 3], title: "6.Fix Publish Profile", note: "Name task" },
                { loc: [4, 5], title: "6.Fix Publish Profile", note: "What files to include" },
                { loc: [5, 8], title: "6.Fix Publish Profile", note: "Where to put files in dest" },
                { loc: [11, 15], title: "6.Fix Publish Profile", note: "Change url to Build path" }
            ]}
          />

          <CodeSlide
            transition={[]}
            lang="xml"
            code={examples.ImportToRequire}
            ranges={[
                { loc: [0, 1], title: "7.Fix VS Errors", note: "Importing an image" },
                { loc: [2, 3], title: "7.Fix VS Errors", note: "Change to Require" }
            ]}
          />

         <Slide transition={["fade"]}>
            <Heading size={1} caps fit>
              Create-React-App
            </Heading>
            <Heading size={2} style={{fontSize: 54}}>
              Demo
            </Heading>
          </Slide>

           <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
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
            transition={[]}
            lang="batch"
            code={examples.NetCore}
            ranges={[
                { loc: [0, 1], title: "7.DotNet Core", note: "Install Yoman and generator" },
                { loc: [2, 4], title: "7.DotNet Core", note: "Run Yoman" },
                { loc: [16, 22], title: "7.DotNet Core", note: "Importing an image" },
                { loc: [54, 58], title: "7.DotNet Core", note: "Importing an image" }

            ]}
          />
          <CodeSlide
            transition={[]}
            lang="jsx"
            code={examples.Slides}
            ranges={[
                { loc: [0, 1], title: "React Slides"},
                { loc: [6, 8], title: "React Slides"},
                { loc: [8, 14], title: "React Slides"}
            ]}
          />

          <Slide transition={["fade"]}>
            <Heading size={1} caps fit>
              .Net Core
            </Heading>
            <Heading size={2} style={{fontSize: 54}}>
              Demo
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
