import React from "react"
import TaskList from "./taskList"
import TaskList2 from "./taskList2"
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
// import  './style.css'
class Form extends React.Component {
    state = {
        taskList: [{ index: Math.random(), projectName: "", task: "", taskNotes: "", taskStatus: "" }],
        taskList2: [{ index: Math.random(), projectName: "", task: "", taskNotes: "", taskStatus: "" }],
        date: "",
        description: "",
        x: false
    }
    addTriState =(e) => {
        this.setState({
            x: !(this.state.x)
        })
    }
    handleChange = (e) => {
        if (["projectName", "task", "taskNotes", "taskStatus"].includes(e.target.name)) {
            let taskList = [...this.state.taskList]
            taskList[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    addNewRow = (e) => {
        this.setState((prevState) => ({
            taskList: [...prevState.taskList, { index: Math.random(), projectName: "", task: "", taskNotes: "", taskStatus: "" }],
        }));
    }
    addNewRowDate = (e) => {
        this.setState((prevState) => ({
            taskList2: [...prevState.taskList2, { index: Math.random(), projectName: "", task: "", taskNotes: "", taskStatus: "" }],
        }));
    }
    addTri = (e) =>{
        this.setState((prevState) =>({
            date: "",
            description: ""
        }))
    }
    deteteRow = (index) => {
        this.setState({
            taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
        });
        // const taskList1 = [...this.state.taskList];
        // taskList1.splice(index, 1);
        // this.setState({ taskList: taskList1 });
    }
    deteteRow2 = (index) => {
        this.setState({
            taskList2: this.state.taskList2.filter((s, sindex) => index !== sindex),
        });
        // const taskList1 = [...this.state.taskList];
        // taskList1.splice(index, 1);
        // this.setState({ taskList: taskList1 });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.date==='' || this.state.description==='')
        {
            NotificationManager.warning("Please Fill up Required Field . Please check Task and Date Field");
            return false;
        }
        for(var i=0;i<this.state.taskList.length;i++)
        {
                if(this.state.taskList[i].projectName==='' || this.state.taskList[i].task==='')
                {
                    NotificationManager.warning("Please Fill up Required Field.Please Check Project name And Task Field");
                    return false;
                }
        }
        let data = { formData: this.state, userData: localStorage.getItem('user') }
        axios.defaults.headers.common["Authorization"] = localStorage.getItem('token');
        axios.post("http://localhost:9000/api/task", data).then(res => {
            if(res.data.success) NotificationManager.success(res.data.msg);
        }).catch(error => {
            if(error.response.status = 0)  /*&& error.response.status ===400)*/
            NotificationManager.error("Bad Request");
            else NotificationManager.error("Something Went Wrong");
            this.setState({ errors: error })
        });
    }
    clickOnDelete(record) {
        this.setState({
            taskList: this.state.taskList.filter(r => r !== record)
        });
    }
    clickOnDelete2(record) {
        this.setState({
            taskList2: this.state.taskList2.filter(r => r !== record)
        });
    }
    render() {
        let { taskList } = this.state//let { notes, date, description, taskList } = this.state
        let { taskList2} =this.state
        return (
            <div className="taskForm">
                <div className='backgroundplan'></div>
                <NotificationContainer/>
                <form className='formT' onSubmit={this.handleSubmit} onChange={this.handleChange} >
                    <div className="row" style={{ marginTop: 0 }}>
                        {/* <div className="col-sm-1"></div> */}
                        <div className="">
                            <div className="card">
                                <div className="card-header text-center">Add Your Daily Task</div>
                                <div className="card-body">
                                    {/* <div className="row">
                                        <div className="col-sm-4">
                                            <div className="form-group ">
                                                <label className="required">Date</label>
                                                <input type="date"  name="date" id="date" className="form-control" placeholder="Enter Date" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group ">
                                                <label className="required">Description</label>
                                                <textarea name="description"  id="description" className="form-control"></textarea>
                                            </div>
                                        </div>
                                    </div> */}
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                {/* <th className="required">Date</th> */}
                                                <th className="required" >Your Action</th>
                                                <th className="required" >Address</th>
                                                <th>Notes</th>
                                                <th>Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <TaskList add={this.addNewRow} delete={this.clickOnDelete.bind(this)} taskList={taskList} />
                                        </tbody>
                                        {/* <tfoot>
                                            <tr><td colSpan="4">
                                                 <button onClick={this.addTriState} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button> 
                                               

                                            </td></tr>
                                        </tfoot> */}
                                    </table>
                                </div>
                                {/* <div className="card-footer text-center"> <button type="submit" className="btn btn-primary text-center colorbtn">Submit</button></div> */}
                                <div className="card-footer text-center"></div>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Form