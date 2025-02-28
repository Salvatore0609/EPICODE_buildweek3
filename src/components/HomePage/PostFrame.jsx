import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { ChatText, GlobeEuropeAfrica, HandThumbsUp, SendFill, Shuffle } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { setPostsList } from "../../redux/reducers/postsList";
import { formatDistanceToNow } from "date-fns";
import { it } from "date-fns/locale";
import { setProfilesList } from "../../redux/reducers/profilesLists";

const PostFrame = ({ postData }) => {
  const API_URL = "https://striveschool-api.herokuapp.com/api/posts/";
  const API_URL_PROFILES = "https://striveschool-api.herokuapp.com/api/profile/";
  const BEARER_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNTc1ZGU3MDMzNzAwMTUzMTZkYmEiLCJpYXQiOjE3NDAzOTYzODIsImV4cCI6MTc0MTYwNTk4Mn0.ONZKTuW8uMZfm7TTZUQUDzRq8jfZZmWwJ4vefV07-jY";

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsList);
  const profiles = useSelector((state) => state.profilesLists);
  const tempoTrascorso = (data) => {
    return formatDistanceToNow(new Date(data), { addSuffix: true, locale: it });
  };

  useEffect(() => {
    const fetchPostsList = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
        });
        if (!response.ok) {
          throw new Error("Errore durante fetch dei post");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          dispatch(setPostsList(data));
          fetchProfilesList();
        } else {
          console.log("i dati ricevuti non sono un Array :", data);
        }
      } catch (error) {
        console.error("errore nel caricamento dei profili : ", error);
      }
    };

    const fetchProfilesList = async () => {
      try {
        const response = await fetch(API_URL_PROFILES, {
          headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
        });
        if (!response.ok) {
          throw new Error("Errore durante il fetch del profilo");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          dispatch(setProfilesList(data));
        } else {
          console.log("i dati ricevuti non sono un Array :", data);
        }
      } catch (error) {
        console.error("errore nel caricamento dei profili : ", error);
      }
    };

    fetchPostsList();
  }, [dispatch]);

  const getProfileName = (userId) => {
    const profile = profiles.find((profile) => profile._id === userId);
    return profile ? `${profile.name} ${profile.surname}` : <p>Nome non trovato</p>;
  };

  const getProfileTitle = (userId) => {
    const profile = profiles.find((profile) => profile._id === userId);
    return profile ? `${profile.title}` : <p>Titolo non trovato</p>;
  };

  const getProfileImage = (userId) => {
    const profile = profiles.find((profile) => profile._id === userId);
    return profile ? `${profile.image}` : <p>Immagine non trovata</p>;
  };

  return (
    <>
      {/* {postData && (
        <div>
          <h4>Nuovo Post</h4>
          <p>{postData.text}</p>
        </div>
      )} */}
      {posts && posts.length > 0 ? (
        [...posts]
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 20)
          .map((post) => (
            <div key={post._id} className="py-3  bg-white border border-secondary-subtle mb-2 p-2 rounded-3">
              <div className="d-flex align-items-center">
                <img
                  alt="Profilo"
                  width="50px"
                  height="50px"
                  className=" border border-light border-2 ms-2"
                  src={getProfileImage(post.user._id)}
                  style={{ objectFit: "cover", borderRadius: "60px" }}
                />
                <div className="d-flex flex-column">
                  <div className="d-flex ">
                    <h6 className="mb-0">{getProfileName(post.user._id)}</h6> <p className="mb-0">3° e oltre</p>
                  </div>
                  <p className="text-secondary mb-0">{getProfileTitle(post.user._id)}</p>
                  <p className="mb-0 text-secondary">
                    {tempoTrascorso(post.createdAt)} <GlobeEuropeAfrica className="text-secondary fw-semibold" />
                  </p>
                </div>
              </div>
              <div>
                <p>{post.text}</p>
                <img
                  width={500}
                  height={500}
                  //   src="https://.licdn.com/dms/image/v2/D4E22AQHd6R3wsNy2TA/feedshare-shrink_800/B4EZUDTSVSHUAw-/0/1739517143858?e=1743638400&v=beta&t=r1pg3iCRCmyER7GOvny9EMkxMk60mxWwApcB7Tl_NnQ"
                  src={getProfileImage(post.user._id)}
                  alt="post"
                />
              </div>
              <div className="d-flex flex-column justify-content-end">
                <div className="pt-0 pb-0">
                  <div className="d-flex flex-grow-1 justify-content-between" style={{ width: "100%" }}>
                    <div className="d-flex ">
                      <div className=" d-flex  justify-content-between">
                        <ul className="d-flex flew-wrap reaction-section">
                          <li>
                            <Button className="d-flex align-items-center" variant="light">
                              <img
                                className="reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--0 reactions-icon__consumption--small data-test-reactions-icon-type-LIKE data-test-reactions-icon-theme-light"
                                src="https://static.licdn.com/aero-v1/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                                alt="like"
                                data-test-reactions-icon-type="LIKE"
                                data-test-reactions-icon-theme="light"
                                data-test-reactions-icon-style="consumption"
                                data-test-reactions-icon-size="small"
                              ></img>
                              <img
                                className="reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--1 reactions-icon__consumption--small reactions-icon--stacked data-test-reactions-icon-type-PRAISE data-test-reactions-icon-theme-light"
                                src="https://static.licdn.com/aero-v1/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
                                alt="celebrate"
                                data-test-reactions-icon-type="PRAISE"
                                data-test-reactions-icon-theme="light"
                                data-test-reactions-icon-style="consumption"
                                data-test-reactions-icon-size="small"
                              ></img>
                              <img
                                className="reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--2 reactions-icon__consumption--small reactions-icon--stacked data-test-reactions-icon-type-EMPATHY data-test-reactions-icon-theme-light"
                                src="https://static.licdn.com/aero-v1/sc/h/cpho5fghnpme8epox8rdcds22"
                                alt="love"
                                data-test-reactions-icon-type="EMPATHY"
                                data-test-reactions-icon-theme="light"
                                data-test-reactions-icon-style="consumption"
                                data-test-reactions-icon-size="small"
                              ></img>
                              <span className="text-secondary">665</span>
                            </Button>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="d-flex flew-wrap reaction-section">
                          <li>
                            <Button variant="light" className="text-secondary ms-2 p-0">
                              Commenti
                            </Button>
                            <Button variant="light" className="text-secondary p-0 ms-2">
                              Diffusioni post
                            </Button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bord ">
                    <div className="mt-2">
                      <Button variant="light" className="fw-semibold text-dark-emphasis ms-2">
                        <HandThumbsUp />
                        <span>Consiglia</span>
                      </Button>
                      <Button variant="light" className="fw-semibold text-dark-emphasis ms-2">
                        <ChatText />
                        <span>Commenta</span>
                      </Button>
                      <Button variant="light" className="fw-semibold text-dark-emphasis ms-2">
                        <Shuffle />
                        <span>Diffondi il post</span>
                      </Button>
                      <Button variant="light" className="fw-semibold text-dark-emphasis ms-2">
                        <SendFill />
                        <span>Invia</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
      ) : (
        <p> Non ci sono post in questa sezione !!! </p>
      )}
    </>
  );
};
export default PostFrame;
