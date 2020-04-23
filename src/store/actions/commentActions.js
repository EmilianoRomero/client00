import axios from "axios";
import {
  REQUEST_GET_COMMENTS,
  GET_COMMENTS,
  ERROR_GET_COMMENTS,
  REQUEST_POST_COMMENT,
  POST_COMMENT,
  ERROR_POST_COMMENT,
  REQUEST_DELETE_COMMENT,
  DELETE_COMMENT,
  ERROR_DELETE_COMMENT,
} from "./types";

export const requestGetComments = () => {
  return {
    type: REQUEST_GET_COMMENTS,
  };
};

export const successGetComments = (comments) => {
  return {
    type: GET_COMMENTS,
    payload: comments,
  };
};

export const errorGetComments = (error) => {
  return {
    type: ERROR_GET_COMMENTS,
    payload: error,
  };
};

export const getComments = (itinerary_id) => {
  return async (dispatch) => {
    dispatch(requestGetComments(itinerary_id));
    try {
      let response = await fetch(
        "http://localhost:5000/comments/" + itinerary_id
      );
      let json = await response.json();
      console.log(json);
      dispatch(successGetComments(json));
    } catch (error) {
      dispatch(errorGetComments(error));
    }
  };
};

export const requestPostComment = () => {
  return {
    type: REQUEST_POST_COMMENT,
  };
};

export const postCommentSuccess = (comment) => {
  return {
    type: POST_COMMENT,
    payload: comment,
  };
};

export const errorPostComment = (error) => {
  return {
    type: ERROR_POST_COMMENT,
    payload: error,
  };
};

export function postNewComment(comment) {
  return function (dispatch) {
    dispatch(requestPostComment()); //NO ESTÁ DECLARADO FUERA, ESTÁ TODO ACÁ
    axios
      .post("http://localhost:5000/comments/" + comment.itinerary_id, comment)
      .then((res) => {
        dispatch(postCommentSuccess(res.data)); //NO ESTÁ DECLARADO FUERA, ESTÁ TODO ACÁ
        console.log("NEW COMMENT POSTED SUCCESSFULLY");
        console.log(res.data);
      })
      .catch((error) => {
        dispatch(errorPostComment(error)); //NO ESTÁ DECLARADO FUERA, ESTÁ TODO ACÁ
      });
  };
}

export const requestDeleteComment = () => ({
  type: REQUEST_DELETE_COMMENT,
});

export const successDeleteComment = (comment) => ({
  type: DELETE_COMMENT,
  payload: comment,
});

export const errorDeleteComment = (error) => ({
  type: ERROR_DELETE_COMMENT,
  payload: error,
});

export function deleteComment(id) {
  return (dispatch) => {
    dispatch(requestDeleteComment()); //NO ESTÁ DECLARADO FUERA, ESTÁ TODO ACÁ
    axios
      .delete(
        "http://localhost:5000/comments/" + id
        //{headers: tokenConfig().headers} //REVISAR CÓMO LA AUTORIZACIÓN AFECTA A LA ACCIÓN
      )
      .then((res) => {
        console.log(res.data);
        dispatch(successDeleteComment(res.data)); //NO ESTÁ DECLARADO FUERA, ESTÁ TODO ACÁ
      })
      .catch((error) => {
        dispatch(errorDeleteComment(error)); //NO ESTÁ DECLARADO FUERA, ESTÁ TODO ACÁ
      });
  };
}
