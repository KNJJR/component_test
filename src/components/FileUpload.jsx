// 参考url：https://dev.to/tienbku/react-drag-and-drop-file-upload-example-bac


import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import { getFiles, uploadFile } from "../services/FileUploadService";

const UploadFiles = () => {

  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  const [fileInfos, setFileInfos] = useState([]);

  const onDrop = (files) => {
    if (files.length > 0) {
      setSelectedFiles(files);
    }
  };

  const upload = () => {
    let currentFile = selectedFiles[0];

    setProgress(0);
    setCurrentFile(currentFile);

    uploadFile(currentFile, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        setMessage(response.data.message);
        return getFiles();
      })
      .then((files) => {
        setFileInfos(files.data);
      })
      .catch(() => {
        setProgress(0);
        setMessage("ファイルのアップロードに失敗しました！");
        setCurrentFile(undefined);
      });

    setSelectedFiles(undefined);
  };

  useEffect(() => {
    getFiles().then((response) => {
      setFileInfos(response.data);
    });
  }, []);

  return (
    <div>
      {currentFile && (
        <div className="progress mb-3">
          <div
            className="progress-bar progress-bar-info progress-bar-striped"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: progress + "%" }}
          >
            {progress}%
          </div>
        </div>
      )}

      <Dropzone onDrop={onDrop} multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              {selectedFiles && selectedFiles[0].name ? (
                <div className="selected-file">
                  {selectedFiles && selectedFiles[0].name}
                </div>
              ) : (
                "ここにファイルをドラッグするか、クリックしてファイルを選択してください"
              )}
            </div>
            <aside className="selected-file-wrapper">
              <button
                className="btn btn-success"
                disabled={!selectedFiles}
                onClick={upload}
              >
                Upload
              </button>
            </aside>
          </section>
        )}
      </Dropzone>

      <div className="alert alert-light" role="alert">
        {message}
      </div>

      {fileInfos.length > 0 && (
        <div className="card">
          <div className="card-header">List of Files</div>
          <ul className="list-group list-group-flush">
            {fileInfos.map((file, index) => (
              <li className="list-group-item" key={index}>
                <a href={file.url}>{file.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadFiles;