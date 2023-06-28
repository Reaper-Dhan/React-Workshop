import "./App.css"
import {useState} from "react"

function Header({name, title, contact}) {
  return (
    <div id="header">
      <div>
        <h1>{name}</h1>
        <h3>{title}</h3>
      </div>
      <div>
        <h3><span>Email: &emsp;</span> {contact.email}</h3>
        <h3><span>Phone: &ensp;</span> {contact.phone}</h3>
        <h3><span>Website: &ensp;</span> {contact.website}</h3>
      </div>
    </div>
  );
}

function Section({title, children}) {
  const [expanded, setExpanded] = useState(true);
  return (
    <div id="edu">
      <h2 id="title" onClick={() => setExpanded(!expanded)}>
        {expanded ? "➡️" : "⬇️"}
          <b>&ensp;{title}</b>
      </h2>
      {expanded ? children : null}
    </div>
  );
}

function Education({details}) {
  let arr = [];
  for(let detail of details) {
    arr.push(
      <tr>
        <td>{detail.name}</td>
        <td>{detail.yearStart} - {detail.yearEnd}</td>
      </tr>
    )
  }
  return (
    <table>{arr}</table>
  );
}

function Technologies({name, proficiency}) {
  return (
    <div id="prof">
      <h5 id="prof2" style={{
        width: proficiency
      }}>
        {name}</h5>
    </div>
  )
}

function Achievements({list}) {
  return <ul>
    {list.map((achievement)=><li>&ensp;{achievement}</li>)}
  </ul>
}

function App() {
  return (
    <div>
      <Header name="Dhanvinesh K" title="Pre-Final Year Student"
        contact={{
          email: <a id="git" href="mailto:dhanvineshk2003@gmail.com">dhanvineshk2003@gmail.com</a>,
          phone: "+91-6382861160",
          website: <a id="git" href="https://github.com/Reaper-Dhan/Reaper-Dhan">Reaper-Dhan</a>,
        }}/>

        <Section title="Education">
          <Education details={[
            {name: 'Jaycees Matriculation Higher Secondary School', yearStart: '2016', yearEnd: '2018'},
            {name: 'Green Garden Matriculation Higher Secondary School', yearStart: '2018', yearEnd: '2020'},
            {name: 'Amrita Vishwa Vidyapeetham', yearStart: '2020', yearEnd: '2024'},
          ]}/>
        </Section>

        <Section title="Technologies">
          <Technologies name='Python' proficiency='90%'/>
          <Technologies name='C' proficiency='70%'/>
          <Technologies name='C++' proficiency='70%'/>
          <Technologies name='HTML & CSS' proficiency='95%'/>
          <Technologies name='JavaScript' proficiency='60%'/>
          <Technologies name='Bash' proficiency='85%'/>
          <Technologies name='Go' proficiency='40%'/>
        </Section>

        <Section title="Achievements">
          <Achievements list={[
              "Prometeo CTF (conducted by IIT Jodhpur) - 1st Place",
              "Pragyan CTF (conducted by NIT Trichy) - 11th Place",
            ]}/>
        </Section>
    </div>
  );
}

export default App;