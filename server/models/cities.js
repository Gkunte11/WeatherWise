const db = require('../database');

class Cities {

    static retrieveAll(callback){

        db.query('select city_name from cities', function(err, res){

            if(err.error){
                return callback(err);
            }
            callback(res);
        });
    }

    static Insert(city, callback){

        db.query('insert into cities(city_name) values ($1)', [city], function(err, res){

            if(err.error){
                return callback(err);
            }
            callback(res);
        });
    }

}

module.exports = Cities;