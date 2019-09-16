// 액션 타입 정의
// Ducks 패턴. 액션이름 지을때 문자열 앞에 모듈 이름을 넣는다.
const CHANGE_COLOR = 'counter/CHANGE_COLOR';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// **** 액션 생섬함수 정의(내가 실행할 액션)
export const changeColor = color => ({ type: CHANGE_COLOR, color });
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
//=> 액션함수를 정의할 때 export 를 붙여줘야함.

// **** 초기상태 정의
const initialState = {
    color: 'red',
    number: 0,
  };

// **** 리듀서 작성
export default function counter(state = initialState, action) {
    switch (action.type) {
      case CHANGE_COLOR:
        return {
          ...state,
          color: action.color,
        };
      case INCREMENT:
        return {
          ...state,
          number: state.number + 1,
        };
      case DECREMENT:
        return {
          ...state,
          number: state.number - 1,
        };
      default:
        return state;
    }
  }