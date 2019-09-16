import React, { Component } from 'react';
import { connect } from 'react-redux';
//=> connect : 파라미터를 전달해주는 mapStateToProps 스토어 안에 들어있는 값을 props 값을 전달
import Palette from '../components/Palette';
import { changeColor } from '../store/modules/counter';

class PaletteContainer extends Component {
  handleSelect = color => {
    const { changeColor } = this.props;
    console.log('what');
    changeColor(color);
  };

  render() {
    const { color } = this.props;
    return <Palette onSelect={this.handleSelect} selected={color} />;
  }
}

// mapStateToProps : props 로 넣어줄 스토어 상태값
// => 액션생성함수들을 props로 전달
const mapStateToProps = state => ({
  color: state.counter.color
});

// mapDispatchToProps : props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
  changeColor: color => dispatch(changeColor(color)),
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
// => 반환되는 값을 PaletteContainer에 파라미터로 넣어서 호출.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaletteContainer);