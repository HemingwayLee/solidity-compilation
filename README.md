# solidity-compilation

## Install solidity 
### Install solidity compiler in Mac using brew
```
brew update
brew upgrade
brew tap ethereum/ethereum
brew install solidity
```

* Get into `solidity` folder and compile `hello.sol` file using `solc` command
```
solc --bin hello.sol > hello.bin
solc --abi hello.sol > hello.abi
```

### Install solidity compiler with docker
```
docker pull ethereum/solc:stable
```

* Get into `solidity` folder and compile using `docker run`
```
docker run -v ${PWD}:/sources ethereum/solc:stable -o /sources/output --abi --bin /sources/hello.sol
```

### Install solidity compiler with `solcjs`
```
npm install .
node index.js
```


## Why ETH using solidity
* Fit into EVM
* Small
* Security

