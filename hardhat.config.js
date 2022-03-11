/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("dotenv/config");

const { HARDHAT_PORT } = process.env;

module.exports = {
  solidity: "0.7.3",
  networks: {
    localhost: { url: `http://127.0.0.1:${HARDHAT_PORT}` },
    hardhat: {
      accounts: [{"privateKey":"0x132675225b92b55832b9f3e2d6615a3fefed84f03a201480929c56e781641615","balance":"1000000000000000000000"},{"privateKey":"0x547aeb4614aed40b21165ed1ff8228bd6b579acccf28e41014b2c3a2207e4196","balance":"1000000000000000000000"},{"privateKey":"0x339e24f4fa21c241339b37c199d2e11d49f2217c2c4d23ba4db8347b3548582b","balance":"1000000000000000000000"},{"privateKey":"0x8e266e94c737bb230c65994f4e498274114933e3d13e202f6050a35b67d344b4","balance":"1000000000000000000000"},{"privateKey":"0x9ad4ffe3744ddb8351f2bde8a889ff658416fae59eea6105e35ebb31fbe6a6bc","balance":"1000000000000000000000"},{"privateKey":"0xbf86577368df05d5b4d5245fb945e114c417917212c3b236ebff05aecbbe4511","balance":"1000000000000000000000"},{"privateKey":"0xa1a7f4e8497af789488845417c528f9a808814ae88bbd4e788c37b4c0cc5aa34","balance":"1000000000000000000000"},{"privateKey":"0x51ac4c607fb39bf19dcf18ac34ca2e98276e9aad9600e114b82b9d22297725cb","balance":"1000000000000000000000"},{"privateKey":"0x860db0d7cc0c80c569b36dcff632b1aa83201d72e81436e567ddc428af9fd817","balance":"1000000000000000000000"},{"privateKey":"0xf412b61fac15c359a67e93218c6c7b45900eaf03a5e97153349bb1eedc23cd1b","balance":"1000000000000000000000"}]
    },
  },
  paths: {
    sources: './contracts',
    tests: './__tests__/contracts',
    cache: './cache',
    artifacts: './artifacts',
  },
};