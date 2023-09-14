/* 
  我们封装以一个Dialog 组件
*/
import PropTypes from "prop-types";
export const Dialog = (props) => {
  let { title, content, children } = props;
  children = React.Children.toArray(children);
  let titleSlot = [],
    contentSlot = [],
    buttonSlot = [];
  children.forEach((child) => {});
  return (
    <div className="dialog-box">
      <div className="header">
        <h2 className="title">{title}</h2>
        <span>X</span>
      </div>
      <div className="main-box">{content}</div>
      <div className="footer">{children}</div>
    </div>
  );
};

Dialog.defaultProps = {
  title: "温馨提示",
};

Dialog.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
};
