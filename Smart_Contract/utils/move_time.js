const { network } = require("hardhat")

async function move_time(amount) {
    const { log } = deployments
    log("Moving time...")
    await network.provider.send("evm_increaseTime", [amount])
    log("Moved", amount, "seconds")
}

module.exports = {
    move_time
}