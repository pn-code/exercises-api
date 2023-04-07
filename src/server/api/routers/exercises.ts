import type { User } from "@clerk/nextjs/dist/api";
import { clerkClient } from "@clerk/nextjs/server";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    fullName: `${user.firstName!} ${user.lastName!}`,
    profileImageUrl: user.profileImageUrl,
  };
};

export const exercisesRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const exercises = await ctx.prisma.exercises.findMany({
      take: 100,
      orderBy: { primaryTarget: "desc" },
    });

    const users = (
      await clerkClient.users.getUserList({
        userId: exercises.map((exercise) => exercise.authorId),
        limit: 100,
      })
    ).map(filterUserForClient);

    return exercises.map((exercise) => {
      const author = users.find((user) => user.id === exercise.authorId);

      if (!author)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Author for exercise not found.",
        });

      return {
        exercise,
        author,
      };
    });
  }),

  create: privateProcedure
    .input(
      z.object({
        name: z.string().min(4).max(50),
        description: z.string().min(4).max(255),
        image: z.string().min(4).max(255),
        demo: z.string().min(4).max(255),
        type: z.string().min(4).max(16),
        primaryTarget: z.string().min(4).max(30),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.userId;

      const exercise = await ctx.prisma.exercises.create({
        data: {
          authorId,
          name: input.name,
          description: input.description,
          image: input.image,
          demo: input.demo,
          type: input.type,
          primaryTarget: input.primaryTarget,
        },
      });

      return exercise;
    }),
});
