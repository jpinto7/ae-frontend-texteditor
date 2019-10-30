import createDataContext from '../createDataContext';
import * as constants from '../../constants';

const initialContext = {
  data: [],
  addBlogPost: () => {}
};

const initialState = {
  synonyms: [],
  selectedSynonym: '',
  selectedText: '',
  controlPanelMode: {
      bold: false,
      italic: false,
      underline: false
  },
  editorText: ''
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case constants.UPDATE_EDITOR_TEXT:
      return {
        ...state,
        editorText: payload
      };
    case constants.SET_COMMAND_MODE:
      if (typeof payload === 'string') {
        return {
          ...state,
          controlPanelMode: {
            ...state.controlPanelMode,
            [payload]: !state.controlPanelMode[payload]
          }
        };
      }
      return {
        ...state,
        controlPanelMode: payload
      };
    default:
      return state;
  }
};

const actions = {
  updateEditorText: dispatch => text => {
    dispatch({
      type: constants.UPDATE_EDITOR_TEXT,
      payload: text
    });
  },
  setCommandMode: dispatch => cmd => {
    dispatch({
      type: constants.SET_COMMAND_MODE,
      payload: cmd
    });   
  }
};

export const { Context, Provider } = createDataContext(reducer, actions, initialState, initialContext);
