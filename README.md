)# Project Name: AidFlow

## Project Description

AidFlow is a decentralized humanitarian aid platform built on the Filecoin Virtual Machine (FVM) that revolutionizes the distribution of aid during emergencies and crises. It ensures transparency, efficiency, and accountability in aid delivery, making a positive impact on vulnerable communities.

**Team Members:**
- Adam .M. Katani (Github: @AdamMAshaka,
Email: mashakaadam123@gmail.com))

-Crasiana Alfred
Email: crasiana23@gmail.com
## Technologies Used

- Filecoin Virtual Machine (FVM): Leveraging FVM for smart contracts, fund allocation, and transparent aid distribution.
- Solidity: Programming smart contracts to facilitate automatic fund release.
- Web3.js: Interacting with the FVM and smart contracts from the frontend.
- React.js: Building a user-friendly frontend interface for donors and NGOs.

## Project Structure

The AidFlow project's key functionalities are implemented through a well-structured architecture, ensuring efficiency and effectiveness across its components. The project's core features are distributed as follows:

- `Smart_Contract/contracts/AidFlow.sol`: This smart contract serves as the foundation of AidFlow, facilitating donations and rewarding contributors with AidTokens. It ensures transparency and security in fund transactions.

- `Smart_Contract/contracts/GovernanceToken.sol`: An integral part of the ecosystem, this contract manages governance tokens, empowering participants to exercise their voting rights and delegate their influence.

- `Smart_Contract/contracts/Governance/AidGovernance.sol`: This contract orchestrates the democratic decision-making process, enabling users to propose and vote on critical AidReach initiatives.

- `Smart_Contract/contracts/Governance/TimelockContract.sol`: Ensuring safety and measured decision-making, this contract enforces time delays on sensitive functions, enhancing the security of the governance process.

- `Smart_Contract/tasks/get-address.js`: A task-based utility script that seamlessly generates Filecoin f4 addresses and corresponding Ethereum addresses. This supports smooth cross-ecosystem interactions.

- `Smart_Contract/deploy/deploy.js`: The primary deployment script responsible for deploying AidFlow's core contracts, including AidFlow, GovernanceToken, AidGovernance, and TimelockContract.

In addition to the smart contract architecture, the frontend components play a pivotal role in ensuring user-friendly interactions:

- `Frontend/components/Donate.js`: This frontend component empowers donors to contribute funds effortlessly, supporting the seamless flow of donations.

- `Frontend/components/NGOProposals.js`: A frontend component designed for NGOs, enabling them to submit aid proposals and actively engage in the decision-making process.

The project's well-organized structure ensures the efficient integration of both smart contract and frontend elements, creating a cohesive ecosystem that advances philanthropy and governance on the blockchain.

## How It Works

1. Donors contribute Filecoin tokens to the smart contract fund pool.
2. Verified NGOs submit aid proposals, outlining their initiatives and resource allocation.
3. Smart contract automatically releases funds upon verification of predefined conditions.
4. NGOs initiate aid projects and track progress in real-time.
5. Transparency and accountability ensured through blockchain records.

## Showcase Video

[Watch the Showcase Video](https://example.com/showcase)

## Submission Details

**Repository:** [GitHub Repository](https://github.com/Rasta669/AidFlow.git)
**Demo:** [Live Demo](https://aidreach.netlify.app)

## Judging Criteria

- **Novelty/Creativity:** Innovative approach to humanitarian aid distribution.
- **Potential Impact:** Addressing critical gaps in aid delivery with the potential for widespread impact.
- **Technical Accomplishment:** Clean, complete codebase with efficient implementation.
- **FVM Implementation:** Effective integration of FVM for smart contracts and fund allocation.
- **Design:** User-friendly, intuitive UX/UI design enhancing user experience.

[Join Us in Making a Difference](https://aidreach.netlify.app)
