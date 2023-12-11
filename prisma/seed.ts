import prisma from '../src/utils/prisma';

const { categories, products } = require('./data.js');

async function main() {
  const response = await Promise.all([
    prisma.user.upsert({
      where: { email: 'rauchg@vercel.com' },
      update: {},
      create: {
        authType: 'wallet',
        role: 'user',
        name: 'Guillermo Rauch',
        email: 'rauchg@vercel.com',
        image:
          'https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg',
      },
    }),
    prisma.user.upsert({
      where: { email: 'lee@vercel.com' },
      update: {},
      create: {
        authType: 'wallet',
        role: 'user',
        name: 'Lee Robinson',
        email: 'lee@vercel.com',
        image:
          'https://pbs.twimg.com/profile_images/1587647097670467584/adWRdqQ6_400x400.jpg',
      },
    }),
  ]);
  console.log(response);
}

const loadProduct = async () => {
  try {
    // await prisma.category.deleteMany();
    // console.log('Deleted records in category table');
    // await prisma.product.deleteMany();
    // console.log('Deleted records in product table');
    // await prisma.$queryRaw`ALTER TABLE Product AUTO_INCREMENT = 1`;
    // console.log('reset product auto increment to 1');
    // await prisma.$queryRaw`ALTER TABLE Category AUTO_INCREMENT = 1`;
    // console.log('reset category auto increment to 1');
    // await prisma.category.createMany({
    //   data: categories,
    // });
    // console.log('Added category data');
    //
    // await prisma.product.createMany({
    //   data: products,
    // });
    // console.log('Added product data');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};
//
// loadProduct()
//   .then(() => {
//     console.info('loadProduct successful');
//   })
//   .catch(async (e) => {
//     console.error(e);
//     process.exit(1);
//   });
//
// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
