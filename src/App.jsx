import { useState } from "react";
import { uploadFile } from "./firebase/config";

function App() {
  const [file, setFile] = useState(null)
  const [url, setUrl] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await uploadFile(file);
      console.log(result)
      setUrl(result)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={e => setFile(e.target.files[0])}/>
        <button>uppload</button>
      </form>

      <img src={url} alt="" />
    </div>
  )
}

export default App
