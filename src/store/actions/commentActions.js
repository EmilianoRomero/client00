import axios from "axios";
import {
  REQUEST_GET_COMMENTS,
  GET_COMMENTS_SUCCESS,
  ERROR_GET_COMMENTS,
  REQUEST_POST_COMMENT,
  POST_COMMENT_SUCCESS,
  ERROR_POST_COMMENT,
  REQUEST_EDIT_COMMENT,
  EDIT_COMMENT_SUCCESS,
  ERROR_EDIT_COMMENT,
  REQUEST_DELETE_COMMENT,
  DELETE_COMMENT_SUCCESS,
  ERROR_DELETE_COMMENT,
} from "./types";

export const requestGetComments = () => {
  return {
    type: REQUEST_GET_COMMENTS,
  };
};
export const successGetComments = (comments) => {
  return {
    type: GET_COMMENTS_SUCCESS,
    payload: comments,
  };
};
export const errorGetComments = (error) => {
  return {
    type: ERROR_GET_COMMENTS,
    payload: error,
  };
};
export const getComments = () => {
  return async (dispatch) => {
    dispatch(requestGetComments());
    await axios
      //.get("http://localhost:5000/comments/itinerary/" + itinerary_id) NO ES NECESARIO
      .get("http://localhost:5000/comments/")
      .then((res) => {
        dispatch(successGetComments(res.data));
        console.log(res);
      })
      .catch((error) => {
        dispatch(errorGetComments(error));
      });
  };
};

export const requestPostComment = () => {
  return {
    type: REQUEST_POST_COMMENT,
  };
};
export const postCommentSuccess = (comment) => {
  return {
    type: POST_COMMENT_SUCCESS,
    comment,
  };
};
export const errorPostComment = (error) => {
  return {
    type: ERROR_POST_COMMENT,
    payload: error,
  };
};
export function postNewComment(comment, itinerary_ref) {
  return async (dispatch) => {
    dispatch(requestPostComment());
    await axios
      //.post("http://localhost:5000/comments/itinerary/" + comment.itinerary_ref, comment)
      .post("http://localhost:5000/comments/", comment, itinerary_ref)
      .then((res) => {
        dispatch(postCommentSuccess(res.data));
        console.log(res.data);
        console.log("NEW COMMENT POSTED SUCCESSFULLY");
      })
      .catch((error) => {
        dispatch(errorPostComment(error));
      });
  };
}

export const requestDeleteComment = () => ({
  type: REQUEST_DELETE_COMMENT,
});
export const successDeleteComment = (comment) => ({
  type: DELETE_COMMENT_SUCCESS,
  comment,
});
export const errorDeleteComment = (error) => ({
  type: ERROR_DELETE_COMMENT,
  payload: error,
});
export function deleteComment(id) {
  return async (dispatch) => {
    dispatch(requestDeleteComment());
    await axios
      .delete("http://localhost:5000/comments/" + id)
      //{headers: tokenConfig().headers}) //REVISAR CÓMO LA AUTORIZACIÓN AFECTA A LA ACCIÓN
      .then((res) => {
        console.log(res.data);
        dispatch(successDeleteComment(res.data));
      })
      .catch((error) => {
        dispatch(errorDeleteComment(error));
      });
  };
}

export const requestEditComment = () => ({
  type: REQUEST_EDIT_COMMENT,
});
export const successEditComment = (comment) => ({
  type: EDIT_COMMENT_SUCCESS,
  comment,
});
export const errorEditComment = (error) => ({
  type: ERROR_EDIT_COMMENT,
  payload: error,
});
export function editComment(comment) {
  return async (dispatch) => {
    dispatch(requestEditComment());
    await axios
      .patch("http://localhost:5000/comments/", comment._id, comment)
      //{headers: tokenConfig().headers}) //REVISAR CÓMO LA AUTORIZACIÓN AFECTA A LA ACCIÓN
      .then((res) => {
        console.log(res.data);
        dispatch(successEditComment(res.data));
      })
      .catch((error) => {
        dispatch(errorEditComment(error));
      });
  };
}

//NO AXIOS
/*
export const getComments = (itinerary_id) => {
  //está bien pasar la ciudad como parámetro acá
  return async (dispatch) => {
    dispatch(requestGetComments(itinerary_id));
    try {
      let response = await fetch("http://localhost:5000/comments/itinerary/" + itinerary_id);
      let json = await response.json();
      console.log(json);
      dispatch(successGetComments(json));
    } catch (error) {
      dispatch(errorGetComments(error));
    }
  };
};
*/
