// If actions is a function, it gets passed the store:
export default store => ({
    // Actions can just return a state update:
    setAccordion(accordion) {
        return store.setState({ accordion });
    },

    setOnChange(onChange) {
        return store.setState({ onChange });
    },
});
