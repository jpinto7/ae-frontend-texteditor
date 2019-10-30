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
    case constants.SET_SELECTED_TEXT:
      return {
        ...state,
        selectedText: payload
      };
    case constants.SET_SYNONYMS:
      return {
        ...state,
        synonyms: [...payload]
      };
    case constants.SET_SELECTED_SYNONYM:
      return {
        ...state,
        selectedSynonym: payload
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
  },
  setSelectedText: dispatch => text => {
    dispatch({
      type: constants.SET_SELECTED_TEXT,
      payload: text
    });
  },
  setSelectedSynonym: dispatch => synonym => {
    dispatch({
      type: constants.SET_SELECTED_SYNONYM,
      payload: synonym
    });
  },
  setSynonyms: dispatch => synonyms => {
    dispatch({
      type: constants.SET_SYNONYMS,
      payload: synonyms
    });
  },      
};

export const { Context, Provider } = createDataContext(reducer, actions, initialState, initialContext);
