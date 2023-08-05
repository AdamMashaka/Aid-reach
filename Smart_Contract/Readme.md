# AidReach Smart Contracts

This section of this repository contains smart contracts for the AidReach Hackathon project. The project aims to create an ecosystem that allows users to **donate funds, manage governance voting, and participate in the AidFlow network** using the FVM technology.

## Contracts

The smart contracts in this project are organized as follows:

### AidFlow.sol

The `AidFlow.sol` contract implements the functionality for donating funds to the AidFlow ecosystem. It allows users to send Ether and receive governance tokens (ERC20Votes) in return, based on a specified minimum value and prize index.

[View AidFlow.sol](contracts/AidFlow.sol)

#### Functions

- `donate()`: Allows users to donate Ether to the AidFlow ecosystem and receive governance tokens based on the donation amount.

- `withdraw_stake(address addr)`: Allows the contract owner to withdraw a specified amount of Ether from the contract.

### GovernanceToken.sol

The `GovernanceToken.sol` contract is an ERC20Votes contract that represents the governance token for the AidFlow ecosystem. It includes voting and delegation functionality using the ERC20Votes extension.

[View GovernanceToken.sol](contracts/GovernanceToken.sol)

#### Functions

- `checkpointsLookup(Checkpoint[] storage ckpts, uint256 blockNumber)`: A private helper function to perform a binary search for the earliest checkpoint after a given block number.

- `unsafeAccess(Checkpoint[] storage ckpts, uint256 pos)`: A private helper function to access a specific checkpoint from an array of checkpoints.

- `_maxSupply()`: An internal function to set the maximum supply of the governance token.

- `moveVotingPower(address src, address dst, uint256 amount)`: A private function to move voting power between addresses.

- `writeCheckpoint(Checkpoint[] storage ckpts, function(uint256, uint256) view returns (uint256) op, uint256 delta)`: A private function to write a new checkpoint for a given address and voting power delta.

### AidGovernance.sol

The `AidGovernance.sol` contract serves as the governance system for the AidFlow ecosystem. It extends multiple governance-related contracts, including Governor, GovernorSettings, GovernorCountingSimple, GovernorVotes, GovernorVotesQuorumFraction, and GovernorTimelockControl.

[View AidGovernance.sol](contracts/Governance/AidGovernance.sol)

#### Functions

- `votingDelay()`: Returns the voting delay for proposals in the governance system.

- `votingPeriod()`: Returns the voting period for proposals in the governance system.

- `quorum(uint256 blockNumber)`: Calculates the quorum required for voting on a proposal.

- `state(uint256 proposalId)`: Returns the current state of a specific proposal in the governance system.

- `propose(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, string memory description)`: Allows users to propose new governance actions.

- `proposalThreshold()`: Returns the minimum number of governance tokens required to create a proposal.

- `_execute(uint256 proposalId, address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash)`: Executes a successful proposal.

### TimelockContract.sol

The `TimelockContract.sol` contract is a TimelockController contract that adds time-based delay functionality for executing governance actions proposed through AidGovernance.sol.

[View TimelockContract.sol](contracts/Governance/TimelockContract.sol)

## Usage of FVM Technology

The FVM technology is utilized in this project to interact with the Filecoin network and handle ERC20Votes functionality for governance tokens. The ERC20Votes extension is used in the `GovernanceToken.sol` contract to enable voting and delegation of votes.

## Deployment

To deploy the smart contracts, use the `deploy.js` script located in the `deploy` folder.

1.  Ensure you have Hardhat installed.
2.  Update the deployment configurations in the `hardhat.config.js` file.
3.  Run the deployment script using Hardhat.

For Local deployment:

```bash
npx hardhat run --network <network-name> scripts/deploy.js
```

For deployment on the calibration network:

```bash
npx hardhat run --network <calibration-network-name> scripts/deploy.js
```

Replace `<network-name>` with the desired network (e.g., `mainnet`, `rinkeby`, etc.), or `<calibration-network-name>` with the corresponding network name for the calibration network.

## Task: Get Address

To get the Filecoin f4 address and the corresponding Ethereum address for the deployer account, you can use the `get-address` task. The task is defined in the `get-address.js` file located in the `tasks` folder. To execute the task, run the following command:

```
npx hardhat get-address
```

This will display the Ethereum address and the corresponding f4 address (t4 address on testnets) for the deployer account.

## Helper Configuration

The `helper-hardhat.config.js` file contains network-specific configurations and helper variables used during contract deployment and testing.

### Network Configurations

The following network configurations are defined in the `networkConfig` object:

#### Hardhat Network (Chain ID: 31337)

- Name: "hardhat"
- Min Value: 1000000
- Prize Index: 1
- Support Amount: 10000000
- Min Delay: 1
- Voting Delay: 1
- Voting Period: 5
- Quorum Percentage: 4
- Description: "Help for earthquake"

#### Hyperspace Network (Chain ID: 3141)

- Name: "hyperspace"
- Min Value: 1000000
- Prize Index: 1
- Aid Token: ""
- Support Amount: 10000000
- Min Delay: 1
- Voting Delay: 1
- Voting Period: 5
- Quorum Percentage: 4
- Description: "Help for famine in Tz"

### Development Networks

The `DEVELOPMENT_NETWORKS` array includes the names of networks considered as development networks. For this project, the "hardhat" and "local-host" networks are considered development networks.

Feel free to clone and explore the repository to see the full implementation of the smart contracts and related tasks.
