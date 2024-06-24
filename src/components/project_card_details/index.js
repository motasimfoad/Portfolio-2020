import React, { useState, useEffect } from "react";
import "../project_card_details/style.css";
import { Col, Row, Card, Button, Image } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastsContainer, ToastsStore } from "react-toasts";
import GitLogo from "../../assets/img/git.svg";

const PCD = () => {
  const [setErrors] = useState(false);
  const [git, setGit] = useState([]);

  async function fetchData() {
    const res = await fetch(
      "https://api.github.com/users/BlackMagicianZero/repos"
    );
    res
      .json()
      .then((res) => setGit(res))
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <Row>
      {git.map((item) => (
        <Col xl={6} key={item.id}>
          <Card className="pro_card">
            <Row>
              <Col xl={12} className="project_img_container">
                <Image className="project_card_left_img" src={GitLogo} />
              </Col>
              <Col xl={12}>
                <Card.Title className="repoName">Name: {item.name}</Card.Title>
                <Card.Subtitle className="repoInfo">
                  Location: {item.full_name} <br />
                  Created: {item.created_at} <br />
                  Updated: {item.updated_at}
                </Card.Subtitle>
                <Card.Body className="project_card_main">
                  <Button
                    variant="outline-light"
                    size="lg"
                    className="modal-exit-btn about_modal"
                  >
                    <CopyToClipboard
                      text={item.ssh_url}
                      onCopy={() =>
                        ToastsStore.info("SSH url copied to clipboard 🤩😍")
                      }
                    >
                      <span>SSH</span>
                    </CopyToClipboard>
                  </Button>
                  <Button
                    variant="outline-light"
                    size="lg"
                    className="modal-exit-btn about_modal"
                  >
                    <CopyToClipboard
                      text={item.clone_url}
                      onCopy={() =>
                        ToastsStore.info("HTTPS url copied to clipboard 👍😬")
                      }
                    >
                      <span>HTTPS</span>
                    </CopyToClipboard>
                  </Button>
                  <Button
                    variant="outline-light"
                    size="lg"
                    className="modal-exit-btn about_modal"
                  >
                    <a
                      href={item.svn_url}
                      style={{ textDecoration: "none", color: "white" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW
                    </a>
                  </Button>
                  <ToastsContainer store={ToastsStore} timer="10000" />
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default PCD;
