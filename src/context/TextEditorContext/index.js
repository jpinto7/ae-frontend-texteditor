import createDataContext from '../createDataContext';

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
    case 'UPDATE_EDITORTEXT':
      console.log(payload);
      return {
        ...state,
        editorText: payload
      };
    default:
      return state;
  }
};

const actions = {
  updateEditorText: dispatch => text => {
    dispatch({ type: 'UPDATE_EDITORTEXT', payload: text });
  }
};

export const { Context, Provider } = createDataContext(reducer, actions, initialState, initialContext);
