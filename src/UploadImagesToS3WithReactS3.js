import React , {useState} from 'react';
import { uploadFile } from 'react-s3';
import "./UploadImageToS3WithReactS3UploadImageToS3WithReactS3.css"
import DescriptionIcon from '@material-ui/icons/Description';


const S3_BUCKET ='react-aws-upload';
const REGION ='us-east-1';
const ACCESS_KEY ='AKIA4YK7WZDCW6EMJFWC';
const SECRET_ACCESS_KEY ='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';

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
}

const UploadImageToS3WithReactS3 = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = async (file) => {
        uploadFile(file, config)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    return <div className="container">
        <h1>Upload a file to S3</h1>
        <input type="file" onChange={handleFileInput} className="input"/>
        <button onClick={() => handleUpload(selectedFile)}> Upload to S3</button>
    </div>
}

export default UploadImageToS3WithReactS3;