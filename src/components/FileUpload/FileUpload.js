import React ,{Component} from 'react';
import firebase from 'firebase';

export default class FileUpload extends Component{

    constructor(){
        super()
        this.state={
            uploadValue:0,
            picture:null
        }
        this.handleUpload = this.handleUpload.bind(this)
    }


    handleUpload(event){

        const file = event.target.files[0];
        const storage =firebase.storage();
        var storageRef = storage.ref();
        var imagesRef = storageRef.child(`imagenes/${file.name}`);

        const task =imagesRef.put(file);
        task.on('state_changed',snapshot=>{
            console.log('entra state changed');
            let porcentaje=(snapshot.bytesTransferred/snapshot.totalBytes)*100
            this.setState({
                uploadValue:porcentaje
            })
        }, error=>{
            console.log(error.message)
        }, ()=>{
            console.log('entra al finish de la funcion');
            this.setState({
                uploadValue:100,
                picture:task.snapshot.downloadURL
            })
        });
    }
    render(){
        return (
            <div>
                <progress value={this.state.uploadValue} max="100"></progress>
                <br/>
                <input type="file" onChange={this.handleUpload} ></input>
                <br/>
                <img width="320" src={this.state.picture} alt=""/>
            </div> 
        )
    }
}

