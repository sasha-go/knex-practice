require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
	client: 'pg',
	connection: process.env.DB_URL
})


// TEST CONNECTION
console.log('knex and driver installed correctly');

knexInstance.from('shopping_list').select('*')
	.then(result => {
		console.log(result)
	})


// DRILL #1
function searchProductName(searchTerm) {
	knexInstance
	.select('name', 'price', 'category', 'checked', 'dateadded')
	.from('shopping_list')
	.where('name', 'ILIKE', `%${searchTerm}%`)
	.then(result => {
		console.log(result)
	})
}

searchProductName('baCON')

// DRILL #2
function paginateItems(pageNumber) {
	const productsPerPage = 6;
	const offset = productsPerPage * (pageNumber - 1);
	
	knexInstance
	.select('name', 'price', 'category', 'checked', 'dateadded')
	.from('shopping_list')
	.limit(productsPerPage)
	.offset(offset)
	.then(result => {
		console.log(result)
	})
}

paginateItems(2);


// DRILL #3
function getItemsAfterDate(date) {
	knexInstance
	.select('name', 'price', 'category', 'checked', 'dateadded')
	.where(
		'dateadded',
		'>',
		knexInstance.raw(`now() - '?? days'::INTERVAL`, date)
		)
		.from('shopping_list')
	.then(result => {
		console.log(result)
	})
}

getItemsAfterDate(3);


// DRILL #4

function getTotalCostPerCategory(){
	knexInstance
	.select('category')
	.from('shopping_list')
	.sum('price as total price')
	.groupBy('category')
	.then(result => {
		console.log(result)
	})
}

getTotalCostPerCategory();