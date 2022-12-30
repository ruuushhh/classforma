import * as React from 'react';
import pdfViewer from './pdftron'
import { useNavigate } from 'react-router-dom';


export default function AllFiles() {
    const navigate = useNavigate();
    return (
        <>
            <div style={{padding: '50px'}}>
            <h2>Documents:</h2>
                <a onClick={() => { navigate('/pdf/annotate_1') }} style={{cursor: 'pointer', textDecoration: 'underline'}}>Smaple PDF 1</a> <br/><br/>
                <a onClick={() => { navigate('/pdf/annotate_2') }} style={{cursor: 'pointer', textDecoration: 'underline'}}>Smaple PDF 2</a> <br/><br/>
                <a onClick={() => {navigate('/pdf/annotate_3')}} style={{cursor: 'pointer', textDecoration: 'underline'}}>Smaple PDF 3</a> 
            </div>
            
        </>
    )
}