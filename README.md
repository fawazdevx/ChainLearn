# ChainLearn

![ChainLearn Logo](assets/ch.png)

ChainLearn is a decentralized learning platform designed to empower developers and learners with seamless access to Web3 knowledge. Our platform bridges the gap between Web2 and Web3, offering interactive courses, quizzes, and rewards through blockchain technology. By integrating NFTs and cryptocurrency-based rewards, ChainLearn incentivizes learners to achieve milestones and build expertise in blockchain, cybersecurity, software, and game development. Our decentralized system ensures transparency, security, and ownership for all participants, making it the go-to platform for Web3 education.

## Features

- **Student Registration:** A streamlined registration process for students, with plans for future upgrades to include teacher registration.
- **Engaging Courses:** Access to a variety of engaging text courses designed to provide foundational and advanced knowledge in Web3 technologies.
- **Interactive Quizzes:** Quizzes available after every course to reinforce learning and assess understanding.
- **Achievements & Badges:** Earn achievements and badges as you progress through courses, creating a rewarding learning experience.
- **Cryptocurrency Rewards:** Incentives for learners to achieve milestones and enhance their skills. *(Coming Soon!)*

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version x.x.x or later)
- [Motoko SDK](https://sdk.dfinity.org/docs/developers-guide/install-upgrade.html)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/fawazdevx/ChainLearn.git

## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
# Starts the replica, running in the background
dfx start --background --clean

# Deploys your canisters to the replica and generates your candid interface
dfx deploy ChainLearn_backend
```

Once the job completes, your application will be available at `http://localhost:4943?canisterId={asset_canister_id}`.

If you have made changes to your backend canister, you can generate a new candid interface with

```bash
npm run generate
```

at any time. This is recommended before starting the frontend development server, and will be run automatically any time you run `dfx deploy`.

If you are making frontend changes, you can start a development server with

```bash
npm start
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 4943.

### Note on frontend environment variables

If you are hosting frontend code somewhere without using DFX, you may need to make one of the following adjustments to ensure your project does not fetch the root key in production:

- set`DFX_NETWORK` to `ic` if you are using Webpack
- use your own preferred method to replace `process.env.DFX_NETWORK` in the autogenerated declarations
  - Setting `canisters -> {asset_canister_id} -> declarations -> env_override to a string` in `dfx.json` will replace `process.env.DFX_NETWORK` with the string in the autogenerated declarations
- Write your own `createActor` constructor

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.


## Acknowledgments

- Special thanks to the ICP community for their support and resources.
- Inspiration from various Web3 educational initiatives.

## Contact

For inquiries, please reach out to:

**Fawaz Oyebode Akanni**  
Email: [oyebodefawaz2020@gmail.com](mailto:oyebodefawaz2020@gmail.com)  
Twitter: [@fawaz_devx](https://twitter.com/0xFawazdev)

Let's bridge the gap between Web2 and Web3 together!



