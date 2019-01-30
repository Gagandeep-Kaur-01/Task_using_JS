let fildata = function(x)
  {
    if(isNaN(x)) {
      throw new Error('Not a number');
    }
    // adding fs module
    let fs = require('fs');
    // adding readline module
    let readline = require('readline');
    // path for the csv file .
    let path = 'data.csv';
    // var read_stream = fs.createReadStream('');
    // interface to read each line until eof
    let rl = readline.createInterface({
      input: fs.createReadStream(path)
    });

 // variables declaration
    let id;
    let code;
    let division;
    let site1;
    let site2;
    let site3;
    let site4;
    let tiv1;
    let tiv2;
    let site01;
    let site02;
    let site03;
    let site04;
    let point1;
    let point2;
    let value;
    let type;
    let point3;
    let count = 0;
    let result = [];
    let line2 = [];
    const re = /,(?=(?:(?:[^']*'){2})*[^']+$)/;

    rl.on('line', function(line) {

      line2 = line.split(re);
      // to run it only once of index row
      if(count === 0) {
        // below are the columns indexes taken out by the names
id = line2.indexOf('policyID');
code = line2.indexOf('statecode');
division = line2.indexOf('county');
site1 = line2.indexOf(' eq_site_limit');
site2 = line2.indexOf('hu_site_limit');
site3 = line2.indexOf('fl_site_limit');
site4 = line2.indexOf('fr_site_limit');
tiv1 = line2.indexOf(' tiv_2011');
tiv2 = line2.indexOf('tiv_2012');
site01 = line2.indexOf(' eq_site_deductible');
site02 = line2.indexOf('hu_site_deductible');
site03 = line2.indexOf('fl_site_deductible');
site04 = line2.indexOf('fr_site_deductible');
point1 = line2.indexOf('point_latitude');
point2 = line2.indexOf(' point_longitude');
value = line2.indexOf('line');
type = line2.indexOf('construction');
point3 = line2.indexOf('point_granularity');

        count = 1; }
        // filter as per requirement
if(line2[value] === 'Commercial')  {

            result.push({value: line2[value], id: line2[id], code: line2[code], division: line2[division],type: line2[type]});

          }

  });
      rl.on('close', function() {
          console.log(result);
        //  console.log(result[9]);
        // writting the object into file
        fs.writeFile('filter.json', JSON.stringify(result), (err) =>{
          if(err) {
          throw err;}
          return 'file has been saved';
//          console.log('JSON written successfully')
        });
      });
      return 'JSON written successfully';
  };
  // convert(2);
  module.exports = fildata(2004);
