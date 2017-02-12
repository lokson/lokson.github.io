import React from 'react';

class Portfolio extends React.Component {
  render() {
    return (
      <div>

        <section className='row intro'>
          <div className='col-sm-12'>
            <img className='strip' src='assets/images/strip1.jpg' />
          </div>
        </section>

        <section className='row'>
          <div className='col-xs-6'>
            <h1>
              <span className='hidden-xs'>Web </span>
              developer
            </h1>
            <p>
              My main focus is to write clean code. In past I worked as a
              software architect, an requirements analyst and a rather soft
              project manager.
            </p>
          </div>
          <div className='col-xs-6'>
            <h1>Fullstack</h1>
            <p>
              Due to possibilities in a modern javascript I moved from the
              server side to the client side and most often work as a fullstack
              now.
            </p>
          </div>
        </section>

      </div>
    );
  }
}

export default Portfolio;
