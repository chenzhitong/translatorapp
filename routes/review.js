var express = require('express');
var router = express.Router();
import Neon, {api} from '@cityofzion/neon-js';
/* GET home page. */
router.get('/', (req, res, next) => {
  res.redirect('/');
}).post('/', (req, res, next) => {
  // Send Auditor's Fee
  const intent = api.makeIntent({NEO:15, GAS:0}, 'AQSgxHwrKhSfSf1bgqeKR5B9Y4Jykm3DXK');
  var config = {
    net: 'TestNet', // The network to perform the action, MainNet or TestNet.
    address: 'AeBpauNouqK7DS69neKm3hgxLQv6MowjNf',  // This is the address which the assets come from.
    privateKey: 'Ky5tXo6TH2Pkqc9by4JAexeS64Rmma9agoBaJGLCQ9vE1zAUTTR5',
    intents: intent
  }
  Neon.sendAsset(config).then( config => {
    console.log("Asset Sent To Auditor!\n", config);
    // console.log(config.response);
  }).catch( (err) => {
    console.log("Theres was an error where sending to Auditor.\n", err);
    // console.log(err);
  });
  res.render('review');
});

module.exports = router;
