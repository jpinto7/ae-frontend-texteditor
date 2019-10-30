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
  return state;
};

const actions = {

};

export const { Context, Provider } = createDataContext(reducer, actions, initialState, initialContext);
