
require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
	client: 'pg',
	connection: process.env.DB_URL
});

console.log('knex and driver installed correctly');


// SQL
// SELECT * from amazong_products;


//KNEX
	// knexInstance.from('amazong_products').select('*')
  //  .then(result => {
  //    console.log(result)
	//  })
	 
//SQL
// SELECT product_id, name, price, category
// 	 FROM amazong_products
// 	 WHERE name = 'Point of view gun';

//KNEX
	// const qry = knexInstance
	// 	 .select('product_id', 'name', 'price', 'category')
	// 	 .from('amazong_products')
	// 	 .where({ name: 'Point of view gun'})
	// 	 .first()
	// 	 .toQuery()

	// 	 console.log(qry)

//SQL
// SELECT product_id, name, price, category
//   FROM amazong_products
// 	WHERE name ILIKE '%holo%';

//KNEX

// const searchTerm = 'holo'

// knexInstance
//   .select('product_id', 'name', 'price', 'category')
//   .from('amazong_products')
//   .where('name', 'ILIKE', `%${searchTerm}%`)
//   .then(result => {
//     console.log(result)
// 	})

	
// function searchByProduceName(searchTerm) {
// 	knexInstance
// 		.select('product_id', 'name', 'price', 'category')
// 		.from('amazong_products')
// 		.where('name', 'ILIKE', `%${searchTerm}%`)
// 		.then(result => {
// 			console.log(result)
// 		})
// }

// searchByProduceName('screwdriver');

//SQL
// SELECT product_id, name, price, category
//   FROM amazong_products
// LIMIT 10
//   OFFSET 0;

// function paginateProducts(page) {
// 	const productsPerPage = 10;
// 	const offset = productsPerPage * (page - 1);
// 	knexInstance
// 		.select('product_id', 'name', 'price', 'category')
// 		.from('amazong_products')
// 		.limit(productsPerPage)
// 		.offset(offset)
// 		.then(result => {
// 			console.log(result)
// 		})
// }

// paginateProducts(1);

//SQL
// SELECT product_id, name, price, category, image
// FROM amazong_products
// WHERE image IS NOT NULL;


// function getProductsWithImages() {
// 	knexInstance
// 	.select('product_id', 'name', 'price', 'category')
// 	.from('amazong_products')
// 	.whereNotNull('image')
// 	.then(result => {
// 		console.log(result)
// 	})
// }

// getProductsWithImages();

// // SQL
// SELECT video_name, region, count(date_viewed) AS views
// FROM whopipe_video_views
// 	WHERE date_viewed > (now() - '30 days'::INTERVAL)
// 	GROUP BY video_name, region
// 	ORDER BY region ASC, views DESC;

		// const timeInvterval = (now() - days)

// function mostPopularVideosForDays(days) {
// 	knexInstance	
// 	.select('video_name', 'region')
// 		.count('date_viewed AS views')
// 		.where(
// 			'date_viewed',
// 			'>',
// 			knexInstance.raw(`now() - '?? days'::INTERVAL`, days)
// 		)
// 		.from('whopipe_video_views')
// 		.groupBy('video_name', 'region')
// 		.orderBy([
// 			{ column: 'region', order: 'ASC'},
// 			{ column: 'views', order: 'DESC'},
// 		])
// 		.then(result => {
// 			console.log(result)
// 		})
// }

//mostPopularVideosForDays(10);
