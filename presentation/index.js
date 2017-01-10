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
  Choose: require("../assets/Choose.jpg"),
  Pipe: require("../assets/pipe.png")
};
const examples = {
  ES6: require("raw!../examples/ES6.example"),
  WebpackModule: require("raw!../examples/WebpackModule.example"),
  createReact: require("raw!../examples/createReact.example"),
  UrlRewrite: require("raw!../examples/UrlRewrite.example"),
  WPP: require("raw!../examples/wpp.example"),
  ImportToRequire: require("raw!../examples/ImportToRequire.example"),
  NetCore: require("raw!../examples/NetCore.example"),
  Slides: require("raw!../examples/deck.example"),
  CORS: require("raw!../examples/CORS.example")
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

          <Slide transition={["fade"]}>
            <Heading size={1} caps style={{fontSize: "2em"}}>
              Quick Poll<br />
              (React,ES6,and Typescript)
            </Heading>
            <List>
              <Appear><ListItem>Never used</ListItem></Appear>
              <Appear><ListItem>Tutorials</ListItem></Appear>
              <Appear><ListItem>Trivial App</ListItem></Appear>
              <Appear><ListItem>Used in prod</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary">
            <Heading size={1} caps fit textColor="primary" >
              Toolchain
            </Heading>
            <List textColor="primary">
              <Appear><ListItem>NPM</ListItem></Appear>
              <Appear><ListItem>Webpack(w/ babel)</ListItem></Appear>
              <Appear><ListItem>NPM Task Runner</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary">
            <Heading size={1} caps fit textColor="primary">
              Toolchain - NPM
            </Heading>
            <Image src={images.Lego} width="75%"/>
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

          <Slide transition={["fade"]}>
            <Heading size={1} caps fit >
              Toolchain - Webpack - Babel
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
                { loc: [0, 1]},
                { loc: [1, 2], note: "Define named export"},
                { loc: [3, 6], note: "Export component as default"},
                { loc: [7, 8]},
                { loc: [8, 10], note: "Import into scope"},
                { loc: [10, 11], note: "Import into scope"},
                { loc: [12, 17], note: "Add to parent UI"},
                { loc: [18, 24], note: "Create the new component"},
                { loc: [20, 21], note: "From parent"},
                { loc: [21, 22], note: "From MyModule"},
                { loc: [22, 23], note: "From ABC variable"}
            ]}
          />

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
            <List textColor="primary">
              <Appear><ListItem>VS Extension <Link textColor="primary" style={{textDecoration: "underline", fontSize: 24}} href="https://marketplace.visualstudio.com/items?itemName=MadsKristensen.NPMTaskRunner">Install: NPM Task Runner</Link></ListItem></Appear>
              <Appear><ListItem>I generally use start, test, and build</ListItem></Appear>
              <Appear><ListItem>Can run on VS Build</ListItem></Appear>
              <Appear><ListItem>Eject!</ListItem></Appear>
            </List>
            <Image src={images.NPMTaskRunner} width="95%" />
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
              <Appear><ListItem>Development and Prod</ListItem></Appear>
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
                { loc: [0, 1], title: "5.URL Rewrite"},
                { loc: [3, 5], title: "5.URL Rewrite", note: "Match All Urls" },
                { loc: [6, 7], title: "5.URL Rewrite", note: "And files exists in Build folder (/images/b.jpg)" },
                { loc: [8, 9], title: "5.URL Rewrite", note: "Change url to Build path (/build/images/b.jpg)" },
                { loc: [10, 12], title: "5.URL Rewrite", note: "Rewrite all react routes" },
                { loc: [13, 16], title: "5.URL Rewrite", note: "Ignore conditions" },
                { loc: [17, 18], title: "5.URL Rewrite", note: "Rewrite to React anything not on disk or /api" },
                { loc: [19, 21], title: "5.URL Rewrite", note: "Match root /" },
                { loc: [21, 22], title: "5.URL Rewrite", note: "Rewrite to React (/build/index.html)" }

            ]}
          />
          <CodeSlide
            transition={[]}
            lang="xml"
            code={examples.CORS}
            ranges={[
                { loc: [0, 1], title: "6.Cross Origin" },
                { loc: [1, 2], title: "6.Cross Origin", note: "Only do in debug mode" },
                { loc: [2, 4], title: "6.Cross Origin", note: "Enable" }

            ]}
          />

          <CodeSlide
            transition={[]}
            lang="xml"
            code={examples.WPP}
            ranges={[
                { loc: [0, 1], title: "7.Fix Publish Profile"},
                { loc: [3, 4], title: "7.Fix Publish Profile", note: "Name task" },
                { loc: [5, 6], title: "7.Fix Publish Profile", note: "What files to include" },
                { loc: [6, 9], title: "7.Fix Publish Profile", note: "Where to put files in dest" },
                { loc: [12, 16], title: "7.Fix Publish Profile", note: "Change url to Build path" }
            ]}
          />

          <CodeSlide
            transition={[]}
            lang="xml"
            code={examples.ImportToRequire}
            ranges={[
                { loc: [0, 1], title: "8.Fix VS Errors", note: "Importing an image" },
                { loc: [2, 3], title: "8.Fix VS Errors", note: "Change to Require" }
            ]}
          />
          <Slide transition={["fade"]} >
            <Heading size={1} caps >
              Misc Notes
            </Heading>
            <List>
              <Appear><ListItem>VS 2015 Update 3</ListItem></Appear>
              <Appear><ListItem>Typescript for VS 2.1.4</ListItem></Appear>
              <Appear><ListItem>NPM not run with build</ListItem></Appear>
              <Appear><ListItem>
                Add Node to external tools
                <List >
                  <ListItem>Tools>Options</ListItem>
                  <ListItem>Project and Solutions</ListItem>
                  <ListItem>External Web tools</ListItem>
                  <ListItem>Add { '{path to node}'} to top</ListItem>
                </List>
              </ListItem></Appear>
            </List>
          </Slide>

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
              There is an easier way! .Net Core!
            </Heading>
            <List textColor="primary">
              <Appear><ListItem>Javascript Services</ListItem></Appear>
              <Appear><ListItem>Cross-Platform</ListItem></Appear>
              <Appear><ListItem>Fully backed?</ListItem></Appear>
            </List>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="batch"
            code={examples.NetCore}
            ranges={[
                { loc: [0, 1], title: "1.DotNet Core", note: "Install Yoman and generator" },
                { loc: [2, 4], title: "1.DotNet Core", note: "Run Yoman" },
                { loc: [16, 22], title: "1.DotNet Core", note: "Importing an image" },
                { loc: [54, 58], title: "1.DotNet Core", note: "Importing an image" }

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

          <Slide transition={["fade"]} >
            <Heading size={1} caps >
              Links
            </Heading>
            Me:
            <List style={{textDecoration: "underline", fontSize: 24}}>
              <ListItem><Link href="https://intellemerc.surge.sh">https://intellemerc.surge.sh</Link></ListItem>
              <ListItem><Link href="https://github.com/Intellemerc/CreateWebApiApp">Sample Asp.net WebApi</Link></ListItem>
              <ListItem><Link href="http://intellemerc.com/">Blog</Link></ListItem>
              <ListItem><Link href="https://twitter.com/intellemerc">@Intellemerc</Link></ListItem>
            </List>
            Other:
            <List style={{textDecoration: "underline", fontSize: 24}}>
              <ListItem><Link href="https://github.com/aspnet/JavaScriptServices">JS Services(Core Project)</Link></ListItem>
              <ListItem><Link href="https://facebook.github.io/react/">React Docs</Link></ListItem>
              <ListItem><Link href="https://github.com/FormidableLabs/spectacle">spectacle js</Link></ListItem>
              <ListItem><Link href="https://codepen.io/intellemerc/pen/bgNPBL">CodePen</Link></ListItem>
            </List>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={examples.Slides}
            ranges={[
                { loc: [0, 1], title: "React Slides"},
                { loc: [3, 5], title: "React Slides"},
                { loc: [6, 8], title: "React Slides"},
                { loc: [8, 14], title: "React Slides"}
            ]}
          />
        </Deck>
      </Spectacle>
    );
  }
}
