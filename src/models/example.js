
export default {

  namespace: 'example',

  state: {
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
