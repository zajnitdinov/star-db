const compose = (...funcs) => (comp) => {
    return funcs.reduceRight((wr,f) => f(wr), comp);
};

export default compose;