const path = require('path');
const fs = require('fs');
const solc = require('solc');

function compile() {
  const filename = "hello.sol";
  const solPath = path.resolve(__dirname, "solidity", filename);
  const content = fs.readFileSync(solPath, 'utf8');

  var input = {
    language: 'Solidity',
    sources: {
      "hello.sol": {
        content: content
      }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
  };

  var output = JSON.parse(solc.compile(JSON.stringify(input)));
  // console.log(output);

  console.log(output.contracts[filename]["SimpleStorage"].abi);
  console.log(output.contracts[filename]["SimpleStorage"].evm.bytecode.object);

  
}

compile();

