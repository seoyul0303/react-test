import { combineReducers } from 'redux';
//=> 여러개로 나뉘어진 리듀서를 서브리듀서, 하나로 합쳐진 리듀서를 루트리듀서라고 함.
import counter from './counter';

//=> redux의 내장함수 combineReducers : 리듀서를 하나로 합치는 작업.
//=> 리듀서 함수는 꼭 export default를 넣어주어야함.
export default combineReducers({  
    counter,
});