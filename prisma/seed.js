import { PrismaClient } from '@prisma/client';
import { PRODUCTS, ARTICLES } from './mock.js';

const prisma = new PrismaClient();

async function main() {
  // 기존 데이터 삭제
  // await prisma.product.deleteMany();
  await prisma.article.deleteMany();

  // 목 데이터 삽입
  // await prisma.product.createMany({
  //   data: PRODUCTS,
  //   skipDuplicates: true
  // });

  await prisma.article.createMany({
    data: ARTICLES,
    skipDuplicates: true
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
