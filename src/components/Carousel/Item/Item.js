import styled from "styled-components";
import "./Item.css";

function Item(props) {
  return (
    <div className="itemContainer">
      <i class={props.fa}></i>
      <div>
        <div className="itemText1"> {props.text} </div>
        <br />
        <div className="itemText2"> {props.desc} </div>
      </div>
    </div>
  );
}
export default Item;
