import { styled } from "styletron-react";

export const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  height: "80%",
});

export const ContentContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginBottom: 0,
});

export const Field = styled("div", {
  display: "grid",
  gridTemplateColumns: "0.7fr 2.3fr",
  margin: "1rem 5rem",
});

export const Label = styled("label", {
  fontSize: "1.5rem",
  marginLeft: "1rem",
});

export const Input = styled("input", {
  border: "0",
  borderBottom: "2px solid black",
  backgroundColor: "transparent",
  height: "30px",
  fontSize: "1.5rem",
  ":focus": {
    borderBottom: "3px solid #FFAA2A",
    outline: "none",
  },
});

export const BtnContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  flexDirection: "column",
});

export const SubmitButton = styled("button", {
  backgroundColor: "#FE8C55",
  border: 0,
  borderRadius: "20px",
  width: "500px",
  height: "40px",
  fontSize: "1rem",
  fontWeight: "bold",
  color: "#fff",
  marginRight: "1rem",
  cursor: "pointer",
});

export const TextBtnContainer = styled("div", {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "50%",
  color: "#fff",
  marginTop: "1rem",
});

export const TextButton = styled("button", {
  backgroundColor: "transparent",
  border: 0,
  color: "#fff",
  cursor: "pointer",
});

export const ErrorMsg = styled("div", {
  color: "red",
  gridColumnStart: 2,
  marginTop: "0.5rem",
});

export const SnsTitle = styled("div", {
  display: "flex",
  alignItems: "center",
  fontSize: "1rem",
  ":before": {
    content: "''",
    flexGrow: 1,
    backgroundColor: "#000",
    height: "1.5px",
    fontSize: "0px",
    lineHeight: "0px",
    margin: "0 2rem 0 10rem",
  },
  ":after": {
    content: "''",
    flexGrow: 1,
    backgroundColor: "#000",
    height: "1.5px",
    fontSize: "0px",
    lineHeight: "0px",
    margin: "0 10rem 0 2rem",
  },
});

export const KakaoBtn = styled("button", {
  border: 0,
  backgroundColor: "transparent",
  cursor: "pointer",
});
