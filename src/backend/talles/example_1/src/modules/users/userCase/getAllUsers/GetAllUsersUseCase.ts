import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllUsersUseCase {
    handle(arg0: string, handle: any) {
        throw new Error("Method not implemented.");
    }
    async execute():Promise<User[]> {
        const users = await prisma.user.findMany({
            include: {
                movie_rent: {
                    select: {
                        movie: {
                            select: {
                                title: true,
                            },
                        },
                    },
                },
            },
        });

        return users;
    }
}