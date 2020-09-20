// eslint-disable-next-line import/prefer-default-export
export const paper = {
  opacity: 0.99,
  background: "red",
  position: "relative",
  zIndex: "3",
  borderRadius: "20px",
  boxShadow: `0 16px 24px 2px black`,
  "@media (max-width: 576px)": {
    marginTop: "-30px",
  },
  "@media (max-width: 830px)": {
    marginLeft: "10px",
    marginRight: "10px",
  },
}
