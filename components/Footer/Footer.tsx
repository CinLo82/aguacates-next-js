import React from 'react'
import { Segment, Container } from 'semantic-ui-react'

const Footer = () => (
  <Segment>
    <Container 
        text>
      <div className="colophon">
        <p className="colophon-entry">
          Icons made by{' '}
          <a
            target="_blank"
            href="https://www.flaticon.com/authors/freepik"
            title="Freepik"
          >
            Freepik
          </a>
          {' from '}
          <a target="_blank" href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </p>
        <p className="colophon-entry">
          Avocado images taken from{' '}
          <a
            className="acnor"
            target="_blank"
            href="https://www.californiaavocado.com/avocado101/avocado-varieties"
            title="California Avocado"
          >
            Avocado 101
          </a>
          {' at '}
          <a
            target="_blank"
            href="https://www.californiaavocado.com"
            title="Flaticon"
          >
            California Avocado
          </a>
        </p>
      </div>
    </Container>

    <style jsx>{`
        .colophon {
            text-align: center;
            font-size: 0.8rem;
            padding: 1.2rem;
            background: grey
        }
        .colophon-entry {
            color: white;
            margin-bottom: 0;
        }
    `}</style>
  </Segment>
)

export default Footer