import { useState, useEffect } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import storage from "../firebase";
import Link from "./Link";
import "./homepage.css";
import image1 from "./HQ.jpeg";
import image2 from "./Badge.jpeg";
import Nav from "./Nav";
import Button from "./Button";

import { uploadBytes, listAll, list } from "firebase/storage";

import { v4 } from "uuid";
function Uploadv() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, "videos/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `videos/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
        setResume(url);
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const [modal, setModal] = useState(false);
  const [resume, setResume] = useState(null);

  return (
    <div class="bg-custom-primary h-screen bg-cover">
      <div>
        <Nav />
        <div className="badge-container">
          <img className="top-left-image" src={image1} alt="image1" />
          <nav className="OhNav">508 ARMY BASE WORKSHOP CHHEOKI, PRAYAGRAJ</nav>
          <img className="top-right-image" src={image2} alt="image2" />
        </div>
      </div>
      <div className="textnbutton">
        <Button text="Home" hlink="/" />
      </div>

      <div>
        <br></br>
        <center>
          <input
            className="uploadButton"
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
          <Button text="Upload Video" onClick={uploadFile} />
        </center>

        <div
          style={{
            display: "flex",
            msFlexDirection: "row",
            flexFlow: "row wrap",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {imageUrls.map((url, index) => {
            const name = `video ${index + 1}`;
            return <Link key={name} url={url} fileName={name} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Uploadv;
