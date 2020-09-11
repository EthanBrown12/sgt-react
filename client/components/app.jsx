import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };

  }

  componentDidMount() {
    this.getGrades();
  }

  getGrades() {
    const gradesRequest = new Request('/api/grades');
    const options = {
      method: 'GET'
    };
    fetch(gradesRequest, options)
      .then(res => res.json())
      .then(grades => this.setState({
        grades
      }));
  }

  render() {

    return (
      <div>
        <Header />
        <GradeTable grade= {this.state.grades} />
      </div >
    );
  }
}

export default App;
