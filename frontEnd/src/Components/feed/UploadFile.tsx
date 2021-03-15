import React from 'react'
import { useMutation, gql } from "@apollo/client";

const SINGLE_UPLOAD = gql`
  mutation($file: Upload!) {
    uploadFile(file: $file) {
      filename
      mimetype
      
    }
  }
`;
export default function UploadFile() {
    const [mutate, { loading, error }] = useMutation(SINGLE_UPLOAD);
  const onChange = async e =>{
// console.log(e.target.files[0]);

    // e.target.files = [File]
console.log(e.target.files[0])
// let x = e.target.files[0];
// console.log(x.File);
let myFile = await e.target.files[0];
let status = await mutate({ variables:{file:myFile}});

  }

  if (loading) return <div>Loading...</div>;
  if (error) console.log (JSON.stringify(error, null, 2));
    
    return (
        <div>
                  <input type="file" required onChange={onChange} />

        </div>
    )
}
