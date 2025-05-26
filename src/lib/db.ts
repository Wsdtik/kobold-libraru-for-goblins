

import { PrismaClient } from '../../generated/prisma'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.user.create({ data: {
    id: 1,
    userName: 'Alice',
    email: 'alice@email',
    role: 'USER',
    publishRole: 'READER',
    BookStorage: {
      create: [
        { id: 1,  
          books: {
            create: {
              title: 'Alice in Wonderland',
              authorId: 1,
              publishDate: new Date(),
              file: '',
            }
            
          },
          categoryId: 1,
        
        },
        
      ]
    }
  } })

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })