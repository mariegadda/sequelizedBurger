
module.exports = function(sequelize, Datatypes){
	var burger = sequelize.define("burger", {
		burger_name: DataTypes.STRING,
		devoured: DataTypes.BOOLEAN
	});
	return burger;
};





// var express = require("express");

// var orm = require("../config/orm.js");



// var burger ={
// 	all: function(cb){
// 		orm.all("burgers", function(res){
// 			cb(res);
// 		});
// 	},

// 	//cols and vals are arrays
// 	create: function(cols, vals, cb){
// 		orm.create("burgers", cols, vals, function(res){
// 			cb(res);
// 		});
// 	},

// 	update: function(objColVals, condition, cb) {
// 		orm.update("burgers", objColVals, condition, function(res){
// 			cb(res);
// 		});
// 	}
// };
// // code that calls the orm functions using burger specific input
// //export at the end (something...)
// module.exports = burger;