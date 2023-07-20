import { Prisma, PrismaClient } from '@prisma/client';
import { mangaList, genres } from './prismaUtils/mangaList';

const prisma = new PrismaClient();

async function main() {
  const isExistGenre = await prisma.genre.findFirst();

  if (!isExistGenre) {
    genres.forEach(
      async (name, index) =>
        await prisma.genre.create({
          data: {
            name,
            genreCode: index,
          },
        }),
    );
  }

  const product = await prisma.product.findFirst();
  if (!product) {
    const products = mangaList.map(
      ({ name, author, description, image, inStock, rating, price }) => ({
        name,
        author,
        description,
        image,
        inStock,
        rating,
        price,
      }),
    );

    const genreCodes = mangaList.map(({ genreCodes }) => genreCodes);

    products.forEach(async (e, index) => {
      await prisma.product.create({
        data: {
          ...e,
          genres: {
            create: genreCodes[index],
          },
        },
      });
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
