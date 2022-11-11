import React from "react";
import StartFirebase from "../firebaseConfig/index";
import {ref, set, get, update, remove, child} from "firebase/database";

export class Crud extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            db:'',
            username: '',
            fullname: ''
        }
        this.interface = this.interface.bind(this);
    }

    componentDibMount(){
        this.setState({
            db: StartFirebase()
        });
    }

    render(){
        return(
            <>
                <label>Enter username</label>
                <input type='text' id="userbox" value={this.state.username} 
                onChange={e =>{this.setState({username: e.target.value});}}/>
                <br/><br/>
 
                <label>Enter name</label>
                <input type='text' id="namebox" value={this.state.fullname} 
                onChange={e =>{this.setState({fullname: e.target.value});}}/>
                <br/><br/>

                <label>Some explanation </label>
                
                <br/><br/>
                <button id="addBtn" onClick={this.interface}>Add Data</button>
                <button id="updateBtn" onClick={this.interface}>Update Data</button>
            </>
        )
    }

    interface(event){
        const id = event.target.id;

        if (id==='addBtn'){
            this.insertData();
        }
        else if (id==='updateBtn'){
            this.updateData();
        }
          
    }


    getAllInputs(){
        return{
            username: this.state.username,
            name: this.state.fullname
        }
    }

    insertData(){
        const db = this.state.db;
        const data = this.getAllInputs();

        set(ref(db, 'Customer/'+data.username),
        {
            Fullname: data.name
            //cState: data.cState
        })
        .then(()=>{alert('Added successfully')})
        .catch((error)=>{alert("An error. Details:"+error)});
    }

    updateData(){
        const db = this.state.db;
        const data = this.getAllInputs();

        update(ref(db, 'Customer'+data.username),
        {
            fullname: data.name
        })
        .then(()=>{alert('Updated successfully')})
        .catch((error)=>{alert("An error. Details:"+error)});
    }

}