import {useState} from 'react'
import storage from "./firebaseConfig.js"
import {ref,uploadBytesResumable,getDownloadURL} from "firebase/storage"
function App() {
  const [file, setfile] = useState('')
  const [percent, setPercent] = useState(0);
const [imgurl,setimgurl]=useState('')
const [isurlget,setisurlget]=useState(false)

  //handle change
  const HandleChange=(event)=>{
    try {
     setfile(event.target.files[0])
     console.log(event.target.files[0])
     console.log(file)
    } catch (error) {
      console.log(error)
    }
  }


  //Handle uploads

  const HandleUploads=(event)=>{
    try {
      if (!file) {
        alert("Please choose a file first!")
    }
    const storageRef = ref(storage, `/files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
          const percent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          // update progress
          setPercent(percent);
      },
      (err) => console.log(err),
      () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
              console.log(url);
              setimgurl(url)
              setisurlget(true)
          });
      }
  ); 
    } catch (error) {
      console.log(error)
    }
  }
  return (
    
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Image Upload</h5>
              <div className="mb-3">
                <input type='file' accept="image/*" onChange={HandleChange}></input>
              </div>
              <button className="btn btn-primary" onClick={HandleUploads}>Upload to Firebase</button>
              <div className="image-container mt-3">
                <label>Your Uploaded Image</label>
                {isurlget && <img src={imgurl} alt="Uploaded" className="uploaded-image" style={{height:'50px',width:'50px'}}></img>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
