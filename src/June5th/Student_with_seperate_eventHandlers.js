import React from 'react'

class Student_with_seperate_eventHandlers extends React.Component {
    constructor(props)
        {
            super(props)
            this.state = {  Id: "",
                            courseName: "",
                            studentName: "",
                            address: "",

                        } //backend to frontend
        }

        onChangeIdHandler = (eventData) => {
            // frontend to backend
            this.setState( { Id: eventData.target.value } )
        }
    
        onChangecourseNameHandler = (eventData) => {
            // frontend to backend
            this.setState( { courseName: eventData.target.value } )
        }
    
        onChangestudentNameHandler = (eventData) => {
            // frontend to backend
            this.setState( { studentName: eventData.target.value } )
        }
    
        onChangeaddressHandler = (eventData) => {
            // frontend to backend
            this.setState( { address: eventData.target.value } )
        }
    
        onAddClickHandler = () => {
            //read
            console.log(this.state.Id+ " " + this.state.courseName + " " + this.state.studentName + " "  + this.state.address  );
        }

         render() {

                    return (
                            <div>
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
                            </div>
                            )
  }
}

export default Student_with_seperate_eventHandlers