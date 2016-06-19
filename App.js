import React from 'react';
import { participants } from './fake-data';

class App extends React.Component {

  render() {
    let participantList = participants.map(p => <li>{p.firstName}</li>);

    return (
      <div>
        <ul>
          {participantList}
        </ul>
      </div>
    )
  }
}

export default App;
