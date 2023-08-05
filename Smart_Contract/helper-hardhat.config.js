const networkConfig = {
    31337: {
        name: "hardhat",
        minValue: 1000000,
        prizendex: 1,
        supportAmount: 10000000,
        min_delay: 1,
        voting_delay: 1,
        voting_period: 5,
        quorum_percentage: 4,
        description: "Help for earthquake"

    },
    3141: {
        name: "hyperspace",
        minValue: 1000000,
        prizendex: 1,
        aidToken: "",
        supportAmount: 10000000,
        min_delay: 1,
        voting_delay: 1,
        voting_period: 5,
        quorum_percentage: 4,
        description: "Help for famine in Tz"
    }
}

const DEVELOPMENT_NETWORKS = ["hardhat", "local-host"]


module.exports = {
    networkConfig,
    DEVELOPMENT_NETWORKS,
}