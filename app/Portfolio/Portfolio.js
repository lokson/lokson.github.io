import React from 'react';
import moment from 'moment';
import RolesChart from '../RolesChart/';

class Portfolio extends React.Component {

  constructor(props) {
    super();
    this.state = {
      projects: props.projects.map(project => {
        project.start = moment(project.start);
        project.end = project.end ? moment(project.end) : moment().startOf('month');
        return project;
      })
    };
  }

  render() {
    return (
      <div>

        <section className='row intro'>
          <div className='col-sm-12'>
            <img className='strip' src='assets/images/strip1.jpg' />
          </div>
        </section>

        <section className='row'>
          <div className='col-sm-6'>
            <h1>
              Web developer
            </h1>
            <p>
              I write code and hope that machines will not take revenge on programmers one day.
            </p>
            <RolesChart projects={this.state.projects} />
          </div>

          <div className='col-sm-6'>
            <h1>Fullstack</h1>
            <p>
              Due to possibilities in a modern javascript I moved from the
              server side to fullstack.
            </p>
          </div>
        </section>

      </div>
    );
  }

}

Portfolio.propTypes = {
  projects: React.PropTypes.array
};

export default Portfolio;
