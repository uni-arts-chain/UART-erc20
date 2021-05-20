var UartToken = artifacts.require("./UartToken.sol");

module.exports = function(deployer) {
  deployer.deploy(UartToken);
};