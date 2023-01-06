// 参考url：https://dev.to/tienbku/react-drag-and-drop-file-upload-example-bac

import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-type": "application/json"
  }
});