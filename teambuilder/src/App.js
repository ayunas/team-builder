import React, { useState } from 'react';
import './App.css';
import MemberForm from './Components/MemberForm';
import Members from './Components/Members';
import { teamdata } from './teamdata';

function App() {

  const [team, setTeam] = useState(teamdata);

  function edit(oldMember) {
    console.log('edit triggered, member: ', oldMember);
    // setMember({ ...member })
  }

  function add(newMember) {
    console.log('addMember triggered newMember: ', newMember);
    // setTeam(team => [...team, newMember])
    setTeam([...team, newMember]);
  }

  return (
    <div className="App">
      <MemberForm add={add} />
      <Members team={team} edit={edit} />
    </div>
  );
}

export default App;
