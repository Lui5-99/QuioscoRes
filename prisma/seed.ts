import { categorias } from './data/category'
import { productos } from './data/products'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () : Promise<void> => {
    try {
        await prisma.category.createMany({
            data: categorias
        })
        await prisma.product.createMany({
            data: productos
        })
    } catch (error) {
        console.log(error)   
    }
}
main()