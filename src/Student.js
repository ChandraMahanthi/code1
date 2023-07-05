import React from "react"

class Student extends React.Component{
    constructor(props)
        {
            super(props)
            this.state = { 
                student: {
                    Id: "",
                    courseName: "",
                    studentName: "",
                    address: "",
                }

                        } //backend to frontend
        }

    onChangeIdHandler = (eventData) => {
        // frontend to backend
        this.setState( { student: {...this.state.student, Id: eventData.target.value }} )
    }

    onChangecourseNameHandler = (eventData) => {
        // frontend to backend
        this.setState( { student: {...this.state.student, courseName: eventData.target.value } })
    }

    onChangestudentNameHandler = (eventData) => {
        // frontend to backend
        this.setState( { student: {...this.state.student,studentName: eventData.target.value }})
    }

    onChangeaddressHandler = (eventData) => {
        // frontend to backend
        this.setState( { student: {...this.state.student, address: eventData.target.value } } )
    }

    onAddClickHandler = () => {
        //read
        console.log(this.state.student.Id+ " " + this.state.student.courseName + " " + this.state.student.studentName + " "  + this.state.student.address  );
    }

    onSubmitHandler = (event) => {
        this.setState( { student: {...this.state.student, courseName: event.target.value } })
    }
    
    render(){
        return(
            <div>
                <form action="" onSubmit={onSubmitHandler}>
                    <table>
                        <tbody>
                            {/* Studen Id */}
                            <tr>
                                <td>Enter Student Id:</td>
                                <td>
                                    <input type="text"
                                            name="Id"
                                            value={this.state.Id}
                                            onChange={this.onChangeIdHandler} />
                                </td>
                            </tr>
                            {/* Course Name */}
                            <tr>
                                <td>Course Name:</td>
                                <td>
                                    <input type="text"
                                            name="courseName"
                                            value={this.state.courseName}
                                            onChange={this.onChangecourseNameHandler} />
                                </td>
                            </tr>
                            {/* Student Name */}
                            <tr>
                                <td>Student Name:</td>
                                <td>
                                    <input type="text"
                                            name="studentName"
                                            value={this.state.studentName}
                                            onChange={this.onChangestudentNameHandler} />
                                </td>
                            </tr>
                            {/* Address */}
                            <tr>
                                <td>Address:</td>
                                <td>
                                    <input type="text"
                                            name="address"
                                            value={this.state.address}
                                            onChange={this.onChangeaddressHandler} />
                                </td>
                            </tr>
                            <tr>
                                <td><button onClick={this.onAddClickHandler}>Add</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

export default Student;