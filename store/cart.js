export const state = () => ({
    user : {
        id : null
    }
});

export const mutations = {
    add(state, product) {
        state.user.id = product.id;
        console.log(product.id);
    }
};
