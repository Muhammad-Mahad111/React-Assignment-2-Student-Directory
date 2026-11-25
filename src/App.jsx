import "./app.css"

function App() {

  const students = [
    {
      id: 1,
      name: "Ali Khan",
      age: 18,
      course: "Web Development",
      city: "Karachi"
    },
    {
      id: 2,
      name: "Sara Ahmed",
      age: 20,
      course: "Graphic Design",
      city: "Lahore"
    },
    {
      id: 3,
      name: "Ahmed Raza",
      age: 19,
      course: "React JS",
      city: "Islamabad"
    },
    {
      id: 4,
      name: "Ayesha Malik",
      age: 21,
      course: "Web Development",
      city: "Karachi"
    }
  ];

  return (
    
    <>

    <div className="container">
      <h1 className="main-heading">Student Directory</h1>
      <div className="student-container">
        {students.map((obj) => (
          <div className="student-card" key={obj.id}>
            <h2>{obj.name}</h2>
            <div className="student-details">
              <p><b>Course:</b> {obj.course}</p>
              <p><b>Age:</b> {obj.age}</p>
              <p><b>City:</b> {obj.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      
    </>
  )
}

export default App
