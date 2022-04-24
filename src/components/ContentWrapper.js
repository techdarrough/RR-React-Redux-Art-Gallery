import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { useEffect } from "react";
import {
  clearData,
  fetchData,
  incrementId,
  decrementId,
  inputId,
} from "../features/dataSlice";
import Def from "./Def";

function ContentWrapper(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const renderImg = () => {
    if (data.apiData) {
      return (
        <img
          style={{ width: "100vw", height: "100vw" }}
          src={data.apiData.primaryImage}
          alt={data.apiData.title}
        />
      );
    } else {
      return <p>image here</p>;
    }
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [props.objectId, dispatch]);

  return (
    <Def>
    <div className="ContentWrapper" >
      <div>
        <button onClick={() => dispatch(fetchData())}>Thunk!</button>
        <button onClick={() => dispatch(clearData())}>Clear</button>
        <button onClick={() => dispatch(incrementId())}>Next</button>
        <button onClick={() => dispatch(decrementId())}>Back</button>
      </div>
      <input
        value={data.objectId}
        onChange={(e) => {
          dispatch(inputId(Number(e.target.value)));
        }}
      />
      <div>
        {data.objectId}
        {renderImg()}
      </div>
    </div>
    </Def>
  );
}

const mapStateToProps = (state, ownProps) => ({
  objectId: state.data.objectId,
});
export default connect(mapStateToProps)(ContentWrapper);
