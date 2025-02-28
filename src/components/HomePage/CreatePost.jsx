import { Button, Form, Image } from "react-bootstrap";
import { BlockquoteLeft, CardImage, Youtube } from "react-bootstrap-icons";
import CreatePostModal from "./CreatePostModal";
import { useState, useSelector } from "react";

const CreatePost = () => {
  const [modalShow, setModalShow] = useState(false);
  const [editPost, setEditPost] = useState(null)
  const post = useSelector((state)=>state.post.posts)


  const handleEditSave = (data) => {
    console.log("Dati salvati:", data);

    dispatch(updatePost(data));
  };

  return (
    <>
      <div className="py-3   bg-white border border-secondary-subtle mb-2  rounded-3">
        <div className="mb-2">
          <Image
            alt="Profilo"
            width="50px"
            height="50px"
            className="border border-light border-2 ms-2"
            style={{ objectFit: "cover", borderRadius: "60px" }}
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          />
          <Button
            className="rounded-pill d-inline-block border-secondary ms-2 text-start fw-semibold"
            style={{ width: "75%" }}
            variant="light"
            onClick={() => {
              setModalShow(true);
            }}
          >
            Crea un post
          </Button>

          <CreatePostModal show={modalShow} onHide={() => setModalShow(false)} post={editPost} onSave={} />
        </div>
        <div className="d-flex justify-content-around align-items-center text-dark ">
          <Form>
            <Form.Group controlId="formFile" className="mb-0">
              <Form.Label htmlFor="file-upload" className="custom-file-upload" style={{ cursor: "pointer" }}>
                <div className="d-flex align-items-center mb-0 mx-2">
                  <CardImage className="text-primary fs-5" />
                  <p className="text-dark fw-semibold mb-0 ms-2"> Foto</p>
                </div>
              </Form.Label>
              <Form.Control type="file" id="file-upload" name="file" className="bg-transparent text-none border-0" />
            </Form.Group>
          </Form>
          <Form>
            <Form.Group controlId="formFile" className="mb-0">
              <Form.Label htmlFor="file-upload" className="custom-file-upload" style={{ cursor: "pointer" }}>
                <div className="d-flex  align-items-center mb-0 mx-2 ">
                  <Youtube className="text-success fs-5" />
                  <p className="text-dark fw-semibold mb-0 ms-2">Video</p>
                </div>
              </Form.Label>
              <Form.Control type="file" id="file-upload" name="file" className="bg-transparent text-none border-0" />
            </Form.Group>
          </Form>
          <Form>
            <Form.Group controlId="formFile" className="mb-0">
              <Form.Label htmlFor="file-upload" className="custom-file-upload" style={{ cursor: "pointer" }}>
                <div className="d-flex  align-items-center mb-0 mx-2">
                  <BlockquoteLeft className="text-danger" />
                  <p className="text-dark fw-semibold mb-0 ms-2">Scrivi un articolo</p>
                </div>
              </Form.Label>
              <Form.Control type="file" id="file-upload" name="file" className="bg-transparent text-none border-0" />
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
