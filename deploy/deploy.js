// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
const hre = require("hardhat");
const { networkConfig } = require("../helper-hardhat.config");

const DEVELOPMENT_NETWORKS = ["hardhat", "local-host"]
const minValue = 1000000
const voting_delay = 1
const voting_period = 5

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deployer } = await getNamedAccounts()
  const { deploy, log } = deployments
  const chainId = network.config.chainId
  log("-----------------------------")
  if (DEVELOPMENT_NETWORKS.includes(network.name)) {
    args1 = ["AidFlow", "AF"]
    af_token = await deploy("GovernanceToken", { from: deployer, log: true, args: args1 })
    // await fucha.deployed()
    log("AidFlow deployed to by", deployer)
    log("-------------------------------")

    log("Deploying timeLock")
    args2 = [networkConfig[chainId]["minValue"], [], [], deployer]
    timelock = await deploy("TimelockContract", { from: deployer, log: true, args: args2 })
    // await fucha.deployed()
    log("Timelock deployed to by", deployer)
    log("-------------------------------")

    log("Deploying Governance contract")
    args3 = [af_token.address, timelock.address, networkConfig[chainId]["voting_delay"], networkConfig[chainId]["voting_period"]]
    governor = await deploy("AidGovernance", { from: deployer, log: true, args: args3 })
    // await fucha.deployed()
    log("Governance deployed to by", deployer)
    log("-------------------------------")

    const timelockContract = await ethers.getContractFactory("TimelockContract", deployer)
    const Timelock = timelockContract.attach(timelock.address)

    // # assigning roles, by default the timelock admin is the contracts deployer
    log("Assigning executor and proposer roles")
    const proposers = Timelock.PROPOSER_ROLE()
    const executors = Timelock.EXECUTOR_ROLE()
    log("Roles assigned")
    log("-------------------------------")

    // # granting proposers role to the governor contract
    log("granting proposer role")
    await Timelock.grantRole(proposers, governor.address)
    log("Role granted")
    log("-------------------------------")

    // # granting excecutors role to every addresss
    log("granting executor role")
    await Timelock.grantRole(executors, ethers.constants.AddressZero)
    log("Role granted")
    log("-------------------------------")

    // # delegating the vote.
    log("DElegating")
    const afContract = await ethers.getContractFactory("GovernanceToken", deployer)
    const af = afContract.attach(af_token.address)
    await af.delegate(deployer)
    log("-------------------------------")


    //   const fuchaContract = await ethers.getContractFactory("FuchaNft", deployer)
    //   const fucha = fuchaContract.attach(fucha_.address)
    //   const fucha_args = [1]
    //   const create_tx = await fucha.createNft(fucha_args, { value: payValue.toString() })
    //   const Id = await fucha.tokenCounter() - 1
    //   const breed = await fucha.tokenIdToBreed(Id)
    //   log("Created fuchaNft of breed:", breed)
  }
  else {
    log("Deploying fucha on Calibration network...")
    const private_key = network.config.accounts[0]
    const WALLET = new ethers.Wallet(private_key, ethers.provider)

    // log("Deploying Governance token on Calibration network...")
    // const private_key = network.config.accounts[0]
    // const WALLET = new ethers.Wallet(private_key, ethers.provider)
    // const af_ = await ethers.getContractFactory("GovernanceToken", WALLET)
    // log("Wallet Ethereum Address:", WALLET.address)
    // const af_token = await af_.deploy("AidFlow", "AF")
    // await af_token.deployed()
    // log("Contract deployed... to", af_token.address)
    // log("AidFlow deployed to by", deployer)
    // log("-------------------------------")

    // log("Deploying timeLock")
    // const timelock_ = await ethers.getContractFactory("TimelockContract", WALLET)
    // log("Wallet Ethereum Address:", WALLET.address)
    // const timelock = await timelock_.deploy(minValue, [], [], deployer)
    // await timelock.deployed()
    // log("Contract deployed... to", timelock.address)
    // // await fucha.deployed()
    // log("Timelock deployed to by", deployer)
    // log("-------------------------------")

    log("Deploying Governance contract")
    const aidG_ = await ethers.getContractFactory("AidGovernance", WALLET)
    log("Wallet Ethereum Address:", WALLET.address)
    const aidG = await aidG_.deploy("0x53DB829E3b4c9674bd251Cc280E75c2c1FF7dE70", "0xFa4068AcF42575fae374C2904B6604fc57DBaEAf", voting_delay, voting_period)
    await aidG.deployed()
    log("Contract deployed... to", aidG.address)
    log("Governance deployed to by", deployer)
    log("-------------------------------")

    // const timelockContract = await ethers.getContractFactory("TimelockContract", deployer)
    // const Timelock = timelockContract.attach(timelock.address)

    // // # assigning roles, by default the timelock admin is the contracts deployer
    // log("Assigning executor and proposer roles")
    // const proposers = await Timelock.PROPOSER_ROLE()
    // const executors = await Timelock.EXECUTOR_ROLE()
    // log("Roles assigned")
    // log("-------------------------------")

    // // # granting proposers role to the governor contract
    // log("granting proposer role")
    // await Timelock.grantRole(proposers, governor)
    // log("Role granted")
    // log("-------------------------------")

    // // # granting excecutors role to every addresss
    // log("granting executor role")
    // await Timelock.grantRole(executors, constants.ADDRESS_ZERO)
    // log("Role granted")
    // log("-------------------------------")

    // // # delegating the vote.
    // log("DElegating")
    // const afContract = await ethers.getContractFactory("GovernanceToken", deployer)
    // const af = afContract.attach(af_token.address)
    // await af.delegate(deployer)
    // log("-------------------------------")




    // args = [networkConfig[chainId]["mintFee"]]
    // const fucha = await deploy("FuchaNft", { from: WALLET, args: args, log: true })
    // log("fucha deployed to>>>", fucha.address)
    // log("minting fuchabin nft")
    // const create_tx = await fucha.createNft([2], { value: ethers.utils.parseUnits('101'), gasLimit: 400000 })
    // const Id = await fucha.tokenCounter() - 1
    // const breed = await fucha.tokenIdToBreed(Id)
    // log("Created fuchaNft of breed:", breed)
    // fucha = fucha_.attach(Fucha.address)

  }

}

module.exports.tags = ["all", "fucha"]

// # assigning roles, by default the timelock admin is the contracts deployer
//     proposers = timelock.PROPOSER_ROLE()
//     executors = timelock.EXECUTOR_ROLE()
//     # granting proposers role to the governor contract
//     # timelock._setupRole(
//     #     proposers, governor, {"from": account}
//     # ) its an internal fx from accesscontrol.sol
//     timelock.grantRole(proposers, governor, {"from": account})
//     print("proposer role set")
//     # granting excecutors role to every addresss
//     timelock.grantRole(executors, constants.ADDRESS_ZERO, {"from": account})
//     # timelock.grantRole(executors, governor, {"from": account})
//     # timelock.grantRole(executors, account, {"from": account})
//     print("executor role set")
//     # delegating the vote.
//     gtoken.delegate(account, {"from": account})
//     return gtoken, timelock, governor, account


// def deploy_box(account, timelock):
//     account = account
//     box = Box.deploy({"from": account})
//     box.transferOwnership(timelock, {"from": account})
//     return box