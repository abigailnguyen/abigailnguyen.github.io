const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container; const GridBlock = CompLibrary.GridBlock;

function HelloWorld(props) { 
    return (
        <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>HELLO WORLD</h1>                                                             
            </header>
            <p>This project is maintained by a dedicated group of people.</p>
          </div>
        </Container>
     </div>
  ); 
}
module.exports = HelloWorld;