// @flow
export type Margin = {
  top?: number,
  left?: number,
  bottom?: number,
  right?: number
}

const getMargin = (defaultMargins: Margin, margin: ?Margin) => {
  const mergedMargin = { ...defaultMargins, ...margin };
  return ({
    marginTop: mergedMargin.top,
    marginBottom: mergedMargin.bottom,
    marginLeft: mergedMargin.left,
    marginRight: mergedMargin.right,
  });
};

export default { getMargin };
