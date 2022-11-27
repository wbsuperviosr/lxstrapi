module.exports = ({ env }) => ({
    "netlify-deployments": {
        enabled: true,
        config: {
            accessToken: "yNxPMfIkl1CYiZlkig2toVq2pOYxuSo7KwK19oZXLmY",
            sites: [
                {
                    name: 'liuxin.express',
                    id: "00215cea-f255-410d-839b-c110de06d89e",
                    buildHook: "https://api.netlify.com/build_hooks/6380edcb8cebdf44a39a6f85",
                    branch: 'master' // optional
                }
            ]
        },
    },
});