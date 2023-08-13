// import { network } from "hardhat"

const { network } = require("hardhat")

async function move_blocks(amount) {
    const { log } = deployments
    log("Moving blocks")
    for (let i = 0; i < amount; i++) {
        await network.provider.request({
            method: "evm_mine",
            params: []
        })
    }
    log("Moved", amount, "blocks")
}

module.exports = {
    move_blocks
}