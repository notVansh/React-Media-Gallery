import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

const ImageModal = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={props.img}
    >
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
      <Modal.Content image>
        <Image size="large" src={props.src} wrapped />
        <Modal.Description>
          <Header>{props.Desc}</Header>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default ImageModal;
