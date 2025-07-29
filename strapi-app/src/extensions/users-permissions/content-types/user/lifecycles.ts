const lifecycles = {
    async beforeUpdate(event: any) {
        const { params } = event;

        if (!params.data.password) {
            delete params.data.password;
        }
    },
};

export default lifecycles;
