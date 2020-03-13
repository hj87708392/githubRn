import Types from '../../action/types';

const defaultState = {
    theme: 'blue',
}
export default function onAction(state = defaultState, action) {
    if (action.type==Types.THEME_CHANGE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.theme = action.theme
        return newState;
      }
      return state;
}