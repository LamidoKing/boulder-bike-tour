// eslint-disable-next-line import/prefer-default-export
const paper = {
  opacity: 0.99,
  background: "#f44336",
  position: "relative",
  zIndex: "3",
  borderRadius: "20px",
  "@media (max-width: 576px)": {
    marginTop: "30px",
  },
  "@media (max-width: 830px)": {
    marginLeft: "10px",
    marginRight: "10px",
  },
}

const containerFluid = {
  paddingTop: "15px",
  paddingRight: "5px",
  paddingLeft: "5px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "auto",
}
const container = {
  ...containerFluid,
  "@media (min-width: 576px)": {
    maxWidth: "540px",
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px",
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px",
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px",
  },
}

export { paper, container }
